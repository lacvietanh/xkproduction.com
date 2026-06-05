<template>
  <div class="article-page">
    <div class="reading-progress" :style="{ transform: `scaleX(${readingProgress})` }"></div>

    <template v-if="post">
      <ArticleHeader :post="post" :copied="copied" @copy-link="copyLink" />

      <section class="article-shell">
        <div class="max-width article-layout">
          <aside class="article-left-rail">
            <ShareBar :current-url="currentUrl" :copied="copied" @copy-link="copyLink" />
          </aside>

          <main>
            <ArticleBody :post="post" />
            <AuthorCard :post="post" />

            <section class="article-soft-cta">
              <div class="cta-header">
                <i class="fa-solid fa-lightbulb"></i>
                <p class="cta-kicker">Bạn muốn được tư vấn miễn phí?</p>
              </div>
              <h2>Biến ý tưởng âm nhạc của bạn thành sản phẩm chuyên nghiệp</h2>
              <p>Gửi demo hoặc bản thu thô, đội ngũ XKProduction sẽ nghe xét duyệt, định hướng và tư vấn bước tiếp theo: thu âm, hòa âm phối khí, vocal production hoặc mix/master chuẩn quốc tế.</p>
              <div class="cta-actions">
                <NuxtLink to="/contact" class="btn btn-primary">Liên hệ tư vấn <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                <NuxtLink to="/services" class="btn btn-secondary">Xem dịch vụ</NuxtLink>
              </div>
            </section>

            <NextPrevNavigation :prev-post="prevPost" :next-post="nextPost" />
            <RelatedPosts :posts="relatedPosts" />
          </main>

          <aside class="article-right-rail">
            <TableOfContents :sections="post.sections" :active-id="activeSectionId" @navigate="setActiveSection" />
          </aside>
        </div>
      </section>
    </template>

    <section v-else class="not-found-article">
      <div class="max-width not-found-inner">
        <p class="not-found-kicker">404 / Blog</p>
        <h1>Không tìm thấy bài viết</h1>
        <p>Bài viết này có thể đã được đổi slug hoặc không còn tồn tại. Quay lại blog để đọc các bài mới nhất từ XKProduction.</p>
        <NuxtLink to="/blog" class="btn btn-primary">Quay lại Blog</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'article-transition',
    mode: 'out-in'
  }
})

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const BASE_URL = 'https://xkproduction.com'

const { allBlogPosts, getPostBySlug, getRelatedPosts } = useBlog()
const post = computed(() => getPostBySlug(slug.value))
const relatedPosts = computed(() => getRelatedPosts(slug.value, 3))
const currentUrl = computed(() => `${BASE_URL}/blog/${slug.value}`)

const currentIndex = computed(() => allBlogPosts.findIndex(item => item.slug === slug.value))
const prevPost = computed(() => currentIndex.value > 0 ? (allBlogPosts[currentIndex.value - 1] ?? null) : null)
const nextPost = computed(() => currentIndex.value >= 0 && currentIndex.value < allBlogPosts.length - 1 ? (allBlogPosts[currentIndex.value + 1] ?? null) : null)

const copied = ref(false)
const readingProgress = ref(0)
const activeSectionId = ref(post.value?.sections[0]?.id || '')
let copiedTimer: ReturnType<typeof setTimeout> | undefined

const copyLink = async () => {
  if (import.meta.client) {
    await navigator.clipboard.writeText(currentUrl.value)
    copied.value = true
    if (copiedTimer) clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => { copied.value = false }, 1800)
  }
}

let ticking = false
const updateReadingProgress = () => {
  if (!import.meta.client) return
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      readingProgress.value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0

      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section-id]'))
      const current = sections
        .filter(section => section.getBoundingClientRect().top <= 160)
        .at(-1)
      if (current?.id) activeSectionId.value = current.id
      ticking = false
    })
    ticking = true
  }
}

const setActiveSection = (id: string) => {
  activeSectionId.value = id
}

onMounted(() => {
  activeSectionId.value = post.value?.sections[0]?.id || ''
  // Initial check without throttle delay
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  readingProgress.value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section-id]'))
  const current = sections
    .filter(section => section.getBoundingClientRect().top <= 160)
    .at(-1)
  if (current?.id) activeSectionId.value = current.id

  window.addEventListener('scroll', updateReadingProgress, { passive: true })
})

onBeforeUnmount(() => {
  if (import.meta.client) window.removeEventListener('scroll', updateReadingProgress)
  if (copiedTimer) clearTimeout(copiedTimer)
})

watch(post, value => {
  activeSectionId.value = value?.sections[0]?.id || ''
})

const getCategoryKey = (category: string) => {
  const categoryMap: Record<string, string> = {
    'Bảng Giá': 'amber',
    'Kiến Thức': 'blue',
    'Mẹo Hay': 'green',
    'Before & After': 'purple',
    'Giới Thiệu': 'teal',
    'Mix & Master': 'red'
  }
  return categoryMap[category] || 'blue'
}

