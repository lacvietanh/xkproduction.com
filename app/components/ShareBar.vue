<template>
  <div class="share-bar">
    <p>Chia sẻ</p>
    <button type="button" @click="$emit('copy-link')">
      <i class="fa-regular fa-copy"></i>
      {{ copied ? 'Đã copy' : 'Copy link' }}
    </button>
    <a :href="facebookUrl" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-facebook-f"></i>
      Facebook
    </a>
    <a :href="zaloUrl" target="_blank" rel="noopener noreferrer">
      <i class="fa-solid fa-comment-dots"></i>
      Zalo
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentUrl: string
  copied: boolean
}>()

defineEmits<{
  'copy-link': []
}>()

const facebookUrl = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(props.currentUrl)}`)
const zaloUrl = computed(() => `https://zalo.me/share?url=${encodeURIComponent(props.currentUrl)}`)
</script>

<style scoped>
.share-bar {
  position: sticky;
  top: 110px;
  padding: 1.2rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.07);
  backdrop-filter: blur(18px);
}
.share-bar p {
  font-size: 0.78rem;
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 800;
  margin-bottom: 0.8rem;
}
.share-bar button,
.share-bar a {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.48rem;
  margin-bottom: 0.55rem;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03);
  color: rgba(216,228,243,0.86);
  padding: 0.66rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}
.share-bar button:hover,
.share-bar a:hover {
  background: rgba(26,140,255,0.14);
  border-color: rgba(26,140,255,0.42);
  color: #98d4ff;
}
@media (max-width: 1024px) {
  .share-bar { display: none; }
}
</style>
