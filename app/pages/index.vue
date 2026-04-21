<template>
<div class="home-page">
  <!-- KT2: IMMERSIVE BACKGROUND -->
  <div class="immersive-bg">
    <img src="/images/hero-studio.png" alt="Không gian phòng thu âm chuyên nghiệp XKStudio" aria-hidden="true" />
  </div>

  <!-- TWO-COLUMN DASHBOARD -->
  <div class="dashboard">
    <!-- ========== LEFT COLUMN ========== -->
    <div class="col-left">
      <!-- HERO -->
      <section class="hero-section">
        <div class="hero-text">
          <h1>Recording &<br/>Music Production <br/>Sound & Light<br/><span class="neon-text">Chuyên Nghiệp</span></h1>
          <p class="hero-desc">Chúng tôi không chỉ thu âm, chúng tôi bắt trọn linh hồn của bài hát. Nơi nâng tầm nghệ thuật bằng các tiêu chuẩn khắt khe nhất về Mix, Master & Hòa âm.</p>
          <div class="hero-actions">
            <NuxtLink to="/contact" class="btn-neon">BẮT ĐẦU DỰ ÁN</NuxtLink>
            <NuxtLink to="/products" class="btn-ghost">LẮNG NGHE TÁC PHẨM</NuxtLink>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/images/hero-studio.png" alt="Dịch vụ phòng thu âm, hoà âm phối khí chuyên nghiệp tại XKStudio" />
        </div>
      </section>

      <!-- KT1: GLASS TRUST BAR -->
      <section class="stats-bar glass-card">
        <div v-for="s in stats" :key="s.label" class="stat-cell">
          <span class="stat-icon" v-html="s.svg"></span>
          <div class="stat-body">
            <span class="stat-number" :data-target="s.target">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </section>

      <!-- DỰ ÁN TIÊU BIỂU -->
      <section class="featured-section">
        <h2 class="section-heading neon-accent">DỰ ÁN CHẠM ĐẾN KHÁN GIẢ</h2>
        <div class="projects-grid">
          <a
            v-for="(w, i) in works" :key="i"
            :href="w.url"
            target="_blank" rel="noopener noreferrer"
            class="project-card glass-card"
          >
            <div class="project-thumb">
              <img :src="w.thumb" :alt="w.title" />
              <div class="thumb-overlay">
                <i :class="w.url.includes('tiktok') ? 'fa-brands fa-tiktok fa-2x' : 'fa-brands fa-youtube fa-2x'"></i>
              </div>
            </div>
            <div class="project-info">
              <strong>{{ w.title }}</strong>
              <span>{{ w.artist }}</span>
            </div>
          </a>
        </div>
      </section>

    </div>

    <!-- ========== RIGHT COLUMN ========== -->
    <div class="col-right">
      <!-- DỊCH VỤ CHÍNH -->
      <section class="services-section">
        <h2 class="section-heading neon-accent">KHỞI NGUỒN CỦA NHỮNG BẢN HIT</h2>
        <div class="services-cards">
          <NuxtLink
            v-for="svc in services" :key="svc.title"
            :to="svc.link"
            class="svc-card glass-card"
          >
            <div class="svc-icon" v-html="svc.svg"></div>
            <h3>{{ svc.title }}</h3>
            <p>{{ svc.desc }}</p>
            <span class="svc-link neon-text-sm">Xem chi tiết</span>
          </NuxtLink>
        </div>
      </section>

      <!-- VỀ CHÚNG TÔI -->
      <section class="founder-section">
        <h2 class="section-heading neon-accent">FOUNDER</h2>
        <div class="founder-card glass-card">
          <div class="founder-avatar">
            <img src="/images/founder-kiet.jpg" alt="Nguyễn Xuân Kiệt - Music Producer & Founder XKStudio" />
          </div>
          <div class="founder-quote">
            <blockquote>"Âm nhạc không chỉ để nghe, mà là để cảm nhận.<br/>Tạo ra âm thanh là kỹ thuật, chạm đến trái tim mới là nghệ thuật."</blockquote>
            <cite>- Nguyễn Xuân Kiệt</cite>
          </div>
        </div>
      </section>

      <!-- LIÊN HỆ & TƯ VẤN -->
      <section class="contact-section">
        <h2 class="section-heading neon-accent">LIÊN HỆ & TƯ VẤN</h2>
        <div class="contact-info">
          <div class="contact-item"><span class="ci-icon"><i class="fa-solid fa-phone"></i></span><span>Hotline: 0355.356.294</span></div>
          <div class="contact-item"><span class="ci-icon"><i class="fa-solid fa-envelope"></i></span><span>Email : xkstudio29@gmail.com</span></div>
          <div class="contact-item"><span class="ci-icon"><i class="fa-solid fa-comment"></i></span><span>Zalo: 0355.356.294</span></div>
        </div>
        <form class="contact-form glass-card" @submit.prevent>
          <div class="form-grid">
            <input type="text" placeholder="Họ và tên" required />
            <input type="tel" placeholder="Số điện thoại" required />
          </div>
          <div class="form-grid">
            <select><option value="">Loại dự án</option><option>Thu âm</option><option>Mix &amp; Master</option><option>Sản xuất</option><option>Video/TVC</option></select>
            <input type="text" placeholder="Kịch bản / Yêu cầu" />
          </div>
          <textarea placeholder="Lời nhắn" rows="3"></textarea>
          <button type="submit" class="btn-neon btn-full">Gửi thông tin</button>
        </form>
      </section>
    </div>
  </div>

  <!-- CẢM NHẬN KHÁCH HÀNG -->
  <section class="testimonials-section full-width">
    <h2 class="section-heading neon-accent text-center" style="text-align: center; margin-bottom: 2rem;">CẢM NHẬN TỪ NGHỆ SĨ</h2>
    <div class="testimonials-grid">
      <div
        v-for="(t, i) in testimonials.slice(0, 4)" :key="i"
        class="testimonial-card glass-card"
      >
        <div class="tcard-header">
          <div class="tcard-avatar">
            <span class="avatar-initial">{{ t.name.charAt(0) }}</span>
          </div>
          <div class="tcard-meta">
            <strong class="tcard-name">{{ t.name }}</strong>
            <span class="tcard-role">{{ t.role }}</span>
            <div class="tcard-stars">
              <i v-for="n in 5" :key="n" class="fa-solid fa-star"></i>
            </div>
          </div>
          <span class="tcard-quote-icon"><i class="fa-solid fa-quote-right"></i></span>
        </div>
        <p class="tcard-body">{{ t.body }}</p>
      </div>
    </div>
  </section>
