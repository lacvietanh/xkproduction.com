<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <div class="hero-badge"><i class="fa-solid fa-film"></i> VIDEO &amp; MEDIA</div>
        <h1>Quay MV &amp; TVC Chuyên Nghiệp</h1>
        <p class="page-hero-sub">Sản xuất hình ảnh chất lượng cao — Phục vụ nghệ sĩ quay MV ca nhạc chuyên nghiệp, studio session, live session và doanh nghiệp sản xuất TVC quảng cáo tại Bình Phước.</p>
      </div>
    </section>

    <!-- Content & Pricing Section -->
    <section class="section-block">
      <div class="max-width grid-layout">
        <!-- Main Info -->
        <div class="main-content-area">
          <h2>Dịch vụ sản xuất Video tại XKProduction</h2>
          <p>Chúng tôi sở hữu ekip media chuyên nghiệp, thiết bị hiện đại cùng quy trình sản xuất trọn gói giúp sản phẩm của bạn thu hút người xem từ những giây đầu tiên.</p>

          <div class="pricing-grid-detail">
            <div v-for="p in videoPlans" :key="p.name" class="pricing-card-detail" :class="{ featured: p.featured }">
              <div v-if="p.badge" class="pricing-badge-detail">{{ p.badge }}</div>
              <h3>{{ p.name }}</h3>
              <div class="price-tag">{{ p.price }}</div>
              <p class="desc">{{ p.desc }}</p>
              <ul class="features-list">
                <li v-for="f in p.features" :key="f"><i class="fa-solid fa-check text-green"></i> {{ f }}</li>
              </ul>
              <NuxtLink to="/contact" class="btn-order">Liên hệ tư vấn ngay <i class="fa-solid fa-arrow-right"></i></NuxtLink>
            </div>
          </div>

          <div class="details-rich-text">
            <h3>Quy trình sản xuất Video trọn gói</h3>
            <p>Từ ý tưởng thô sơ đến sản phẩm hoàn thiện sẵn sàng phát hành trên YouTube, TikTok, Facebook hoặc truyền hình:</p>

            <div class="text-block-group">
              <div class="sub-text-block">
                <h4>1. Kịch bản &amp; Storyboard</h4>
                <p>Lên ý tưởng, viết kịch bản chi tiết, lựa chọn địa điểm quay, lên moodboard hình ảnh và xây dựng storyboard góc máy phù hợp với nội dung bài hát hoặc thương hiệu.</p>
              </div>
              <div class="sub-text-block">
                <h4>2. Tiền kỳ &amp; Quay phim</h4>
                <p>Ekip bấm máy chuyên nghiệp sử dụng hệ thống máy quay chất lượng cao (Sony/Blackmagic), hệ thống gimbal, slider, flycam, đèn studio và setup bối cảnh tỉ mỉ.</p>
              </div>
              <div class="sub-text-block">
                <h4>3. Hậu kỳ &amp; Phân màu</h4>
                <p>Dựng phim, cắt ghép nhịp nhàng theo giai điệu, hiệu ứng hình ảnh (VFX), chỉnh màu điện ảnh chuyên nghiệp (color grading) giúp hình ảnh sang trọng, bắt mắt.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Details -->
        <aside class="sidebar-area">
          <div class="sidebar-card">
            <h3>Tại sao nên làm việc với chúng tôi?</h3>
            <ul class="why-us-list">
              <li>
                <i class="fa-solid fa-circle-check"></i>
                <div>
                  <strong>Ekip đồng bộ:</strong> Sự kết hợp chặt chẽ giữa phòng thu âm và ekip quay phim giúp âm thanh và hình ảnh của MV đạt độ ăn khớp tối đa.
                </div>
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i>
                <div>
                  <strong>Thiết bị hiện đại:</strong> Máy quay chuẩn 4K/6K, hệ thống ánh sáng chuyên dụng, flycam thế hệ mới ghi lại mọi khoảnh khắc đắt giá.
                </div>
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i>
                <div>
                  <strong>Tối ưu chi phí:</strong> Quy trình sản xuất khép kín từ thu âm, mix master đến quay dựng giúp tiết kiệm tối đa ngân sách của bạn.
                </div>
              </li>
            </ul>
          </div>

          <div class="sidebar-card">
            <h3>Cần báo giá chi tiết?</h3>
            <p>Hãy chia sẻ ý tưởng của bạn, ekip media của XKProduction sẽ liên hệ tư vấn bối cảnh, trang phục và lập bảng chi phí chi tiết.</p>
            <a href="https://zalo.me/0355356294" target="_blank" rel="noopener" class="btn-sidebar-contact Zalo-color">
              <i class="fa-solid fa-comment"></i> Nhận tư vấn trực tiếp
            </a>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Quay MV & TVC Chuyên Nghiệp tại Bình Phước — XKProduction',
  description: 'Dịch vụ sản xuất MV ca nhạc, quay Live Session, TVC quảng cáo doanh nghiệp trọn gói tại Bình Phước. Ekip chuyên nghiệp, 5 góc máy, màu điện ảnh. Tư vấn miễn phí.',
  ogTitle: 'Quay MV & TVC Chuyên Nghiệp tại Bình Phước - XKProduction',
  ogDescription: 'Sản xuất hình ảnh chất lượng cao chuẩn điện ảnh. Quay phim ca nhạc, TVC quảng cáo, live session trọn gói tại Bình Phước với ekip media chuyên nghiệp.',
  ogImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  ogUrl: 'https://xkproduction.com/quay-mv-tvc',
  twitterCard: 'summary_large_image',
  keywords: 'quay mv, quay tvc, quay mv binh phuoc, quay phim ca nhac, san xuat video, live session, video podcast, xkproduction'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Quay MV & TVC",
        "provider": {
          "@type": "MusicStore",
          "name": "XKProduction",
          "url": "https://xkproduction.com"
        },
        "name": "Dịch vụ Quay MV & TVC chuyên nghiệp",
        "description": "Quay MV 5 góc máy, bao gồm Studio và Ngoại cảnh, ekip media chuyên nghiệp đầy đủ trọn gói.",
        "offers": {
          "@type": "Offer",
          "price": "1500000",
          "priceCurrency": "VND"
        }
      })
    }
  ]
})