useSeoMeta({
  title: () => post.value ? `${post.value.title} | XKProduction` : 'Không tìm thấy bài viết | XKProduction',
  description: () => post.value?.excerpt || 'Bài viết không tồn tại trên XKProduction Blog.',
  ogTitle: () => post.value?.title || 'XKProduction Blog',
  ogDescription: () => post.value?.excerpt || 'Blog kiến thức âm nhạc từ XKProduction.',
  ogImage: () => post.value ? `${BASE_URL}${post.value.cover || post.value.thumb}` : `${BASE_URL}/images/Xkpreviewnew.png`,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogType: 'article',
  ogUrl: () => currentUrl.value,
  twitterCard: 'summary_large_image',
  twitterImage: () => post.value ? `${BASE_URL}${post.value.cover || post.value.thumb}` : `${BASE_URL}/images/Xkpreviewnew.png`,
  articlePublishedTime: () => post.value?.isoDate,
  articleModifiedTime: () => post.value?.isoDate,
  articleAuthor: () => post.value?.author ? [post.value.author] : undefined
})

useSchemaOrg(() => [
  defineWebPage({
    name: post.value?.title || 'Không tìm thấy bài viết',
    description: post.value?.excerpt || 'Bài viết không tồn tại trên XKProduction Blog.'
  }),
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.value?.title || 'Không tìm thấy bài viết', item: currentUrl.value }
    ]
  },
  post.value ? {
    '@type': 'BlogPosting',
    headline: post.value.title,
    description: post.value.excerpt,
    image: `${BASE_URL}${post.value.cover || post.value.thumb}`,
    author: { '@type': 'Person', name: post.value.author, url: `${BASE_URL}/about` },
    publisher: {
      '@type': 'Organization',
      name: 'XKProduction',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/logo-xkproduction.png` }
    },
    datePublished: post.value.isoDate,
    dateModified: post.value.isoDate,
    mainEntityOfPage: currentUrl.value,
    keywords: post.value.tags?.join(', ')
  } : undefined
].filter(Boolean))
</script>

<style scoped>
.article-page {
  background:
    radial-gradient(circle at 12% 8%, rgba(26,140,255,0.12), transparent 30%),
    radial-gradient(circle at 92% 38%, rgba(0,212,170,0.08), transparent 26%),
    var(--bg-dark);
  min-height: 100vh;
}
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 3px;
  width: 100%;
  transform-origin: left;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  box-shadow: 0 0 16px rgba(26,140,255,0.45);
}
.article-shell {
  padding: 4.5rem 0 6rem;
}
.article-layout {
  display: grid;
  grid-template-columns: 150px minmax(0, 760px) 260px;
  gap: 2rem;
  align-items: start;
}
.article-soft-cta {
  margin-top: 3rem;
  padding: clamp(1.5rem, 4vw, 2.6rem);
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(26,140,255,0.16), rgba(0,212,170,0.07)),
    rgba(255,255,255,0.03);
  border: 1px solid rgba(26,140,255,0.22);
  box-shadow: 0 24px 60px rgba(0,0,0,0.24);
  position: relative;
  overflow: hidden;
}
.article-soft-cta::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(26,140,255,0.08), transparent 70%);
  pointer-events: none;
}
.cta-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}
.cta-header i {
  font-size: 1.5rem;
  color: var(--primary);
  filter: drop-shadow(0 0 8px rgba(26,140,255,0.4));
}
.cta-kicker {
  color: #8fd0ff;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.76rem;
  font-weight: 850;
  margin: 0;
}
.article-soft-cta h2 {
  color: #f5f9ff;
  max-width: 620px;
  font-size: clamp(1.45rem, 3vw, 2.35rem);
  line-height: 1.18;
  margin-bottom: 1rem;
  margin-top: 0;
}
.article-soft-cta > p:not(.cta-kicker) {
  max-width: 650px;
  color: rgba(212,226,241,0.84);
  line-height: 1.8;
  margin-bottom: 1.6rem;
  position: relative;
  z-index: 1;
}
.cta-actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
.not-found-article {
  min-height: 78vh;
  display: flex;
  align-items: center;
  padding: 130px 0 5rem;
  text-align: center;
}
.not-found-inner {
  max-width: 760px;
}
.not-found-kicker {
  color: #8fd0ff;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 850;
  margin-bottom: 1rem;
}
.not-found-article h1 {
  font-size: clamp(2.4rem, 6vw, 5rem);
  color: #fff;
  margin-bottom: 1rem;
}
.not-found-article p:not(.not-found-kicker) {
  color: rgba(212,226,241,0.82);
  line-height: 1.75;
  margin: 0 auto 1.6rem;
  max-width: 560px;
}
@media (max-width: 1180px) {
  .article-layout { grid-template-columns: minmax(0, 1fr); max-width: 820px; }
  .article-left-rail,
  .article-right-rail { display: none; }
}
@media (max-width: 768px) {
  .article-shell { padding: 3rem 0 4rem; }
  .cta-actions .btn { width: 100%; }
}
</style>
