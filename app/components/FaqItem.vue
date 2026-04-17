<template>
  <div class="faq-item" :class="{ open: isOpen }">
    <button class="faq-question" @click="toggle">
      <span>{{ question }}</span>
      <span class="toggle">+</span>
    </button>
    <div class="faq-answer" :hidden="!isOpen">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string
  answer: string
}>()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
