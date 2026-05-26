<template>
<div class="home-page">
  <!-- KT2: IMMERSIVE BACKGROUND (CSS thuần - không dùng ảnh AI) -->
  <div class="immersive-bg" aria-hidden="true"></div>

  <!-- TWO-COLUMN DASHBOARD -->
  <div class="dashboard reveal-on-scroll">
    <!-- ========== LEFT COLUMN ========== -->
    <div class="col-left">
      <!-- HERO -->
      <section class="hero-section">
        <div class="hero-text">
          <h1>Recording &amp; Production — Sound &amp; Light Chuyên Nghiệp</h1>
          <p class="hero-desc">Âm nhạc bắt đầu bằng cảm xúc...<br/>Nhưng dấu ấn được tạo nên bởi chất lượng.</p>
          <div class="hero-actions">
            <NuxtLink to="/contact" class="btn-neon">BẮT ĐẦU DỰ ÁN</NuxtLink>
            <NuxtLink to="/products" class="btn-ghost">SẢN PHẨM NỔI BẬT</NuxtLink>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/images/quocchi-2.jpg" alt="Dịch vụ phòng thu âm, hoà âm phối khí chuyên nghiệp tại XKProduction" />
        </div>
      </section>

      <!-- KT1: GLASS TRUST BAR -->
      <section class="stats-bar glass-card">
        <div v-for="s in stats" :key="s.label" class="stat-cell">
          <span class="stat-icon" v-html="s.svg"></span>
          <div class="stat-body">
            <span class="stat-number" :data-target="s.target">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </section>

      <!-- 3 ENTRY POINTS — B2C / B2B / EDUCATION -->
      <section class="entry-points-section">
        <div class="entry-points-grid">
          <NuxtLink to="/services" class="entry-point-card glass-card">
            <div class="entry-icon"><i class="fa-solid fa-microphone"></i></div>
            <h3>Tôi là Nghệ Sĩ / Ca Sĩ</h3>
            <p>Nâng tầm bản nhạc với mix, master, hoà âm chuyên nghiệp</p>
            <span class="entry-cta">Trải nghiệm ngay →</span>
          </NuxtLink>
          <NuxtLink to="/live-band" class="entry-point-card glass-card">
            <div class="entry-icon"><i class="fa-solid fa-headphones"></i></div>
            <h3>Tôi Cần Âm Thanh Sự Kiện</h3>
            <p>Setup âm thanh chuyên nghiệp cho sân khấu, sự kiện, livestream</p>
            <span class="entry-cta">Trải nghiệm ngay →</span>
          </NuxtLink>
          <NuxtLink to="/courses" class="entry-point-card glass-card">
            <div class="entry-icon"><i class="fa-solid fa-book"></i></div>
            <h3>Tôi Muốn Học Sản Xuất</h3>
            <p>Khóa học từ cơ bản đến nâng cao — từ mentor có 7 năm kinh nghiệm</p>
            <span class="entry-cta">Trải nghiệm ngay →</span>
          </NuxtLink>
        </div>
      </section>

      <!-- DỰ ÁN TIÊU BIỂU -->
      <section class="featured-section">
        <h2 class="section-heading">DỰ ÁN CHẠM ĐẾN KHÁN GIẢ</h2>
        <div class="projects-grid">
          <div
            v-for="w in works" :key="`${w.title}-${w.artist}`"
            class="project-card glass-card"
            @click="openLightbox(w)"
            role="button" tabindex="0"
            :aria-label="'Xem ' + w.title"
            @keydown.enter="openLightbox(w)"
          >
            <div class="project-thumb">
              <img :src="w.thumb" :alt="w.title" loading="lazy" />
              <div class="thumb-overlay">
                <i :class="w.url.includes('tiktok') ? 'fa-brands fa-tiktok fa-2x' : 'fa-brands fa-youtube fa-2x'"></i>
              </div>
            </div>
            <div class="project-info">
              <strong>{{ w.title }}</strong>
              <span>{{ w.artist }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- LIGHTBOX MODAL -->
      <Teleport to="body">
        <div v-if="lightbox.open" class="lightbox-backdrop" @click.self="closeLightbox" aria-modal="true" role="dialog">
          <div class="lightbox-inner">
            <button class="lightbox-close" @click="closeLightbox" aria-label="Đóng">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <template v-if="lightbox.embedId">
              <iframe
                :src="'https://www.youtube.com/embed/' + lightbox.embedId + '?autoplay=1&rel=0'"
                allow="autoplay; encrypted-media"
                allowfullscreen
                class="lightbox-iframe"
                loading="lazy"
              ></iframe>
            </template>
            <template v-else>
              <a :href="lightbox.url" target="_blank" rel="noopener noreferrer" class="lightbox-tiktok-link">
                <i class="fa-brands fa-tiktok"></i>
                <span>Xem trên TikTok</span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </template>
            <div class="lightbox-info">
              <strong>{{ lightbox.title }}</strong>
              <span>{{ lightbox.artist }}</span>
            </div>
          </div>
        </div>
      </Teleport>

    </div>

    <!-- ========== RIGHT COLUMN ========== -->
    <div class="col-right">
      <!-- DỊCH VỤ CHÍNH -->
      <section class="services-section">
        <h2 class="section-heading">DỊCH VỤ CỐT LÕI</h2>
        <div class="services-cards">
          <NuxtLink
            v-for="svc in services" :key="svc.title"
            :to="svc.link"
            class="svc-card glass-card"
          >
            <div class="svc-icon" v-html="svc.svg"></div>
            <h3>{{ svc.title }}</h3>
            <p>{{ svc.desc }}</p>
            <span class="svc-link">Xem chi tiết →</span>
          </NuxtLink>
        </div>
      </section>

      <!-- VỀ CHÚNG TÔI -->
      <section class="founder-section">
        <h2 class="section-heading">FOUNDER</h2>
        <div class="founder-card glass-card">
          <div class="founder-avatar">
            <img src="/images/founder-kiet.jpg" alt="Nguyễn Xuân Kiệt - Music Producer & Founder XKProduction" />
          </div>
          <div class="founder-info">
            <div class="founder-name-row">
              <strong class="founder-name">Nguyễn Xuân Kiệt</strong>
              <span class="founder-title-badge">Music Producer &amp; Founder</span>
            </div>
            <p class="founder-story">Xuất thân từ môi trường âm thanh sân khấu và live performance, Kiệt mang tư duy cảm xúc, không gian và năng lượng thật vào từng sản phẩm phòng thu.Sau nhiều năm đồng hành cùng nghệ sĩ và hàng ngàn dự án âm nhạc,XKProduction được xây dựng với một định hướng rõ ràng:âm nhạc không chỉ cần hay — mà cần có bản sắc.</p>
            <blockquote class="founder-quote">"Âm nhạc không chỉ để nghe, mà là để cảm nhận.<br/>Tạo ra âm thanh là kỹ thuật, chạm đến trái tim mới là nghệ thuật."</blockquote>
            <div class="founder-cta">
              <NuxtLink to="/contact" class="btn-founder-cta">Đặt lịch tư vấn miễn phí →</NuxtLink>
            </div>
            <div class="founder-socials">
              <a href="https://www.youtube.com/@Xkstudio29" target="_blank" rel="noopener" aria-label="YouTube XKProduction"><i class="fa-brands fa-youtube"></i></a>
              <a href="https://www.tiktok.com/@xkstudio" target="_blank" rel="noopener" aria-label="TikTok XKProduction"><i class="fa-brands fa-tiktok"></i></a>
              <a href="https://www.facebook.com/ngxkiet" target="_blank" rel="noopener" aria-label="Facebook XKProduction"><i class="fa-brands fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </section>

      <!-- LIÊN HỆ & TƯ VẤN -->
      <section class="contact-section">
        <h2 class="section-heading">LIÊN HỆ & TƯ VẤN</h2>
        <div class="contact-info">
          <a href="tel:0355356294" class="contact-item"><span class="ci-icon"><i class="fa-solid fa-phone"></i></span><span>Hotline: 0355.356.294</span></a>
          <a href="mailto:contact@xkproduction.com" class="contact-item"><span class="ci-icon"><i class="fa-solid fa-envelope"></i></span><span>Email: contact@xkproduction.com</span></a>
          <a href="https://zalo.me/0355356294" target="_blank" rel="noopener" class="contact-item"><span class="ci-icon"><i class="fa-solid fa-comment"></i></span><span>Zalo: 0355.356.294</span></a>
        </div>
        <Transition name="toast">
          <div v-if="formToast !== 'idle'" class="form-toast" :class="`form-toast-${formToast}`" role="alert">
            <i v-if="formToast === 'success'" class="fa-solid fa-circle-check"></i>
            <i v-else class="fa-solid fa-circle-exclamation"></i>
            <span>{{ formToast === 'success' ? 'Đã gửi thành công! Chúng tôi sẽ liên hệ bạn sớm.' : formErrorMessage }}</span>
          </div>
        </Transition>
        <form class="contact-form glass-card" @submit.prevent="submitForm" novalidate>
          <div class="form-group">
            <label for="cf-name">Họ và tên <span class="req">*</span></label>
            <input id="cf-name" v-model="form.name" type="text" placeholder="Nguyễn Văn A" :class="{ error: formErrors.name }" @blur="validateField('name')" />
            <span v-if="formErrors.name" class="field-error">Vui lòng nhập họ và tên</span>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label for="cf-phone">Số điện thoại <span class="req">*</span></label>
              <input id="cf-phone" v-model="form.phone" type="tel" placeholder="09xx.xxx.xxx" :class="{ error: formErrors.phone }" @blur="validateField('phone')" />
              <span v-if="formErrors.phone" class="field-error">{{ formErrors.phone }}</span>
            </div>
            <div class="form-group">
              <label for="cf-type">Loại dự án</label>
              <select id="cf-type" v-model="form.type">
                <option value="">Chọn dịch vụ...</option>
                <option>Thu âm</option>
                <option>Mix &amp; Master</option>
                <option>Hoà âm phối khí</option>
                <option>Quay MV / TVC</option>
                <option>Âm thanh sự kiện</option>
                <option>Khoá học</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="cf-msg">Lời nhắn / Yêu cầu</label>
            <textarea id="cf-msg" v-model="form.message" placeholder="Mô tả ngắn về dự án của bạn..." rows="3"></textarea>
          </div>
          <button type="submit" class="btn-neon btn-full" :disabled="formSubmitting">
            <i v-if="formSubmitting" class="fa-solid fa-spinner fa-spin"></i>
            <span>{{ formSubmitting ? 'Đang gửi...' : 'Gửi thông tin' }}</span>
          </button>
        </form>
      </section>
    </div>
  </div>

  <!-- CẢM NHẬN KHÁCH HÀNG -->
  <section class="testimonials-section full-width">
    <h2 class="section-heading text-center" style="text-align: center; margin-bottom: 0.5rem;">CẢM NHẬN TỪ NGHỆ SĨ</h2>
    <p class="testimonials-subtitle">Hơn 2000+ nghệ sĩ đã tin tưởng XKProduction cho dự án âm nhạc của mình</p>
    <div class="testimonials-grid">
      <div
        v-for="t in testimonials.slice(0, 4)" :key="t.name"
        class="testimonial-card glass-card"
      >
        <div class="tcard-header">
          <div class="tcard-avatar-img">
            <img :src="t.avatar" :alt="t.name + ' - Khách hàng XKProduction'" loading="lazy" />
          </div>
          <div class="tcard-meta">
            <strong class="tcard-name">{{ t.name }}</strong>
            <span class="tcard-role">{{ t.role }}</span>
            <div class="tcard-stars">
              <i v-for="n in 5" :key="`star-${n}`" class="fa-solid fa-star"></i>
            </div>
          </div>
          <span class="tcard-quote-icon"><i class="fa-solid fa-quote-right"></i></span>
        </div>
        <p class="tcard-body">{{ t.body }}</p>
        <div class="tcard-project" v-if="t.project">
          <i class="fa-solid fa-music"></i>
          <span>Dự án: {{ t.project }}</span>
        </div>
      </div>
    </div>
    <!-- Google Reviews CTA -->
    <div class="reviews-cta">
      <div class="reviews-summary">
        <div class="reviews-summary-score">4.9/5</div>
        <div class="reviews-summary-meta">2000+ đánh giá • từ nghệ sĩ và khách hàng</div>
      </div>
      <a href="https://g.page/r/xkproduction/review" target="_blank" rel="noopener" class="btn-review">
        <i class="fa-brands fa-google"></i>
        <span>Đánh giá chúng tôi trên Google</span>
        <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.7rem;"></i>
      </a>
    </div>
  </section>
</div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'XKProduction — Music Production & Live Band Chuyên Nghiệp',
  description: 'XKProduction — Music production cho nghệ sĩ muốn bản phối nghe đắt tiền, rõ, và đúng chất. 2000+ dự án. Bắt đầu tư vấn miễn phí.',
  ogTitle: 'XKProduction — Music Production & Live Band Chuyên Nghiệp',
  ogDescription: 'XKProduction — Music production cho nghệ sĩ muốn bản phối nghe đắt tiền, rõ, và đúng chất. 2000+ dự án thành công. Hotline: 0355.356.294.',
  ogImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'XKProduction - Phòng thu âm chuyên nghiệp tại Bình Phước',
  ogType: 'website',
  ogUrl: 'https://xkproduction.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'XKProduction — Music Production & Live Band Chuyên Nghiệp',
  twitterDescription: 'Music production cho nghệ sĩ muốn bản phối nghe đắt tiền, rõ, và đúng chất. 2000+ dự án. Hotline: 0355.356.294',
  twitterImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  keywords: 'XKProduction, xkproduction.com, phòng thu âm, phòng thu âm chuyên nghiệp, thu âm bài hát, hoà âm phối khí, mix master, mixing mastering, sân khấu sự kiện, âm thanh ánh sáng, quay mv, quay tvc, phòng thu âm bình phước, phòng thu âm uy tín, bảng giá thu âm, studio bình phước, nhạc sĩ, sản xuất âm nhạc',
  author: 'Nguyễn Xuân Kiệt - XKProduction',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  viewport: 'width=device-width, initial-scale=1'
})
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MusicStore",
        "name": "XKProduction",
        "alternateName": "XK Production Studio",
        "url": "https://xkproduction.com",
        "logo": "https://xkproduction.com/images/logo-xkproduction.png",
        "image": "https://xkproduction.com/images/Xkpreviewnew.png",
        "description": "Phòng thu âm chuyên nghiệp — Hoà âm phối khí — Mix & Master chuẩn quốc tế — Sân khấu sự kiện & Âm thanh ánh sáng trọn gói tại Bình Phước.",
        "telephone": "+84355356294",
        "email": "contact@xkproduction.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "QL14 km25, Nghĩa Trung",
          "addressLocality": "Bù Đăng",
          "addressRegion": "Bình Phước",
          "addressCountry": "VN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.8350,
          "longitude": 107.0150
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "07:00",
            "closes": "22:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday","Sunday"],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "priceRange": "₫₫",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2000",
          "bestRating": "5"
        },
        "sameAs": [
          "https://www.facebook.com/ngxkiet",
          "https://www.youtube.com/@Xkstudio29",
          "https://www.tiktok.com/@xkstudio"
        ],
        "founder": {
          "@type": "Person",
          "name": "Nguyễn Xuân Kiệt",
          "jobTitle": "Music Producer & Founder"
        }
      })
    }
  ]
})

