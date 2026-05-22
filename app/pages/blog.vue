<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>Blog & Kiến Thức Âm Nhạc</h1>
        <p class="page-hero-sub">Chia sẻ kinh nghiệm, mẹo thu âm, mix master và kiến thức sản xuất âm nhạc từ đội ngũ XKProduction</p>
      </div>
    </section>

    <section class="blog-section">
      <div class="max-width">
        <!-- Filter Tags -->
        <div class="blog-filters">
          <button
            v-for="tag in tags" :key="tag"
            class="filter-tag"
            :class="{ active: activeTag === tag }"
            @click="activeTag = tag"
          >{{ tag }}</button>
        </div>

      <!-- Blog Grid -->
      <div class="blog-grid">
        <NuxtLink
          v-for="(post, i) in filteredPosts" :key="i"
          :to="'/blog/' + post.slug"
          class="blog-card"
        >
          <div class="blog-card-thumb">
            <img :src="post.thumb" :alt="post.title" loading="lazy" />
            <div class="blog-card-category">
              <i :class="post.icon"></i>
              <span>{{ post.category }}</span>
            </div>
          </div>
          <div class="blog-card-body">
            <h2 class="blog-card-title">{{ post.title }}</h2>
            <p class="blog-card-excerpt">{{ post.excerpt }}</p>
            <div class="blog-card-meta">
              <span><i class="fa-solid fa-user"></i> {{ post.author }}</span>
              <span><i class="fa-solid fa-calendar"></i> {{ post.date }}</span>
              <span><i class="fa-solid fa-clock"></i> {{ post.readTime }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>

        <!-- CTA -->
        <div class="blog-cta-section">
          <div class="blog-cta-card">
            <i class="fa-solid fa-lightbulb"></i>
            <h3>Bạn muốn biết thêm về dịch vụ?</h3>
            <p>Liên hệ ngay để được tư vấn miễn phí về thu âm, mix master, hoà âm phối khí và các dịch vụ khác.</p>
            <NuxtLink to="/contact" class="btn btn-primary">Liên hệ tư vấn miễn phí</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '../composables/useBlog'

useSeoMeta({
  title: 'Blog & Kiến Thức Âm Nhạc - Mẹo Thu Âm, Mix Master | XKProduction',
  description: 'Blog kiến thức âm nhạc từ XKProduction: Hướng dẫn thu âm tại nhà, mẹo mixing mastering, cách hoà âm phối khí, bảng giá phòng thu âm Bình Phước. Cập nhật mỗi tuần.',
  ogTitle: 'Blog Kiến Thức Âm Nhạc - XKProduction',
  ogDescription: 'Chia sẻ kinh nghiệm thu âm, mix master, hoà âm phối khí và kiến thức sản xuất âm nhạc chuyên nghiệp từ XKProduction.',
  ogImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Blog kiến thức âm nhạc XKProduction',
  ogUrl: 'https://xkproduction.com/blog',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  keywords: 'blog âm nhạc, kiến thức thu âm, hướng dẫn mix master, cách hoà âm phối khí, phòng thu âm Bình Phước, thu âm bài hát giá bao nhiêu, mix master giá rẻ, hòa âm phối khí online, XKProduction blog'
})

const { allBlogPosts: blogPosts } = useBlog()

useSchemaOrg(() => [
  defineWebPage({
    name: 'Blog & Kiến Thức Âm Nhạc - XKProduction',
    description: 'Blog chia sẻ kiến thức về thu âm, mixing, mastering và sản xuất âm nhạc từ đội ngũ XKProduction.'
  }),
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://xkproduction.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog & Kiến Thức Âm Nhạc', item: 'https://xkproduction.com/blog' }
    ]
  },
  {
    '@type': 'ItemList',
    itemListElement: blogPosts.map((post: BlogPost, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://xkproduction.com/blog/${post.slug}`,
      name: post.title
    }))
  },
  ...blogPosts.map((post: BlogPost) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://xkproduction.com${post.cover || post.thumb}`,
    author: { '@type': 'Person', name: post.author, url: 'https://xkproduction.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'XKProduction',
      logo: { '@type': 'ImageObject', url: 'https://xkproduction.com/images/Logoxkfix.png' }
    },
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    url: `https://xkproduction.com/blog/${post.slug}`,
    keywords: post.tags?.join(', ')
  }))
])

const activeTag = ref('Tất cả')

const blogPostsSorted = computed(() => [...blogPosts].sort((a, b) => b.isoDate.localeCompare(a.isoDate)))

const tags = computed(() => ['Tất cả', ...new Set(blogPostsSorted.value.flatMap((p: BlogPost) => p.tags || []))])

const filteredPosts = computed(() => {
  if (activeTag.value === 'Tất cả') return blogPostsSorted.value
  return blogPostsSorted.value.filter((p: BlogPost) => p.tags && p.tags.includes(activeTag.value))
})
</script>

<style scoped>
/* ===== PAGE HERO ===== */
.page-hero {
  padding-top: 140px;
  padding-bottom: 4rem;
  background: linear-gradient(135deg, #06080f 0%, #0d1117 100%);
  text-align: center;
}
.page-hero h1 { font-size: 2.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; }
.page-hero-sub { font-size: 1.05rem; color: var(--text-light); max-width: 680px; margin: 0 auto; line-height: 1.7; }

/* ===== BLOG SECTION ===== */
.blog-section { padding: 4rem 0 5rem; }

/* Filters */
.blog-filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  justify-content: center;
}
.filter-tag {
  padding: 0.5rem 1.1rem;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
  background: transparent;
  color: var(--text-light);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}
.filter-tag:hover,
.filter-tag.active {
  background: var(--primary);
  color: var(--bg-dark);
  border-color: var(--primary);
  box-shadow: 0 0 18px rgba(26,140,255,0.25);
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.75rem;
}

/* Blog Card */
.blog-card {
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
}
.blog-card:hover {
  transform: translateY(-5px);
  border-color: rgba(26,140,255,0.2);
  box-shadow: 0 16px 48px rgba(0,0,0,0.35), 0 0 30px rgba(26,140,255,0.08);
}

.blog-card-thumb {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.blog-card-thumb img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23,1,0.32,1);
}
.blog-card:hover .blog-card-thumb img {
  transform: scale(1.08);
}
.blog-card-category {
  position: absolute;
  top: 1rem; left: 1rem;
  display: flex; align-items: center; gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #5bbfff;
  letter-spacing: 0.5px;
}

.blog-card-body {
  padding: 1.5rem;
}
.blog-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.65rem;
  line-height: 1.4;
  transition: color 0.25s;
}
.blog-card:hover .blog-card-title {
  color: #5bbfff;
}
.blog-card-excerpt {
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.65;
  margin-bottom: 1rem;
}
.blog-card-meta {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}
.blog-card-meta span {
  display: flex; align-items: center; gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
}
.blog-card-meta i {
  color: var(--primary);
  font-size: 0.7rem;
}

/* CTA Section */
.blog-cta-section {
  margin-top: 4rem;
}
.blog-cta-card {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-surface);
  border: 1px solid rgba(26,140,255,0.1);
  border-radius: 16px;
}
.blog-cta-card i {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.25rem;
  display: block;
  filter: drop-shadow(0 0 16px rgba(26,140,255,0.5));
}
.blog-cta-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1rem;
}
.blog-cta-card p {
  color: var(--text-light);
  max-width: 520px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .page-hero h1 { font-size: 1.9rem; }
  .blog-grid { grid-template-columns: 1fr; }
  .blog-cta-card h3 { font-size: 1.4rem; }
}
</style>
