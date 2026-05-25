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
        <!-- Search Bar -->
        <div class="blog-search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Tìm kiếm bài viết..."
            class="search-input"
            aria-label="Tìm kiếm bài viết"
          />
          <button
            v-if="searchQuery"
            class="search-clear"
            @click="searchQuery = ''"
            aria-label="Xóa tìm kiếm"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Filter Tags -->
        <div class="blog-filters">
          <button
            v-for="tag in tags" :key="tag"
            class="filter-tag"
            :class="{ active: activeTag === tag }"
            @click="activeTag = tag"
          >{{ tag }}</button>
        </div>

        <!-- Featured Post Hero -->
        <NuxtLink
          v-if="featuredPost && searchedAndFilteredPosts.length > 0"
          :to="'/blog/' + featuredPost.slug"
          class="featured-post-hero"
        >
          <div class="featured-post-image">
            <img :src="featuredPost.cover || featuredPost.thumb" :alt="featuredPost.title" />
            <div class="featured-post-overlay"></div>
          </div>
          <div class="featured-post-content">
            <div class="featured-badge">
              <i :class="featuredPost.icon"></i>
              <span :class="`category-${getCategoryKey(featuredPost.category)}`">{{ featuredPost.category }}</span>
            </div>
            <h2>{{ featuredPost.title }}</h2>
            <p class="featured-post-subtitle">{{ featuredPost.subtitle }}</p>
            <p class="featured-post-excerpt">{{ featuredPost.excerpt }}</p>
            <div class="featured-post-meta">
              <span><i class="fa-solid fa-user"></i> {{ featuredPost.author }}</span>
              <span><i class="fa-solid fa-calendar"></i> {{ featuredPost.date }}</span>
              <span><i class="fa-solid fa-clock"></i> {{ featuredPost.readTime }}</span>
            </div>
            <div class="featured-post-arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>

        <!-- Blog Grid -->
        <div class="blog-grid">
          <NuxtLink
            v-for="post in regularPosts"
            :key="post.slug"
            :to="'/blog/' + post.slug"
            class="blog-card"
          >
            <div class="blog-card-thumb">
              <img :src="post.thumb" :alt="post.title" loading="lazy" width="360" height="203" />
              <div class="blog-card-category" :class="`category-${getCategoryKey(post.category)}`">
                <i :class="post.icon"></i>
                <span>{{ post.category }}</span>
              </div>
            </div>
            <div class="blog-card-body">
              <h3 class="blog-card-title">{{ post.title }}</h3>
              <p class="blog-card-excerpt">{{ post.excerpt }}</p>
              <div class="blog-card-meta">
                <span><i class="fa-solid fa-user"></i> {{ post.author }}</span>
                <span><i class="fa-solid fa-calendar"></i> {{ post.date }}</span>
                <span><i class="fa-solid fa-clock"></i> {{ post.readTime }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- No Results -->
        <div v-if="searchedAndFilteredPosts.length === 0" class="no-results">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>Không tìm thấy bài viết</h3>
          <p>Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
          <button @click="resetSearch" class="btn btn-secondary">Xóa bộ lọc</button>
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
import type { BlogPost } from '../../composables/useBlog'

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
const searchQuery = ref('')

const blogPostsSorted = computed(() => [...blogPosts].sort((a, b) => b.isoDate.localeCompare(a.isoDate)))

const tags = computed(() => ['Tất cả', ...new Set(blogPostsSorted.value.flatMap((p: BlogPost) => p.tags || []))])

// Filter by tag
const tagFilteredPosts = computed(() => {
  if (activeTag.value === 'Tất cả') return blogPostsSorted.value
  return blogPostsSorted.value.filter((p: BlogPost) => p.tags && p.tags.includes(activeTag.value))
})

// Filter by search
const searchedAndFilteredPosts = computed(() => {
  if (!searchQuery.value.trim()) return tagFilteredPosts.value
  const q = searchQuery.value.toLowerCase()
  return tagFilteredPosts.value.filter((p: BlogPost) =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags?.some((tag: string) => tag.toLowerCase().includes(q))
  )
})

// Featured post is the first one
const featuredPost = computed(() => searchedAndFilteredPosts.value[0] || null)

// Regular posts exclude the featured
const regularPosts = computed(() => searchedAndFilteredPosts.value.slice(1))

// Utility: Get category key for color coding
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

const resetSearch = () => {
  searchQuery.value = ''
  activeTag.value = 'Tất cả'
}
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

/* Search Bar */
.blog-search-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  margin-bottom: 2.5rem;
  transition: all 0.25s ease;
}
.blog-search-bar:focus-within {
  background: rgba(26,140,255,0.04);
  border-color: var(--primary);
  box-shadow: 0 0 16px rgba(26,140,255,0.1);
}
.blog-search-bar i {
  color: var(--text-muted);
  font-size: 0.9rem;
}
.search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-main);
  font-size: 0.95rem;
  outline: none;
}
.search-input::placeholder {
  color: var(--text-muted);
}
.search-clear {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: color 0.2s ease;
}
.search-clear:hover {
  color: var(--primary);
}

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

