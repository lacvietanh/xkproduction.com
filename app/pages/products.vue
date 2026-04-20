<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>Sản phẩm âm nhạc</h1>
        <p class="page-hero-sub">Những dự án tiêu biểu do XKStudio sản xuất, mix & master hoặc hòa âm phối khí</p>
      </div>
    </section>

    <section style="padding: 5rem 0;">
      <div class="max-width">
        <div class="filter-group" style="margin-bottom: 2.5rem;">
          <button
            v-for="cat in categories" :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >{{ cat }}</button>
        </div>

        <div class="products-grid">
          <div v-for="p in filteredProducts" :key="p.title" class="product-card">
            <div class="product-cover">
              <img v-if="p.thumb" :src="p.thumb" :alt="p.title" class="cover-thumb" />
              <div v-else class="cover-placeholder"><i class="fa-solid fa-music fa-3x"></i></div>
              <div class="product-overlay">
                <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" class="play-btn">
                  <i class="fa-brands fa-youtube"></i> Xem
                </a>
              </div>
            </div>
            <div class="product-info">
              <h3>{{ p.title }}</h3>
              <p class="product-artist">{{ p.artist }}</p>
              <ul class="product-credits">
                <li v-for="c in p.credits" :key="c.role">
                  <span class="credit-role">{{ c.role }}:</span>
                  <span class="credit-name">{{ c.name }}</span>
                </li>
              </ul>
              <div class="product-tags">
                <span class="tag">{{ p.category }}</span>
                <span class="tag" v-if="p.year">{{ p.year }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredProducts.length === 0" style="text-align: center; padding: 4rem; color: var(--text-muted);">
          Chưa có sản phẩm trong danh mục này.
        </div>
      </div>
    </section>

    <section style="text-align: center; padding: 4rem 2rem; background: var(--bg-surface);">
      <h2 style="font-size: 1.8rem; color: var(--text-main); margin-bottom: 1rem;">Bạn muốn sản xuất một dự án tương tự?</h2>
      <p style="color: var(--text-light); margin-bottom: 2rem; max-width: 540px; margin-left: auto; margin-right: auto;">Liên hệ để được tư vấn giải pháp sản xuất phù hợp với dự án và ngân sách của bạn.</p>
      <NuxtLink to="/contact" class="btn btn-primary">Tư vấn miễn phí</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Sản phẩm',
  description: 'Các sản phẩm âm nhạc tiêu biểu do XKStudio sản xuất, mixing, mastering và hòa âm phối khí cho ca sĩ và doanh nghiệp tại Việt Nam.',
  ogTitle: 'Sản phẩm - XKStudio'
})

useSchemaOrg([
  defineWebPage({
    name: 'Sản phẩm',
    description: 'Các sản phẩm âm nhạc tiêu biểu do XKStudio sản xuất, mixing, mastering và hòa âm phối khí cho ca sĩ và doanh nghiệp tại Việt Nam.'
  })
])

const activeCategory = ref('Tất cả')