</div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'XKStudio - Phòng Thu Âm, Hoà Âm Phối Khí & Sân Khấu Sự Kiện Chuyên Nghiệp',
  description: 'Phòng thu âm chuyên nghiệp XKStudio: Dịch vụ thu âm bài hát, hoà âm phối khí, quay MV/TVC, cho thuê âm thanh ánh sáng & sân khấu sự kiện trọn gói. Uy tín & Chất lượng.',
  ogTitle: 'XKStudio — Phòng Thu Âm, Hoà Âm Phối Khí & Sân Khấu Sự Kiện',
  ogDescription: 'Dịch vụ thu âm chuyên nghiệp, hoà âm phối khí bài hát, quay MV/TVC và cho thuê âm thanh ánh sáng sân khấu sự kiện tại XKStudio.',
  keywords: 'XKStudio, phòng thu âm, phòng thu âm chuyên nghiệp, hoà âm phối khí, sân khấu sự kiện, âm thanh ánh sáng, quay mv, quay tvc, phòng thu âm hcm, mix master bài hát'
})
useSchemaOrg([
  defineWebPage({ name: 'Phòng Thu Âm, Hoà Âm Phối Khí & Sân Khấu Sự Kiện - XKStudio' }),
  defineLocalBusiness({
    name: 'XKStudio',
    image: '/images/hero-studio.png',
    telephone: '0355356294',
    email: 'xkstudio29@gmail.com',
    address: {
      streetAddress: 'Liên hệ qua Hotline/Zalo để được tư vấn địa chỉ gần nhất',
      addressLocality: 'Hồ Chí Minh',
      addressRegion: 'HCM',
      postalCode: '700000',
      addressCountry: 'VN'
    },
    geo: {
      latitude: '10.762622',
      longitude: '106.660172'
    },
    openingHoursSpecification: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '22:00' }
    ],
    priceRange: '$$'
  })
])

