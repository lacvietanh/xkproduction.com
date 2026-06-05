<template>
  <nav class="navbar" role="navigation" aria-label="Điều hướng chính XKProduction">
    <div class="nav-container">
      <!-- LEFT: Quảng bá -->
      <ul class="nav-group nav-left" role="list">
        <li>
          <NuxtLink to="/services" class="nav-link" title="Dịch vụ & Bảng giá Thu âm XKProduction" :aria-current="$route.path === '/services' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-microphone-lines"></i></span>
            <span class="nav-text">Dịch vụ</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="nav-link" title="Tác phẩm nổi bật của XKProduction" :aria-current="$route.path === '/products' ? 'page' : undefined">
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
      <NuxtLink to="/" class="logo" title="XKProduction - Phòng Thu Âm Chuyên Nghiệp" aria-label="XKProduction trang chủ">
        <img src="/images/logo-xkproduction.png" alt="XKProduction Logo" class="logo-img" />
        <span class="logo-text">XKProduction</span>
      </NuxtLink>

      <!-- RIGHT: Liên hệ / Info -->
      <ul class="nav-group nav-right" role="list">
        <li>
          <NuxtLink to="/blog" class="nav-link" title="Blog Kiến Thức Âm Nhạc" :aria-current="$route.path === '/blog' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-blog"></i></span>
            <span class="nav-text">Blog</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/courses" class="nav-link" title="Khoá học Music Producer & Mixing Mastering" :aria-current="$route.path === '/courses' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-graduation-cap"></i></span>
            <span class="nav-text">Khóa Học</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link" title="Giới thiệu về XKProduction" :aria-current="$route.path === '/about' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-circle-info"></i></span>
            <span class="nav-text">Giới Thiệu</span>
            <span class="nav-indicator" aria-hidden="true"></span>
          </NuxtLink>
        </li>
        <li class="nav-separator" aria-hidden="true"></li>
        <li>
          <NuxtLink to="/contact" class="nav-link nav-cta" title="Liên hệ đặt lịch thu âm XKProduction" :aria-current="$route.path === '/contact' ? 'page' : undefined">
            <span class="nav-icon"><i class="fa-solid fa-phone"></i></span>
            <span class="nav-text">Đặt Lịch Ngay</span>
            <span class="nav-pulse" aria-hidden="true"></span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- No JS: remove scroll listeners to avoid performance issues -->

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
  box-shadow: 0 0 8px rgba(43, 127, 255, 0.4);
}

/* ===========================================
   NAVBAR — Premium Glassmorphism
   =========================================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(3, 5, 8, 0.75);
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  transition: background 0.4s var(--ease-out-expo),
              box-shadow 0.4s var(--ease-out-expo),
              border-color 0.4s ease;
  padding: 0 2rem;
}

.navbar.scrolled {
  background: rgba(3, 5, 8, 0.92);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

/* --- CONTAINER: 3-column grid --- */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 72px;
}

/* --- NAV GROUPS (left / right) --- */
.nav-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-left  { justify-self: end; margin-right: 3rem; }
.nav-right { justify-self: start; margin-left: 3rem; }

/* --- LOGO (center) --- */
.logo {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-main);
  letter-spacing: -0.02em;
  white-space: nowrap;
  transition: opacity 0.3s ease, transform 0.4s var(--ease-out-expo);
}
.logo:hover {
  transform: scale(1.01);
  opacity: 0.95;
}
.logo-img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.4s var(--ease-out-expo);
}
.logo:hover .logo-img {
  transform: rotate(-3deg);
  border-color: var(--primary);
}

/* --- NAV LINKS --- */
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  transition: color 0.3s ease,
              background 0.3s ease,
              transform 0.3s var(--ease-out-expo);
  white-space: nowrap;
  position: relative;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
.nav-link:hover {
  color: var(--text-main);
}
.nav-link.router-link-active {
  color: var(--text-main);
}

/* Active underline indicator — subtle version */
.nav-indicator {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: calc(100% - 1.6rem);
  height: 1px;
  background: var(--primary);
  transition: transform 0.3s var(--ease-out-expo);
  transform-origin: center;
}
.nav-link.router-link-active .nav-indicator,
.nav-link:hover .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

.nav-icon {
  font-size: 0.85rem;
  line-height: 1;
  flex-shrink: 0;
}
.nav-text { line-height: 1; }

/* --- CTA (Đặt Lịch Ngay) — Refined Premium outline button --- */
.nav-separator {
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.08);
  margin: 0 0.5rem;
}

.nav-cta {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-weight: 700;
  color: var(--text-main);
  transition: all 0.3s var(--ease-out-expo);
  position: relative;
  padding: 0.5rem 1.1rem;
}

.nav-pulse {
  position: absolute;
  top: 50%;
  right: 6px;
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  transform: translateY(-50%);
}

.nav-cta:hover {
  background: var(--text-main);
  color: var(--bg-dark);
  border-color: var(--text-main);
  transform: translateY(-1px);
}
.nav-cta:hover .nav-pulse {
  background: var(--bg-dark);
}

/* ===========================================
   RWD: ≤ 768px — Icon only, hide text
   =========================================== */
@media (max-width: 768px) {
  .navbar { padding: 0 1rem; }
  .nav-container { height: 60px; }
  .nav-group { gap: 0.1rem; }
  .nav-left { margin-right: 0; }
  .nav-right { margin-left: 0; }
  .nav-text, .logo-text, .nav-separator { display: none; }
  .nav-link { padding: 0.5rem; }
  .nav-icon { font-size: 1rem; }
  .logo { font-size: 1.3rem; }
  .logo-img { width: 28px; height: 28px; }
  .nav-cta {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent;
  }
  .nav-cta:hover {
    background: transparent;
    color: var(--text-main);
    border-color: rgba(255,255,255,0.2);
    transform: none;
  }
  .nav-indicator { display: none; }
}
</style>
