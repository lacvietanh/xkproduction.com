/**
 * Composable for sticky header behavior on scroll
 * Replaces the vanilla JS scroll listener from main.js
 */
export function useStickyHeader(headerSelector: string = 'header') {
  const isScrolled = ref(false)

  const handleScroll = () => {
    if (!import.meta.client) return
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    isScrolled.value = scrollTop > 100
  }

  onMounted(() => {
    if (import.meta.client) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      // Check initial state
      handleScroll()
    }
  })

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return { isScrolled }
}