onMounted(() => {
  if (!import.meta.client) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target as HTMLElement
      const target = parseInt(el.dataset.target || '0')
      if (!target) return
      let current = 0
      const step = Math.max(1, Math.floor(target / 60))
      const timer = setInterval(() => {
        current += step
        if (current >= target) { current = target; clearInterval(timer) }
        el.textContent = current + (el.textContent?.includes('+') ? '+' : '')
      }, 25)
      observer.unobserve(el)
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.stat-number[data-target]').forEach(el => observer.observe(el))
})

const stats = [
  { svg: '<i class="fa-solid fa-download fa-lg"></i>', value: '2000+', target: 2000, label: 'DỰ ÁN HOÀN THIỆN' },
  { svg: '<i class="fa-solid fa-graduation-cap fa-lg"></i>', value: '50+', target: 50, label: 'HỌC VIÊN ĐÀO TẠO' },
  { svg: '<i class="fa-solid fa-handshake fa-lg"></i>', value: '30+', target: 30, label: 'ĐỐI TÁC CHIẾN LƯỢC' },
  { svg: '<i class="fa-solid fa-clock fa-lg"></i>', value: '7', target: 7, label: 'NĂM KINH NGHIỆM' }
]

const works = [
  {
    title: 'Chẳng Muốn Nói Nhiều Lời',
    artist: 'Revan',
    url: 'https://www.youtube.com/watch?v=IxlFvQQP_4c',
    thumb: `https://img.youtube.com/vi/IxlFvQQP_4c/hqdefault.jpg`
  },
  {
    title: 'Lý Do Bắt Đầu',
    artist: 'Revan',
    url: 'https://www.youtube.com/watch?v=vzfr1ddayYY',
    thumb: `https://img.youtube.com/vi/vzfr1ddayYY/hqdefault.jpg`
  },
  {
    title: 'Love Dự Phòng',
    artist: 'Howl',
    url: 'https://www.youtube.com/watch?v=OCnKTCslJUU',
    thumb: `https://img.youtube.com/vi/OCnKTCslJUU/hqdefault.jpg`
  },
  {
    title: 'Áo Cũ Tình Mới',
    artist: 'Remake Remix',
    url: 'https://www.youtube.com/watch?v=hlvg9YBxRqY',
    thumb: `https://img.youtube.com/vi/hlvg9YBxRqY/hqdefault.jpg`
  },
  {
    title: 'Kiếp Sau',
    artist: 'Phương Thanh Tuyển (Cover)',
    url: 'https://www.youtube.com/watch?v=z4GB-X1OiPg',
    thumb: `https://img.youtube.com/vi/z4GB-X1OiPg/hqdefault.jpg`
  },
  {
    title: 'Viết Tiếp Câu Chuyện Hoà Bình',
    artist: 'Mai Linh (Cover)',
    url: 'https://www.youtube.com/watch?v=P8FPXHJe_go',
    thumb: `https://img.youtube.com/vi/P8FPXHJe_go/hqdefault.jpg`
  },
  {
    title: 'Tết Xa (Cover)',
    artist: 'Khánh Linh',
    url: 'https://www.tiktok.com/@xkstudio/video/7589982843418266901?lang=vi-VN',
    thumb: '/images/hero-studio.png'
  }
]

