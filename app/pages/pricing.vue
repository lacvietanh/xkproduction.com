<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>Bảng giá dịch vụ</h1>
        <p class="page-hero-sub">Minh bạch, không phát sinh. Chọn gói phù hợp hoặc liên hệ để báo giá tùy chỉnh.</p>
      </div>
    </section>

    <section style="padding: 5rem 0;">
      <div class="max-width">

        <!-- Thu âm -->
        <div class="pricing-section">
          <h2 class="pricing-cat"><i class="fa-solid fa-microphone"></i> Thu âm bài hát</h2>
          <div class="pricing-table">
            <div v-for="p in thuAmPlans" :key="p.name" class="pricing-card" :class="{ featured: p.featured }">
              <div v-if="p.badge" class="pricing-badge">{{ p.badge }}</div>
              <h3 class="pricing-name">{{ p.name }}</h3>
              <div class="pricing-price">{{ p.price }}</div>
              <p class="pricing-desc">{{ p.desc }}</p>
              <ul class="pricing-features">
                <li v-for="f in p.features" :key="f">{{ f }}</li>
              </ul>
              <NuxtLink to="/contact" class="btn btn-primary pricing-cta">Đặt lịch ngay</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Mix & Master -->
        <div class="pricing-section">
          <h2 class="pricing-cat"><i class="fa-solid fa-sliders"></i> Mixing &amp; Mastering</h2>
          <div class="pricing-table">
            <div v-for="p in mixPlans" :key="p.name" class="pricing-card" :class="{ featured: p.featured }">
              <div v-if="p.badge" class="pricing-badge">{{ p.badge }}</div>
              <h3 class="pricing-name">{{ p.name }}</h3>
              <div class="pricing-price">{{ p.price }}</div>
              <p class="pricing-desc">{{ p.desc }}</p>
              <ul class="pricing-features">
                <li v-for="f in p.features" :key="f">{{ f }}</li>
              </ul>
              <NuxtLink to="/contact" class="btn btn-primary pricing-cta">Đặt lịch ngay</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Hòa âm phối khí -->
        <div class="pricing-section">
          <h2 class="pricing-cat"><i class="fa-solid fa-keyboard"></i> Hòa âm phối khí</h2>
          <div class="pricing-table">
            <div v-for="p in hoaAmPlans" :key="p.name" class="pricing-card" :class="{ featured: p.featured }">
              <div v-if="p.badge" class="pricing-badge">{{ p.badge }}</div>
              <h3 class="pricing-name">{{ p.name }}</h3>
              <div class="pricing-price">{{ p.price }}</div>
              <p class="pricing-desc">{{ p.desc }}</p>
              <ul class="pricing-features">
                <li v-for="f in p.features" :key="f">{{ f }}</li>
              </ul>
              <NuxtLink to="/contact" class="btn btn-primary pricing-cta">Đặt lịch ngay</NuxtLink>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="pricing-cta-block">
          <h2>Cần báo giá tùy chỉnh?</h2>
          <p>Dự án đặc biệt, album nhiều bài, hay ngân sách cụ thể — hãy liên hệ để được tư vấn trực tiếp.</p>
          <NuxtLink to="/contact" class="btn btn-primary">Tư vấn miễn phí</NuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Bảng giá',
  description: 'Bảng giá dịch vụ thu âm, mixing, mastering, hòa âm phối khí tại XKStudio. Minh bạch, không phát sinh, phù hợp mọi ngân sách.',
  ogTitle: 'Bảng giá - XKStudio'
})

