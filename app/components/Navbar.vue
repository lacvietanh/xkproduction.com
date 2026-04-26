<template>
  <!-- Scroll Progress Bar -->
  <div class="scroll-progress" :style="{ width: scrollProgress + '%' }" aria-hidden="true"></div>

  <nav class="navbar" :class="{ scrolled: isScrolled }" role="navigation" aria-label="Điều hướng chính XKStudio">
    <div class="nav-container">
      <!-- LEFT: Quảng bá -->
      <ul class="nav-group nav-left" role="list">
        <li>
          <NuxtLink to="/services" class="nav-link" title="Dịch vụ & Bảng giá Thu âm XKStudio" :aria-current="$route.path === '/services' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-microphone-lines"></i></span>
            <span class="nav-text">Dịch vụ</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="nav-link" title="Tác phẩm nổi bật của XKStudio" :aria-current="$route.path === '/products' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-compact-disc"></i></span>
            <span class="nav-text">Sản phẩm</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/live-band" class="nav-link" title="Cho thuê Âm thanh Ánh sáng & Sân khấu" :aria-current="$route.path === '/live-band' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-guitar"></i></span>
            <span class="nav-text">Live Band</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
      </ul>

      <!-- CENTER: Logo -->
      <NuxtLink to="/" class="logo" title="XKStudio - Phòng Thu Âm Chuyên Nghiệp" aria-label="XKStudio trang chủ">
        <img src="/images/xk-logo.png" alt="XKStudio Logo" class="logo-img" />
        <span class="logo-text">XKStudio</span>
      </NuxtLink>

      <!-- RIGHT: Liên hệ / Info -->
      <ul class="nav-group nav-right" role="list">
        <li>
          <NuxtLink to="/courses" class="nav-link" title="Khoá học Music Producer & Mixing Mastering" :aria-current="$route.path === '/courses' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-graduation-cap"></i></span>
            <span class="nav-text">Khóa Học</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link" title="Giới thiệu về XKStudio" :aria-current="$route.path === '/about' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-circle-info"></i></span>
            <span class="nav-text">Giới Thiệu</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link nav-cta" title="Liên hệ đặt lịch thu âm XKStudio" :aria-current="$route.path === '/contact' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-paper-plane"></i></span>
            <span class="nav-text">Liên hệ</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { isScrolled } = useStickyHeader()

// Scroll progress
const scrollProgress = ref(0)
onMounted(() => {
  const update = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    scrollProgress.value = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)
  }
  window.addEventListener('scroll', update, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', update))
})
</script>

<style scoped>
/* ===========================================
   SCROLL PROGRESS BAR
   =========================================== */
.scroll-progress {
  position: fixed;
  top: 0; left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  z-index: 1001;
  transition: width 0.1s linear;
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 8px rgba(26,140,255,0.6);
}

/* ===========================================
   NAVBAR — Center Logo, Unified RWD
   =========================================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(6, 8, 15, 0.88);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  padding: 0 1.5rem;
}

.navbar.scrolled {
  background: rgba(6, 8, 15, 0.97);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
  border-bottom-color: rgba(26, 140, 255, 0.08);
}

/* --- CONTAINER: 3-column grid --- */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 62px;
}

/* --- NAV GROUPS (left / right) --- */
.nav-group {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-left  { justify-self: start; }
.nav-right { justify-self: end; }

/* --- LOGO (center) --- */
.logo {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.35rem;
  background: linear-gradient(135deg, #fff 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
  white-space: nowrap;
  transition: filter 0.3s ease, transform 0.3s ease;
}
.logo:hover {
  filter: brightness(1.2);
  transform: scale(1.03);
}
.logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 50%;
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px rgba(26,140,255,0.5));
  transition: filter 0.3s ease, transform 0.3s ease;
}
.logo:hover .logo-img {
  filter: drop-shadow(0 0 14px rgba(26,140,255,0.9));
  transform: scale(1.07) rotate(-4deg);
}

/* --- NAV LINKS --- */
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 500;
  padding: 0.45rem 0.72rem;
  border-radius: 8px;
  transition: color 0.25s ease, background 0.25s ease;
  white-space: nowrap;
  position: relative;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
  background: rgba(26, 140, 255, 0.07);
}

/* Active underline indicator */
.nav-indicator {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: calc(100% - 1rem);
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 2px;
  transition: transform 0.28s var(--ease-out-expo);
  transform-origin: center;
}
.nav-link.router-link-active .nav-indicator,
.nav-link:hover .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

.nav-icon {
  font-size: 0.95rem;
  line-height: 1;
  flex-shrink: 0;
}
.nav-text { line-height: 1; }

/* --- CTA (Liên hệ) highlight --- */
.nav-cta {
  background: rgba(26, 140, 255, 0.1);
  border: 1px solid rgba(26, 140, 255, 0.22);
  font-weight: 700;
  color: var(--primary);
  transition: all 0.28s ease;
}
.nav-cta:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 18px rgba(26,140,255,0.4);
  transform: translateY(-1px);
}

/* ===========================================
   RWD: ≤ 600px — Icon only, hide text
   =========================================== */
@media (max-width: 600px) {
  .navbar { padding: 0 0.5rem; }
  .nav-container { height: 52px; }
  .nav-group { gap: 0; }
  .nav-text, .logo-text { display: none; }
  .nav-link { padding: 0.45rem 0.55rem; font-size: 1.1rem; }
  .nav-icon { font-size: 1.1rem; }
  .logo { font-size: 1.5rem; gap: 0; }
  .logo-img { width: 32px; height: 32px; }
  .nav-cta { border: none; background: none; }
  .nav-cta:hover {
    background: rgba(26, 140, 255, 0.08);
    color: var(--primary);
    border: none;
    box-shadow: none;
    transform: none;
  }
  .nav-indicator { display: none; }
}
</style>