const services = [
  { svg: '<i class="fa-solid fa-music fa-lg"></i>', title: 'HOÀ ÂM PHỐI KHÍ', desc: 'Đánh thức linh hồn của bài hát. Từ ý tưởng thô sơ đến bản phối lộng lẫy, chuẩn quốc tế trên mọi nền tảng.', link: '/services' },
  { svg: '<i class="fa-solid fa-graduation-cap fa-lg"></i>', title: 'KHOÁ HỌC', desc: 'Chuyển giao đam mê. Nơi nuôi dưỡng và đào tạo những thế hệ Music Producer & Vocalist thực thụ.', link: '/courses' },
  { svg: '<i class="fa-solid fa-guitar fa-lg"></i>', title: 'LIVE BAND', desc: 'Bùng nổ cảm xúc trên sân khấu. Mang âm nhạc sống động hòa vào từng nhịp đập của khán giả.', link: '/live-band' }
]

const testimonials = [
  {
    name: 'Revan',
    role: 'Nghệ Sĩ / Rapper',
    body: 'Mình đã trải qua không ít phòng thu, nhưng XKStudio là nơi đầu tiên mình cảm thấy âm nhạc của mình được thực sự lắng nghe. Từ khâu tư vấn concept đến lúc bản mix hoàn thiện, mọi chi tiết đều được chăm chút cẩn thận. Kiet và team không chỉ làm đúng yêu cầu — họ còn biết cách đẩy bản nhạc lên một tầng cao hơn mà mình chưa nghĩ tới. Hài lòng, có tâm và thực sự có tầm.'
  },
  {
    name: 'Howl',
    role: 'Nghệ Sĩ / Rapper',
    body: 'Đến XKStudio lần đầu mình không kỳ vọng nhiều, nhưng kết quả cuối cùng vượt xa những gì mình tưởng tượng. Sound rõ ràng, sắc nét, và quan trọng hơn — nó đúng chất. Đội ngũ làm việc chuyên nghiệp, phản hồi nhanh, không có gì phải phàn nàn.'
  },
  {
    name: 'Cao Thành Lâm',
    role: 'Singer',
    body: 'Với mình, giọng hát là tất cả. XKStudio hiểu điều đó. Họ biết cách thu âm để giọng ca được trình bày tự nhiên nhất, không bị xử lý quá tay. Mỗi session ở đây đều thoải mái và hiệu quả. Chắc chắn sẽ quay lại cho những dự án tiếp theo.'
  },
  {
    name: 'Fesu',
    role: 'Singer',
    body: 'XKStudio có một điều mà không phải studio nào cũng có — sự kiên nhẫn. Họ không rush, không qua loa. Ngồi làm việc cùng team ở đây mình học được rất nhiều về cách xây dựng âm thanh. Sản phẩm ra lò chất lượng, mình tự hào khi chia sẻ lên mạng.'
  },
  {
    name: 'Phương Thanh Tuyền',
    role: 'Singer',
    body: 'Lần đầu vào studio mình khá hồi hộp, nhưng không khí ở XKStudio rất thân thiện và chuyên nghiệp. Anh Kiệt tư vấn rất tận tình, giúp mình chọn được tone phù hợp với chất giọng. Bản thu hoàn thành đúng hạn, âm thanh ấm và sạch — đúng những gì mình cần.'
  }
]
</script>

<style scoped>
/* ==============================================
   GLASSMORPHISM SYSTEM — Apple iOS / macOS
   ============================================== */

.home-page {
  position: relative;
  min-height: 100vh;
  padding-top: 72px;
}

/* === IMMERSIVE BG === */
.immersive-bg {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
}
.immersive-bg img {
  width: 100%; height: 100%; object-fit: cover;
  filter: blur(8px) brightness(0.13) saturate(1.4);
  transform: scale(1.1);
  animation: bgDrift 18s ease-in-out infinite alternate;
}
@keyframes bgDrift {
  0%   { filter: blur(8px)  brightness(0.13) saturate(1.4); transform: scale(1.10); }
  100% { filter: blur(12px) brightness(0.10) saturate(1.7); transform: scale(1.15); }
}

/* === GLASS CARD BASE === */
.glass-card {
  position: relative;
  backdrop-filter: blur(24px) saturate(1.8);
  -webkit-backdrop-filter: blur(24px) saturate(1.8);
  background: rgba(255, 255, 255, 0.052);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0,0,0,0.32),
    inset 0 1px 0 rgba(255,255,255,0.08),
    inset 0 -1px 0 rgba(0,0,0,0.18);
  transition: all 0.42s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}