useSchemaOrg([
  defineWebPage({
    name: 'Bảng giá',
    description: 'Bảng giá dịch vụ thu âm, mixing, mastering, hòa âm phối khí tại XKStudio. Minh bạch, không phát sinh, phù hợp mọi ngân sách.'
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
    desc: 'Ca sĩ bán chuyên, dự án cá nhân, phát hành YouTube hoặc các nền tảng số.',
    features: ['Thu âm 2-3 tiếng', 'Vocal production đầy đủ', 'Xuất file đa định dạng', '2 lần revision', 'Tư vấn kỹ thuật'],
    featured: false, badge: ''
  },
  {
    name: 'Gói Chuyên Sâu (Pro)',
    price: 'Từ 1.000.000₫',
    desc: 'Ca sĩ chuyên nghiệp, phát hành thương mại, MV, Spotify, Apple Music.',
    features: ['Thu âm không giới hạn session', 'Vocal coaching & direction', 'Vocal production nâng cao', 'Xuất multi-track', '3 lần revision', 'Hỗ trợ phát hành'],
    featured: true, badge: 'Phổ biến nhất'
  },
  {
    name: 'Gói Cao Cấp (Ultimated)',
    price: 'Từ 1.800.000₫',
    desc: 'Nghệ sĩ thực thụ, dự án đòi hỏi sự chỉn chu tuyệt đối về kỹ thuật lẫn nghệ thuật.',
    features: ['Thu âm không giới hạn', 'Storytelling & emotional coaching', 'Xử lý âm thanh cao cấp', 'Revision không giới hạn', 'Chiến lược phát hành', 'Priority booking'],
    featured: false, badge: ''
  }
]

const mixPlans = [
  {
    name: 'Mix & Master Cơ Bản',
    price: 'Từ 300.000₫',
    desc: 'Mixing stereo track + mastering chuẩn streaming.',
    features: ['Nhận stereo mix từ khách', 'EQ, Compression tổng thể', 'Mastering chuẩn Spotify/YouTube', 'Xuất WAV + MP3'],
    featured: false, badge: ''
  },
  {
    name: 'Mix & Master Chuyên nghiệp',
    price: 'Từ 500.000₫',
    desc: 'Xử lý multi-track, chuẩn phát hành quốc tế.',
    features: ['Nhận multi-track (stems)', 'EQ, Compressor, Reverb, Delay', 'Vocal treatment riêng', 'Master chuẩn Spotify, Apple Music, Radio', '2 lần revision', 'Delivery đa định dạng'],
    featured: true, badge: 'Khuyên dùng'
  }
]

const hoaAmPlans = [
  {
    name: 'Hòa âm Cơ bản',
    price: 'Từ 1.500.000₫',
    desc: 'Demo, bài hát acoustic đơn giản, nhạc trẻ, pop-ballad cơ bản.',
    features: ['Phối khí 1 thể loại', 'MIDI programming cơ bản', 'Stem xuất riêng', '1 lần revision'],
    featured: false, badge: ''
  },
  {
    name: 'Hòa âm Chuyên nghiệp',
    price: 'Từ 3.500.000₫',
    desc: 'Dự án MV, TVC, nhạc phim hoặc phối khí phức tạp nhiều lớp.',
    features: ['Phối khí đa thể loại, đa lớp', 'Nhạc cụ thật (nếu cần)', 'Orchestration nếu yêu cầu', 'Full stem delivery', 'Unlimited revision', 'Hỗ trợ phát hành'],
    featured: true, badge: 'Chuyên nghiệp'
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
.page-hero h1 { font-size: 2.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; }
.page-hero-sub { font-size: 1.05rem; color: var(--text-light); max-width: 600px; margin: 0 auto; }

.pricing-section { margin-bottom: 5rem; }
.pricing-cat { font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 2rem; }

.pricing-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.pricing-card {
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}
.pricing-card:hover { border-color: rgba(255,255,255,0.15); transform: translateY(-4px); }
.pricing-card.featured { border-color: var(--primary); box-shadow: 0 0 30px rgba(0,212,255,0.12); }

.pricing-badge {
  position: absolute; top: -12px; left: 1.5rem;
  background: var(--primary); color: var(--bg-dark);
  padding: 0.3rem 1rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700;
}

.pricing-name { font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; }
.pricing-price { font-size: 1.6rem; font-weight: 800; color: var(--primary); margin-bottom: 0.75rem; }
.pricing-desc { font-size: 0.85rem; color: var(--text-light); line-height: 1.6; margin-bottom: 1.5rem; }

.pricing-features { list-style: none; padding: 0; margin: 0 0 1.5rem 0; flex-grow: 1; }
.pricing-features li {
  padding: 0.45rem 0;
  color: var(--text-light);
  font-size: 0.85rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  padding-left: 1.2rem;
  position: relative;
}
.pricing-features li::before { font-family: 'Font Awesome 6 Free'; content: '\f00c'; font-weight: 900; position: absolute; left: 0; color: var(--primary); }

.pricing-cta { width: 100%; text-align: center; margin-top: auto; }

.pricing-cta-block {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-surface);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.05);
}
.pricing-cta-block h2 { font-size: 2rem; color: var(--text-main); margin-bottom: 1rem; }
.pricing-cta-block p { color: var(--text-light); margin-bottom: 2rem; max-width: 520px; margin-left: auto; margin-right: auto; }

@media (max-width: 768px) {
  .page-hero h1 { font-size: 1.9rem; }
}
</style>
