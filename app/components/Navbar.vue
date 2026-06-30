<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }" role="navigation" aria-label="Điều hướng chính XKProduction">
    <div class="nav-container">
      <!-- LEFT: Desktop nav -->
      <ul class="nav-group nav-left" role="list" aria-label="Điều hướng chính">
        <li>
          <NuxtLink to="/services" class="nav-link" title="Dịch vụ & Bảng giá" :aria-current="$route.path === '/services' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-microphone-lines" aria-hidden="true"></i></span>
            <span class="nav-text">Dịch vụ</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="nav-link" title="Tác phẩm nổi bật" :aria-current="$route.path === '/products' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-compact-disc" aria-hidden="true"></i></span>
            <span class="nav-text">Sản phẩm</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/live-band" class="nav-link" title="Âm thanh Ánh sáng & Sân khấu" :aria-current="$route.path === '/live-band' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-guitar" aria-hidden="true"></i></span>
            <span class="nav-text">Live Band</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
      </ul>

      <!-- CENTER: Logo -->
      <NuxtLink to="/" class="logo" title="XKProduction - Phòng Thu Âm Chuyên Nghiệp" aria-label="XKProduction trang chủ">
        <img src="/images/logo-xkproduction.png" alt="XKProduction Logo" class="logo-img" width="32" height="32" />
        <span class="logo-text">XKProduction</span>
      </NuxtLink>

      <!-- RIGHT: Desktop nav -->
      <ul class="nav-group nav-right" role="list">
        <li>
          <NuxtLink to="/blog" class="nav-link" title="Blog Kiến Thức Âm Nhạc" :aria-current="$route.path === '/blog' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-blog" aria-hidden="true"></i></span>
            <span class="nav-text">Blog</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/courses" class="nav-link" title="Khoá học Music Producer" :aria-current="$route.path === '/courses' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>
            <span class="nav-text">Khóa Học</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link" title="Giới thiệu về XKProduction" :aria-current="$route.path === '/about' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-circle-info" aria-hidden="true"></i></span>
            <span class="nav-text">Giới Thiệu</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li class="nav-separator" aria-hidden="true"></li>
        <li>
          <NuxtLink to="/contact" class="nav-link nav-cta" title="Đặt lịch thu âm XKProduction" :aria-current="$route.path === '/contact' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-phone" aria-hidden="true"></i></span>
            <span class="nav-text">Đặt Lịch</span>
            <span class="nav-pulse" aria-hidden="true"></span>
          </NuxtLink>
        </li>
      </ul>

      <!-- MOBILE: Hamburger toggle -->
      <button
        class="mobile-menu-toggle"
        :class="{ open: mobileOpen }"
        @click="toggleMobile"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav-menu"
        aria-label="Mở menu điều hướng"
      >
        <span class="ham-line"></span>
        <span class="ham-line"></span>
        <span class="ham-line"></span>
      </button>
    </div>

    <!-- MOBILE DRAWER -->
    <Transition name="mobile-nav">
      <div v-if="mobileOpen" id="mobile-nav-menu" class="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Menu điều hướng">
        <div class="mobile-nav-inner">
          <!-- Primary services -->
          <div class="mobile-nav-group">
            <p class="mobile-group-label">Dịch vụ</p>
            <NuxtLink to="/thu-am" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-microphone"></i>
              <div>
                <span class="mobile-item-title">Thu âm bài hát</span>
                <span class="mobile-item-sub">Vocal production chuyên nghiệp</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/mix-master" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-sliders"></i>
              <div>
                <span class="mobile-item-title">Mixing & Mastering</span>
                <span class="mobile-item-sub">Chuẩn Spotify / Apple Music</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/hoa-am-phoi-khi" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-music"></i>
              <div>
                <span class="mobile-item-title">Hoà âm phối khí</span>
                <span class="mobile-item-sub">Sản xuất âm nhạc trọn gói</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/quay-mv-tvc" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-film"></i>
              <div>
                <span class="mobile-item-title">Quay MV & TVC</span>
                <span class="mobile-item-sub">Sản xuất video âm nhạc</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/live-band" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-guitar"></i>
              <div>
                <span class="mobile-item-title">Live Band & Sự kiện</span>
                <span class="mobile-item-sub">Âm thanh ánh sáng sân khấu</span>
              </div>
            </NuxtLink>
          </div>

          <!-- Other pages -->
          <div class="mobile-nav-group">
            <p class="mobile-group-label">Khám phá</p>
            <NuxtLink to="/products" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-compact-disc"></i>
              <div>
                <span class="mobile-item-title">Sản phẩm</span>
                <span class="mobile-item-sub">Portfolio tác phẩm tiêu biểu</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/courses" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-graduation-cap"></i>
              <div>
                <span class="mobile-item-title">Khóa học</span>
                <span class="mobile-item-sub">Đào tạo Music Producer</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/blog" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-feather-pointed"></i>
              <div>
                <span class="mobile-item-title">Blog & Kiến thức</span>
                <span class="mobile-item-sub">Tips âm nhạc chuyên sâu</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/about" class="mobile-nav-item" @click="closeMobile">
              <i class="fa-solid fa-circle-info"></i>
              <div>
                <span class="mobile-item-title">Giới thiệu</span>
                <span class="mobile-item-sub">Câu chuyện XKProduction</span>
              </div>
            </NuxtLink>
          </div>

          <!-- CTA -->
          <div class="mobile-nav-cta">
            <NuxtLink to="/contact" class="btn btn-primary btn-full-width btn-pulse" @click="closeMobile">
              <i class="fa-solid fa-phone"></i>
              Đặt lịch tư vấn miễn phí
            </NuxtLink>
            <a href="tel:0355356294" class="mobile-phone-link">
              <i class="fa-solid fa-phone-volume"></i>
              0355.356.294 — Gọi ngay
            </a>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Mobile backdrop overlay -->
    <Transition name="fade">
      <div v-if="mobileOpen" class="mobile-backdrop" @click="closeMobile" aria-hidden="true"></div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const isScrolled = ref(false)