useSchemaOrg([
  defineWebPage({
    name: 'XKProduction - Phòng Thu Âm Chuyên Nghiệp | Hoà Âm | Mix Master | Bình Phước',
    description: 'Phòng thu âm chuyên nghiệp XKProduction: Thu âm bài hát, mix & master chuẩn Spotify, hoà âm phối khí, quay MV/TVC tại Bình Phước. 2000+ dự án thành công.'
  }),
  defineLocalBusiness({
    '@id': 'https://xkproduction.com/#localbusiness',
    name: 'XKProduction',
    image: 'https://xkproduction.com/images/Xkpreviewnew.png',
    logo: 'https://xkproduction.com/images/logo-xkproduction.png',
    telephone: '+84355356294',
    email: 'contact@xkproduction.com',
    url: 'https://xkproduction.com',
    description: 'Phòng thu âm chuyên nghiệp — Hoà âm phối khí — Mix & Master chuẩn quốc tế — Sân khấu sự kiện & Âm thanh ánh sáng trọn gói tại Bình Phước.',
    address: {
      streetAddress: 'QL14 km25, Nghĩa Trung',
      addressLocality: 'Bù Đăng',
      addressRegion: 'Bình Phước',
      postalCode: '830000',
      addressCountry: 'VN'
    },
    geo: { latitude: '11.8350', longitude: '107.0150' },
    hasMap: 'https://maps.google.com/?q=11.8350,107.0150',
    openingHoursSpecification: [
      { dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '22:00' },
      { dayOfWeek: ['Saturday','Sunday'], opens: '08:00', closes: '20:00' }
    ],
    priceRange: '350.000₫ – 3.500.000₫',
    currenciesAccepted: 'VND',
    paymentAccepted: 'Cash, Bank Transfer, Momo',
    sameAs: [
      'https://www.youtube.com/@Xkstudio29',
      'https://www.tiktok.com/@xkstudio',
      'https://www.facebook.com/ngxkiet'
    ],
    aggregateRating: {
      ratingValue: '4.9',
      ratingCount: 2000,
      bestRating: '5',
      worstRating: '1'
    }
  }),
  {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Trang chủ', 'item': 'https://xkproduction.com' }
    ]
  },
  // Review schema cho SEO
  {
    '@type': 'Review',
    'itemReviewed': { '@type': 'LocalBusiness', 'name': 'XKProduction' },
    'author': { '@type': 'Person', 'name': 'Revan' },
    'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
    'reviewBody': 'XKProduction là nơi đầu tiên mình cảm thấy âm nhạc của mình được thực sự lắng nghe. Từ khâu tư vấn concept đến lúc bản mix hoàn thiện, mọi chi tiết đều được chăm chút cẩn thận.'
  },
  {
    '@type': 'Review',
    'itemReviewed': { '@type': 'LocalBusiness', 'name': 'XKProduction' },
    'author': { '@type': 'Person', 'name': 'Howl' },
    'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
    'reviewBody': 'Sound rõ ràng, sắc nét, và quan trọng hơn — nó đúng chất. Đội ngũ làm việc chuyên nghiệp, phản hồi nhanh, không có gì phải phàn nàn.'
  },
  {
    '@type': 'Review',
    'itemReviewed': { '@type': 'LocalBusiness', 'name': 'XKProduction' },
    'author': { '@type': 'Person', 'name': 'Cao Thành Lâm' },
    'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
    'reviewBody': 'Họ biết cách thu âm để giọng ca được trình bày tự nhiên nhất, không bị xử lý quá tay. Mỗi session ở đây đều thoải mái và hiệu quả.'
  },
  {
    '@type': 'Review',
    'itemReviewed': { '@type': 'LocalBusiness', 'name': 'XKProduction' },
    'author': { '@type': 'Person', 'name': 'Phương Thanh Tuyền' },
    'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
    'reviewBody': 'Anh Kiệt tư vấn rất tận tình, giúp mình chọn được tone phù hợp với chất giọng. Bản thu hoàn thành đúng hạn, âm thanh ấm và sạch.'
  }
])

