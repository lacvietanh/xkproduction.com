<template>
<div class="home-page">
  <!-- KT2: IMMERSIVE BACKGROUND -->
  <div class="immersive-bg">
    <img src="/images/hero-studio.png" alt="" aria-hidden="true" />
  </div>

  <!-- TWO-COLUMN DASHBOARD -->
  <div class="dashboard">
    <!-- ========== LEFT COLUMN ========== -->
    <div class="col-left">
      <!-- HERO -->
      <section class="hero-section">
        <div class="hero-text">
          <h1>NƠI ÂM THANH TRỞ<br/>THÀNH <span class="neon-text">KIỆT TÁC.</span></h1>
          <p class="hero-desc">Chuyên sâu Mix, Master, Hòa âm, &amp; Sản xuất Media theo chuẩn mực quốc tế.</p>
          <div class="hero-actions">
            <NuxtLink to="/contact" class="btn-neon">BẮT ĐẦU DỰ ÁN</NuxtLink>
            <NuxtLink to="/products" class="btn-ghost">KHÁM PHÁ TÁC PHẨM</NuxtLink>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/images/hero-studio.png" alt="XKStudio - Phòng thu chuyên nghiệp" />
          <button class="play-overlay" aria-label="Xem video giới thiệu">
            <i class="fa-solid fa-play" style="margin-left:2px"></i>
          </button>
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
        <h2 class="section-heading neon-accent">DỰ ÁN TIÊU BIỂU</h2>
        <div class="projects-grid">
          <div v-for="(w, i) in works" :key="i" class="project-card glass-card">
            <div class="project-thumb">
              <img src="/images/hero-studio.png" :alt="w.title" />
              <div class="thumb-overlay">
                <i class="fa-solid fa-play fa-lg"></i>
              </div>
            </div>
            <div class="project-info">
              <strong>{{ w.title }}</strong>
              <span>{{ w.artist }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ========== RIGHT COLUMN ========== -->
    <div class="col-right">
      <!-- DỊCH VỤ CHÍNH -->
      <section class="services-section">
        <h2 class="section-heading neon-accent">DỊCH VỤ CHÍNH</h2>
        <div class="services-cards">
          <div v-for="svc in services" :key="svc.title" class="svc-card glass-card">
            <div class="svc-icon" v-html="svc.svg"></div>
            <h3>{{ svc.title }}</h3>
            <p>{{ svc.desc }}</p>
            <NuxtLink to="/services" class="svc-link neon-text-sm">Xem chi tiết</NuxtLink>
          </div>
        </div>
      </section>

      <!-- VỀ CHÚNG TÔI -->
      <section class="founder-section">
        <h2 class="section-heading neon-accent">VỀ CHÚNG TÔI - NHÀ SÁNG LẬP</h2>
        <div class="founder-card glass-card">
          <div class="founder-avatar">
            <img src="/images/hero-studio.png" alt="Nguyễn Xuân Kiệt- Founder" />
          </div>
          <div class="founder-quote">
            <blockquote>"Tạo ra âm thanh là nghệ thuật,<br/>nâng tầm nó là trách nhiệm."</blockquote>
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
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone" required />
          </div>
          <div class="form-grid">
            <select><option value="">Project type</option><option>Thu âm</option><option>Mix &amp; Master</option><option>Sản xuất</option><option>Video/TVC</option></select>
            <input type="text" placeholder="Planscript" />
          </div>
          <textarea placeholder="Message" rows="3"></textarea>
          <button type="submit" class="btn-neon btn-full">Submit</button>
        </form>
      </section>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Trang chủ', description: 'XKStudio - Nơi âm thanh trở thành kiệt tác. Phòng thu âm & sản xuất âm nhạc chuyên nghiệp.', ogTitle: 'XKStudio — Nơi âm thanh trở thành kiệt tác' })
useSchemaOrg([defineWebPage({ name: 'Trang chủ' })])

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
  { title: 'Bài Hát A', artist: 'Nghệ Sĩ B' },
  { title: 'Bài Hát A', artist: 'Nghệ Sĩ B' },
  { title: 'Bài Hát A', artist: 'Nghệ Sĩ B' },
  { title: 'Bài Hát A', artist: 'Nghệ Sĩ B' },
  { title: 'Bài Hát A', artist: 'Nghệ Sĩ B' },
  { title: 'Bài Hát A', artist: 'Nghệ Sĩ B' }
]

const services = [
  { svg: '<i class="fa-solid fa-microphone fa-lg"></i>', title: 'AUDIO PRODUCTION', desc: 'Chuyên production, đội ngũ âm xuất trường nghiệm.' },
  { svg: '<i class="fa-solid fa-music fa-lg"></i>', title: 'MUSIC PRODUCTION', desc: 'Học viên production, mixing, vocalist đã được.' },
  { svg: '<i class="fa-solid fa-film fa-lg"></i>', title: 'MEDIA & TVC', desc: 'Doanh nghiệp, agency, TVC, media & TVC chiến lược.' }
]
</script>