const mobileOpen = ref(false)

const toggleMobile = () => { mobileOpen.value = !mobileOpen.value }
const closeMobile = () => { mobileOpen.value = false }

onMounted(() => {
  let ticking = false
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        isScrolled.value = window.scrollY > 20
        ticking = false
      })
      ticking = true
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

// Close on route change
watch(() => route.path, closeMobile)

// Close on Escape key
onMounted(() => {
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMobile() }
  window.addEventListener('keydown', onKey)
  onUnmounted(() => window.removeEventListener('keydown', onKey))
})

// Prevent body scroll when menu open
watch(mobileOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
</script>

<style scoped>
/* ===========================================
   NAVBAR — Premium Glassmorphism
   =========================================== */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: rgba(7, 16, 24, 0.75);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease;
  padding: 0 2rem;
}
.navbar.scrolled {
  background: rgba(7, 16, 24, 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

/* 3-column grid */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 72px;
  gap: 1rem;
}

/* NAV GROUPS */
.nav-group {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0; padding: 0;
}
.nav-left  { justify-self: end; margin-right: 2.5rem; }
.nav-right { justify-self: start; margin-left: 2.5rem; }

/* LOGO */
.logo {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-main);
  letter-spacing: -0.02em;
  white-space: nowrap;
  transition: opacity 0.3s ease, transform 0.4s var(--ease-out-expo);
}
.logo:hover { transform: scale(1.02); opacity: 0.92; }
.logo-img {
  width: 32px; height: 32px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.4s var(--ease-out-expo), border-color 0.3s ease;
}
.logo:hover .logo-img {
  transform: rotate(-4deg) scale(1.05);
  border-color: var(--primary);
}

/* NAV LINKS */
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: color 0.25s ease, background 0.25s ease, transform 0.25s var(--ease-out-expo);
  white-space: nowrap;
  position: relative;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
.nav-link:hover { color: var(--text-main); background: rgba(255,255,255,0.04); }
.nav-link.router-link-active { color: var(--text-main); }

.nav-indicator {
  position: absolute;
  bottom: 2px; left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: calc(100% - 1.5rem);
  height: 1.5px;
  background: var(--primary);
  border-radius: 2px;
  transition: transform 0.3s var(--ease-out-expo);
  transform-origin: center;
}
.nav-link.router-link-active .nav-indicator,
.nav-link:hover .nav-indicator { transform: translateX(-50%) scaleX(1); }

.nav-icon { font-size: 0.82rem; line-height: 1; flex-shrink: 0; }
.nav-text  { line-height: 1; }

/* CTA BUTTON */
.nav-separator { width: 1px; height: 16px; background: rgba(255,255,255,0.08); margin: 0 0.4rem; }
.nav-cta {
  background: rgba(26, 140, 255, 0.12);
  border: 1px solid rgba(26, 140, 255, 0.3);
  color: #7dd3fc;
  font-weight: 700;
  padding: 0.5rem 1rem;
  transition: all 0.3s var(--ease-out-expo);
  position: relative;
}
.nav-cta:hover {
  background: rgba(26, 140, 255, 0.22);
  border-color: rgba(26, 140, 255, 0.55);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(26, 140, 255, 0.25);
}
.nav-pulse {
  position: absolute;
  top: 6px; right: 6px;
  width: 5px; height: 5px;
  background: var(--primary);
  border-radius: 50%;
  animation: pulseNav 2s ease-in-out infinite;
}
@keyframes pulseNav {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.7); }
}
.nav-cta .nav-indicator { display: none; }

/* ===========================================
   MOBILE HAMBURGER TOGGLE
   =========================================== */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
  z-index: 1010;
  grid-column: 3;
  justify-self: end;
  flex-shrink: 0;
}
.mobile-menu-toggle:hover {
  background: rgba(26, 140, 255, 0.12);
  border-color: rgba(26, 140, 255, 0.3);
}