onMounted(() => {
  if (!import.meta.client) return
  
  /* === STAT COUNTER ANIMATION === */
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target as HTMLElement
      const target = parseInt(el.dataset.target || '0')
      if (!target) return
      let current = 0
      const step = Math.max(1, Math.floor(target / 60))
      const timer = setInterval(() => {
        current += step
        if (current >= target) { current = target; clearInterval(timer) }
        el.textContent = current + (el.textContent?.includes('+') ? '+' : '')
      }, 25)
      statsObserver.unobserve(el)
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.stat-number[data-target]').forEach(el => statsObserver.observe(el))
  
  /* === SCROLL REVEAL ANIMATION === */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target as HTMLElement
      el.classList.add('revealed')
      revealObserver.unobserve(el)
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })
  
  document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el))
  
  /* === PARALLAX SCROLL EFFECT - removed (no bg image) === */
})

const stats = [
  { svg: '<i class="fa-solid fa-download fa-lg"></i>', value: '2000+', target: 2000, label: 'DỰ ÁN HOÀN THIỆN' },
  { svg: '<i class="fa-solid fa-graduation-cap fa-lg"></i>', value: '50+', target: 50, label: 'HỌC VIÊN ĐÀO TẠO' },
  { svg: '<i class="fa-solid fa-handshake fa-lg"></i>', value: '30+', target: 30, label: 'ĐỐI TÁC CHIẾN LƯỢC' },
  { svg: '<i class="fa-solid fa-clock fa-lg"></i>', value: '7', target: 7, label: 'NĂM KINH NGHIỆM' }
]

