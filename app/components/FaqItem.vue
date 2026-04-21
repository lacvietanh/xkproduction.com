<template>
  <div class="faq-item" :class="{ open: isOpen }">
    <button class="faq-question" @click="toggle" :aria-expanded="isOpen">
      <span class="faq-q-text">{{ question }}</span>
      <span class="faq-toggle-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    </button>
    <div class="faq-answer-wrapper" :style="{ maxHeight: isOpen ? answerHeight + 'px' : '0' }">
      <div class="faq-answer" ref="answerRef">
        <p>{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string
  answer: string
}>()

const isOpen = ref(false)
const answerRef = ref<HTMLElement | null>(null)
const answerHeight = ref(0)

const toggle = () => {
  if (!isOpen.value && answerRef.value) {
    answerHeight.value = answerRef.value.scrollHeight
  }
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.faq-item {
  background: rgba(13, 17, 23, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.faq-item:hover {
  border-color: rgba(26, 140, 255, 0.2);
}

.faq-item.open {
  border-color: rgba(26, 140, 255, 0.35);
  box-shadow: 0 0 30px rgba(26, 140, 255, 0.06), 0 8px 32px rgba(0, 0, 0, 0.3);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.35rem 1.75rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--text-main);
  font-family: inherit;
  transition: background 0.25s ease;
}

.faq-question:hover {
  background: rgba(26, 140, 255, 0.04);
}

.faq-item.open .faq-question {
  background: rgba(26, 140, 255, 0.05);
}

.faq-q-text {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--text-main);
  transition: color 0.25s ease;
  flex: 1;
}

.faq-item.open .faq-q-text {
  color: #1a8cff;
}

.faq-toggle-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.open .faq-toggle-icon {
  transform: rotate(180deg);
  background: rgba(26, 140, 255, 0.12);
  border-color: rgba(26, 140, 255, 0.3);
  color: #1a8cff;
  box-shadow: 0 0 12px rgba(26, 140, 255, 0.2);
}

.faq-answer-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer {
  padding: 0 1.75rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  margin-top: 0;
}

.faq-answer p {
  color: var(--text-light);
  font-size: 0.92rem;
  line-height: 1.75;
  margin-top: 1rem;
  margin-bottom: 0;
}
</style>

