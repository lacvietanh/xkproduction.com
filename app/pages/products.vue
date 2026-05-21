<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>Sản phẩm âm nhạc</h1>
        <p class="page-hero-sub">Những dự án tiêu biểu do XKProduction sản xuất, mix & master, hòa âm phối khí và audio demo nội bộ</p>
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
          <div v-for="item in filteredProducts" :key="item.id" class="product-card" :class="{ 'product-card-audio': item.kind === 'audio' }">
            <template v-if="item.kind === 'embed'">
              <div class="product-cover">
                <img v-if="item.thumb" :src="item.thumb" :alt="item.title" class="cover-thumb" />
                <div v-else class="cover-placeholder"><i class="fa-solid fa-music fa-3x"></i></div>
                <div class="product-overlay">
                  <a v-if="item.link" :href="item.link" target="_blank" rel="noopener" class="play-btn">
                    <i :class="item.link.includes('tiktok') ? 'fa-brands fa-tiktok' : 'fa-brands fa-youtube'"></i> Xem
                  </a>
                </div>
              </div>
              <div class="product-info">
                <h3>{{ item.title }}</h3>
                <p class="product-artist">{{ item.artist }}</p>
                <ul class="product-credits">
                  <li v-for="c in item.credits" :key="`${item.id}-${c.role}`">
                    <span class="credit-role">{{ c.role }}:</span>
                    <span class="credit-name">{{ c.name }}</span>
                  </li>
                </ul>
                <div class="product-tags">
                  <span class="tag">{{ item.category }}</span>
                  <span class="tag" v-if="item.year">{{ item.year }}</span>
                </div>
              </div>
            </template>

            <template v-else>
              <div class="audio-card-top">
                <div>
                  <span class="audio-badge">Audio demo</span>
                  <h3>{{ item.title }}</h3>
                  <p class="product-artist">{{ item.fileName }}</p>
                </div>
                <button
                  type="button"
                  class="play-btn audio-toggle"
                  :disabled="!audioStates[item.id]?.ready && !audioStates[item.id]?.playing"
                  @click="toggleAudio(item.id)"
                >
                  <i :class="audioStates[item.id]?.playing ? 'fa-solid fa-pause' : 'fa-solid fa-play'"></i>
                  {{ audioStates[item.id]?.playing ? 'Pause' : 'Play' }}
                </button>
              </div>

              <div class="audio-waveform-shell">
                <div :ref="setWaveformRef(item.id)" class="audio-waveform" :data-audio-id="item.id"></div>
                <div v-if="audioStates[item.id]?.loading" class="audio-state">Đang tải waveform...</div>
                <div v-else-if="audioStates[item.id]?.error" class="audio-state audio-state-error">{{ audioStates[item.id]?.error }}</div>
                <div v-else class="audio-state">Click trực tiếp lên waveform để tua nhanh.</div>
              </div>

              <div class="product-tags">
                <span class="tag">{{ item.category }}</span>
                <span class="tag">{{ item.fileName }}.mp3</span>
              </div>
            </template>
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
type ProductCredit = {
  role: string
  name: string
}

type EmbedProduct = {
  kind: 'embed'
  id: string
  title: string
  artist: string
  category: string
  year?: string
  link?: string
  thumb?: string
  credits: ProductCredit[]
}

type AudioProduct = {
  kind: 'audio'
  id: string
  title: string
  artist: string
  category: string
  fileName: string
  audioUrl: string
  credits: ProductCredit[]
}

type ProductItem = EmbedProduct | AudioProduct

type AudioState = {
  ready: boolean
  playing: boolean
  loading: boolean
  error: string | null
}

const audioDemoSources: Record<string, string> = {
  '../../public/product-audio-demo/pop-rnb-1-Gm.102.mp3': '/product-audio-demo/pop-rnb-1-Gm.102.mp3'
}

useSeoMeta({
  title: 'Sản phẩm Âm nhạc tiêu biểu - XKProduction',
  description: 'Các dự án âm nhạc tiêu biểu do XKProduction thực hiện: Hoà âm phối khí, mix & master cho nghệ sĩ Revan, Howl, Phương Thanh Tuyền... Nâng tầm sản phẩm âm nhạc của bạn.',
  ogTitle: 'Sản phẩm Âm nhạc tiêu biểu - XKProduction',
  ogDescription: 'Nghe các tác phẩm thực tế do XKProduction sản xuất: Hoà âm phối khí, mixing & mastering, thu âm chuyên nghiệp cho 2000+ dự án.',
  ogImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Sản phẩm âm nhạc XKProduction - Hoà âm phối khí & Mix Master',
  ogUrl: 'https://xkproduction.com/products',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  keywords: 'XKProduction, sản phẩm âm nhạc, dự án âm nhạc, hoà âm phối khí, thu âm chuyên nghiệp, mixing, mastering'
})