const works = [
  {
    title: 'Chẳng Muốn Nói Nhiều Lời',
    artist: 'Revan',
    url: 'https://www.youtube.com/watch?v=IxlFvQQP_4c',
    thumb: `https://img.youtube.com/vi/IxlFvQQP_4c/hqdefault.jpg`,
    embedId: 'IxlFvQQP_4c'
  },
  {
    title: 'Lý Do Bắt Đầu',
    artist: 'Revan',
    url: 'https://www.youtube.com/watch?v=vzfr1ddayYY',
    thumb: `https://img.youtube.com/vi/vzfr1ddayYY/hqdefault.jpg`,
    embedId: 'vzfr1ddayYY'
  },
  {
    title: 'Love Dự Phòng',
    artist: 'Howl',
    url: 'https://www.youtube.com/watch?v=OCnKTCslJUU',
    thumb: `https://img.youtube.com/vi/OCnKTCslJUU/hqdefault.jpg`,
    embedId: 'OCnKTCslJUU'
  },
  {
    title: 'Áo Cũ Tình Mới',
    artist: 'Remake Remix',
    url: 'https://www.youtube.com/watch?v=hlvg9YBxRqY',
    thumb: `https://img.youtube.com/vi/hlvg9YBxRqY/hqdefault.jpg`,
    embedId: 'hlvg9YBxRqY'
  },
  {
    title: 'Kiếp Sau',
    artist: 'Phương Thanh Tuyền (Cover)',
    url: 'https://www.youtube.com/watch?v=z4GB-X1OiPg',
    thumb: `https://img.youtube.com/vi/z4GB-X1OiPg/hqdefault.jpg`,
    embedId: 'z4GB-X1OiPg'
  },
  {
    title: 'Viết Tiếp Câu Chuyện Hoà Bình',
    artist: 'Mai Linh (Cover)',
    url: 'https://www.youtube.com/watch?v=P8FPXHJe_go',
    thumb: `https://img.youtube.com/vi/P8FPXHJe_go/hqdefault.jpg`,
    embedId: 'P8FPXHJe_go'
  },
  {
    title: 'Tết Xa (Cover)',
    artist: 'Khánh Linh',
    url: 'https://www.tiktok.com/@xkstudio/video/7589982843418266901?lang=vi-VN',
    thumb: '/images/quocchi-3.jpg',
    embedId: ''
  }
]

