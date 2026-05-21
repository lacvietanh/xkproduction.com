<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>{{ post?.title }}</h1>
        <div class="blog-meta-header">
          <span><i class="fa-solid fa-user"></i> {{ post?.author }}</span>
          <span><i class="fa-solid fa-calendar"></i> {{ post?.date }}</span>
          <span><i class="fa-solid fa-clock"></i> {{ post?.readTime }}</span>
        </div>
      </div>
    </section>

    <section class="blog-detail-section" v-if="post">
      <div class="max-width">
        <article class="blog-detail-container">
          <div class="blog-detail-header">
            <div class="blog-detail-thumb">
              <img :src="post.thumb" :alt="post.title" />
            </div>
            <div class="blog-detail-category-badge">
              <i :class="post.icon"></i>
              <span>{{ post.category }}</span>
            </div>
          </div>

          <div class="blog-detail-content" v-html="post.content"></div>

          <div class="blog-detail-cta">
            <h3>Bạn muốn tìm hiểu thêm hoặc có câu hỏi?</h3>
            <p>Liên hệ với XKProduction để được tư vấn miễn phí về dịch vụ của chúng tôi.</p>
            <NuxtLink to="/contact" class="btn btn-primary">Liên hệ tư vấn</NuxtLink>
          </div>
        </article>

        <!-- Related Posts -->
        <aside class="blog-sidebar">
          <div class="sidebar-card" v-if="relatedPosts.length > 0">
            <h3>Các bài viết liên quan</h3>
            <ul class="related-posts">
              <li v-for="(p, i) in relatedPosts" :key="i">
                <a :href="`/blog/${p.slug}`" target="_blank" rel="noopener noreferrer">
                  {{ p.title }}
                </a>
              </li>
            </ul>
          </div>

          <div class="sidebar-card">
            <h3>Khám phá dịch vụ</h3>
            <div class="service-links">
              <NuxtLink to="/services" class="service-link">Thu Âm & Mix Master</NuxtLink>
              <NuxtLink to="/courses" class="service-link">Khóa Học</NuxtLink>
              <NuxtLink to="/live-band" class="service-link">Sân Khấu & Sự Kiện</NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- CTA -->
    <section class="blog-cta-section">
      <div class="blog-cta-card">
        <i class="fa-solid fa-lightbulb"></i>
        <h3>Bạn muốn biết thêm về dịch vụ?</h3>
        <p>Liên hệ ngay để được tư vấn miễn phí về thu âm, mix master, hoà âm phối khí và các dịch vụ khác.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Liên hệ tư vấn miễn phí</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'

const route = useRoute()
const slug = route.params.slug as string
const BASE_URL = 'https://xkproduction.com'

const { getPostBySlug, getRelatedPosts } = useBlog()
const post = computed(() => getPostBySlug(slug))
const relatedPosts = computed(() => getRelatedPosts(slug))

useSeoMeta({
  title: () => post.value?.title || 'Blog',
  description: () => post.value?.excerpt || '',
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.excerpt,
  ogImage: () => post.value?.thumb,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogType: 'article',
  ogUrl: `https://xkproduction.com/blog/${slug}`
})

useSchemaOrg([
  defineWebPage({
    name: post.value?.title,
    description: post.value?.excerpt
  }),
  {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Trang chủ', 'item': 'https://xkproduction.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://xkproduction.com/blog' },
      { '@type': 'ListItem', 'position': 3, 'name': post.value?.title, 'item': `https://xkproduction.com/blog/${slug}` }
    ]
  },
  post.value ? {
    '@type': 'BlogPosting',
    'headline': post.value.title,
    'description': post.value.excerpt,
    'image': post.value.thumb,
    'author': { '@type': 'Organization', 'name': post.value.author, 'url': 'https://xkproduction.com' },
    'publisher': {
      '@type': 'Organization',
      'name': 'XKProduction',
      'logo': { '@type': 'ImageObject', 'url': 'https://xkproduction.com/images/Logoxkfix.png' }
    },
    'datePublished': post.value.date,
    'dateModified': post.value.date,
    'url': `https://xkproduction.com/blog/${slug}`
  } : {}
])
</script>