/* ===== FEATURED POST HERO ===== */
.featured-post-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 4rem;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  border: 1px solid rgba(26,140,255,0.15);
  background: var(--bg-surface);
  transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
}
.featured-post-hero:hover {
  border-color: rgba(26,140,255,0.4);
  box-shadow: 0 16px 48px rgba(26,140,255,0.1), 0 0 30px rgba(0,212,170,0.05);
  transform: translateY(-3px);
}

.featured-post-image {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.featured-post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23,1,0.32,1);
}
.featured-post-hero:hover .featured-post-image img {
  transform: scale(1.05);
}
.featured-post-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26,140,255,0.1), rgba(0,212,170,0.05));
  pointer-events: none;
}

.featured-post-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
}
.featured-badge {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(26,140,255,0.1);
  margin-bottom: 1rem;
}
.featured-badge i {
  font-size: 0.9rem;
}
.featured-badge span {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.featured-post-hero h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.3;
  margin-bottom: 0.75rem;
}
.featured-post-subtitle {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}
.featured-post-excerpt {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.featured-post-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 0;
}
.featured-post-meta span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
}
.featured-post-meta i {
  color: var(--primary);
  font-size: 0.75rem;
}

.featured-post-arrow {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 36px;
  height: 36px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-dark);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}
.featured-post-hero:hover .featured-post-arrow {
  transform: translateX(6px);
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Blog Card */
.blog-card {
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
}
.blog-card:hover {
  transform: translateY(-4px);
  border-color: rgba(26,140,255,0.2);
  box-shadow: 0 12px 32px rgba(0,0,0,0.4), 0 0 20px rgba(26,140,255,0.1);
}

.blog-card-thumb {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.blog-card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23,1,0.32,1);
}
.blog-card:hover .blog-card-thumb img {
  transform: scale(1.08);
}

.blog-card-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  backdrop-filter: blur(12px);
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255,255,255,0.15);
}

/* Category Colors */
.category-amber {
  background: rgba(217, 119, 6, 0.6);
  color: #fcd34d;
  border-color: rgba(217, 119, 6, 0.5);
}
.category-blue {
  background: rgba(37, 99, 235, 0.6);
  color: #93c5fd;
  border-color: rgba(37, 99, 235, 0.5);
}
.category-green {
  background: rgba(34, 197, 94, 0.6);
  color: #86efac;
  border-color: rgba(34, 197, 94, 0.5);
}
.category-purple {
  background: rgba(147, 51, 234, 0.6);
  color: #d8b4fe;
  border-color: rgba(147, 51, 234, 0.5);
}
.category-teal {
  background: rgba(20, 184, 166, 0.6);
  color: #7ee8c0;
  border-color: rgba(20, 184, 166, 0.5);
}
.category-red {
  background: rgba(239, 68, 68, 0.6);
  color: #fca5a5;
  border-color: rgba(239, 68, 68, 0.5);
}

.featured-badge.category-amber { background: rgba(217, 119, 6, 0.15); color: #fcd34d; }
.featured-badge.category-blue { background: rgba(37, 99, 235, 0.15); color: #93c5fd; }
.featured-badge.category-green { background: rgba(34, 197, 94, 0.15); color: #86efac; }
.featured-badge.category-purple { background: rgba(147, 51, 234, 0.15); color: #d8b4fe; }
.featured-badge.category-teal { background: rgba(20, 184, 166, 0.15); color: #7ee8c0; }
.featured-badge.category-red { background: rgba(239, 68, 68, 0.15); color: #fca5a5; }

.blog-card-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.blog-card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.65rem;
  line-height: 1.4;
  transition: color 0.25s;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-card:hover .blog-card-title {
  color: var(--primary);
}
.blog-card-excerpt {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-card-meta {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: auto;
}
.blog-card-meta span {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 600;
}
.blog-card-meta i {
  color: var(--primary);
  font-size: 0.65rem;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-surface);
  border: 1px solid rgba(26,140,255,0.1);
  border-radius: 16px;
  margin: 2rem 0;
}
.no-results i {
  font-size: 3rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  opacity: 0.5;
}
.no-results h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}
.no-results p {
  color: var(--text-light);
  margin-bottom: 1.5rem;
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
@media (max-width: 1024px) {
  .featured-post-hero {
    grid-template-columns: 1fr;
  }
  .featured-post-arrow {
    display: none;
  }
}

@media (max-width: 768px) {
  .page-hero h1 { font-size: 1.9rem; }
  .blog-grid { grid-template-columns: 1fr; }
  .blog-cta-card h3 { font-size: 1.4rem; }
  .featured-post-content {
    padding: 1.5rem;
  }
  .featured-post-hero h2 {
    font-size: 1.3rem;
  }
}
</style>