const services = [
  { svg: '<i class="fa-solid fa-music fa-lg"></i>', title: 'HOÀ ÂM PHỐI KHÍ', desc: 'Đánh thức linh hồn của bài hát. Từ ý tưởng thô sơ đến bản phối lộng lẫy, chuẩn quốc tế trên mọi nền tảng.', link: '/hoa-am-phoi-khi' },
  { svg: '<i class="fa-solid fa-graduation-cap fa-lg"></i>', title: 'KHOÁ HỌC', desc: 'Chuyển giao đam mê. Nơi nuôi dưỡng và đào tạo những thế hệ Music Producer & Vocalist thực thụ.', link: '/courses' },
  { svg: '<i class="fa-solid fa-guitar fa-lg"></i>', title: 'LIVE BAND', desc: 'Bùng nổ cảm xúc trên sân khấu. Mang âm nhạc sống động hòa vào từng nhịp đập của khán giả.', link: '/live-band' }
]

/* === LIGHTBOX STATE === */
const lightbox = reactive({
  open: false,
  title: '',
  artist: '',
  url: '',
  embedId: ''
})

function openLightbox(w: { title: string; artist: string; url: string; embedId: string }) {
  lightbox.title = w.title
  lightbox.artist = w.artist
  lightbox.url = w.url
  lightbox.embedId = w.embedId
  lightbox.open = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.open = false
  document.body.style.overflow = ''
}

if (import.meta.client) {
  const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox() }
  onMounted(() => window.addEventListener('keydown', handler))
  onUnmounted(() => window.removeEventListener('keydown', handler))
}

/* === FORM STATE === */
const form = reactive({ name: '', phone: '', type: '', message: '' })
const formErrors = reactive({ name: '', phone: '' })
const formToast = ref<'idle' | 'success' | 'error'>('idle')
const formErrorMessage = ref('')
const formSubmitting = ref(false)

function validateField(field: 'name' | 'phone') {
  if (field === 'name') {
    formErrors.name = form.name.trim().length < 2 ? 'Vui lòng nhập họ và tên' : ''
  }
  if (field === 'phone') {
    const p = form.phone.replace(/[.\s-]/g, '')
    formErrors.phone = !/^(0[3-9]\d{8})$/.test(p) ? 'Số điện thoại không hợp lệ' : ''
  }
}

async function submitForm() {
  validateField('name')
  validateField('phone')
  if (formErrors.name || formErrors.phone) return
  formSubmitting.value = true
  formToast.value = 'idle'
  const config = useRuntimeConfig()
  try {
    const res = await fetch(config.public.formspreeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        type: form.type || 'Không chọn',
        message: form.message || '(không có lời nhắn)',
        _subject: `[XKProduction] Liên hệ nhanh từ ${form.name}`
      })
    })
    formSubmitting.value = false
    if (res.ok) {
      formToast.value = 'success'
      Object.assign(form, { name: '', phone: '', type: '', message: '' })
    } else {
      formToast.value = 'error'
      formErrorMessage.value = 'Gửi thất bại. Vui lòng thử lại sau.'
    }
  } catch (error) {
    formSubmitting.value = false
    formToast.value = 'error'
    formErrorMessage.value = 'Lỗi kết nối. Vui lòng kiểm tra internet và thử lại.'
  }
  setTimeout(() => { formToast.value = 'idle' }, 4000)
}

/* === AVATAR GRADIENTS === */
const avatarGradients = [
  'linear-gradient(135deg, #1a8cff 0%, #00d4aa 100%)',
  'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
]

const testimonials = [
  {
    name: 'Revan',
    role: 'Nghệ Sĩ / Rapper',
    avatar: '/images/revan.jpg',
    project: 'Chẳng Muốn Nói Nhiều Lời',
    body: 'Mình đã trải qua không ít phòng thu, nhưng XKProduction là nơi đầu tiên mình cảm thấy âm nhạc của mình được thực sự lắng nghe. Từ khâu tư vấn concept đến lúc bản mix hoàn thiện, mọi chi tiết đều được chăm chút cẩn thận. Kiet và team không chỉ làm đúng yêu cầu — họ còn biết cách đẩy bản nhạc lên một tầng cao hơn mà mình chưa nghĩ tới. Hài lòng, có tâm và thực sự có tầm.'
  },
  {
    name: 'Howl',
    role: 'Nghệ Sĩ / Rapper',
    avatar: '/images/howl.jpg',
    project: 'Love Dự Phòng',
    body: 'Đến XKProduction lần đầu mình không kỳ vọng nhiều, nhưng kết quả cuối cùng vượt xa những gì mình tưởng tượng. Sound rõ ràng, sắc nét, và quan trọng hơn — nó đúng chất. Đội ngũ làm việc chuyên nghiệp, phản hồi nhanh, không có gì phải phàn nàn.'
  },
  {
    name: 'Cao Thành Lâm',
    role: 'Singer',
    avatar: '/images/cao-thanh-lam.jpg',
    project: '',
    body: 'Với mình, giọng hát là tất cả. XKProduction hiểu điều đó. Họ biết cách thu âm để giọng ca được trình bày tự nhiên nhất, không bị xử lý quá tay. Mỗi session ở đây đều thoải mái và hiệu quả. Chắc chắn sẽ quay lại cho những dự án tiếp theo.'
  },
  {
    name: 'Fesu',
    role: 'Singer',
    avatar: '/images/fesu.jpg',
    project: '',
    body: 'XKProduction có một điều mà không phải studio nào cũng có — sự kiên nhẫn. Họ không rush, không qua loa. Ngồi làm việc cùng team ở đây mình học được rất nhiều về cách xây dựng âm thanh. Sản phẩm ra lò chất lượng, mình tự hào khi chia sẻ lên mạng.'
  },
  {
    name: 'Phương Thanh Tuyền',
    role: 'Singer',
    avatar: '/images/quocchi-3.jpg',
    project: 'Kiếp Sau (Cover)',
    body: 'Lần đầu vào studio mình khá hồi hộp, nhưng không khí ở XKProduction rất thân thiện và chuyên nghiệp. Anh Kiệt tư vấn rất tận tình, giúp mình chọn được tone phù hợp với chất giọng. Bản thu hoàn thành đúng hạn, âm thanh ấm và sạch — đúng những gì mình cần.'
  }
]
</script>