useSchemaOrg([
  defineWebPage({
    name: 'Sản phẩm tiêu biểu',
    description: 'Các sản phẩm âm nhạc tiêu biểu do XKProduction thực hiện: Thu âm, mixing, mastering và hòa âm phối khí tại Việt Nam.'
  }),
  {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Trang chủ', 'item': 'https://xkproduction.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sản phẩm Âm nhạc Tiêu biểu', 'item': 'https://xkproduction.com/products' }
    ]
  },
  // MusicRecording schema cho từng sản phẩm âm nhạc
  {
    '@type': 'MusicRecording',
    'name': 'Chẳng Muốn Nói Nhiều Lời',
    'byArtist': { '@type': 'MusicGroup', 'name': 'Revan' },
    'producer': { '@type': 'Person', 'name': 'Nguyễn Xuân Kiệt', 'url': 'https://xkproduction.com' },
    'url': 'https://www.youtube.com/watch?v=IxlFvQQP_4c',
    'inAlbum': { '@type': 'MusicAlbum', 'name': 'Chẳng Muốn Nói Nhiều Lời - Single', 'datePublished': '2025' }
  },
  {
    '@type': 'MusicRecording',
    'name': 'Love Dự Phòng',
    'byArtist': { '@type': 'MusicGroup', 'name': 'Howl' },
    'producer': { '@type': 'Person', 'name': 'Nguyễn Xuân Kiệt', 'url': 'https://xkproduction.com' },
    'url': 'https://www.youtube.com/watch?v=OCnKTCslJUU',
    'inAlbum': { '@type': 'MusicAlbum', 'name': 'Love Dự Phòng - Single', 'datePublished': '2025' }
  },
  {
    '@type': 'MusicRecording',
    'name': 'Lý Do Bắt Đầu',
    'byArtist': { '@type': 'MusicGroup', 'name': 'Revan' },
    'producer': { '@type': 'Person', 'name': 'Nguyễn Xuân Kiệt', 'url': 'https://xkproduction.com' },
    'url': 'https://www.youtube.com/watch?v=vzfr1ddayYY',
    'inAlbum': { '@type': 'MusicAlbum', 'name': 'Lý Do Bắt Đầu - Single', 'datePublished': '2025' }
  }
])

const activeCategory = ref('Tất cả')

const staticProducts: EmbedProduct[] = [
  {
    kind: 'embed',
    id: 'love-du-phong',
    title: 'Love Dự Phòng',
    artist: 'Howl',
    category: 'Hoà âm phối khí',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=OCnKTCslJUU',
    thumb: 'https://img.youtube.com/vi/OCnKTCslJUU/hqdefault.jpg',
    credits: [
      { role: 'Music Producer', name: 'XK' },
      { role: 'Mixing & Mastering', name: 'XK' }
    ]
  },
  {
    kind: 'embed',
    id: 'chang-muon-noi-nhieu-loi',
    title: 'Chẳng Muốn Nói Nhiều Lời',
    artist: 'Revan',
    category: 'Mix & Master',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=IxlFvQQP_4c',
    thumb: 'https://img.youtube.com/vi/IxlFvQQP_4c/hqdefault.jpg',
    credits: [
      { role: 'Mixing & Mastering', name: 'Nguyễn Xuân Kiệt' },
      { role: 'Guitarist', name: 'Nguyễn Xuân Kiệt' }
    ]
  },
  {
    kind: 'embed',
    id: 'ly-do-bat-dau',
    title: 'Lý Do Bắt Đầu',
    artist: 'Revan',
    category: 'Hoà âm phối khí',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=vzfr1ddayYY',
    thumb: 'https://img.youtube.com/vi/vzfr1ddayYY/hqdefault.jpg',
    credits: [
      { role: 'Music Producer', name: 'XK' },
      { role: 'Mixing & Mastering', name: 'XK' }
    ]
  },
  {
    kind: 'embed',
    id: 'kiep-sau',
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
    kind: 'embed',
    id: 'viet-tiep-cau-chuyen-hoa-binh',
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
    kind: 'embed',
    id: 'ao-cu-tinh-moi',
    title: 'Áo Cũ Tình Mới',
    artist: 'Remake Remix',
    category: 'Hoà âm phối khí',
    year: '2024',
    link: 'https://www.youtube.com/watch?v=hlvg9YBxRqY',
    thumb: 'https://img.youtube.com/vi/hlvg9YBxRqY/hqdefault.jpg',
    credits: [
      { role: 'Music Producer', name: 'XK' },
      { role: 'Mixing & Mastering', name: 'XK' }
    ]
  },
  {
    kind: 'embed',
    id: 'tet-xa-cover',
    title: 'Tết Xa (Cover)',
    artist: 'Khánh Linh',
    category: 'Thu âm',
    year: '2024',
    link: 'https://www.tiktok.com/@xkstudio/video/7589982843418266901?lang=vi-VN',
    thumb: '/images/quocchi-3.jpg',
    credits: [
      { role: 'Recording / Mixing', name: 'Nguyễn Xuân Kiệt' }
    ]
  }
]

