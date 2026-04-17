/**
 * Composable for IntersectionObserver-based scroll animations
 * Replaces the vanilla JS observer from main.js
 */
export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)
  const animatedTimeouts = ref<number[]>([])

  const setupAnimations = () => {
    if (!import.meta.client) return

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          if (observer.value) {
            observer.value.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    // Observe cards, pricing cards, portfolio items
    document.querySelectorAll('.card, .pricing-card, .portfolio-item').forEach(el => {
      if (observer.value) observer.value.observe(el)
    })

    // Observe data-animate elements with staggered delay
    const animatedElements = document.querySelectorAll('[data-animate]')
    animatedElements.forEach((el, index) => {
      const timeoutId = window.setTimeout(() => {
        el.classList.add('animate-fade-in')
      }, index * 100)
      animatedTimeouts.value.push(timeoutId)
    })
  }

  onMounted(() => {
    // Wait for next tick to ensure DOM is fully rendered before querying
    nextTick(() => {
      setupAnimations()
    })
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
    animatedTimeouts.value.forEach(id => window.clearTimeout(id))
    animatedTimeouts.value = []
  })
}
