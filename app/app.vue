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
    return titleChunk ? `${titleChunk} - XKStudio` : 'XKStudio - Phòng Thu Âm, Hoà Âm Phối Khí, Sân Khấu Sự Kiện & Âm Thanh Ánh Sáng';
  },
  ogType: 'website',
  ogSiteName: 'XKStudio',
  ogTitle: 'XKStudio - Phòng Thu Âm, Hoà Âm Phối Khí, Sân Khấu Sự Kiện & Âm Thanh Ánh Sáng',
  ogDescription: 'Dịch vụ phòng thu âm chuyên nghiệp, hoà âm phối khí, quay MV/TVC, cho thuê âm thanh ánh sáng sân khấu sự kiện tại XKStudio.',
  description: 'XKStudio cung cấp giải pháp âm thanh chuyên nghiệp: Phòng thu âm, mix & master, hoà âm phối khí bài hát, quay MV/TVC, thiết kế sân khấu sự kiện & cho thuê âm thanh ánh sáng trọn gói.',
  keywords: 'XKStudio, phòng thu âm, phòng thu âm chuyên nghiệp, thu âm bài hát, hoà âm phối khí, mix nhạc, master nhạc, quay mv, quay tvc, sân khấu sự kiện, âm thanh ánh sáng, cho thuê âm thanh, cho thuê ánh sáng, live band, sound light, phòng thu âm hcm, phòng thu âm uy tín'
});

// Global Default JSON-LD Schema
useSchemaOrg([
  defineOrganization({
    name: 'XKStudio',
    logo: '/favicon.ico',
    description: 'Phòng thu âm & media production chuyên nghiệp | Sound & Light.',
    sameAs: [
      'https://www.youtube.com/@Xkstudio29',
      'https://www.tiktok.com/@xkstudio',
      'https://www.facebook.com/ngxkiet'
    ]
  }),
  defineWebSite({
    name: 'XKStudio',
    description: 'Phòng thu âm & media production chuyên nghiệp | Sound & Light.'
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
