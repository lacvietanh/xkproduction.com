<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <div class="hero-badge"><i class="fa-solid fa-keyboard"></i> HOÀ ÂM PHỐI KHÍ</div>
        <h1>Hoà Âm Phối Khí Chuyên Nghiệp</h1>
        <p class="page-hero-sub">Đánh thức linh hồn của bài hát — Từ ý tưởng thô sơ đến bản phối lộng lẫy, đa lớp nhạc cụ và đạt chuẩn sản xuất thương mại.</p>
      </div>
    </section>

    <!-- Content & Pricing Section -->
    <section class="section-block">
      <div class="max-width grid-layout">
        <!-- Main Info -->
        <div class="main-content-area">
          <h2>Bảng giá dịch vụ Hoà âm Phối khí</h2>
          <p>Mỗi bản phối tại XKProduction đều được thực hiện bởi Producer chuyên môn cao, sử dụng hệ thống thư viện âm thanh (Vst) và nhạc cụ thật chọn lọc.</p>

          <div class="pricing-grid-detail">
            <div v-for="p in hoaAmPlans" :key="p.name" class="pricing-card-detail" :class="{ featured: p.featured }">
              <div v-if="p.badge" class="pricing-badge-detail">{{ p.badge }}</div>
              <h3>{{ p.name }}</h3>
              <div class="price-tag">{{ p.price }}</div>
              <p class="desc">{{ p.desc }}</p>
              <ul class="features-list">
                <li v-for="f in p.features" :key="f"><i class="fa-solid fa-check text-green"></i> {{ f }}</li>
              </ul>
              <NuxtLink to="/contact" class="btn-order">Đặt làm bản phối ngay <i class="fa-solid fa-arrow-right"></i></NuxtLink>
            </div>
          </div>

          <div class="details-rich-text">
            <h3>Quy trình sản xuất bản phối Online</h3>
            <p>Dù bạn ở bất kỳ đâu, quy trình làm việc từ xa của chúng tôi vẫn đảm bảo sự sát sao và ưng ý nhất:</p>

            <ol class="workflow-steps">
              <li>
                <strong>Trao đổi Concept & Demo:</strong> Bạn gửi file demo giọng hát mộc hoặc bản ký âm. Hai bên thống nhất về thể loại nhạc (Pop, R&B, Ballad, EDM...) và hướng phối khí qua bài hát tham khảo.
              </li>
              <li>
                <strong>Phê duyệt Draft 1 (Bản phác thảo):</strong> Producer gửi bản phối khung (thường là Piano/Guitar + Trống) để xác nhận về tone, nhịp và cấu trúc bài.
              </li>
              <li>
                <strong>Sản xuất chi tiết & Layering:</strong> Tiến hành phối đầy đủ các lớp nhạc cụ, thu âm nhạc cụ thật (nếu có) và xử lý sound design chuyên sâu.
              </li>
              <li>
                <strong>Chỉnh sửa & Hoàn thiện:</strong> Bạn nghe bản phối đầy đủ và yêu cầu chỉnh sửa chi tiết. Sau khi chốt, chúng tôi bàn giao file WAV stereo và Stem lẻ (nếu gói có hỗ trợ).
              </li>
            </ol>
          </div>
        </div>

        <!-- Sidebar Details -->
        <aside class="sidebar-area">
          <div class="sidebar-card">
            <h3>Đa dạng thể loại âm nhạc</h3>
            <p>Chúng tôi có kinh nghiệm thực chiến trong việc sản xuất hầu hết các dòng nhạc hiện đại:</p>
            <ul class="genre-list">
              <li><i class="fa-solid fa-music"></i> Pop / Ballad / Indie</li>
              <li><i class="fa-solid fa-music"></i> R&B / Soul / Funk</li>
              <li><i class="fa-solid fa-music"></i> Rap / Hip-hop / Lo-fi</li>
              <li><i class="fa-solid fa-music"></i> Acoustic / Chill</li>
              <li><i class="fa-solid fa-music"></i> Nhạc phim / TVC / Trailer</li>
            </ul>
          </div>

          <div class="sidebar-card">
            <h3>Gói Combo Tiết Kiệm</h3>
            <p>Sở hữu trọn gói từ <strong>Hoà âm → Thu âm → Mix & Master</strong> với chi phí ưu đãi hơn khi đặt riêng lẻ từng dịch vụ.</p>
            <NuxtLink to="/services" class="btn-sidebar-link">Xem bảng giá hub</NuxtLink>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Dịch vụ Hoà Âm Phối Khí Online Chuyên Nghiệp | XKProduction',
  description: 'Nhận hoà âm phối khí chuyên nghiệp cho ca khúc mới, cover, remake. Đa dạng thể loại: Pop, R&B, Rap, Acoustic. Bảng giá từ 1.5tr. Nhận file Stem đầy đủ. Tư vấn ngay.',
  ogTitle: 'Hoà Âm Phối Khí Chuyên Nghiệp - XKProduction',
  ogDescription: 'Biến giai điệu thô thành tác phẩm âm nhạc hoàn chỉnh. Phối nhạc online chất lượng cao, nhạc cụ thật, tư vấn concept âm nhạc tận tâm.',
  ogImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  ogUrl: 'https://xkproduction.com/hoa-am-phoi-khi',
  twitterCard: 'summary_large_image',
  keywords: 'hoà âm phối khí, phối nhạc online, làm beat nhạc, dịch vụ hoà âm, làm nhạc chuyên nghiệp, hoà âm phối khí online, xkproduction'
})

