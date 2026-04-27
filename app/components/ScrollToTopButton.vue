<template>
  <button
    class="scroll-to-top"
    :class="{ show: isVisible }"
    aria-label="Scroll to top"
    @click="scrollToTop"
  >
    <i class="fa-solid fa-chevron-up"></i>
  </button>
</template>

<script setup lang="ts">
const isVisible = ref(false)

const handleScroll = () => {
  if (!import.meta.client) return
  isVisible.value = window.pageYOffset > 300
}

const scrollToTop = () => {
  if (!import.meta.client) return
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 8.5rem; /* Nâng lên để không đè cụm nút liên hệ */
  right: 1.5rem; /* Thẳng hàng với cụm nút liên hệ */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--bg-dark);
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}

.scroll-to-top.show {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
}

@media (max-width: 480px) {
  .scroll-to-top {
    width: 45px;
    height: 45px;
    bottom: 8.5rem;
    right: 1rem;
  }
}
</style>
