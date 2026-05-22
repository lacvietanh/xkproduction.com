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
          <p>Mỗi gói được thiết kế theo mức độ hoàn thiện của sản phẩm: từ demo gọn gàng, bản phát hành chỉn chu đến arrangement riêng cho dự án thương mại.</p>

          <div class="pricing-grid-detail">
            <div v-for="p in hoaAmPlans" :key="p.name" class="pricing-card-detail" :class="{ featured: p.featured, premium: p.premium }">
              <div v-if="p.badge" class="pricing-badge-detail">{{ p.badge }}</div>
              <div class="plan-level">{{ p.level }}</div>
              <h3>{{ p.name }}</h3>
              <div class="price-tag" :class="{ consult: p.premium }">{{ p.price }}</div>
              <p class="desc">{{ p.desc }}</p>
              <ul class="features-list">
                <li v-for="f in p.features" :key="f"><i class="fa-solid fa-check"></i> {{ f }}</li>
              </ul>
              <button type="button" class="btn-order" @click="goToContact(p.premium)">{{ p.cta }} <i class="fa-solid fa-arrow-right"></i></button>
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
            <h3>Lộ trình sản xuất đồng bộ</h3>
            <p>Kết hợp <strong>Hòa âm → Thu âm → Mix & Master</strong> để giữ màu âm nhất quán từ bản phối đến bản phát hành cuối.</p>
            <NuxtLink to="/services" class="btn-sidebar-link">Xem dịch vụ liên quan</NuxtLink>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const goToContact = (isPremium = false) => {
  navigateTo(isPremium ? '/contact?service=hoa-am-cao-cap' : '/contact?service=hoa-am')
}

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
    description: 'Ba gói hòa âm phối khí từ cơ bản đến cao cấp cho demo, phát hành và dự án thương mại chuyên nghiệp.'
  }),
  defineProduct({
    name: 'Dịch vụ Hoà Âm Phối Khí XKProduction',
    description: 'Sản xuất âm nhạc, hòa âm phối khí theo định hướng nghệ thuật riêng cho từng dự án.',
    image: 'https://xkproduction.com/images/Logoxkfix.png',
    offers: [
      { name: 'Hoà Âm Phối Khí Cơ Bản', price: '1500000', priceCurrency: 'VND' },
      { name: 'Hoà Âm Phối Khí Nâng Cao', price: '3000000', priceCurrency: 'VND' }
    ]
  })
])

