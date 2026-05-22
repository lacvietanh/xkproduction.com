<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <div class="hero-badge"><i class="fa-solid fa-microphone"></i> DỊCH VỤ PHÒNG THU</div>
        <h1>Dịch Vụ Thu Âm Chuyên Nghiệp</h1>
        <p class="page-hero-sub">Phòng thu âm tiêu chuẩn tại Bình Phước — Nơi thăng hoa giọng hát của bạn với thiết bị chuẩn quốc tế và sự hỗ trợ tận tâm từ kỹ sư âm thanh.</p>
      </div>
    </section>

    <!-- Content & Pricing Section -->
    <section class="section-block">
      <div class="max-width grid-layout">
        <!-- Main Info -->
        <div class="main-content-area">
          <h2>Bảng giá gói thu âm tại XKProduction</h2>
          <p>Mỗi gói thu âm đều được thiết kế tối ưu cho từng nhu cầu cụ thể, đảm bảo sự minh bạch tuyệt đối, không phát sinh chi phí ẩn.</p>

          <div class="pricing-grid-detail">
            <div v-for="p in thuAmPlans" :key="p.name" class="pricing-card-detail" :class="{ featured: p.featured }">
              <div v-if="p.badge" class="pricing-badge-detail">{{ p.badge }}</div>
              <h3>{{ p.name }}</h3>
              <div class="price-tag">{{ p.price }}</div>
              <p class="desc">{{ p.desc }}</p>
              <ul class="features-list">
                <li v-for="f in p.features" :key="f"><i class="fa-solid fa-check text-green"></i> {{ f }}</li>
              </ul>
              <NuxtLink to="/contact" class="btn-order">Đặt lịch thu ngay <i class="fa-solid fa-arrow-right"></i></NuxtLink>
            </div>
          </div>

          <div class="details-rich-text">
            <h3>Quy trình làm việc tại phòng thu</h3>
            <ol class="workflow-steps">
              <li>
                <strong>Đặt lịch &amp; Chuẩn bị:</strong> Đăng ký lịch thu trước tối thiểu 24h. Bạn sẽ nhận được checklist chuẩn bị giọng hát và lời bài hát.
              </li>
              <li>
                <strong>Vocal Direction &amp; Coaching:</strong> Trong suốt buổi thu, producer của XKProduction sẽ đồng hành hướng dẫn bạn cách lấy hơi, nhả chữ và truyền tải cảm xúc tốt nhất.
              </li>
              <li>
                <strong>Vocal Editing:</strong> Kỹ sư âm thanh tiến hành chỉnh phô (vocal tuning) và sửa nhịp (vocal timing) chuẩn xác bằng phần mềm chuyên nghiệp.
              </li>
              <li>
                <strong>Bàn giao sản phẩm:</strong> Bạn nhận bản demo để nghe thử, yêu cầu chỉnh sửa và nhận file master WAV/MP3 chất lượng cao sau khi hoàn thiện.
              </li>
            </ol>
          </div>
        </div>

        <!-- Sidebar Details -->
        <aside class="sidebar-area">
          <div class="sidebar-card">
            <h3>Tại sao chọn XKProduction?</h3>
            <ul class="why-us-list">
              <li>
                <i class="fa-solid fa-circle-check"></i>
                <div>
                  <strong>Thiết bị cao cấp:</strong> Sử dụng microphone condenser Neumann, preamp SSL và soundcard đạt chuẩn studio chuyên nghiệp.
                </div>
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i>
                <div>
                  <strong>7+ năm kinh nghiệm:</strong> Kỹ sư âm thanh Nguyễn Xuân Kiệt đã đồng hành cùng hơn 2000+ dự án của nhiều nghệ sĩ.
                </div>
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i>
                <div>
                  <strong>Hỗ trợ tận tình:</strong> Không chỉ bấm nút thu, chúng tôi hỗ trợ bè phối, hướng dẫn xử lý bài hát từ đầu đến cuối.
                </div>
              </li>
            </ul>
          </div>

          <div class="sidebar-card">
            <h3>Bạn cần tư vấn trực tiếp?</h3>
            <p>Hãy nhắn tin qua Zalo hoặc liên hệ Hotline để được tư vấn gói thu âm phù hợp nhất với giọng hát của bạn.</p>
            <a href="https://zalo.me/0355356294" target="_blank" rel="noopener" class="btn-sidebar-contact Zalo-color">
              <i class="fa-solid fa-comment"></i> Nhắn Zalo ngay
            </a>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Dịch vụ Thu Âm Bài Hát Chuyên Nghiệp Bình Phước | XKProduction',
  description: 'Bảng giá dịch vụ thu âm bài hát chuyên nghiệp từ 350k tại Bình Phước. Phòng thu âm đạt chuẩn cách âm, microphone Neumann, preamp SSL cao cấp. Đặt lịch thu âm ngay.',
  ogTitle: 'Dịch Vụ Thu Âm Bài Hát Chuyên Nghiệp - XKProduction',
  ogDescription: 'Thu âm bài hát chất lượng cao từ 350k tại Bình Phước. Đội ngũ kỹ sư âm thanh 7 năm kinh nghiệm hỗ trợ bè phối, vocal coaching tận tình.',
  ogImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  ogUrl: 'https://xkproduction.com/thu-am',
  twitterCard: 'summary_large_image',
  keywords: 'thu âm bài hát, dịch vụ thu âm, phòng thu âm Bình Phước, giá thu âm bao nhiêu, studio thu âm uy tín, thu âm bài hát giá bao nhiêu, phòng thu âm chuyên nghiệp'
})

