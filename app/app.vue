<template>
  <div class="site-wrapper">
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
    <ScrollToTopButton />
  </div>
</template>

<script setup lang="ts">
// Global styles are loaded via nuxt.config.ts css array

// Global Default SEO Configuration
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - XKStudio` : 'XKStudio - Phòng thu âm chuyên nghiệp';
  },
  ogType: 'website',
  ogTitle: 'XKStudio - Phòng thu âm chuyên nghiệp',
  ogDescription: 'Thu âm, mixing, mastering, phối khí & sản xuất MV/TVC chuyên nghiệp.',
  description: 'Thu âm, mixing, mastering, phối khí & sản xuất MV/TVC chuyên nghiệp.',
  keywords: 'studio âm nhạc, thu âm, mixing, mastering, phối khí, sáng tác.'
});

// Global Default JSON-LD Schema
useSchemaOrg([
  defineOrganization({
    name: 'XKStudio',
    logo: '/favicon.ico',
    description: 'Phòng thu âm & Sản xuất âm nhạc chuyên nghiệp.',
    sameAs: [
      // Add social links here in the future
    ]
  }),
  defineWebSite({
    name: 'XKStudio',
    description: 'Phòng thu âm & Sản xuất âm nhạc chuyên nghiệp.'
  })
]);
</script>

<style>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
}
</style>
