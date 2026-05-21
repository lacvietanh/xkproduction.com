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
          <div class="sidebar-card">
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
// Fetch blogPosts data
const { $fetch } = useNuxtApp()
const route = useRoute()
const slug = route.params.slug as string

// Import blogPosts from blog.vue (or define here for simplicity)
const allBlogPosts = [
  {
    slug: 'thu-am-gia-2026',
    title: 'Thu Âm Bài Hát Giá Bao Nhiêu? Bảng Giá Chi Tiết 2026',
    excerpt: 'Tổng hợp bảng giá thu âm bài hát mới nhất tại các phòng thu chuyên nghiệp.',
    category: 'Bảng Giá',
    icon: 'fa-solid fa-tag',
    author: 'XKProduction',
    date: '28/04/2026',
    readTime: '3 phút đọc',
    thumb: '/images/blog-thu-am-gia.jpg',
    content: `<h3>Giá thu âm bài hát phụ thuộc vào những yếu tố nào?</h3>
    <p>Giá thu âm phụ thuộc vào <strong>thiết bị phòng thu</strong>, <strong>kinh nghiệm kỹ sư âm thanh</strong>, <strong>thời gian thu âm</strong> và <strong>các dịch vụ kèm theo</strong> (chỉnh sửa, tune pitch, etc.).</p>
    <h3>Bảng giá tham khảo tại XKProduction</h3>
    <ul>
      <li><strong>Gói Cơ Bản:</strong> Từ 350.000₫ — thu âm 1-2 tiếng, chỉnh sửa cơ bản, xuất file WAV/MP3</li>
      <li><strong>Gói Nâng Cao:</strong> Từ 550.000₫ — thu âm 2-3 tiếng, vocal production đầy đủ</li>
      <li><strong>Gói Pro:</strong> Từ 1.000.000₫ — thu âm không giới hạn session, vocal coaching</li>
      <li><strong>Gói Cao Cấp:</strong> Từ 1.800.000₫ — tất cả bao gồm, revision không giới hạn</li>
    </ul>
    <h3>Tại sao nên chọn XKProduction?</h3>
    <p>XKProduction có hơn <strong>7 năm kinh nghiệm</strong>, đã hoàn thành <strong>2000+ dự án</strong>. Chúng tôi cam kết chất lượng âm thanh chuẩn quốc tế với giá cả phải chăng nhất khu vực Bình Phước.</p>`
  },
  {
    slug: 'phong-thu-am-binh-phuoc',
    title: 'Phòng Thu Âm Bình Phước — Tại Sao Chọn XKProduction?',
    excerpt: 'Khám phá lý do XKProduction trở thành phòng thu âm được nhiều nghệ sĩ tin tưởng nhất.',
    category: 'Giới Thiệu',
    icon: 'fa-solid fa-building',
    author: 'Nguyễn Xuân Kiệt',
    date: '25/04/2026',
    readTime: '4 phút đọc',
    thumb: '/images/blog-phong-thu.jpg',
    content: `<h3>XKProduction — Phòng thu âm chuyên nghiệp tại Bình Phước</h3>
    <p>Tọa lạc tại QL14 km25, xã Nghĩa Trung, Huyện Bù Đăng, <strong>XKProduction</strong> là phòng thu âm chuyên nghiệp hàng đầu tại Bình Phước. Với hơn 7 năm kinh nghiệm và 2000+ dự án hoàn thiện, chúng tôi tự hào mang đến dịch vụ thu âm chất lượng chuẩn quốc tế.</p>
    <h3>Điểm khác biệt</h3>
    <ul>
      <li><strong>Founder có 7+ năm kinh nghiệm</strong> trong ngành sản xuất âm nhạc</li>
      <li><strong>Thiết bị chuyên nghiệp:</strong> Micro condenser, preamp, audio interface chất lượng cao</li>
      <li><strong>Không gian yên tĩnh:</strong> Phòng thu được cách âm theo tiêu chuẩn quốc tế</li>
      <li><strong>Giá cả hợp lý:</strong> Tiết kiệm hơn phòng thu tại TP.HCM nhưng chất lượng tương đương</li>
    </ul>
    <h3>Dịch vụ tại XKProduction</h3>
    <p>Thu âm bài hát, mixing & mastering, hoà âm phối khí, quay MV/TVC, và cho thuê âm thanh ánh sáng sân khấu sự kiện.</p>`
  },
  {
    slug: 'mix-master-huong-dan',
    title: 'Mix Master Là Gì? Hướng Dẫn Từ A-Z Cho Người Mới',
    excerpt: 'Hiểu rõ quy trình mixing và mastering — hai bước quan trọng nhất.',
    category: 'Kiến Thức',
    icon: 'fa-solid fa-graduation-cap',
    author: 'Nguyễn Xuân Kiệt',
    date: '20/04/2026',
    readTime: '5 phút đọc',
    thumb: '/images/blog-mix-master.jpg',
    content: `<h3>Mixing là gì?</h3>
    <p><strong>Mixing (trộn âm)</strong> là quá trình cân bằng và xử lý các track âm thanh riêng lẻ (vocal, bass, drum, guitar...) thành một bản mix stereo hoàn chỉnh. Kỹ sư mixing sẽ sử dụng EQ, Compressor, Reverb, Delay... để tạo ra không gian và sự cân bằng cho bản nhạc.</p>
    <h3>Mastering là gì?</h3>
    <p><strong>Mastering</strong> là bước cuối cùng trước khi phát hành. Mục tiêu là đảm bảo bản nhạc có âm lượng phù hợp, cân bằng tần số, và nghe tốt trên mọi thiết bị (tai nghe, loa, điện thoại...).</p>
    <h3>Giá mix master tại XKProduction</h3>
    <ul>
      <li><strong>Mix & Master Cơ Bản:</strong> Từ 300.000₫ — stereo track + mastering chuẩn streaming</li>
      <li><strong>Mix & Master Chuyên Nghiệp:</strong> Từ 500.000₫ — multi-track, chuẩn Spotify/Apple Music</li>
    </ul>`
  },
  {
    slug: 'hoa-am-phoi-khi-online',
    title: 'Hoà Âm Phối Khí Online — Quy Trình & Chi Phí',
    excerpt: 'Tìm hiểu quy trình hoà âm phối khí online chuyên nghiệp.',
    category: 'Kiến Thức',
    icon: 'fa-solid fa-music',
    author: 'XKProduction',
    date: '15/04/2026',
    readTime: '6 phút đọc',
    thumb: '/images/blog-hoa-am.jpg',
    content: `<h3>Hoà âm phối khí là gì?</h3>
    <p><strong>Hoà âm phối khí</strong> là quá trình biên soạn và sắp xếp các nhạc cụ, giai điệu phụ hoạ cho một bài hát. Đây là bước đưa bài hát từ giai điệu đơn giản thành một tác phẩm âm nhạc hoàn chỉnh.</p>
    <h3>Quy trình hoà âm phối khí online tại XKProduction</h3>
    <ol>
      <li><strong>Gửi demo/melody:</strong> Khách hàng gửi file ghi âm hoặc sheet nhạc</li>
      <li><strong>Tư vấn concept:</strong> Team XKProduction nghe và tư vấn hướng phối khí phù hợp</li>
      <li><strong>Hoà âm & phối khí:</strong> Producer sắp xếp nhạc cụ và ghi âm</li>
      <li><strong>Hoàn thành:</strong> Gửi file WAV/MP3 và sheet nhạc chi tiết</li>
    </ol>`
  }
]

const post = computed(() => allBlogPosts.find(p => p.slug === slug))

const relatedPosts = computed(() => {
  if (!post.value) return []
  return allBlogPosts
    .filter(p => p.slug !== slug && p.category === post.value!.category)
    .slice(0, 3)
})

useSeoMeta({
  title: post.value?.title || 'Blog',
  description: post.value?.excerpt || '',
  ogTitle: post.value?.title,
  ogDescription: post.value?.excerpt,
  ogImage: post.value?.thumb,
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