<style scoped>
/* ==============================================
   GLASSMORPHISM SYSTEM — Dark Luxe Edition
   ============================================== */

.home-page {
  position: relative;
  min-height: 100vh;
  padding-top: 80px;
}

/* === IMMERSIVE BG (Slow organic dark panels shadows) === */
.immersive-bg {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 70% 50% at 10% 20%, rgba(43, 127, 255, 0.05) 0%, transparent 60%),
    radial-gradient(ellipse 50% 70% at 90% 80%, rgba(0, 212, 170, 0.03) 0%, transparent 60%),
    linear-gradient(180deg, #030508 0%, #06080d 100%);
  animation: bgDrift 20s ease-in-out infinite alternate;
}
@keyframes bgDrift {
  0%   { opacity: 0.9; }
  100% { opacity: 1; }
}

/* === GLASS CARD BASE — Minimal Platinum Border === */
.glass-card {
  position: relative;
  backdrop-filter: blur(24px) saturate(1.1);
  -webkit-backdrop-filter: blur(24px) saturate(1.1);
  background: rgba(255, 255, 255, 0.012);
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  transition: all 0.4s var(--ease-out-expo);
  overflow: hidden;
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.022);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
}

/* === TEXT === */
.neon-text {
  color: var(--text-main);
}
.neon-text-sm {
  color: var(--primary);
  font-weight: 700;
}
.neon-accent  { text-shadow: none; }

/* === PREMIUM BUTTONS === */
.btn-neon {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.85rem 1.85rem;
  background: var(--text-main);
  color: var(--bg-dark); font-weight: 700; font-size: 0.78rem;
  letter-spacing: 1.5px; border: none; border-radius: 6px;
  cursor: pointer; text-decoration: none;
  transition: all 0.35s var(--ease-out-expo);
  text-transform: uppercase;
}
.btn-neon:hover {
  background: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}

.btn-ghost {
  display: inline-flex; align-items: center;
  padding: 0.85rem 1.85rem;
  background: transparent;
  color: var(--text-main);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px; font-weight: 700;
  font-size: 0.78rem; letter-spacing: 1.5px;
  cursor: pointer; text-decoration: none; transition: all 0.3s;
  text-transform: uppercase;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--text-main);
  transform: translateY(-2px);
}

/* === LAYOUT === */
.dashboard {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1.55fr 1fr;
  gap: 3rem; max-width: 1200px;
  margin: 0 auto; padding: 3rem 2rem 6rem;
}
.col-left, .col-right {
  display: flex; flex-direction: column; gap: 3rem; min-width: 0;
}
.section-heading {
  font-size: 0.75rem; font-weight: 700;
  letter-spacing: 4px; color: var(--text-light);
  margin-bottom: 1.5rem; text-transform: uppercase;
  border-left: 2px solid var(--primary);
  padding-left: 0.75rem;
}

/* === HERO === */
.hero-section {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 3rem; align-items: center;
}
.hero-text h1 {
  font-size: 2.2rem; font-weight: 800; line-height: 1.25;
  color: var(--text-main); margin-bottom: 1.25rem; letter-spacing: -0.02em;
  animation: titleReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes titleReveal {
  0% { opacity: 0; transform: translateY(15px); }
  100% { opacity: 1; transform: translateY(0); }
}
.hero-desc {
  color: var(--text-light); font-size: 0.9rem;
  line-height: 1.8; margin-bottom: 2rem; max-width: 420px;
  font-weight: 500;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.hero-visual {
  position: relative; border-radius: 12px; overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
}
.hero-visual img { width: 100%; aspect-ratio: 16/10; object-fit: cover; display: block; filter: grayscale(10%) contrast(105%); }

/* === STATS BAR === */
.stats-bar {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem; padding: 1.5rem 2rem;
  border-radius: 12px;
}
.stat-cell {
  display: flex; flex-direction: column; align-items: flex-start; gap: 0.35rem;
}
.stat-icon {
  color: var(--primary); display: none;
}
.stat-body { display: flex; flex-direction: column; }
.stat-number {
  font-size: 1.8rem; font-weight: 700; color: var(--text-main); line-height: 1;
  letter-spacing: -0.01em;
}
.stat-label {
  font-size: 0.6rem; font-weight: 700; letter-spacing: 1.5px;
  color: var(--text-light); text-transform: uppercase; margin-top: 0.25rem;
}

/* === 3 ENTRY POINTS === */
.entry-points-section {
  position: relative; z-index: 1;
}
.entry-points-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.entry-point-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 2.2rem 1.75rem;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s var(--ease-out-expo);
  border-radius: 12px;
}
.entry-point-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.022);
}
.entry-icon {
  font-size: 1.6rem;
  color: var(--primary);
  transition: transform 0.4s var(--ease-out-expo);
  margin-bottom: 0.2rem;
}
.entry-point-card:hover .entry-icon {
  transform: translateY(-2px);
}
.entry-point-card h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  letter-spacing: -0.01em;
}
.entry-point-card p {
  font-size: 0.8rem;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}