.glass-card::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.055) 0%,
    transparent 50%,
    rgba(26,140,255,0.025) 100%
  );
  pointer-events: none;
}
.glass-card:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(26,140,255,0.2);
  box-shadow:
    0 18px 50px rgba(0,0,0,0.4),
    0 0 32px rgba(26,140,255,0.07),
    inset 0 1px 0 rgba(255,255,255,0.12);
  transform: translateY(-2px);
}

/* === TEXT === */
.neon-text {
  background: linear-gradient(135deg, #5bbfff 0%, #00e5c0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(26,140,255,0.5));
}
.neon-text-sm { color: #5bbfff; text-shadow: 0 0 10px rgba(26,140,255,0.45); }
.neon-accent  { text-shadow: 0 0 14px rgba(26,140,255,0.15); }

/* === BUTTONS === */
.btn-neon {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.76rem 1.7rem;
  background: linear-gradient(135deg, #1a8cff 0%, #005fcc 100%);
  color: #fff; font-weight: 700; font-size: 0.78rem;
  letter-spacing: 1.2px; border: none; border-radius: 12px;
  cursor: pointer; text-decoration: none;
  box-shadow: 0 0 22px rgba(26,140,255,0.38), 0 4px 16px rgba(0,0,0,0.3);
  transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
  position: relative; overflow: hidden;
}
.btn-neon::after {
  content: ''; position: absolute; top: -50%; left: -60%;
  width: 200%; height: 200%;
  background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.09) 50%, transparent 60%);
  transition: all 0.55s;
}
.btn-neon:hover {
  box-shadow: 0 0 40px rgba(26,140,255,0.6), 0 6px 22px rgba(0,0,0,0.4);
  transform: translateY(-3px);
  color: #fff;
}
.btn-neon:hover::after { left: 100%; }
.btn-full { width: 100%; justify-content: center; }

.btn-ghost {
  display: inline-flex; align-items: center;
  padding: 0.76rem 1.7rem;
  backdrop-filter: blur(12px);
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.85);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 12px; font-weight: 600;
  font-size: 0.78rem; letter-spacing: 1.2px;
  cursor: pointer; text-decoration: none; transition: all 0.35s;
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.09);
  border-color: rgba(26,140,255,0.4);
  box-shadow: 0 0 18px rgba(26,140,255,0.1);
  transform: translateY(-2px);
  color: #fff;
}

/* === LAYOUT === */
.dashboard {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1.55fr 1fr;
  gap: 2rem; max-width: 1300px;
  margin: 0 auto; padding: 2rem 2rem 5rem;
}
.col-left, .col-right {
  display: flex; flex-direction: column; gap: 1.75rem; min-width: 0;
}
.section-heading {
  font-size: 0.82rem; font-weight: 800;
  letter-spacing: 3.5px; color: rgba(255,255,255,0.9);
  margin-bottom: 1.2rem; text-transform: uppercase;
}

/* === HERO === */
.hero-section {
  display: grid; grid-template-columns: 1fr 1.15fr;
  gap: 2.5rem; align-items: center;
}
.hero-text h1 {
  font-size: 1.95rem; font-weight: 800; line-height: 1.22;
  color: var(--text-main); margin-bottom: 1rem; letter-spacing: -0.01em;
}
.hero-text h1 .neon-text { font-size: 2.35rem; display: inline-block; margin-top: 0.1rem; }
.hero-desc {
  color: rgba(156,175,207,0.85); font-size: 0.88rem;
  line-height: 1.72; margin-bottom: 1.6rem; max-width: 370px;
}
.hero-actions { display: flex; gap: 0.8rem; flex-wrap: wrap; }
.hero-visual {
  position: relative; border-radius: 18px; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(26,140,255,0.07);
}
.hero-visual img { width: 100%; aspect-ratio: 16/10; object-fit: cover; display: block; }