useSchemaOrg([
  defineWebPage({
    name: 'Quay MV & TVC Chuyên Nghiệp tại Bình Phước — XKProduction',
    description: 'Chi tiết dịch vụ sản xuất MV ca nhạc, TVC quảng cáo doanh nghiệp chuyên nghiệp trọn gói.'
  })
])

const videoPlans = [
  {
    name: 'Quay MV chuyên nghiệp',
    price: 'Từ 1.500.000₫',
    desc: 'Phù hợp làm MV cover, MV phòng thu, live studio session của ca sĩ.',
    features: ['Quay phim tại studio hoặc 1 ngoại cảnh', 'Setup ánh sáng chuyên nghiệp', 'Quay 5 góc máy đa dạng', 'Dựng hậu kỳ & Phân màu', 'Hỗ trợ lên kịch bản cơ bản'],
    featured: true, badge: 'Phổ biến nhất'
  },
  {
    name: 'Sản xuất TVC & Quảng cáo',
    price: 'Liên hệ báo giá',
    desc: 'Phù hợp quảng bá thương hiệu, TVC doanh nghiệp, giới thiệu cửa hàng, sản phẩm.',
    features: ['Biên kịch & Lên ý tưởng kịch bản', 'Flycam chất lượng cao', 'Kỹ thuật viên ánh sáng chuyên dụng', 'Thu âm voice-over chuyên nghiệp', 'Dựng phim, kỹ xảo, phân màu', 'Bàn giao video chuẩn phát sóng'],
    featured: false, badge: ''
  }
]
</script>

<style scoped>
.page-hero {
  padding-top: 140px;
  padding-bottom: 4rem;
  background: linear-gradient(135deg, #06080f 0%, #0d1117 100%);
  text-align: center;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.2rem;
  border: 1px solid rgba(26, 140, 255, 0.25);
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1.5rem;
  background: rgba(26, 140, 255, 0.06);
}
.page-hero h1 { font-size: 2.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; }
.page-hero-sub { font-size: 1.05rem; color: var(--text-light); max-width: 640px; margin: 0 auto; line-height: 1.7; }

.section-block { padding: 4rem 0 5rem; }
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 3rem;
}

.main-content-area h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.main-content-area p {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.pricing-grid-detail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.pricing-card-detail {
  background: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
}
.pricing-card-detail:hover {
  transform: translateY(-4px);
  border-color: rgba(26, 140, 255, 0.2);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}
.pricing-card-detail.featured {
  border-color: var(--primary);
  background: rgba(26, 140, 255, 0.03);
  box-shadow: 0 0 30px rgba(26, 140, 255, 0.1);
}

.pricing-badge-detail {
  position: absolute;
  top: -12px;
  left: 2.2rem;
  background: var(--primary);
  color: #fff;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
}

.pricing-card-detail h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.price-tag {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 1rem;
}

.desc {
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem !important;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-grow: 1;
}

.features-list li {
  padding: 0.5rem 0;
  font-size: 0.85rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.btn-order {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: var(--text-main);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.pricing-card-detail:hover .btn-order,
.pricing-card-detail.featured .btn-order {
  background: linear-gradient(135deg, #1a8cff 0%, #0066cc 100%);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 15px rgba(26, 140, 255, 0.3);
}

.details-rich-text h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.text-block-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.sub-text-block {
  background: rgba(255, 255, 255, 0.02);
  border-left: 3px solid var(--primary);
  padding: 1.25rem 1.5rem;
  border-radius: 0 12px 12px 0;
}

.sub-text-block h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.sub-text-block p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

/* Sidebar styles */
.sidebar-area {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-card {
  background: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.8rem;
}

.sidebar-card h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.25rem;
}

.why-us-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.why-us-list li {
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.6;
}

.why-us-list li i {
  color: var(--primary);
  font-size: 1.1rem;
  margin-top: 0.15rem;
}

.why-us-list li strong {
  display: block;
  color: var(--text-main);
  margin-bottom: 0.2rem;
}

.sidebar-card p {
  color: var(--text-light);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.btn-sidebar-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  color: #fff;
  transition: all 0.3s ease;
}

.Zalo-color {
  background: #0068ff;
  box-shadow: 0 4px 15px rgba(0, 104, 255, 0.25);
}
.Zalo-color:hover {
  background: #0056d6;
  box-shadow: 0 6px 20px rgba(0, 104, 255, 0.35);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .pricing-grid-detail {
    grid-template-columns: 1fr;
  }
}
</style>