.entry-cta {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-main);
  transition: all 0.25s;
  display: inline-block;
  margin-top: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 2px;
}
.entry-point-card:hover .entry-cta {
  border-color: var(--text-main);
}

/* === PROJECTS === */
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
.project-card {
  cursor: pointer; transition: all 0.4s var(--ease-out-expo);
  text-decoration: none; display: block;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 12px;
  overflow: hidden;
}
.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.1);
}
.project-thumb { position: relative; aspect-ratio: 16/10; overflow: hidden; }
.project-thumb img {
  width: 100%; height: 100%; object-fit: cover;
  display: block; transition: transform 0.6s var(--ease-out-expo);
  filter: grayscale(15%) contrast(105%);
}
.project-card:hover .project-thumb img { transform: scale(1.03); }
.thumb-overlay {
  position: absolute; inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex; align-items: center; justify-content: center;
  color: #fff; opacity: 0; transition: opacity 0.3s;
}
.project-card:hover .thumb-overlay { opacity: 1; }
.thumb-overlay i {
  font-size: 1.5rem;
}
.project-info { padding: 1.2rem; }
.project-info strong {
  display: block; font-size: 0.85rem; color: var(--text-main); margin-bottom: 0.25rem;
  font-weight: 700; letter-spacing: -0.01em;
}
.project-info span  {
  font-size: 0.75rem; color: var(--text-light);
  font-weight: 500;
}

/* === SERVICE CARDS === */
.services-cards { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
.svc-card {
  padding: 2.2rem 1.75rem; text-align: left;
  display: flex; flex-direction: column; align-items: flex-start; gap: 0.85rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.4s var(--ease-out-expo);
  border-radius: 12px;
}
.svc-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.022);
}
.svc-icon {
  color: var(--primary); margin-bottom: 0.25rem;
  font-size: 1.4rem;
}
.svc-card h3 { font-size: 0.95rem; font-weight: 700; letter-spacing: -0.01em; color: var(--text-main); }
.svc-card p  { font-size: 0.8rem; color: var(--text-light); line-height: 1.6; flex: 1; }
.svc-link    { font-size: 0.72rem; font-weight: 700; color: var(--text-main); border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 2px; }

/* === FOUNDER EDITORIAL STYLE === */
.founder-card { 
  display: flex; flex-direction: column; gap: 1.75rem; align-items: flex-start; padding: 2.2rem 1.75rem;
  border-radius: 12px;
}
.founder-avatar {
  width: 80px; height: 80px; flex-shrink: 0;
  border-radius: 50%; overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.founder-avatar img { width: 100%; height: 100%; object-fit: cover; }
.founder-info { flex: 1; display: flex; flex-direction: column; gap: 1rem; }
.founder-name-row { display: flex; flex-direction: column; gap: 0.25rem; }
.founder-name { font-size: 1.15rem; font-weight: 700; color: var(--text-main); }
.founder-title-badge {
  font-size: 0.65rem; font-weight: 700; letter-spacing: 1.5px;
  color: var(--primary); text-transform: uppercase;
}
.founder-story {
  font-size: 0.85rem; font-weight: 500;
  color: var(--text-light); line-height: 1.75;
  margin: 0;
}
.founder-quote {
  font-size: 0.95rem; font-weight: 500; font-style: italic;
  color: var(--text-main); line-height: 1.7;
  margin-top: 1rem; border-left: 2px solid var(--primary);
  padding-left: 1rem;
}
.founder-cta {
  margin-top: 1.25rem;
}
.btn-founder-cta {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-main);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 2px;
}
.founder-socials { display: flex; gap: 0.75rem; margin-top: 1.25rem; }
.founder-socials a {
  width: 32px; height: 32px; border-radius: 6px;
  background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-light); font-size: 0.85rem;
  text-decoration: none; transition: all 0.28s;
}
.founder-socials a:hover {
  background: rgba(255, 255, 255, 0.05); border-color: var(--text-main);
  color: var(--text-main); transform: translateY(-2px);
}

/* === CONTACT === */
.contact-info { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; }
.contact-item {
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.85rem; color: var(--text-light);
  transition: all 0.3s;
  padding: 0.5rem 0;
}
.contact-item:hover {
  color: var(--text-main);
}
.ci-icon { font-size: 0.95rem; flex-shrink: 0; color: var(--primary); }
.contact-form { display: flex; flex-direction: column; gap: 1rem; padding: 2.2rem 1.75rem; border-radius: 12px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 0.85rem 1.1rem;
  color: var(--text-main); font-family: inherit; font-size: 0.85rem;
  transition: all 0.3s;
  font-weight: 500;
}
.contact-form input::placeholder,
.contact-form textarea::placeholder { color: var(--text-muted); }
.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--text-main);
  background: rgba(255, 255, 255, 0.03);
}
.contact-form select { appearance: none; cursor: pointer; padding-right: 2.5rem; }
.contact-form textarea { resize: vertical; min-height: 80px; }

/* === TESTIMONIALS === */
.testimonials-section.full-width {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
  padding: 0 2rem 6rem;
}
.testimonials-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 3rem;
  font-weight: 500;
}
.testimonials-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.testimonial-card {
  padding: 2rem 1.5rem;
  display: flex; flex-direction: column; gap: 1.25rem; cursor: default;
  transition: all 0.4s var(--ease-out-expo);
  border-radius: 12px;
}
.testimonial-card:hover {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.022);
}
.tcard-header { display: flex; align-items: center; gap: 0.8rem; }
.tcard-avatar-img {
  width: 44px; height: 44px; flex-shrink: 0; border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}