/* === STATS BAR === */
.stats-bar {
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 0.75rem; padding: 1.4rem 1.6rem;
}
.stat-cell { display: flex; align-items: center; gap: 0.7rem; padding: 0.4rem; }
.stat-icon {
  color: #5bbfff; flex-shrink: 0; display: flex;
  filter: drop-shadow(0 0 8px rgba(26,140,255,0.5));
}
.stat-body { display: flex; flex-direction: column; }
.stat-number {
  font-size: 1.55rem; font-weight: 800; color: #fff; line-height: 1;
  text-shadow: 0 0 12px rgba(26,140,255,0.15);
}
.stat-label {
  font-size: 0.6rem; font-weight: 600; letter-spacing: 0.9px;
  color: rgba(156,175,207,0.6); text-transform: uppercase; margin-top: 0.25rem;
}

/* === PROJECTS === */
.projects-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.9rem; }
.project-card {
  cursor: pointer; transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
  text-decoration: none; display: block;
  border: 1px solid rgba(26,140,255,0.16);
}
.project-card:hover {
  transform: translateY(-5px) scale(1.01);
  border-color: rgba(26,140,255,0.48);
  box-shadow: 0 20px 45px rgba(0,0,0,0.45), 0 0 24px rgba(26,140,255,0.14);
}
.project-thumb { position: relative; aspect-ratio: 16/10; overflow: hidden; }
.project-thumb img {
  width: 100%; height: 100%; object-fit: cover;
  display: block; transition: transform 0.55s;
}
.project-card:hover .project-thumb img { transform: scale(1.1); }
.thumb-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%);
  display: flex; align-items: center; justify-content: center;
  color: #fff; opacity: 0; transition: opacity 0.35s;
}
.project-card:hover .thumb-overlay { opacity: 1; }
.thumb-overlay i { font-size: 2rem; filter: drop-shadow(0 0 12px rgba(26,140,255,0.7)); }
.project-info { padding: 0.65rem 0.85rem; }
.project-info strong { display: block; font-size: 0.8rem; color: #e6edf3; margin-bottom: 0.1rem; }
.project-info span  { font-size: 0.7rem; color: rgba(156,175,207,0.6); }

/* === SERVICE CARDS === */
.services-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.85rem; }
.svc-card {
  padding: 1.5rem 0.9rem; text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 0.55rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
}
.svc-card:hover { transform: translateY(-5px); }
.svc-icon {
  color: #5bbfff; margin-bottom: 0.25rem;
  filter: drop-shadow(0 0 10px rgba(26,140,255,0.5));
}
.svc-card h3 { font-size: 0.68rem; font-weight: 700; letter-spacing: 1.2px; color: #e6edf3; }
.svc-card p  { font-size: 0.7rem; color: rgba(156,175,207,0.65); line-height: 1.55; flex: 1; }
.svc-link    { font-size: 0.7rem; font-weight: 600; text-decoration: none; transition: all 0.25s; }
.svc-link:hover { text-shadow: 0 0 14px rgba(26,140,255,0.75); }

/* === FOUNDER === */
.founder-card { display: flex; gap: 1.5rem; align-items: center; padding: 1.5rem; }
.founder-avatar {
  width: 86px; height: 86px; flex-shrink: 0;
  border-radius: 14px; overflow: hidden;
  border: 1px solid rgba(26,140,255,0.18);
  box-shadow: 0 0 20px rgba(26,140,255,0.1);
}
.founder-avatar img { width: 100%; height: 100%; object-fit: cover; }
.founder-quote blockquote {
  font-size: 0.88rem; font-style: italic;
  color: rgba(230,237,243,0.9); line-height: 1.65;
  margin: 0 0 0.6rem; border: none; padding: 0;
}
.founder-quote cite {
  font-style: normal; font-weight: 700;
  font-size: 0.8rem; color: rgba(156,175,207,0.8);
}

/* === CONTACT === */
.contact-info { display: flex; flex-direction: column; gap: 0.55rem; margin-bottom: 1.15rem; }
.contact-item {
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.83rem; color: rgba(156,175,207,0.8);
}
.ci-icon { font-size: 0.95rem; flex-shrink: 0; color: #5bbfff; }
.contact-form { display: flex; flex-direction: column; gap: 0.65rem; padding: 1.35rem; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; }
.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  background: rgba(255,255,255,0.045);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 0.68rem 0.9rem;
  color: #e6edf3; font-family: inherit; font-size: 0.83rem;
  transition: all 0.3s;
}
.contact-form input::placeholder,
.contact-form textarea::placeholder { color: rgba(156,175,207,0.38); }
.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: rgba(26,140,255,0.48);
  background: rgba(255,255,255,0.07);
  box-shadow: 0 0 0 3px rgba(26,140,255,0.07), 0 0 16px rgba(26,140,255,0.08);
}
.contact-form select { appearance: none; cursor: pointer; }
.contact-form textarea { resize: vertical; min-height: 62px; }