<style scoped>
/* ==============================================
   KT2: IMMERSIVE BACKGROUND (NỀN NHẬP VAI)
   ============================================== */
.home-page { position: relative; min-height: 100vh; padding-top: 72px; }

.immersive-bg {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
}
.immersive-bg img {
  width: 100%; height: 100%; object-fit: cover;
  filter: blur(6px) brightness(0.18) saturate(1.2);
  transform: scale(1.08);
  animation: bgPulse 12s ease-in-out infinite alternate;
}
@keyframes bgPulse {
  0%   { filter: blur(6px) brightness(0.18) saturate(1.2); transform: scale(1.08); }
  100% { filter: blur(8px) brightness(0.15) saturate(1.4); transform: scale(1.12); }
}

/* ==============================================
   KT1: GLASSMORPHISM (KÍNH MỜ)
   ============================================== */
.glass-card {
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.08);
  border-radius: 16px;
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(0, 162, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 162, 255, 0.06), inset 0 1px 0 rgba(255,255,255,0.1);
}

/* ==============================================
   KT3: NEON & LIGHT DETAILS
   ============================================== */
.neon-text {
  background: linear-gradient(135deg, #1a8cff 0%, #00d4aa 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 18px rgba(0, 162, 255, 0.5));
}
.neon-text-sm {
  color: var(--primary);
  text-shadow: 0 0 8px rgba(0, 162, 255, 0.5);
}
.neon-accent {
  text-shadow: 0 0 12px rgba(0, 162, 255, 0.15);
}

.btn-neon {
  display: inline-block; padding: 0.75rem 1.6rem;
  background: linear-gradient(135deg, #1a8cff 0%, #0066cc 100%);
  color: #fff; font-weight: 700; font-size: 0.78rem; letter-spacing: 1.2px;
  border: none; border-radius: 8px; cursor: pointer; text-decoration: none;
  box-shadow: 0 0 20px rgba(0, 162, 255, 0.35), 0 4px 15px rgba(0,0,0,0.3);
  transition: all 0.35s ease;
  position: relative; overflow: hidden;
}
.btn-neon::after {
  content: ''; position: absolute; top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%);
  transition: all 0.5s;
}
.btn-neon:hover {
  box-shadow: 0 0 35px rgba(0, 162, 255, 0.55), 0 6px 20px rgba(0,0,0,0.4);
  transform: translateY(-2px);
}
.btn-neon:hover::after { left: 100%; }
.btn-full { width: 100%; text-align: center; }

.btn-ghost {
  display: inline-block; padding: 0.75rem 1.6rem;
  background: rgba(255,255,255,0.04); color: #fff;
  border: 1px solid rgba(255,255,255,0.18); border-radius: 8px;
  font-weight: 700; font-size: 0.78rem; letter-spacing: 1.2px;
  cursor: pointer; text-decoration: none; transition: all 0.35s;
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(0, 162, 255, 0.4);
  box-shadow: 0 0 15px rgba(0, 162, 255, 0.1);
}

/* ==============================================
   KT4: TYPOGRAPHY & WHITESPACE
   ============================================== */
.dashboard {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1.5fr 1fr;
  gap: 2.5rem; max-width: 1280px;
  margin: 0 auto; padding: 2rem 2.5rem 5rem;
}
.col-left, .col-right {
  display: flex; flex-direction: column; gap: 2rem;
}

.section-heading {
  font-size: 0.95rem; font-weight: 800;
  letter-spacing: 3px; color: var(--text-main);
  margin-bottom: 1.25rem; text-transform: uppercase;
}

/* ==============================================
   HERO
   ============================================== */
.hero-section {
  display: grid; grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem; align-items: center;
}
.hero-text h1 {
  font-size: 2.4rem; font-weight: 800; line-height: 1.15;
  color: var(--text-main); margin-bottom: 1rem; letter-spacing: -0.01em;
}
.hero-desc {
  color: var(--text-light); font-size: 0.9rem;
  line-height: 1.7; margin-bottom: 1.75rem; max-width: 380px;
}
.hero-actions { display: flex; gap: 0.85rem; flex-wrap: wrap; }

.hero-visual {
  position: relative; border-radius: 14px; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 16px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,162,255,0.08);
}
.hero-visual img { width: 100%; aspect-ratio: 16/10; object-fit: cover; display: block; }

.play-overlay {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 60px; height: 60px; border-radius: 50%; border: none;
  background: rgba(255,255,255,0.9); color: var(--primary);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; box-shadow: 0 4px 25px rgba(0,0,0,0.35), 0 0 20px rgba(0,162,255,0.2);
  transition: all 0.35s;
}
.play-overlay:hover {
  transform: translate(-50%,-50%) scale(1.12);
  box-shadow: 0 6px 35px rgba(0,0,0,0.45), 0 0 30px rgba(0,162,255,0.35);
}

/* ==============================================
   STATS BAR (GLASS)
   ============================================== */