.tcard-avatar-img img {
  width: 100%; height: 100%; object-fit: cover;
  filter: grayscale(20%);
}
.testimonial-card:hover .tcard-avatar-img {
  border-color: var(--text-main);
}
.tcard-meta { flex: 1; display: flex; flex-direction: column; gap: 0.1rem; }
.tcard-name { font-size: 0.85rem; font-weight: 700; color: var(--text-main); letter-spacing: -0.01em; }
.tcard-role { font-size: 0.72rem; color: var(--text-light); font-weight: 500; }
.tcard-stars { display: flex; gap: 2px; margin-top: 0.2rem; }
.tcard-stars i { font-size: 0.6rem; color: #e2b13c; }
.tcard-quote-icon { color: rgba(255, 255, 255, 0.08); font-size: 1.25rem; flex-shrink: 0; }
.tcard-body {
  font-size: 0.8rem; color: var(--text-light);
  line-height: 1.7; font-style: italic; margin: 0; flex: 1;
}
.tcard-project {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.72rem; font-weight: 600;
  color: var(--primary);
  padding-top: 0.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.tcard-project i { font-size: 0.65rem; }

/* Google Reviews CTA */
.reviews-cta {
  text-align: center;
  margin-top: 3rem;
}
.reviews-summary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0.6rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.015);
}
.reviews-summary-score {
  color: #e2b13c;
  font-size: 0.95rem;
  font-weight: 800;
}
.reviews-summary-meta {
  color: var(--text-light);
  font-size: 0.78rem;
  font-weight: 600;
}
.btn-review {
  display: inline-flex; align-items: center; gap: 0.55rem;
  padding: 0.8rem 1.75rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: var(--text-main);
  font-size: 0.8rem; font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
}
.btn-review:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--text-main);
  transform: translateY(-2px);
}
.btn-review i:first-child { font-size: 0.9rem; color: var(--text-light); }

/* === REVEAL ON SCROLL ANIMATION === */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(15px);
  animation: revealFadeIn 0.8s var(--ease-out-expo) forwards;
}
.revealed {
  opacity: 1;
  transform: translateY(0);
}
@keyframes revealFadeIn {
  0% { opacity: 0; transform: translateY(15px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* === RESPONSIVE === */
@media (max-width: 1024px) {
  .dashboard { grid-template-columns: 1fr; gap: 3rem; }
  .hero-section { grid-template-columns: 1fr 1fr; }
  .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .dashboard { padding: 2rem 1.5rem; }
  .testimonials-section.full-width { padding: 0 1.5rem 4rem; }
  .hero-section { grid-template-columns: 1fr; gap: 2rem; }
  .hero-text h1 { font-size: 1.8rem; }
  .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
  .services-cards { grid-template-columns: 1fr; }
  .founder-card { text-align: left; }
  .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .home-page { padding-top: 72px; }
  .hero-text h1 { font-size: 1.6rem; }
  .stats-bar { grid-template-columns: 1fr 1fr; padding: 1.25rem; }
  .projects-grid { grid-template-columns: 1fr; }
  .form-grid { grid-template-columns: 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
}

/* === LIGHTBOX === */
.lightbox-backdrop {
  position: fixed; inset: 0; z-index: 9000;
  background: rgba(3, 5, 8, 0.95);
  backdrop-filter: blur(20px);
  display: flex; align-items: center; justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.22s ease;
}
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
.lightbox-inner {
  position: relative;
  width: 100%; max-width: 860px;
  background: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8);
  animation: slideUp 0.3s var(--ease-out-expo);
}
@keyframes slideUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
.lightbox-close {
  position: absolute; top: 0.85rem; right: 0.85rem; z-index: 10;
  width: 32px; height: 32px; border-radius: 50%;
  background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-main); font-size: 0.9rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.lightbox-close:hover { background: rgba(255, 255, 255, 0.1); }
.lightbox-iframe {
  width: 100%; aspect-ratio: 16/9; display: block; border: none;
  background: #000;
}
.lightbox-tiktok-link {
  display: flex; align-items: center; justify-content: center;
  gap: 0.8rem; padding: 4rem 2rem;
  font-size: 1.1rem; font-weight: 700; color: #fff;
  text-decoration: none; background: linear-gradient(135deg, #010101 0%, #111 100%);
  transition: all 0.3s;
}
.lightbox-tiktok-link:hover { color: var(--primary); }
.lightbox-tiktok-link i { font-size: 2rem; }
.lightbox-info {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.015);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.lightbox-info strong { font-size: 0.95rem; color: var(--text-main); }
.lightbox-info span { font-size: 0.85rem; color: var(--text-light); }

/* === PROJECT CARD cursor fix === */
.project-card { cursor: pointer; }

/* === FORM LABELS & VALIDATION === */
.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.form-group label {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 1px;
  color: var(--text-light); text-transform: uppercase;
}
.req { color: #f43f5e; }
.field-error {
  font-size: 0.75rem; color: #f43f5e;
  display: flex; align-items: center; gap: 0.3rem;
}
.contact-form input.error,
.contact-form select.error {
  border-color: rgba(244, 63, 94, 0.5) !important;
  background: rgba(244, 63, 94, 0.03) !important;
}
.btn-neon:disabled {
  opacity: 0.6; cursor: not-allowed;
  transform: none !important;
}

/* === FORM TOAST === */
.form-toast {
  display: flex; align-items: center; gap: 0.7rem;
  padding: 1rem 1.25rem; border-radius: 6px; margin-bottom: 1rem;
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #10b981; font-size: 0.85rem; font-weight: 600;
}
.form-toast i { font-size: 1rem; flex-shrink: 0; }
.toast-enter-active, .toast-leave-active { transition: all 0.35s var(--ease-out-expo); }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(-5px); }

/* === CONTACT ITEMS as links === */
a.contact-item { text-decoration: none; color: inherit; cursor: pointer; }
a.contact-item:hover { color: var(--text-main); }
</style>