useSchemaOrg([
  defineWebPage({
    name: 'Dịch vụ Thu Âm Bài Hát Chuyên Nghiệp - XKProduction',
    description: 'Bảng giá dịch vụ thu âm bài hát chuyên nghiệp mới nhất từ 350.000₫ đến 1.800.000₫ tại XKProduction.'
  }),
  defineProduct({
    name: 'Dịch vụ Thu Âm Bài Hát Chuyên Nghiệp XKProduction',
    description: 'Thu âm bài hát chuyên nghiệp với trang thiết bị chuẩn quốc tế và hỗ trợ vocal coaching tận tình.',
    image: 'https://xkproduction.com/images/Logoxkfix.png',
    offers: [
      { name: 'Gói Thu Âm Cơ Bản', price: '350000', priceCurrency: 'VND' },
      { name: 'Gói Thu Âm Nâng Cao', price: '550000', priceCurrency: 'VND' },
      { name: 'Gói Thu Âm Pro', price: '1000000', priceCurrency: 'VND' },
      { name: 'Gói Thu Âm Cao Cấp', price: '1800000', priceCurrency: 'VND' }
    ]
  })
])

const thuAmPlans = [
  {
    name: 'Gói Cơ Bản',
    price: 'Từ 350.000₫',
    desc: 'Phù hợp với người mới bắt đầu, thu demo, cover, học viên thanh nhạc.',
    features: ['Thu âm 1-2 tiếng', 'Chỉnh sửa cơ bản (tuning, timing)', 'Xuất file WAV/MP3', '1 lần revision'],
    featured: false, badge: ''
  },
  {
    name: 'Gói Nâng Cao',
    price: 'Từ 550.000₫',
    desc: 'Dành cho ca sĩ bán chuyên, dự án cá nhân, phát hành YouTube hoặc mạng xã hội.',
    features: ['Thu âm 2-3 tiếng', 'Vocal production đầy đủ', 'Xuất file đa định dạng', '2 lần revision', 'Tư vấn kỹ thuật'],
    featured: false, badge: ''
  },
  {
    name: 'Gói Chuyên Sâu (Pro)',
    price: 'Từ 1.000.000₫',
    desc: 'Ca sĩ chuyên nghiệp, phát hành thương mại lên Spotify, Apple Music.',
    features: ['Thu âm không giới hạn session', 'Vocal coaching & direction', 'Vocal production nâng cao', 'Xuất multi-track', '3 lần revision', 'Hỗ trợ phát hành'],
    featured: true, badge: 'Khuyên dùng'
  },
  {
    name: 'Gói Cao Cấp (Ultimate)',
    price: 'Từ 1.800.000₫',
    desc: 'Nghệ sĩ thực thụ, dự án đòi hỏi sự chỉn chu tuyệt đối về cả kỹ thuật lẫn nghệ thuật.',
    features: ['Thu âm không giới hạn', 'Storytelling & emotional coaching', 'Xử lý âm thanh cao cấp', 'Revision không giới hạn', 'Chiến lược phát hành', 'Priority booking'],
    featured: false, badge: ''
  }
]
</script>

<style scoped>
/* Page Layout styles */
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
  margin-bottom: 1.5rem;
}

.workflow-steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.workflow-steps li {
  position: relative;
  padding-left: 3rem;
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.7;
}

.workflow-steps li::before {
  content: counter(step-counter, decimal);
  counter-increment: step-counter;
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  background: rgba(26, 140, 255, 0.1);
  border: 1px solid rgba(26, 140, 255, 0.25);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.workflow-steps {
  counter-reset: step-counter;
}

.workflow-steps li strong {
  display: block;
  color: var(--text-main);
  margin-bottom: 0.25rem;
  font-size: 1rem;
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
