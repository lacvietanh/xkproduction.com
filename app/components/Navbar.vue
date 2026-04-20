<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <!-- LEFT: Quảng bá -->
      <ul class="nav-group nav-left">
        <li>
          <NuxtLink to="/services" class="nav-link" title="Dịch vụ">
            <span class="nav-icon"><i class="fa-solid fa-microphone-lines"></i></span>
            <span class="nav-text">Dịch vụ</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="nav-link" title="Sản phẩm">
            <span class="nav-icon"><i class="fa-solid fa-compact-disc"></i></span>
            <span class="nav-text">Sản phẩm</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/live-band" class="nav-link" title="Live Band">
            <span class="nav-icon"><i class="fa-solid fa-guitar"></i></span>
            <span class="nav-text">Live Band</span>
          </NuxtLink>
        </li>
      </ul>

      <!-- CENTER: Logo -->
      <NuxtLink to="/" class="logo" title="Trang chủ">
        <span class="logo-icon"><i class="fa-solid fa-music"></i></span>
        <span class="logo-text">XKStudio</span>
      </NuxtLink>

      <!-- RIGHT: Liên hệ / Info -->
      <ul class="nav-group nav-right">
        <li>
          <NuxtLink to="/courses" class="nav-link" title="Khóa Học">
            <span class="nav-icon"><i class="fa-solid fa-graduation-cap"></i></span>
            <span class="nav-text">Khóa Học</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link" title="Về chúng tôi">
            <span class="nav-icon"><i class="fa-solid fa-users"></i></span>
            <span class="nav-text">Về chúng tôi</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link nav-cta" title="Liên hệ">
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
</script>

<style scoped>
/* ===========================================
   NAVBAR — Center Logo, Unified RWD
   =========================================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(6, 8, 15, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-color);
  transition: background 0.3s ease, box-shadow 0.3s ease;
  padding: 0 1.5rem;
}

.navbar.scrolled {
  background: rgba(6, 8, 15, 0.98);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

/* --- CONTAINER: 3-column grid --- */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 60px;
}

/* --- NAV GROUPS (left / right) --- */
.nav-group {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-left {
  justify-self: start;
}

.nav-right {
  justify-self: end;
}

/* --- LOGO (center) --- */
.logo {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.35rem;
  color: var(--primary);
  letter-spacing: 0.5px;
  white-space: nowrap;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 0.85;
}

.logo-icon {
  font-size: 1.3rem;
}

/* --- NAV LINKS --- */
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: color 0.25s ease, background 0.25s ease;
  white-space: nowrap;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
  background: rgba(26, 140, 255, 0.06);
}

.nav-icon {
  font-size: 1rem;
  line-height: 1;
  flex-shrink: 0;
}

.nav-text {
  line-height: 1;
}

/* --- CTA (Liên hệ) highlight --- */
.nav-cta {
  background: rgba(26, 140, 255, 0.1);
  border: 1px solid rgba(26, 140, 255, 0.2);
  font-weight: 600;
  color: var(--primary);
}

.nav-cta:hover {
  background: var(--primary);
  color: var(--bg-dark);
  border-color: var(--primary);
}

/* ===========================================
   RWD: ≤ 600px — Icon only, hide text
   =========================================== */
@media (max-width: 600px) {
  .navbar {
    padding: 0 0.5rem;
  }

  .nav-container {
    height: 52px;
  }

  .nav-group {
    gap: 0;
  }

  .nav-text,
  .logo-text {
    display: none;
  }

  .nav-link {
    padding: 0.45rem 0.55rem;
    font-size: 1.15rem;
  }

  .nav-icon {
    font-size: 1.15rem;
  }

  .logo {
    font-size: 1.5rem;
    gap: 0;
  }

  .logo-icon {
    font-size: 1.4rem;
  }

  .nav-cta {
    border: none;
    background: none;
  }

  .nav-cta:hover {
    background: rgba(26, 140, 255, 0.08);
    color: var(--primary);
    border: none;
  }
}
</style>