const products = [
  {
    title: 'Love Dự Phòng',
    artist: 'Howl',
    category: 'Music Production',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=OCnKTCslJUU',
    thumb: 'https://img.youtube.com/vi/OCnKTCslJUU/hqdefault.jpg',
    credits: [
      { role: 'Music Producer', name: 'XK' },
      { role: 'Mixing & Mastering', name: 'XK' }
    ]
  },
  {
    title: 'Chẳng Muốn Nói Nhiều Lời',
    artist: 'Revan',
    category: 'Mix & Master',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=IxlFvQQP_4c',
    thumb: 'https://img.youtube.com/vi/IxlFvQQP_4c/hqdefault.jpg',
    credits: [
      { role: 'Mixing & Mastering', name: 'XK' },
      { role: 'Guitarist', name: 'XK' }
    ]
  },
  {
    title: 'Lý Do Bắt Đầu',
    artist: 'Revan',
    category: 'Music Production',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=vzfr1ddayYY',
    thumb: 'https://img.youtube.com/vi/vzfr1ddayYY/hqdefault.jpg',
    credits: [
      { role: 'Music Producer', name: 'XK' },
      { role: 'Mixing & Mastering', name: 'XK' }
    ]
  },
  {
    title: 'Kiếp Sau',
    artist: 'Phương Thanh Tuyển (Cover)',
    category: 'Thu âm',
    year: '2024',
    link: 'https://www.youtube.com/watch?v=z4GB-X1OiPg',
    thumb: 'https://img.youtube.com/vi/z4GB-X1OiPg/hqdefault.jpg',
    credits: [
      { role: 'Recording / Mixing / Master', name: 'XK' }
    ]
  },
  {
    title: 'Viết Tiếp Câu Chuyện Hoà Bình',
    artist: 'Mai Linh (Cover)',
    category: 'Video & TVC',
    year: '2024',
    link: 'https://www.youtube.com/watch?v=P8FPXHJe_go',
    thumb: 'https://img.youtube.com/vi/P8FPXHJe_go/hqdefault.jpg',
    credits: [
      { role: 'Director', name: 'XK' }
    ]
  },
  {
    title: 'Áo Cũ Tình Mới',
    artist: 'Remake Remix',
    category: 'Music Production',
    year: '2024',
    link: 'https://www.youtube.com/watch?v=hlvg9YBxRqY',
    thumb: 'https://img.youtube.com/vi/hlvg9YBxRqY/hqdefault.jpg',
    credits: [
      { role: 'Music Producer', name: 'XK' },
      { role: 'Mixing & Mastering', name: 'XK' }
    ]
  }
]

const categories = computed(() => ['Tất cả', ...new Set(products.map(p => p.category))])

const filteredProducts = computed(() => {
  if (activeCategory.value === 'Tất cả') return products
  return products.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
.page-hero {
  padding-top: 140px;
  padding-bottom: 4rem;
  background: linear-gradient(135deg, #06080f 0%, #0d1117 100%);
  text-align: center;
}
.page-hero h1 { font-size: 2.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; }
.page-hero-sub { font-size: 1.05rem; color: var(--text-light); max-width: 600px; margin: 0 auto; }

.filter-group { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.filter-btn {
  padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
  background: transparent; color: var(--text-light); font-size: 0.85rem; cursor: pointer;
  transition: all 0.2s ease;
}
.filter-btn.active, .filter-btn:hover { background: var(--primary); color: var(--bg-dark); border-color: var(--primary); }

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: rgba(20,24,45,0.5);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.product-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.15); }

.product-cover {
  position: relative;
  aspect-ratio: 1/1;
  background: linear-gradient(135deg, rgba(0,212,255,0.1), rgba(139,92,246,0.1));
  display: flex; align-items: center; justify-content: center;
}
.cover-placeholder { font-size: 4rem; color: var(--primary); display: flex; align-items: center; justify-content: center; }

.product-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s ease;
}
.product-card:hover .product-overlay { opacity: 1; }

.play-btn {
  padding: 0.6rem 1.2rem; background: var(--primary); color: var(--bg-dark);
  border-radius: 20px; font-weight: 700; font-size: 0.85rem; text-decoration: none;
}

.product-info { padding: 1rem 1.25rem 1.25rem; }
.product-info h3 { color: var(--text-main); font-size: 0.95rem; font-weight: 700; margin-bottom: 0.3rem; }
.product-artist { color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.5rem; }

.product-credits {
  list-style: none; padding: 0; margin: 0 0 0.75rem;
  display: flex; flex-direction: column; gap: 0.2rem;
}
.product-credits li { font-size: 0.75rem; line-height: 1.4; }
.credit-role { color: var(--text-muted); margin-right: 0.3rem; }
.credit-name { color: var(--primary); font-weight: 600; }

.cover-thumb { width: 100%; height: 100%; object-fit: cover; display: block; }

.product-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.tag {
  padding: 0.2rem 0.6rem; border-radius: 10px;
  background: rgba(255,255,255,0.05); color: var(--text-muted);
  font-size: 0.7rem; letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .page-hero h1 { font-size: 1.9rem; }
}
</style>
