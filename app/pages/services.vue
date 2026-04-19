<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>Dịch vụ phòng thu & sản xuất toàn diện</h1>
        <p class="page-hero-sub">Khám phá các gói dịch vụ đa dạng phù hợp với mọi nhu cầu từ demo đến phát hành chuyên nghiệp</p>
      </div>
    </section>

    <section style="padding: 5rem 0;">
      <div class="max-width">
        <div class="packages-header">
          <div class="search-bar">
            <input type="text" v-model="search" placeholder="Tìm kiếm dịch vụ..." />
          </div>
          <div class="filter-group">
            <button
              v-for="cat in categories" :key="cat"
              class="filter-btn"
              :class="{ active: activeCategory === cat }"
              @click="activeCategory = cat"
            >{{ cat }}</button>
          </div>
        </div>

        <div class="packages-grid">
          <NuxtLink
            v-for="pkg in filteredPackages" :key="pkg.title"
            to="/pricing"
            class="package-card"
          >
            <div class="package-card-header">
              <div class="package-icon"><i :class="pkg.faIcon"></i></div>
              <div class="package-title-area">
                <h3>{{ pkg.title }}</h3>
                <span class="package-category">{{ pkg.category }}</span>
              </div>
              <div class="package-badge" v-if="pkg.isPopular"><i class="fa-solid fa-star"></i></div>
            </div>
            <p class="package-desc">{{ pkg.desc }}</p>
            <div class="package-footer">
              <div class="package-price-bar" :class="'bar-' + pkg.color"></div>
              <span class="package-price" :class="'text-' + pkg.color">{{ pkg.price }}</span>
              <span class="package-arrow"><i class="fa-solid fa-arrow-right"></i></span>
            </div>
          </NuxtLink>
        </div>

        <div v-if="filteredPackages.length === 0" style="text-align: center; padding: 4rem; color: var(--text-muted);">
          Không tìm thấy dịch vụ phù hợp. Hãy thử từ khóa khác.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Dịch vụ',
  description: 'Dịch vụ phòng thu âm, mixing, mastering, phối khí, sản xuất MV và TVC chuyên nghiệp tại XKStudio Hà Nội',
  ogTitle: 'Dịch vụ - XKStudio'
})

useSchemaOrg([
  defineWebPage({
    name: 'Dịch vụ',
    description: 'Dịch vụ phòng thu âm, mixing, mastering, phối khí, sản xuất MV và TVC chuyên nghiệp tại XKStudio Hà Nội'
  })
])

const search = ref('')
const activeCategory = ref('Tất cả')

const packages = [
  { faIcon: 'fa-solid fa-star', title: 'Gói Cao cấp (Ultimated)', category: 'THU ÂM', desc: 'Dành cho nghệ sĩ thực thụ và dự án đòi hỏi sự chỉn chu tuyệt đối về kỹ thuật lẫn tư duy nghệ thuật.', price: 'TỪ 1.800.000₫', isPopular: true, color: 'green' },
  { faIcon: 'fa-solid fa-trophy', title: 'Gói Chuyên Sâu (Pro)', category: 'THU ÂM', desc: 'Phù hợp với ca sĩ chuyên nghiệp, phát hành thương mại, MV, Spotify, Apple Music...', price: 'TỪ 1.000.000₫', isPopular: true, color: 'green' },
  { faIcon: 'fa-solid fa-music', title: 'Gói Nâng Cao (Advanced)', category: 'THU ÂM', desc: 'Phù hợp với ca sĩ bán chuyên, dự án cá nhân, phát hành trên YouTube hoặc các nền tảng số.', price: 'TỪ 550.000₫', isPopular: false, color: 'blue' },
  { faIcon: 'fa-solid fa-microphone', title: 'Gói Cơ Bản (Basic)', category: 'THU ÂM', desc: 'Phù hợp với người mới bắt đầu, thu demo, cover, học viên thanh nhạc.', price: 'TỪ 350.000₫', isPopular: false, color: 'blue' },
  { faIcon: 'fa-solid fa-keyboard', title: 'Hoà âm Chuyên nghiệp', category: 'HÒA ÂM', desc: 'Dự án chuyên nghiệp, MV ca nhạc, nhạc TVC doanh nghiệp hoặc phối khí phức tạp.', price: 'TỪ 3.500.000₫', isPopular: false, color: 'orange' },
  { faIcon: 'fa-solid fa-keyboard', title: 'Hoà âm Cơ bản', category: 'HÒA ÂM', desc: 'Demo, bài hát acoustic đơn giản, nhạc trẻ, pop-ballad cơ bản.', price: 'TỪ 1.500.000₫', isPopular: false, color: 'green' },
  { faIcon: 'fa-solid fa-sliders', title: 'Mix & Mastering Chuyên nghiệp', category: 'MIX & MASTER', desc: 'Xử lý multi-track, EQ, Compressor, Reverb, Delay, chuẩn phát hành Spotify, Apple Music...', price: 'TỪ 500.000₫', isPopular: false, color: 'blue' },
  { faIcon: 'fa-solid fa-film', title: 'Quay MV chuyên nghiệp', category: 'VIDEO', desc: 'Quay MV 5 góc máy, bao gồm Studio và Ngoại cảnh, ekip đầy đủ.', price: 'TỪ 1.500.000₫', isPopular: false, color: 'green' }
]