<style scoped>
.blog-meta-header {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: rgba(156, 175, 207, 0.8);
  margin-top: 0.8rem;
}
.blog-meta-header span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.blog-meta-header i {
  color: #5bbfff;
  font-size: 0.9rem;
}

.blog-detail-section {
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 3rem;
}

.blog-detail-container {
  min-width: 0;
}

.blog-detail-header {
  position: relative;
  margin-bottom: 2rem;
}

.blog-detail-thumb {
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid rgba(26, 140, 255, 0.15);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
}

.blog-detail-thumb img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.blog-detail-category-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(26, 140, 255, 0.15);
  border: 1px solid rgba(26, 140, 255, 0.28);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  color: #5bbfff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.blog-detail-category-badge i {
  font-size: 0.85rem;
}

.blog-detail-content {
  color: rgba(230, 237, 243, 0.9);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.blog-detail-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #e6edf3;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  letter-spacing: -0.01em;
}

.blog-detail-content p {
  margin-bottom: 1rem;
  line-height: 1.85;
}

.blog-detail-content ul,
.blog-detail-content ol {
  margin: 1rem 0 1rem 2rem;
  line-height: 1.9;
}

.blog-detail-content li {
  margin-bottom: 0.6rem;
}

.blog-detail-cta {
  background: rgba(26, 140, 255, 0.08);
  border: 1px solid rgba(26, 140, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
}

.blog-detail-cta h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.blog-detail-cta p {
  color: rgba(156, 175, 207, 0.8);
  margin-bottom: 1.2rem;
}

/* Sidebar */
.blog-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2rem;
}

.sidebar-card {
  background: rgba(255, 255, 255, 0.055);
  backdrop-filter: blur(28px);
  border: 1.5px solid rgba(26, 140, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.4s;
}

.sidebar-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(26, 140, 255, 0.2);
}

.sidebar-card h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #e6edf3;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.related-posts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.related-posts li a {
  display: block;
  font-size: 0.8rem;
  color: rgba(156, 175, 207, 0.8);
  text-decoration: none;
  line-height: 1.5;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.25s;
}

.related-posts li a:hover {
  color: #5bbfff;
  background: rgba(26, 140, 255, 0.08);
  padding-left: 0.8rem;
}

.service-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.service-link {
  display: block;
  font-size: 0.8rem;
  color: rgba(156, 175, 207, 0.8);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.25s;
}

.service-link:hover {
  color: #5bbfff;
  background: rgba(26, 140, 255, 0.08);
  padding-left: 0.8rem;
}

/* CTA Section */
.blog-cta-section {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.blog-cta-card {
  background: linear-gradient(135deg, rgba(26, 140, 255, 0.12) 0%, rgba(0, 229, 192, 0.06) 100%);
  border: 1.5px solid rgba(26, 140, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s;
}

.blog-cta-card:hover {
  background: linear-gradient(135deg, rgba(26, 140, 255, 0.18) 0%, rgba(0, 229, 192, 0.1) 100%);
  border-color: rgba(26, 140, 255, 0.35);
  box-shadow: 0 0 30px rgba(26, 140, 255, 0.1);
}

.blog-cta-card i {
  font-size: 2.5rem;
  color: #5bbfff;
  filter: drop-shadow(0 0 16px rgba(26, 140, 255, 0.5));
  margin-bottom: 0.8rem;
  display: block;
}

.blog-cta-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.blog-cta-card p {
  color: rgba(156, 175, 207, 0.8);
  margin-bottom: 1.2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .blog-detail-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;
  }

  .blog-sidebar {
    padding-top: 0;
  }

  .blog-detail-content {
    font-size: 0.95rem;
  }

  .blog-detail-cta {
    padding: 1.5rem;
  }

  .blog-cta-section {
    padding: 0 1.5rem 3rem;
  }

  .blog-cta-card {
    padding: 1.5rem;
  }

  .blog-cta-card i {
    font-size: 2rem;
  }
}
</style>