.stats-bar {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 1rem; padding: 1.5rem 1.75rem;
}
.stat-cell { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; }
.stat-icon { color: var(--primary); flex-shrink: 0; display: flex; filter: drop-shadow(0 0 6px rgba(0,162,255,0.4)); }
.stat-body { display: flex; flex-direction: column; }
.stat-number { font-size: 1.6rem; font-weight: 800; color: var(--text-main); line-height: 1; text-shadow: 0 0 10px rgba(0,162,255,0.15); }
.stat-label { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.8px; color: var(--text-muted); text-transform: uppercase; margin-top: 0.2rem; }

/* ==============================================
   FEATURED PROJECTS (GLASS CARDS)
   ============================================== */
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.project-card { overflow: hidden; cursor: pointer; transition: all 0.4s ease; }
.project-card:hover { transform: translateY(-4px); box-shadow: 0 12px 35px rgba(0,0,0,0.4), 0 0 20px rgba(0,162,255,0.08); }
.project-thumb { position: relative; aspect-ratio: 16/10; overflow: hidden; }
.project-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s; }
.project-card:hover .project-thumb img { transform: scale(1.08); }
.thumb-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.5); display: flex;
  align-items: center; justify-content: center;
  color: #fff; opacity: 0; transition: opacity 0.35s;
}
.project-card:hover .thumb-overlay { opacity: 1; }
.thumb-overlay svg { filter: drop-shadow(0 0 10px rgba(0,162,255,0.6)); }
.thumb-overlay i { filter: drop-shadow(0 0 10px rgba(0,162,255,0.6)); font-size: 2rem; }
.project-info { padding: 0.7rem 0.9rem; }
.project-info strong { display: block; font-size: 0.82rem; color: var(--text-main); margin-bottom: 0.1rem; }
.project-info span { font-size: 0.72rem; color: var(--text-muted); }

/* ==============================================
   SERVICE CARDS (GLASS)
   ============================================== */
.services-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem; }
.svc-card {
  padding: 1.5rem 1rem; text-align: center; transition: all 0.4s;
  display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
}
.svc-card:hover { transform: translateY(-4px); }
.svc-icon { color: var(--primary); margin-bottom: 0.3rem; filter: drop-shadow(0 0 8px rgba(0,162,255,0.5)); }
.svc-card h3 { font-size: 0.72rem; font-weight: 700; letter-spacing: 1.2px; color: var(--text-main); }
.svc-card p { font-size: 0.72rem; color: var(--text-muted); line-height: 1.55; flex: 1; }
.svc-link { font-size: 0.72rem; font-weight: 600; text-decoration: none; transition: all 0.25s; }
.svc-link:hover { text-shadow: 0 0 12px rgba(0,162,255,0.7); }

/* ==============================================
   FOUNDER (GLASS)
   ============================================== */
.founder-card { display: flex; gap: 1.5rem; align-items: center; padding: 1.5rem; }
.founder-avatar { width: 90px; height: 90px; flex-shrink: 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0,162,255,0.15); box-shadow: 0 0 15px rgba(0,162,255,0.08); }
.founder-avatar img { width: 100%; height: 100%; object-fit: cover; }
.founder-quote blockquote { font-size: 0.9rem; font-style: italic; color: var(--text-main); line-height: 1.65; margin: 0 0 0.6rem; border: none; padding: 0; }
.founder-quote cite { font-style: normal; font-weight: 700; font-size: 0.82rem; color: var(--text-light); }

/* ==============================================
   CONTACT (GLASS FORM)
   ============================================== */
.contact-info { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.25rem; }
.contact-item { display: flex; align-items: center; gap: 0.65rem; font-size: 0.84rem; color: var(--text-light); }
.ci-icon { font-size: 1rem; flex-shrink: 0; }

.contact-form { display: flex; flex-direction: column; gap: 0.7rem; padding: 1.5rem; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; }
.contact-form input, .contact-form select, .contact-form textarea {
  width: 100%; background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
  padding: 0.7rem 0.9rem; color: var(--text-main);
  font-family: inherit; font-size: 0.84rem; transition: all 0.3s;
}
.contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
  outline: none; border-color: rgba(0,162,255,0.5);
  box-shadow: 0 0 15px rgba(0,162,255,0.12), 0 0 0 3px rgba(0,162,255,0.06);
}
.contact-form select { appearance: none; cursor: pointer; }
.contact-form textarea { resize: vertical; min-height: 65px; }

/* ==============================================
   RESPONSIVE
   ============================================== */
@media (max-width: 1024px) {
  .dashboard { grid-template-columns: 1fr; gap: 2rem; }
  .hero-section { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .dashboard { padding: 1.25rem; }
  .hero-section { grid-template-columns: 1fr; gap: 1.5rem; }
  .hero-text h1 { font-size: 1.8rem; }
  .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
  .services-cards { grid-template-columns: 1fr; }
  .founder-card { flex-direction: column; text-align: center; }
}
@media (max-width: 480px) {
  .home-page { padding-top: 56px; }
  .hero-text h1 { font-size: 1.5rem; }
  .stats-bar { grid-template-columns: 1fr 1fr; padding: 1rem; }
  .projects-grid { grid-template-columns: 1fr; }
  .form-grid { grid-template-columns: 1fr; }
}
</style>