useSchemaOrg([
  defineWebPage({
    name: 'Dịch vụ Hoà Âm Phối Khí - XKProduction',
    description: 'Bảng giá dịch vụ hoà âm phối khí mới nhất từ 1.500.000₫ đến 2.500.000₫ tại XKProduction.'
  }),
  defineProduct({
    name: 'Dịch vụ Hoà Âm Phối Khí XKProduction',
    description: 'Sản xuất âm nhạc, làm phối khí chuyên nghiệp đa thể loại cho nghệ sĩ.',
    image: 'https://xkproduction.com/images/Logoxkfix.png',
    offers: [
      { name: 'Hoà Âm Cơ Bản', price: '1500000', priceCurrency: 'VND' },
      { name: 'Hoà Âm Cao Cấp', price: '2500000', priceCurrency: 'VND' }
    ]
  })
])

const hoaAmPlans = [
  {
    name: 'Hoà âm Cơ bản',
    price: 'Từ 1.500.000₫',
    desc: 'Phù hợp làm demo, bài hát acoustic đơn giản, nhạc trẻ, pop-ballad nhẹ nhàng.',
    features: ['Phối khí 1 thể loại chủ đạo', 'Sử dụng thư viện MIDI cao cấp', 'Xuất file Stem tổng', '1 lần revision'],
    featured: false, badge: ''
  },
  {
    name: 'Hoà âm Cao Cấp',
    price: 'Từ 2.500.000₫',
    desc: 'Bản phối đa tầng, đa lớp nhạc cụ, phù hợp phát hành thương mại chuyên nghiệp.',
    features: ['Phối khí đa thể loại, layering phức tạp', 'Nhạc cụ thật (Guitar/Violin nếu cần)', 'Orchestration chuyên sâu', 'Full stem delivery', 'Unlimited revision', 'Hỗ trợ phát hành'],
    featured: true, badge: 'Đẳng cấp'
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

.genre-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.genre-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.85rem;
  color: var(--text-light);
}

.genre-list li i {
  color: var(--primary);
  font-size: 0.9rem;
}

.sidebar-card p {
  color: var(--text-light);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.btn-sidebar-link {
  display: flex;
  align-items: center;
  justify-content: center;
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

.btn-sidebar-link:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
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
