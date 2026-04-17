<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <NuxtLink to="/" class="logo">🎵 XKStudio</NuxtLink>
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li><NuxtLink to="/" class="nav-link" @click="closeMenu">Trang chủ</NuxtLink></li>
        <li><NuxtLink to="/services" class="nav-link" @click="closeMenu">Dịch vụ</NuxtLink></li>
        <li><NuxtLink to="/products" class="nav-link" @click="closeMenu">Sản phẩm</NuxtLink></li>
        <li><NuxtLink to="/pricing" class="nav-link" @click="closeMenu">Bảng giá</NuxtLink></li>
        <li><NuxtLink to="/about" class="nav-link" @click="closeMenu">Về chúng tôi</NuxtLink></li>
        <li><NuxtLink to="/faq" class="nav-link" @click="closeMenu">FAQ</NuxtLink></li>
        <li><NuxtLink to="/contact" class="cta-header" @click="closeMenu">Liên hệ</NuxtLink></li>
      </ul>
      <button class="hamburger" @click="toggleMenu" aria-label="Mở/đóng menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { isScrolled } = useStickyHeader()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.removeEventListener('keydown', handleKeydown)
  }
})
</script>