const hoaAmPlans = [
  {
    level: '01',
    name: 'Hòa âm phối khí Cơ Bản',
    price: '1.500.000đ',
    desc: 'Dành cho demo, vocal cover, acoustic hoặc pop-ballad đơn giản cần cảm xúc rõ ràng và bố cục gọn.',
    features: [
      'Arrangement gọn gàng, dễ nghe',
      'Tối ưu cảm xúc nền tảng của ca khúc',
      'Phù hợp người mới hoặc dự án nhỏ',
      '1 lần revision theo brief ban đầu'
    ],
    featured: false,
    premium: false,
    badge: '',
    cta: 'Bắt đầu gói Cơ Bản'
  },
  {
    level: '02',
    name: 'Hòa âm phối khí Nâng Cao',
    price: '3.000.000đ',
    desc: 'Phối khí nhiều layer hơn, xử lý cảm xúc chắc tay hơn cho sản phẩm phát hành nghiêm túc.',
    features: [
      'Layering và build arrangement chuyên sâu hơn',
      'Có sound design và kiểm soát dynamics',
      'Phù hợp YouTube, Spotify, MV hoặc single phát hành',
      'Revision linh hoạt hơn gói cơ bản'
    ],
    featured: true,
    premium: false,
    badge: 'Recommended',
    cta: 'Chọn gói Nâng Cao'
  },
  {
    level: '03',
    name: 'Hòa âm phối khí Cao Cấp',
    price: 'Liên hệ tư vấn',
    desc: 'Dành cho nghệ sĩ chuyên nghiệp hoặc dự án thương mại lớn cần workflow sản xuất chuyên sâu theo định hướng riêng.',
    features: [
      'Custom arrangement theo định hướng nghệ thuật',
      'Live instruments, orchestral, cinematic hoặc yêu cầu đặc biệt',
      'Tối ưu cho dự án thương mại quy mô lớn',
      'Producer workflow chuyên sâu theo từng giai đoạn'
    ],
    featured: false,
    premium: true,
    badge: '',
    cta: 'Liên hệ tư vấn'
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 4rem;
}

.pricing-card-detail {
  background:
    radial-gradient(circle at 18% 0%, rgba(26, 140, 255, 0.1), transparent 34%),
    var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 520px;
  transition: transform 0.34s var(--ease-out-expo), border-color 0.34s var(--ease-out-expo), box-shadow 0.34s var(--ease-out-expo), background 0.34s var(--ease-out-expo);
}
.pricing-card-detail::after {
  content: '';
  position: absolute;
  inset: auto -30% -45% 20%;
  height: 190px;
  background: radial-gradient(circle, rgba(26,140,255,0.16), transparent 68%);
  opacity: 0;
  transition: opacity 0.34s ease;
  pointer-events: none;
}
.pricing-card-detail:hover {
  transform: translateY(-6px);
  border-color: rgba(26, 140, 255, 0.32);
  box-shadow: 0 22px 58px rgba(0, 0, 0, 0.36), 0 0 34px rgba(26, 140, 255, 0.08);
}
.pricing-card-detail:hover::after { opacity: 1; }
.pricing-card-detail.featured {
  border-color: rgba(26, 140, 255, 0.55);
  background:
    radial-gradient(circle at 20% 0%, rgba(26, 140, 255, 0.2), transparent 36%),
    rgba(26, 140, 255, 0.045);
  box-shadow: 0 0 34px rgba(26, 140, 255, 0.13);
}
.pricing-card-detail.premium {
  background:
    radial-gradient(circle at 20% 0%, rgba(0, 212, 170, 0.14), transparent 34%),
    var(--bg-surface);
}

.pricing-badge-detail {
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  background: linear-gradient(135deg, #1a8cff, #00d4aa);
  color: #fff;
  padding: 0.34rem 0.82rem;
  border-radius: 20px;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.plan-level {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: rgba(185, 204, 224, 0.78);
  font-weight: 850;
  font-size: 0.75rem;
  margin-bottom: 1.3rem;
}

.pricing-card-detail h3 {
  font-size: 1.22rem;
  line-height: 1.32;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.85rem;
}

.price-tag {
  font-size: clamp(1.55rem, 2.5vw, 2rem);
  line-height: 1.1;
  font-weight: 850;
  color: var(--primary);
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}
.price-tag.consult {
  color: #9ff3df;
  font-size: clamp(1.25rem, 2.2vw, 1.7rem);
}

.desc {
  font-size: 0.9rem;
  color: rgba(206, 220, 238, 0.78);
  line-height: 1.72;
  margin-bottom: 1.4rem !important;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-grow: 1;
}

.features-list li {
  padding: 0.64rem 0;
  font-size: 0.84rem;
  color: rgba(211, 225, 240, 0.82);
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.055);
  line-height: 1.55;
}
.features-list li i {
  margin-top: 0.24rem;
  color: #74d7bd;
  font-size: 0.78rem;
}

.btn-order {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--text-main);
  text-decoration: none;
  font-family: inherit;
  font-weight: 800;
  font-size: 0.86rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-order i {
  transition: transform 0.25s ease;
}
.pricing-card-detail:hover .btn-order i {
  transform: translateX(4px);
}

.pricing-card-detail:hover .btn-order,
.pricing-card-detail.featured .btn-order {
  background: linear-gradient(135deg, #1a8cff 0%, #0066cc 100%);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 18px rgba(26, 140, 255, 0.28);
}
.pricing-card-detail.premium:hover .btn-order {
  background: linear-gradient(135deg, #0fbf9d 0%, #1a8cff 100%);
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

@media (max-width: 1120px) {
  .pricing-grid-detail {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .pricing-grid-detail {
    grid-template-columns: 1fr;
  }
  .pricing-card-detail {
    min-height: unset;
    padding: 1.5rem;
  }
}
</style>