.ham-line {
  display: block;
  width: 20px; height: 1.5px;
  background: var(--text-main);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
  transform-origin: center;
}
.mobile-menu-toggle.open .ham-line:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.mobile-menu-toggle.open .ham-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.mobile-menu-toggle.open .ham-line:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ===========================================
   MOBILE DRAWER
   =========================================== */
.mobile-backdrop {
  position: fixed;
  inset: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.mobile-nav-drawer {
  position: fixed;
  top: 0; right: 0;
  width: min(360px, 92vw);
  height: 100dvh;
  background: #0d1724;
  border-left: 1px solid rgba(255,255,255,0.08);
  z-index: 999;
  overflow-y: auto;
  box-shadow: -20px 0 60px rgba(0,0,0,0.6);
}

.mobile-nav-inner {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 5rem 0 2rem;
}

.mobile-nav-group {
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.mobile-nav-group:last-of-type { border-bottom: none; }

.mobile-group-label {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  padding: 0 0.25rem;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 0.75rem;
  border-radius: 12px;
  color: var(--text-light);
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  margin-bottom: 0.15rem;
}
.mobile-nav-item:hover,
.mobile-nav-item.router-link-active {
  background: rgba(26, 140, 255, 0.08);
  color: var(--text-main);
}
.mobile-nav-item.router-link-active { background: rgba(26, 140, 255, 0.12); }
.mobile-nav-item > i {
  font-size: 1.1rem;
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  flex-shrink: 0;
  color: var(--accent);
  transition: background 0.2s ease, border-color 0.2s ease;
}
.mobile-nav-item:hover > i,
.mobile-nav-item.router-link-active > i {
  background: rgba(26, 140, 255, 0.15);
  border-color: rgba(26, 140, 255, 0.3);
  color: var(--primary);
}
.mobile-nav-item > div {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.mobile-item-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.2;
}
.mobile-item-sub {
  font-size: 0.73rem;
  color: var(--text-muted);
  line-height: 1.2;
}

.mobile-nav-cta {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: auto;
}

.mobile-phone-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 10px;
  color: #86efac;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.mobile-phone-link:hover {
  background: rgba(34, 197, 94, 0.14);
  border-color: rgba(34, 197, 94, 0.35);
}

/* Drawer transition */
.mobile-nav-enter-active { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.mobile-nav-leave-active { transition: transform 0.3s ease-in; }
.mobile-nav-enter-from  { transform: translateX(100%); }
.mobile-nav-leave-to    { transform: translateX(100%); }

.fade-enter-active { transition: opacity 0.4s ease; }
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Stagger entrance for menu items */
@keyframes slideUpStagger {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-nav-drawer .mobile-group-label,
.mobile-nav-drawer .mobile-nav-item,
.mobile-nav-drawer .mobile-nav-cta {
  opacity: 1;
}

.mobile-nav-enter-active .mobile-group-label,
.mobile-nav-enter-active .mobile-nav-item,
.mobile-nav-enter-active .mobile-nav-cta {
  opacity: 0;
  animation: slideUpStagger 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Stagger delays */
.mobile-nav-enter-active .mobile-nav-group:nth-child(1) .mobile-group-label { animation-delay: 0.1s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(1) .mobile-nav-item:nth-child(2) { animation-delay: 0.14s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(1) .mobile-nav-item:nth-child(3) { animation-delay: 0.18s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(1) .mobile-nav-item:nth-child(4) { animation-delay: 0.22s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(1) .mobile-nav-item:nth-child(5) { animation-delay: 0.26s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(1) .mobile-nav-item:nth-child(6) { animation-delay: 0.30s; }

.mobile-nav-enter-active .mobile-nav-group:nth-child(2) .mobile-group-label { animation-delay: 0.34s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(2) .mobile-nav-item:nth-child(2) { animation-delay: 0.38s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(2) .mobile-nav-item:nth-child(3) { animation-delay: 0.42s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(2) .mobile-nav-item:nth-child(4) { animation-delay: 0.46s; }
.mobile-nav-enter-active .mobile-nav-group:nth-child(2) .mobile-nav-item:nth-child(5) { animation-delay: 0.50s; }

.mobile-nav-enter-active .mobile-nav-cta { animation-delay: 0.54s; }

/* ===========================================
   RESPONSIVE — Mobile ≤ 900px
   =========================================== */
@media (max-width: 900px) {
  .nav-left, .nav-right { display: none; }
  .mobile-menu-toggle { display: flex; }
  .nav-container {
    grid-template-columns: auto 1fr auto;
  }
  .logo { justify-self: center; }
}

@media (max-width: 768px) {
  .navbar { padding: 0 1.25rem; }
  .nav-container { height: 60px; }
}
</style>
