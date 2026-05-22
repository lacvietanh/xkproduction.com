<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <div class="hero-badge"><i class="fa-solid fa-sliders"></i> MIXING &amp; MASTERING</div>
        <h1>Dịch Vụ Mix &amp; Master Chuyên Nghiệp</h1>
        <p class="page-hero-sub">Chuẩn phát hành quốc tế — Giúp bản nhạc của bạn có chiều sâu, độ mở không gian tối đa và loudness chuẩn Spotify, Apple Music.</p>
      </div>
    </section>

    <!-- Content & Pricing Section -->
    <section class="section-block">
      <div class="max-width grid-layout">
        <!-- Main Info -->
        <div class="main-content-area">
          <h2>Bảng giá dịch vụ Mixing &amp; Mastering</h2>
          <p>Dù bạn gửi Stereo track đơn lẻ hay trọn bộ Multi-tracks (Stems), chúng tôi đều xử lý tỉ mỉ bằng hệ thống phần mềm và phần cứng chuyên dụng cao cấp.</p>

          <div class="pricing-grid-detail">
            <div v-for="p in mixPlans" :key="p.name" class="pricing-card-detail" :class="{ featured: p.featured }">
              <div v-if="p.badge" class="pricing-badge-detail">{{ p.badge }}</div>
              <h3>{{ p.name }}</h3>
              <div class="price-tag">{{ p.price }}</div>
              <p class="desc">{{ p.desc }}</p>
              <ul class="features-list">
                <li v-for="f in p.features" :key="f"><i class="fa-solid fa-check text-green"></i> {{ f }}</li>
              </ul>
              <NuxtLink to="/contact" class="btn-order">Đặt lịch Mix &amp; Master <i class="fa-solid fa-arrow-right"></i></NuxtLink>
            </div>
          </div>

          <div class="details-rich-text">
            <h3>Mixing vs Mastering khác nhau như thế nào?</h3>
            <p>Rất nhiều nghệ sĩ mới bắt đầu sản xuất âm nhạc nhầm lẫn giữa hai quy trình này. Đây là hai giai đoạn sản xuất âm thanh hoàn toàn riêng biệt:</p>

            <div class="text-block-group">
              <div class="sub-text-block">
                <h4>1. Mixing (Trộn âm)</h4>
                <p>Là quá trình cân bằng âm lượng, định hình tần số (EQ), kiểm soát động lực học (Compression) và tạo không gian (Reverb, Delay) cho từng track nhạc cụ lẻ và vocal riêng biệt để tạo ra một bản mix tổng thể hoàn hảo.</p>
              </div>
              <div class="sub-text-block">
                <h4>2. Mastering (Hoàn thiện âm thanh)</h4>
                <p>Là khâu cuối cùng xử lý trên bản mix stereo đã hoàn thiện. Mục tiêu là làm mượt tổng thể tần số, tối ưu hoá độ to (loudness) và định dạng chuẩn xuất file phù hợp với các nền tảng streaming (Spotify -14 LUFS, Apple Music -16 LUFS).</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Details -->
        <aside class="sidebar-area">
          <div class="sidebar-card">
            <h3>Chuẩn bị gì trước khi gửi file?</h3>
            <ul class="why-us-list">
              <li>
                <i class="fa-solid fa-circle-info"></i>
                <div>
                  <strong>Xuất file chất lượng cao:</strong> Gửi file dạng WAV (24-bit/44.1kHz hoặc 48kHz). Không xuất file nén MP3.
                </div>
              </li>
              <li>
                <i class="fa-solid fa-circle-info"></i>
                <div>
                  <strong>Bypass các hiệu ứng:</strong> Tắt toàn bộ Reverb, Delay và Limiter trên tổng track vocal (trừ các hiệu ứng creative cần thiết).
                </div>
              </li>
              <li>
                <i class="fa-solid fa-circle-info"></i>
                <div>
                  <strong>Gửi kèm bài tham khảo:</strong> Gửi kèm link bài hát hoặc demo có hướng âm thanh (vibe/concept) bạn mong muốn hướng tới.
                </div>
              </li>
            </ul>
          </div>

          <div class="sidebar-card">
            <h3>Dịch vụ Mix Online</h3>
            <p>Hơn 70% dự án của XKProduction được thực hiện online với quy trình mượt mà, phản hồi chỉnh sửa nhanh chóng qua Zalo/Drive.</p>
            <a href="https://zalo.me/0355356294" target="_blank" rel="noopener" class="btn-sidebar-contact Zalo-color">
              <i class="fa-solid fa-comment"></i> Nhận tư vấn Online
            </a>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Dịch vụ Mixing & Mastering Chuẩn Spotify Chuyên Nghiệp | XKProduction',
  description: 'Dịch vụ mixing và mastering bài hát chuyên nghiệp, chuẩn phát hành Spotify, Apple Music. Nhận mix master online multi-track chất lượng cao từ 300k. Đặt lịch tư vấn miễn phí.',
  ogTitle: 'Mixing & Mastering Chuyên Nghiệp - XKProduction',
  ogDescription: 'Biến đổi bản thu của bạn thành tác phẩm thương mại chất lượng cao chuẩn quốc tế. Cân chỉnh vocal, không gian âm thanh, độ động chuyên sâu.',
  ogImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  ogUrl: 'https://xkproduction.com/mix-master',
  twitterCard: 'summary_large_image',
  keywords: 'mix master, mixing mastering, mix master online, mix nhạc, mastering chuẩn spotify, làm master nhạc chuyên nghiệp, xkproduction'
})

useSchemaOrg([
  defineWebPage({
    name: 'Dịch vụ Mixing & Mastering Chuyên Nghiệp - XKProduction',
    description: 'Bảng giá dịch vụ Mixing & Mastering chất lượng cao từ 300.000₫ đến 500.000₫ chuẩn phát hành quốc tế.'
  }),
  defineProduct({
    name: 'Dịch vụ Mixing & Mastering Chuyên Nghiệp XKProduction',
    description: 'Mixing & mastering chuyên nghiệp chuẩn streaming cho ca sĩ, nghệ sĩ tự do.',
    image: 'https://xkproduction.com/images/Logoxkfix.png',
    offers: [
      { name: 'Mix & Master Cơ Bản', price: '300000', priceCurrency: 'VND' },
      { name: 'Mix & Master Chuyên Nghiệp', price: '500000', priceCurrency: 'VND' }
    ]
  })
])

const mixPlans = [
  {
    name: 'Mix & Master Cơ Bản',
    price: 'Từ 300.000₫',
    desc: 'Dành cho bản phối chỉ có 1 track vocal mộc và 1 track beat stereo.',
    features: ['Nhận stereo mix từ khách', 'EQ & Compression tổng thể', 'Mastering chuẩn Spotify/YouTube', 'Xuất file WAV + MP3', '1 lần revision'],
    featured: false, badge: ''
  },
  {
    name: 'Mix & Master Chuyên Nghiệp',
    price: 'Từ 500.000₫',
    desc: 'Xử lý multi-track riêng biệt (stems), tối ưu chi tiết mọi lớp nhạc cụ và vocal.',
    features: ['Nhận multi-track (stems) đầy đủ', 'EQ/Compressor/Reverb/Delay từng track lẻ', 'Vocal treatment chuyên sâu (tuning, timing)', 'Master chuẩn Spotify/Apple Music', '2 lần revision', 'Delivery đa định dạng'],
    featured: true, badge: 'Khuyên dùng'
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
