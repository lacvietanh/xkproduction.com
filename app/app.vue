<template>
  <div class="site-wrapper">
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
    <ScrollToTopButton />
    <StickyContact />
  </div>
</template>

<script setup lang="ts">
// Global styles are loaded via nuxt.config.ts css array

// Global Default SEO Configuration
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : 'XKStudio - Phòng Thu Âm Chuyên Nghiệp Bình Phước | Hoà Âm Phối Khí | Mix Master | Âm Thanh Ánh Sáng';
  },
  ogType: 'website',
  ogSiteName: 'XKStudio',
  ogTitle: 'XKStudio - Phòng Thu Âm Chuyên Nghiệp Bình Phước | Hoà Âm Phối Khí | Mix Master',
  ogDescription: 'Phòng thu âm chuyên nghiệp XKStudio tại Bình Phước: Thu âm bài hát từ 350.000₫, hoà âm phối khí, mix & master chuẩn Spotify, quay MV/TVC, cho thuê âm thanh ánh sáng sân khấu sự kiện. 2000+ dự án.',
  description: 'XKStudio — Phòng thu âm chuyên nghiệp tại Bình Phước. Thu âm bài hát giá rẻ từ 350.000₫, hoà âm phối khí online, mix master chuẩn Spotify, quay MV/TVC, sân khấu sự kiện & âm thanh ánh sáng trọn gói. Hotline: 0355.356.294',
  keywords: 'XKStudio, xkproduction.com, phòng thu âm, phòng thu âm chuyên nghiệp, phòng thu âm Bình Phước, thu âm bài hát, thu âm bài hát giá bao nhiêu, hoà âm phối khí, hoà âm phối khí online, mix master, mix master giá rẻ, mixing mastering, sản xuất âm nhạc, quay mv, quay tvc, sân khấu sự kiện, âm thanh ánh sáng, cho thuê âm thanh, cho thuê ánh sáng, live band, sound light, studio bình phước, phòng thu uy tín, bảng giá thu âm, nhạc sĩ, music producer'
});

// Global Default JSON-LD Schema
useSchemaOrg([
  defineOrganization({
    name: 'XKStudio',
    url: 'https://xkproduction.com',
    logo: 'https://xkproduction.com/images/xk-logo.png',
    description: 'Phòng thu âm & media production chuyên nghiệp | Sound & Light.',
    telephone: '+84355356294',
    email: 'xkstudio29@gmail.com',
    sameAs: [
      'https://www.youtube.com/@Xkstudio29',
      'https://www.tiktok.com/@xkstudio',
      'https://www.facebook.com/ngxkiet'
    ]
  }),
  defineWebSite({
    name: 'XKStudio',
    url: 'https://xkproduction.com',
    description: 'Phòng thu âm & media production chuyên nghiệp | Sound & Light.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://xkproduction.com/faq?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
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