/* === TESTIMONIALS === */
.testimonials-section.full-width {
  position: relative; z-index: 1;
  max-width: 1300px; margin: 0 auto;
  padding: 0 2rem 5rem;
}
.testimonials-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.25rem; }
.testimonial-card {
  padding: 1.35rem 1.2rem;
  display: flex; flex-direction: column; gap: 0.8rem; cursor: default;
}
.testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 38px rgba(0,0,0,0.4), 0 0 20px rgba(26,140,255,0.08);
}
.tcard-header { display: flex; align-items: flex-start; gap: 0.8rem; }
.tcard-avatar {
  width: 42px; height: 42px; flex-shrink: 0; border-radius: 50%;
  background: linear-gradient(135deg, #1a8cff 0%, #00d4aa 100%);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 16px rgba(26,140,255,0.35);
}
.avatar-initial { font-size: 1.05rem; font-weight: 800; color: #fff; }
.tcard-meta { flex: 1; display: flex; flex-direction: column; gap: 0.1rem; }
.tcard-name { font-size: 0.86rem; font-weight: 700; color: #e6edf3; letter-spacing: 0.3px; }
.tcard-role { font-size: 0.7rem; color: rgba(156,175,207,0.6); letter-spacing: 0.5px; }
.tcard-stars { display: flex; gap: 2px; margin-top: 0.2rem; }
.tcard-stars i { font-size: 0.62rem; color: #f5c542; filter: drop-shadow(0 0 4px rgba(245,197,66,0.5)); }
.tcard-quote-icon { color: rgba(26,140,255,0.18); font-size: 1.35rem; flex-shrink: 0; margin-top: -0.1rem; }
.tcard-body {
  font-size: 0.78rem; color: rgba(156,175,207,0.78);
  line-height: 1.72; font-style: italic; margin: 0; flex: 1;
}

/* === RESPONSIVE === */
@media (max-width: 1024px) {
  .dashboard { grid-template-columns: 1fr; gap: 1.75rem; }
  .hero-section { grid-template-columns: 1fr 1fr; }
  .testimonials-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 768px) {
  .dashboard { padding: 1.25rem; }
  .testimonials-section.full-width { padding: 0 1.25rem 3rem; }
  .hero-section { grid-template-columns: 1fr; gap: 1.5rem; }
  .hero-text h1 { font-size: 1.6rem; }
  .hero-text h1 .neon-text { font-size: 1.95rem; }
  .stats-bar { grid-template-columns: repeat(2,1fr); }
  .projects-grid { grid-template-columns: repeat(2,1fr); }
  .services-cards { grid-template-columns: 1fr; }
  .founder-card { flex-direction: column; text-align: center; }
  .testimonials-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 480px) {
  .home-page { padding-top: 56px; }
  .hero-text h1 { font-size: 1.4rem; }
  .hero-text h1 .neon-text { font-size: 1.7rem; }
  .stats-bar { grid-template-columns: 1fr 1fr; padding: 1rem; }
  .projects-grid { grid-template-columns: 1fr; }
  .form-grid { grid-template-columns: 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
}
</style>