const categories = computed(() => ['Tất cả', ...new Set(packages.map(p => p.category))])

const filteredPackages = computed(() => {
  return packages.filter(p => {
    const matchCat = activeCategory.value === 'Tất cả' || p.category === activeCategory.value
    const matchSearch = !search.value || p.title.toLowerCase().includes(search.value.toLowerCase()) || p.desc.toLowerCase().includes(search.value.toLowerCase())
    return matchCat && matchSearch
  })
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
.page-hero-sub { font-size: 1.05rem; color: var(--text-light); max-width: 640px; margin: 0 auto; }

.packages-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }

.search-bar input {
  width: 300px; padding: 0.75rem 1rem; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.08); background: rgba(20,24,45,0.8);
  color: var(--text-main); font-size: 0.9rem;
}
.search-bar input:focus { outline: none; border-color: rgba(255,255,255,0.2); }

.filter-group { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.filter-btn {
  padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
  background: transparent; color: var(--text-light); font-size: 0.8rem; cursor: pointer;
  transition: all 0.2s ease;
}
.filter-btn.active, .filter-btn:hover { background: var(--primary); color: var(--bg-dark); border-color: var(--primary); }

.packages-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }

.package-card {
  display: flex; flex-direction: column; background: rgba(20,24,45,0.5);
  border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 1.5rem;
  text-decoration: none; transition: all 0.3s ease;
}
.package-card:hover { transform: translateY(-5px); background: rgba(26,31,58,0.8); border-color: rgba(255,255,255,0.15); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

.package-card-header { display: flex; align-items: flex-start; margin-bottom: 1rem; gap: 1rem; }
.package-icon { width: 42px; height: 42px; background: rgba(255,255,255,0.03); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
.package-title-area { flex-grow: 1; }
.package-title-area h3 { color: var(--text-main); font-size: 1rem; font-weight: 700; margin-bottom: 0.2rem; line-height: 1.3; }
.package-category { color: var(--text-muted); font-size: 0.7rem; letter-spacing: 1px; text-transform: uppercase; }
.package-badge { background: rgba(255,165,0,0.15); color: #ffaa00; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0; }

.package-desc { color: var(--text-light); font-size: 0.85rem; line-height: 1.6; flex-grow: 1; margin-bottom: 1.5rem; }

.package-footer { display: flex; align-items: center; margin-top: auto; }
.package-price-bar { height: 4px; width: 40px; border-radius: 2px; margin-right: 0.75rem; }
.bar-green { background: linear-gradient(90deg, #10b981, transparent); }
.bar-blue { background: linear-gradient(90deg, #3b82f6, transparent); }
.bar-orange { background: linear-gradient(90deg, #f59e0b, transparent); }
.package-price { font-weight: 700; font-size: 0.9rem; flex-grow: 1; }
.text-green { color: #10b981; }
.text-blue { color: #3b82f6; }
.text-orange { color: #f59e0b; }
.package-arrow { color: var(--text-muted); font-size: 1.2rem; transition: all 0.3s ease; }
.package-card:hover .package-arrow { color: var(--text-main); transform: translateX(5px); }

@media (max-width: 768px) {
  .page-hero h1 { font-size: 1.9rem; }
  .packages-header { flex-direction: column; align-items: flex-start; }
  .search-bar input { width: 100%; }
}
</style>
