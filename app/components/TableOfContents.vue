<template>
  <nav class="toc-card" aria-label="Mục lục bài viết">
    <p>Mục lục</p>
    <a
      v-for="section in sections"
      :key="section.id"
      :href="`#${section.id}`"
      :class="{ active: activeId === section.id }"
      @click="$emit('navigate', section.id)"
    >{{ section.heading }}</a>
  </nav>
</template>

<script setup lang="ts">
import type { BlogSection } from '../composables/useBlog'

defineProps<{
  sections: BlogSection[]
  activeId: string
}>()

defineEmits<{
  navigate: [id: string]
}>()
</script>

<style scoped>
.toc-card {
  position: sticky;
  top: 110px;
  padding: 1.25rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.07);
  box-shadow: 0 18px 50px rgba(0,0,0,0.24);
  backdrop-filter: blur(18px);
}
.toc-card p {
  color: var(--text-main);
  font-weight: 850;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.85rem;
}
.toc-card a {
  display: block;
  padding: 0.62rem 0.7rem;
  border-left: 2px solid rgba(255,255,255,0.08);
  color: rgba(188,202,222,0.74);
  font-size: 0.84rem;
  line-height: 1.45;
  transition: all 0.24s ease;
}
.toc-card a:hover,
.toc-card a.active {
  color: #8fd0ff;
  border-left-color: var(--primary);
  background: rgba(26,140,255,0.08);
}
@media (max-width: 1024px) {
  .toc-card { display: none; }
}
</style>