const prettifyAudioName = (value: string) => value
  .replace(/[-_.]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .replace(/\b\w/g, char => char.toUpperCase())

const audioProducts = computed<AudioProduct[]>(() => Object.entries(audioDemoSources)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([sourcePath, audioUrl], index) => {
    const fileName = sourcePath.split('/').pop()?.replace(/\.mp3$/i, '') ?? `audio-demo-${index + 1}`
    const id = `audio-demo-${index + 1}-${fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

    return {
      kind: 'audio',
      id,
      title: prettifyAudioName(fileName),
      artist: 'Audio demo',
      category: 'Audio demo',
      fileName,
      audioUrl,
      credits: [
        { role: 'File', name: `${fileName}.mp3` }
      ]
    }
  }))

const products = computed<ProductItem[]>(() => [...staticProducts, ...audioProducts.value])

const categories = computed(() => ['Tất cả', ...new Set(products.value.map((product: ProductItem) => product.category))])

const filteredProducts = computed(() => {
  if (activeCategory.value === 'Tất cả') return products.value
  return products.value.filter((product: ProductItem) => product.category === activeCategory.value)
})

const audioWaveformContainers = reactive<Record<string, HTMLDivElement | null>>({})
const audioStates = reactive<Record<string, AudioState>>({})
const audioWaveSurfers = new Map<string, any>()

const ensureAudioState = (id: string) => {
  if (!audioStates[id]) {
    audioStates[id] = {
      ready: false,
      playing: false,
      loading: true,
      error: null
    }
  }

  return audioStates[id]
}

const setWaveformRef = (id: string) => (element: any) => {
  audioWaveformContainers[id] = element instanceof Element ? element : element?.$el ?? null
}

const toggleAudio = (id: string) => {
  const waveSurfer = audioWaveSurfers.get(id)

  if (!waveSurfer) return

  if (waveSurfer.isPlaying()) {
    waveSurfer.pause()
    return
  }

  waveSurfer.play()
}

onMounted(async () => {
  if (audioProducts.value.length === 0) return

  const { default: WaveSurfer } = await import('wavesurfer.js')

  await nextTick()

  audioProducts.value.forEach((item: AudioProduct) => {
    const container = audioWaveformContainers[item.id]

    if (!container) return

    const state = ensureAudioState(item.id)

    const waveSurfer = WaveSurfer.create({
      container,
      url: item.audioUrl,
      height: 72,
      waveColor: 'rgba(92, 99, 112, 0.55)',
      progressColor: '#1a8cff',
      cursorColor: '#00d4aa',
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      normalize: true,
      interact: true,
      hideScrollbar: true
    })

    waveSurfer.on('ready', () => {
      state.ready = true
      state.loading = false
    })

    waveSurfer.on('play', () => {
      state.playing = true
    })

    waveSurfer.on('pause', () => {
      state.playing = false
    })

    waveSurfer.on('finish', () => {
      state.playing = false
    })

    waveSurfer.on('error', (error: unknown) => {
      state.error = error instanceof Error ? error.message : String(error)
      state.loading = false
    })

    audioWaveSurfers.set(item.id, waveSurfer)
  })
})

onBeforeUnmount(() => {
  audioWaveSurfers.forEach(waveSurfer => waveSurfer.destroy())
  audioWaveSurfers.clear()
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
.product-card-audio {
  padding: 1rem 1rem 1.1rem;
}

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

.audio-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.9rem;
}
.audio-card-top h3 {
  margin-top: 0.35rem;
  color: var(--text-main);
  font-size: 0.98rem;
  font-weight: 800;
  line-height: 1.35;
}
.audio-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(26, 140, 255, 0.12);
  border: 1px solid rgba(26, 140, 255, 0.22);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
.audio-toggle {
  flex: 0 0 auto;
  min-width: 92px;
  padding: 0.55rem 0.9rem;
}
.audio-toggle:disabled {
  opacity: 0.7;
  cursor: wait;
}

.audio-waveform-shell {
  position: relative;
  padding: 0.8rem 0.7rem 0.6rem;
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}
.audio-waveform {
  min-height: 72px;
}
.audio-state {
  margin-top: 0.45rem;
  color: var(--text-muted);
  font-size: 0.74rem;
  line-height: 1.4;
}
.audio-state-error {
  color: #ff8b8b;
}

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
  .audio-card-top { flex-direction: column; }
  .audio-toggle { width: 100%; }
}
</style>
