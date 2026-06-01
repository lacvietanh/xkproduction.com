<template>
<div class="home-page">
  <!-- INTERACTIVE AMBIENT GLOW BACKDROP -->
  <div class="immersive-ambient-bg" :class="`theme-${activeProject.theme}`" aria-hidden="true">
    <div class="glow-spot spotlight-1"></div>
    <div class="glow-spot spotlight-2"></div>
  </div>

  <!-- SECTION 01 — HERO (Full Viewport Split) -->
  <section class="hero-section reveal-on-scroll">
    <div class="max-width hero-container">
      <div class="hero-content">
        <span class="hero-label">XKPRODUCTION</span>
        <h1 class="hero-title">
          Âm nhạc không chỉ cần nghe hay.<br />
          <span class="text-glow-gradient">Nó cần được cảm nhận.</span>
        </h1>
        <p class="hero-desc">
          Music production cho nghệ sĩ muốn bản phối nghe đắt tiền, rõ ràng và mang đậm bản sắc. Hãy để tác phẩm của bạn vượt qua giới hạn của âm thanh thông thường.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/contact" class="btn btn-primary btn-pulse">Bắt đầu dự án</NuxtLink>
          <a href="#featured-showcase" class="btn btn-secondary">Xem dự án</a>
        </div>
      </div>
      <div class="hero-visual-wrapper">
        <div class="hero-visual glass-card" @mousemove="handleHeroParallax" @mouseleave="resetHeroParallax" ref="heroVisualRef">
          <img src="/images/hero_studio_cinematic.png" alt="Phòng thu âm chuyên nghiệp XKProduction" class="hero-studio-img" />
          <div class="glass-reflection-overlay"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 02 — FEATURED STATEMENT (Breathing Break) -->
  <section class="statement-section reveal-on-scroll">
    <div class="max-width">
      <div class="statement-container">
        <h2 class="statement-text">
          Chúng tôi không chỉ sản xuất âm nhạc.<br />
          <span class="text-glow-gradient">Chúng tôi xây dựng cảm xúc, bản sắc và dấu ấn riêng</span><br />
          cho từng nghệ sĩ.
        </h2>
      </div>
    </div>
  </section>

  <!-- SECTION 03 — TRUST BAR (Floating glass cards) -->
  <section class="stats-bar-premium reveal-on-scroll">
    <div class="max-width stats-grid">
      <div v-for="s in stats" :key="s.label" class="stat-premium-card glass-card">
        <div class="stat-glow"></div>
        <span class="stat-number-wrap">
          <span class="stat-number" :data-target="s.target">{{ s.value }}</span>
        </span>
        <span class="stat-label">{{ s.label }}</span>
      </div>
    </div>
  </section>

  <!-- SECTION 04 — FEATURED WORK (Immersive Switcher with Audio Player) -->
  <section id="featured-showcase" class="featured-work-section reveal-on-scroll">
    <div class="max-width">
      <div class="section-header-minimal">
        <span class="header-tag">TÁC PHẨM TIÊU BIỂU</span>
        <h2 class="header-title">Dự án chạm đến khán giả</h2>
      </div>

      <div class="showcase-container">
        <!-- Vertical project selector -->
        <div class="project-selector-list">
          <button 
            v-for="(w, idx) in works" 
            :key="w.title" 
            class="selector-item"
            :class="{ active: activeProjectIdx === idx }"
            @mouseenter="selectProject(idx)"
            @click="selectProject(idx)"
          >
            <span class="selector-num">0{{ idx + 1 }}</span>
            <span class="selector-name">{{ w.title }}</span>
            <span class="selector-artist">{{ w.artist }}</span>
          </button>
        </div>

        <!-- Dynamic project visual display -->
        <div class="project-display-box glass-card" :class="`theme-${activeProject.theme}`">
          <div class="display-glow"></div>
          
          <div class="project-image-wrap">
            <Transition name="fade-scale" mode="out-in">
              <!-- Custom Interactive Audio Visualizer Screen -->
              <div v-if="activeProject.isAudio" class="audio-player-container-display" :key="'audio-display'">
                <div class="audio-waves" :class="{ playing: isAudioPlaying }">
                  <span 
                    v-for="n in 28" 
                    :key="n" 
                    class="wave-bar" 
                    :style="`--height-multiplier: ${Math.sin(n * 0.2) * 0.7 + 0.9}; --delay: ${n * 0.04}s`"
                  ></span>
                </div>
                <button class="play-btn-circle-audio" @click="toggleAudio" aria-label="Phát Beat Demo">
                  <i class="fa-solid" :class="isAudioPlaying ? 'fa-pause' : 'fa-play'"></i>
                </button>
              </div>

              <!-- Standard Video Thumbnail -->
              <img 
                v-else
                :key="activeProject.title" 
                :src="activeProject.thumb" 
                :alt="activeProject.title"
                class="project-cover-img"
              />
            </Transition>
            
            <button v-if="!activeProject.isAudio" class="play-btn-circle" @click="openLightbox(activeProject)" aria-label="Phát Demo">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>

          <div class="project-meta-details">
            <Transition name="fade" mode="out-in">
              <div :key="activeProject.title" class="meta-inner">
                <span class="project-tag">{{ activeProject.category }}</span>
                <h3 class="project-title">{{ activeProject.title }}</h3>
                <p class="project-story">{{ activeProject.story }}</p>
                
                <!-- Custom Premium Glass Seek bar for Audio -->
                <div v-if="activeProject.isAudio" class="audio-seek-wrapper">
                  <div class="audio-progress-track" @click="seekAudio" title="Tua nhạc">
                    <div class="audio-progress-fill" :style="{ width: audioProgress + '%' }"></div>
                  </div>
                  <div class="audio-time-row">
                    <span>{{ audioCurrentTime }}</span>
                    <span>{{ audioDuration }}</span>
                  </div>
                </div>

                <button v-else class="btn btn-link-premium" @click="openLightbox(activeProject)">
                  <span>Nghe thử bản phối</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 05 — SERVICES (Premium split showcase) -->
  <section class="services-premium-section reveal-on-scroll">
    <div class="max-width">
      <div class="services-grid-split">
        <!-- Left typographic headers -->
        <div class="services-left-panel">
          <span class="header-tag">DỊCH VỤ CỐT LÕI</span>
          <h2 class="header-title-heavy">Nâng Tầm Tác Phẩm</h2>
          
          <div class="services-menu">
            <button 
              v-for="(svc, idx) in premiumServices" 
              :key="svc.title" 
              class="service-menu-item"
              :class="{ active: activeServiceIdx === idx }"
              @mouseenter="activeServiceIdx = idx"
              @click="activeServiceIdx = idx"
            >
              <span class="svc-num">{{ svc.id }}</span>
              <span class="svc-text">{{ svc.title }}</span>
            </button>
          </div>
        </div>

        <!-- Right dynamic interactive preview card -->
        <div class="services-right-panel">
          <div class="services-preview-card glass-card">
            <div class="preview-img-wrap">
              <Transition name="fade" mode="out-in">
                <img 
                  :key="activeService.title"
                  :src="activeService.thumb" 
                  :alt="activeService.title" 
                  class="preview-img"
                />
              </Transition>
              <div class="preview-overlay"></div>
            </div>
            <div class="preview-content">
              <Transition name="fade" mode="out-in">
                <div :key="activeService.title">
                  <h3 class="preview-title">{{ activeService.title.toUpperCase() }}</h3>
                  <p class="preview-desc">{{ activeService.desc }}</p>
                  <NuxtLink :to="activeService.link" class="btn btn-primary">
                    <span>{{ activeService.ctaText }}</span>
                    <i class="fa-solid fa-arrow-right-long" style="margin-left: 0.5rem"></i>
                  </NuxtLink>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 06 — WHY XKPRODUCTION -->
  <section class="why-us-section reveal-on-scroll">
    <div class="max-width">
      <div class="why-header text-center">
        <span class="header-tag">SỰ KHÁC BIỆT</span>
        <h2 class="header-title text-center" style="margin-bottom: 3.5rem;">Vì sao nghệ sĩ chọn XKProduction</h2>
      </div>

      <div class="why-cards-grid">
        <div v-for="w in whyChooseUs" :key="w.title" class="why-premium-card glass-card">
          <div class="card-icon-wrap">
            <i :class="w.icon"></i>
          </div>
          <h3>{{ w.title }}</h3>
          <p>{{ w.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 07 — PROCESS (Horizontal scroll-reveal timeline) -->
  <section class="process-section reveal-on-scroll">
    <div class="max-width">
      <div class="section-header-minimal">
        <span class="header-tag">QUY TRÌNH LÀM VIỆC</span>
        <h2 class="header-title">Đơn giản. Chuyên nghiệp. Hiệu quả.</h2>
      </div>

      <div class="process-timeline-container glass-card">
        <div class="process-line">
          <div class="process-progress-bar"></div>
        </div>
        <div class="process-steps-grid">
          <div 
            v-for="(step, idx) in processSteps" 
            :key="step.title" 
            class="process-step-node"
          >
            <div class="step-badge">
              <span class="step-num">{{ step.num }}</span>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 08 — FOUNDER ( Xuân Kiệt spotlight) -->
  <section class="founder-section-premium reveal-on-scroll">
    <div class="max-width founder-grid-premium">
      <div class="founder-portrait-wrap">
        <div class="portrait-card glass-card">
          <img src="/images/founder-kiet.jpg" alt="Nguyễn Xuân Kiệt - Founder & Music Producer tại XKProduction" class="founder-portrait-img" />
          <div class="portrait-overlay"></div>
        </div>
      </div>
      <div class="founder-editorial-content">
        <span class="header-tag">FOUNDER / MUSIC PRODUCER</span>
        <div class="founder-name-row">
          <h2 class="founder-main-name">Nguyễn Xuân Kiệt</h2>
          <span class="founder-badge">Stage Performance Mindset</span>
        </div>
        <p class="founder-philosophy">
          Xuất thân từ môi trường âm thanh sân khấu và live performance, Kiệt mang tư duy cảm xúc, không gian và năng lượng thật vào từng sản phẩm phòng thu. Mỗi bản nhạc được xây dựng tại XKProduction đều hướng đến một định hướng duy nhất: âm nhạc không chỉ cần nghe hay — mà cần có bản sắc riêng.
        </p>
        <blockquote class="founder-bold-quote">
          "Một bản nhạc hay không chỉ là kỹ thuật. Nó phải tạo được cảm xúc."
        </blockquote>
        <div class="founder-footer-stats">
          <div class="f-stat-cell">
            <strong>2000+</strong>
            <span>Projects</span>
          </div>
          <div class="f-stat-cell">
            <strong>7+</strong>
            <span>Years</span>
          </div>
          <div class="f-stat-cell">
            <strong>50+</strong>
            <span>Students</span>
          </div>
        </div>
        <div class="founder-action-row">
          <NuxtLink to="/contact" class="btn btn-secondary">Đăng ký tư vấn với Xuân Kiệt</NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 09 — TESTIMONIAL (Immersive premium quotes) -->
  <section class="testimonial-immersive-section reveal-on-scroll">
    <div class="max-width text-center">
      <span class="header-tag text-center" style="margin-bottom: 2rem;">CẢM NHẬN TỪ NGHỆ SĨ</span>
      
      <div class="testimonial-slider-wrap glass-card">
        <div class="testimonial-slider-glow"></div>
        <span class="quote-giant-icon">“</span>
        
        <div class="slider-content-container">
          <Transition name="fade" mode="out-in">
            <div :key="activeTestimonialIdx" class="testimonial-slide">
              <p class="testimonial-quote-text">
                "{{ activeTestimonial.body }}"
              </p>
              
              <div class="testimonial-author-meta">
                <div class="author-avatar-wrap">
                  <img :src="activeTestimonial.avatar" :alt="activeTestimonial.name" class="author-avatar-img" />
                </div>
                <div class="author-info">
                  <strong class="author-name">{{ activeTestimonial.name }}</strong>
                  <span class="author-role">{{ activeTestimonial.role }}</span>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Slider pagination buttons -->
        <div class="slider-nav-btns">
          <button class="nav-arrow" @click="prevTestimonial" aria-label="Nhận xét trước"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="slide-dots">
            <span 
              v-for="(t, idx) in testimonials" 
              :key="t.name" 
              class="slide-dot" 
              :class="{ active: activeTestimonialIdx === idx }"
              @click="activeTestimonialIdx = idx"
            ></span>
          </div>
          <button class="nav-arrow" @click="nextTestimonial" aria-label="Nhận xét tiếp"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>

      <!-- Google Reviews summary badge -->
      <div class="google-reviews-badge">
        <div class="reviews-score">4.9 / 5</div>
        <div class="reviews-label-tag">2000+ đánh giá thực tế từ nghệ sĩ</div>
        <a href="https://g.page/r/xkproduction/review" target="_blank" rel="noopener" class="btn btn-link-google">
          <i class="fa-brands fa-google"></i>
          <span>Xem tất cả đánh giá trên Google</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 10 — BIG NUMBER MOMENT (Apple presentation scale) -->
  <section class="big-numbers-section reveal-on-scroll">
    <div class="max-width numbers-flex">
      <div class="number-block">
        <h2 class="big-huge-number">2000+</h2>
        <span class="number-caption">Bản nhạc đã được hoàn thành xuất sắc</span>
      </div>
      <div class="number-block">
        <h2 class="big-huge-number">7+</h2>
        <span class="number-caption">Năm kinh nghiệm thực chiến trong ngành</span>
      </div>
      <div class="number-block">
        <h2 class="big-huge-number">∞</h2>
        <span class="number-caption">Ý tưởng đã được hiện thực hoá thành âm nhạc</span>
      </div>
    </div>
  </section>

  <!-- SECTION 11 — CONTACT (Benefits & Glass Form) -->
  <section class="contact-premium-section reveal-on-scroll">
    <div class="max-width contact-split-grid">
      <!-- Left checklists -->
      <div class="contact-benefits-panel">
        <span class="header-tag">KẾT NỐI NGAY</span>
        <h2 class="benefits-title">Khởi động hành trình âm nhạc của bạn</h2>
        <p class="benefits-subtitle">Bất kể bạn đang ở giai đoạn nào của ý tưởng, chúng tôi luôn có giải pháp tối ưu nhất để hiện thực hóa ước mơ.</p>
        
        <div class="benefits-checklist">
          <div class="benefit-item">
            <span class="check-icon"><i class="fa-solid fa-circle-check"></i></span>
            <div>
              <strong>Tư vấn Concept & Định hướng miễn phí</strong>
              <p>Phân tích chất giọng và phong cách âm nhạc để tìm ra phối cảnh tốt nhất.</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="check-icon"><i class="fa-solid fa-circle-check"></i></span>
            <div>
              <strong>Quy trình sản xuất rõ ràng</strong>
              <p>Mỗi bước thực hiện đều được thống nhất ý kiến chặt chẽ với nghệ sĩ.</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="check-icon"><i class="fa-solid fa-circle-check"></i></span>
            <div>
              <strong>Báo giá chi tiết, không phát sinh</strong>
              <p>Cam kết minh bạch tài chính tối đa cho từng hạng mục công việc.</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="check-icon"><i class="fa-solid fa-circle-check"></i></span>
            <div>
              <strong>Phản hồi & hỗ trợ siêu tốc 24h</strong>
              <p>Luôn sát cánh bên nghệ sĩ cho đến khi sản phẩm phát hành hoàn thiện.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Glass Form -->
      <div class="contact-form-panel">
        <div class="form-container-glass glass-card">
          <h3 class="form-headline">Gửi nhanh yêu cầu</h3>
          <p class="form-subheadline">Chúng tôi sẽ chủ động liên hệ tư vấn trong 24 giờ làm việc.</p>

          <Transition name="toast">
            <div v-if="formToast !== 'idle'" class="form-toast" :class="`form-toast-${formToast}`" role="alert">
              <i v-if="formToast === 'success'" class="fa-solid fa-circle-check"></i>
              <i v-else class="fa-solid fa-circle-exclamation"></i>
              <span>{{ formToast === 'success' ? 'Gửi thành công! XKProduction sẽ liên hệ bạn sớm.' : formErrorMessage }}</span>
            </div>
          </Transition>

          <form class="luxury-form" @submit.prevent="submitForm" novalidate>
            <div class="form-group-premium">
              <label for="name">Họ và tên <span class="req">*</span></label>
              <input id="name" v-model="form.name" type="text" placeholder="Nguyễn Văn A" :class="{ error: formErrors.name }" @blur="validateField('name')" />
              <span v-if="formErrors.name" class="field-error-text">{{ formErrors.name }}</span>
            </div>
            
            <div class="form-row-premium">
              <div class="form-group-premium">
                <label for="phone">Số điện thoại <span class="req">*</span></label>
                <input id="phone" v-model="form.phone" type="tel" placeholder="09xx.xxx.xxx" :class="{ error: formErrors.phone }" @blur="validateField('phone')" />
                <span v-if="formErrors.phone" class="field-error-text">{{ formErrors.phone }}</span>
              </div>
              <div class="form-group-premium">
                <label for="type">Dịch vụ cần tư vấn</label>
                <div class="custom-select-wrap">
                  <select id="type" v-model="form.type">
                    <option value="">Chọn dịch vụ...</option>
                    <option>Thu âm & Vocal Production</option>
                    <option>Mix & Master</option>
                    <option>Hoà âm phối khí</option>
                    <option>Quay MV / TVC</option>
                    <option>Âm thanh sự kiện</option>
                    <option>Khoá học Music Producer</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group-premium">
              <label for="message">Lời nhắn / Yêu cầu đặc biệt</label>
              <textarea id="message" v-model="form.message" placeholder="Mô tả ý tưởng hoặc yêu cầu của dự án..." rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full-width" :disabled="formSubmitting">
              <i v-if="formSubmitting" class="fa-solid fa-spinner fa-spin" style="margin-right: 0.5rem"></i>
              <span>{{ formSubmitting ? 'ĐANG XỬ LÝ...' : 'GỬI YÊU CẦU ĐĂNG KÝ' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 12 — FINAL CTA -->
  <section class="final-cta-section reveal-on-scroll">
    <div class="cta-glow-spot"></div>
    <div class="max-width text-center">
      <h2 class="final-cta-title">Bạn đã sẵn sàng cho dự án tiếp theo?</h2>
      <p class="final-cta-desc">Hãy cùng XKProduction kiến tạo nên bản phối tuyệt vời tiếp theo.</p>
      <NuxtLink to="/contact" class="btn btn-primary btn-pulse btn-large">Bắt đầu dự án ngay</NuxtLink>
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
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue'

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
        "email": "xkstudio29@gmail.com",
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
    email: 'xkstudio29@gmail.com',
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

/* === INTERACTIVE STATES === */
const activeProjectIdx = ref(0)
const activeServiceIdx = ref(0)
const activeTestimonialIdx = ref(0)
const heroVisualRef = ref<HTMLElement | null>(null)

/* === HERO MOUSE PARALLAX EFFECT === */
function handleHeroParallax(e: MouseEvent) {
  if (!heroVisualRef.value) return
  const rect = heroVisualRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  heroVisualRef.value.style.transform = `perspective(1000px) rotateY(${x * 0.015}deg) rotateX(${-y * 0.015}deg) scale3d(1.01, 1.01, 1.01)`
}

function resetHeroParallax() {
  if (!heroVisualRef.value) return
  heroVisualRef.value.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`
}

/* === STATS DATA === */
const stats = [
  { value: '2000+', target: 2000, label: 'Dự án hoàn thiện' },
  { value: '7+', target: 7, label: 'Năm kinh nghiệm' },
  { value: '50+', target: 50, label: 'Học viên đào tạo' },
  { value: '30+', target: 30, label: 'Đối tác tin tưởng' }
]

/* === ALL FEATURED PROJECTS DATA (6 Videos + 1 Audio Demo) === */
const works = [
  {
    title: 'Chẳng Muốn Nói Nhiều Lời',
    artist: 'Revan',
    category: 'Sản Xuất Âm Nhạc / R&B',
    story: 'Bản phối mang đậm chất hiện đại pha trộn R&B cá tính, xử lý không gian đa chiều tinh tế tạo nên điểm tựa cảm xúc sâu sắc cho giọng ca.',
    theme: 'blue',
    url: 'https://www.youtube.com/watch?v=IxlFvQQP_4c',
    thumb: 'https://img.youtube.com/vi/IxlFvQQP_4c/hqdefault.jpg',
    embedId: 'IxlFvQQP_4c'
  },
  {
    title: 'Love Dự Phòng',
    artist: 'Howl',
    category: 'Vocal Production / Acoustic',
    story: 'Tập trung triệt để vào xúc cảm mộc mạc và sự chân thật. Vocal ấm áp nổi bật trên nền nhạc cụ live acoustic được căn chỉnh chuẩn mực.',
    theme: 'red',
    url: 'https://www.youtube.com/watch?v=OCnKTCslJUU',
    thumb: 'https://img.youtube.com/vi/OCnKTCslJUU/hqdefault.jpg',
    embedId: 'OCnKTCslJUU'
  },
  {
    title: 'Kiếp Sau',
    artist: 'Phương Thanh Tuyền',
    category: 'Mixing & Mastering / Ballad',
    story: 'Bản ballad đầy hoài niệm được mixing & mastering chuẩn phát hành số, mang lại dải âm cực kỳ sạch sẽ, ấm áp và giàu năng lượng.',
    theme: 'dark',
    url: 'https://www.youtube.com/watch?v=z4GB-X1OiPg',
    thumb: 'https://img.youtube.com/vi/z4GB-X1OiPg/hqdefault.jpg',
    embedId: 'z4GB-X1OiPg'
  },
  {
    title: 'Lý Do Bắt Đầu',
    artist: 'Revan',
    category: 'Sản Xuất Âm Nhạc / Rap Hip-Hop',
    story: 'Con beat căng tràn năng lượng, âm trầm đầm ấm và giọng ca bùng nổ mạnh mẽ, khẳng định tư duy sản xuất Hip-hop chuyên nghiệp và sắc nét.',
    theme: 'blue',
    url: 'https://www.youtube.com/watch?v=vzfr1ddayYY',
    thumb: 'https://img.youtube.com/vi/vzfr1ddayYY/hqdefault.jpg',
    embedId: 'vzfr1ddayYY'
  },
  {
    title: 'Áo Cũ Tình Mới',
    artist: 'Remake Remix',
    category: 'Remix Production / House',
    story: 'Nhịp drop bốc lửa, bassline căng tràn năng lượng được thiết kế tinh xảo, thổi luồng sinh khí EDM sôi động cực chất vào bản phối.',
    theme: 'red',
    url: 'https://www.youtube.com/watch?v=hlvg9YBxRqY',
    thumb: 'https://img.youtube.com/vi/hlvg9YBxRqY/hqdefault.jpg',
    embedId: 'hlvg9YBxRqY'
  },
  {
    title: 'Viết Tiếp Câu Chuyện Hoà Bình',
    artist: 'Mai Linh (Cover)',
    category: 'Orchestral / Vocalist',
    story: 'Phối cảnh dàn nhạc dây hoành tráng đầy hào hùng, nâng đỡ giọng ca thính phòng bay cao tràn ngập niềm tự hào và xúc cảm trân trọng.',
    theme: 'dark',
    url: 'https://www.youtube.com/watch?v=P8FPXHJe_go',
    thumb: 'https://img.youtube.com/vi/P8FPXHJe_go/hqdefault.jpg',
    embedId: 'P8FPXHJe_go'
  },
  {
    title: 'Pop R&B Demo Beat',
    artist: 'XKProduction',
    category: 'Audio Beat / Instrumental',
    story: 'Bản beat demo Pop R&B đặc biệt được sản xuất độc quyền tại phòng thu XKProduction. Dải bass siêu sâu đầm, giai điệu mượt mà thăng hoa.',
    theme: 'blue',
    url: '',
    thumb: '/images/blog-hoa-am.jpg',
    embedId: '',
    isAudio: true
  }
]

/* === COMPUTED DEFINITIONS FOR IDE CONCISENESS & TS COMPILER LINT COMPLIANCE === */
const activeProject = computed(() => (works[activeProjectIdx.value] ?? works[0])!)
const activeService = computed(() => (premiumServices[activeServiceIdx.value] ?? premiumServices[0])!)
const activeTestimonial = computed(() => (testimonials[activeTestimonialIdx.value] ?? testimonials[0])!)

/* === PREMIUM AUDIO PLAYER STATE & ACTIONS === */
const audioUrl = '/product-audio-demo/pop-rnb-1-Gm.102.mp3'
const isAudioPlaying = ref(false)
const audioProgress = ref(0)
const audioCurrentTime = ref('0:00')
const audioDuration = ref('0:00')
let audioInstance: HTMLAudioElement | null = null

function formatTime(secs: number) {
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

function selectProject(idx: number) {
  activeProjectIdx.value = idx
  // Auto pause audio if user hovers to a non-audio project
  if (works[idx] && works[idx].isAudio !== true && audioInstance && isAudioPlaying.value) {
    audioInstance.pause()
    isAudioPlaying.value = false
  }
}

function toggleAudio() {
  if (!import.meta.client) return
  if (!audioInstance) {
    audioInstance = new Audio(audioUrl)
    audioInstance.addEventListener('timeupdate', () => {
      if (!audioInstance) return
      audioProgress.value = (audioInstance.currentTime / audioInstance.duration) * 100
      audioCurrentTime.value = formatTime(audioInstance.currentTime)
    })
    audioInstance.addEventListener('loadedmetadata', () => {
      if (!audioInstance) return
      audioDuration.value = formatTime(audioInstance.duration)
    })
    audioInstance.addEventListener('ended', () => {
      isAudioPlaying.value = false
      audioProgress.value = 0
      audioCurrentTime.value = '0:00'
    })
  }

  if (isAudioPlaying.value) {
    audioInstance.pause()
    isAudioPlaying.value = false
  } else {
    audioInstance.play().catch(() => {})
    isAudioPlaying.value = true
  }
}

function seekAudio(e: MouseEvent) {
  if (!audioInstance || !audioInstance.duration) return
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const width = rect.width
  const percentage = clickX / width
  audioInstance.currentTime = percentage * audioInstance.duration
}

/* === PREMIUM SERVICES DATA === */
const premiumServices = [
  { 
    id: '01', 
    title: 'Hoà âm phối khí', 
    desc: 'Đánh thức linh hồn của bài hát. Từ ý tưởng thô sơ đến bản phối lộng lẫy, chuẩn quốc tế trên mọi nền tảng âm nhạc số.', 
    link: '/hoa-am-phoi-khi', 
    thumb: '/images/blog-hoa-am.jpg', 
    ctaText: 'Khám phá Hoà Âm Phối Khí' 
  },
  { 
    id: '02', 
    title: 'Mix & Master', 
    desc: 'Cân bằng và tối ưu hóa âm thanh tuyệt đối. Đạt chuẩn loudness của Spotify, Apple Music giúp âm nhạc sắc nét trên mọi thiết bị phát.', 
    link: '/mix-master', 
    thumb: '/images/blog-mix-master.jpg', 
    ctaText: 'Khám phá Mixing & Mastering' 
  },
  { 
    id: '03', 
    title: 'Thu âm', 
    desc: 'Session thu âm chuyên nghiệp với trang thiết bị cao cấp, sự kiên nhẫn hướng dẫn vocal chi tiết giúp ca sĩ thoải mái bộc lộ cảm xúc.', 
    link: '/thu-am', 
    thumb: '/images/blog-phong-thu.jpg', 
    ctaText: 'Khám phá Dịch vụ Thu Âm' 
  },
  { 
    id: '04', 
    title: 'Live Band', 
    desc: 'Setup âm thanh ánh sáng sân khấu và ban nhạc live trọn gói. Đảm bảo năng lượng bùng nổ chân thực cho các sự kiện biểu diễn trực tiếp.', 
    link: '/live-band', 
    thumb: '/images/quocchi-2.jpg', 
    ctaText: 'Khám phá Dịch vụ Live Band' 
  }
]

/* === WHY CHOOSE US DATA === */
const whyChooseUs = [
  {
    icon: 'fa-solid fa-signature',
    title: 'Không sản xuất đại trà',
    desc: 'Mỗi bài hát là một thực thể độc bản. Chúng tôi đầu vt thời gian tối đa để nghiên cứu cá tính âm nhạc riêng của bạn.'
  },
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Không dùng template có sẵn',
    desc: 'Toàn bộ nhạc cụ ảo và các pattern phối khí được xây dựng thủ công từ vạch xuất phát, bảo đảm không trùng lặp ý tưởng.'
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Tập trung vào cảm xúc',
    desc: 'Kỹ thuật phòng thu đắt tiền chỉ là công cụ hỗ trợ. Mục tiêu tối thượng của chúng tôi là truyền tải trọn vẹn cảm xúc của người viết.'
  },
  {
    icon: 'fa-solid fa-handshake-angle',
    title: 'Đồng hành trọn vẹn',
    desc: 'Tư vấn từ lúc còn là demo thô, hỗ trợ chỉnh sửa tỉ mỉ cho đến khi sản phẩm chính thức xuất hiện trên các nền tảng phân phối.'
  }
]

/* === PROCESS TIMELINE DATA === */
const processSteps = [
  { num: '01', title: 'Gửi Demo', desc: 'Gửi bản demo thu âm thô bằng điện thoại hoặc file nháp sơ bộ của bạn.' },
  { num: '02', title: 'Ý tưởng', desc: 'Trao đổi định hướng concept âm nhạc, nhịp điệu và cảm xúc mong muốn.' },
  { num: '03', title: 'Sản xuất', desc: 'Tiến hành hoà âm phối khí, chọn nhạc cụ và dựng bản mix xương sống.' },
  { num: '04', title: 'Chỉnh sửa', desc: 'Lắng nghe phản hồi của nghệ sĩ để tinh chỉnh từng nhạc cụ cho đến khi ưng ý nhất.' },
  { num: '05', title: 'Hoàn thiện', desc: 'Mix & master chuyên sâu chuẩn Spotify và bàn giao đầy đủ các track chất lượng cao.' }
]

/* === TESTIMONIALS SLIDER LOGIC === */
const testimonials = [
  {
    name: 'Revan',
    role: 'Nghệ Sĩ / Rapper',
    avatar: '/images/revan.jpg',
    project: 'Chẳng Muốn Nói Nhiều Lời',
    body: 'Mình đã trải qua không ít phòng thu, nhưng XKProduction là nơi đầu tiên mình cảm thấy âm nhạc của mình được thực sự lắng nghe. Từ khâu tư vấn concept đến lúc bản mix hoàn thiện, mọi chi tiết đều được chăm chút cẩn thận. Kiệt và team không chỉ làm đúng yêu cầu — họ còn biết cách đẩy bản nhạc lên một tầng cao hơn mà mình chưa nghĩ tới.'
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
    role: 'Ca Sĩ Tự Do',
    avatar: '/images/cao-thanh-lam.jpg',
    project: '',
    body: 'Với mình, giọng hát là tất cả. XKProduction hiểu điều đó. Họ biết cách thu âm để giọng ca được trình bày tự nhiên nhất, không bị xử lý quá tay. Mỗi session ở đây đều thoải mái và hiệu quả. Chắc chắn sẽ quay lại cho những dự án tiếp theo.'
  },
  {
    name: 'Phương Thanh Tuyền',
    role: 'Singer',
    avatar: '/images/quocchi-3.jpg',
    project: 'Kiếp Sau (Cover)',
    body: 'Lần đầu vào studio mình khá hồi hộp, nhưng không khí ở XKProduction rất thân thiện và chuyên nghiệp. Anh Kiệt tư vấn rất tận tình, giúp mình chọn được tone phù hợp với chất giọng. Bản thu hoàn thành đúng hạn, âm thanh ấm và sạch — đúng những gì mình cần.'
  }
]

function nextTestimonial() {
  activeTestimonialIdx.value = (activeTestimonialIdx.value + 1) % testimonials.length
}

function prevTestimonial() {
  activeTestimonialIdx.value = (activeTestimonialIdx.value - 1 + testimonials.length) % testimonials.length
}

/* === LIGHTBOX MODAL STATE === */
const lightbox = reactive({
  open: false,
  title: '',
  artist: '',
  url: '',
  embedId: ''
})

function openLightbox(w: any) {
  lightbox.title = w.title
  lightbox.artist = w.artist
  lightbox.url = w.url || ''
  lightbox.embedId = w.embedId || ''
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

/* === CONTACT FORM STATE & SUBMIT === */
const form = reactive({ name: '', phone: '', type: '', message: '' })
const formErrors = reactive({ name: '', phone: '' })
const formToast = ref<'idle' | 'success' | 'error'>('idle')
const formErrorMessage = ref('')
const formSubmitting = ref(false)

function validateField(field: 'name' | 'phone') {
  if (field === 'name') {
    formErrors.name = form.name.trim().length < 2 ? 'Vui lòng nhập họ và tên của bạn' : ''
  }
  if (field === 'phone') {
    const p = form.phone.replace(/[.\s-]/g, '')
    formErrors.phone = !/^(0[3-9]\d{8})$/.test(p) ? 'Số điện thoại không hợp lệ (cần có 10 chữ số)' : ''
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
      formErrorMessage.value = 'Gửi thông tin thất bại. Vui lòng thử lại sau.'
    }
  } catch (error) {
    formSubmitting.value = false
    formToast.value = 'error'
    formErrorMessage.value = 'Lỗi kết nối. Vui lòng kiểm tra internet và gửi lại.'
  }
  setTimeout(() => { formToast.value = 'idle' }, 5000)
}

/* === ONMOUNTED ANIMATION triggers === */
onMounted(() => {
  if (!import.meta.client) return
  
  /* --- STATS COUNTER ANIMATION --- */
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target as HTMLElement
      const target = parseInt(el.dataset.target || '0')
      if (!target) return
      let current = 0
      const step = Math.max(1, Math.floor(target / 50))
      const timer = setInterval(() => {
        current += step
        if (current >= target) { current = target; clearInterval(timer) }
        el.textContent = current + (el.textContent?.includes('+') ? '+' : '')
      }, 30)
      statsObserver.unobserve(el)
    })
  }, { threshold: 0.3 })
  
  document.querySelectorAll('.stat-number[data-target]').forEach(el => statsObserver.observe(el))
  
  /* --- SCROLL REVEAL FADE ANIMATION --- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target as HTMLElement
      el.classList.add('revealed')
      revealObserver.unobserve(el)
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })
  
  document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el))
})
</script>

<style scoped>
/* ==============================================
   LAYOUT & SCROLLING ANCHORS
   ============================================== */
.home-page {
  position: relative;
  min-height: 100vh;
  padding-top: 80px;
  background-color: var(--bg-dark);
  color: var(--text-main);
  overflow-x: hidden;
}

/* Vertical Spacing System */
.hero-section {
  padding: 120px 0 160px;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

.statement-section,
.stats-bar-premium,
.featured-work-section,
.services-premium-section,
.why-us-section,
.process-section,
.founder-section-premium,
.testimonial-immersive-section,
.big-numbers-section,
.contact-premium-section,
.final-cta-section {
  padding: 140px 0;
  position: relative;
  z-index: 1;
  transition: transform 0.8s var(--ease-out-expo), opacity 0.8s var(--ease-out-expo);
}

/* ==============================================
   INTERACTIVE AMBIENT GLOW BACKDROP
   ============================================== */
.immersive-ambient-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-color: var(--bg-dark);
  transition: background 1.2s var(--ease-out-expo);
}

.glow-spot {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.22;
  transition: all 1.2s var(--ease-out-expo);
}

.spotlight-1 {
  width: 500px;
  height: 500px;
  top: -10%;
  left: -10%;
}

.spotlight-2 {
  width: 600px;
  height: 600px;
  bottom: -10%;
  right: -10%;
}

/* Shifting theme backdrops */
.theme-blue .spotlight-1 { background: rgba(125, 211, 252, 0.4); }
.theme-blue .spotlight-2 { background: rgba(56, 189, 248, 0.25); }

.theme-red .spotlight-1 { background: rgba(244, 63, 94, 0.35); }
.theme-red .spotlight-2 { background: rgba(225, 29, 72, 0.2); }

.theme-dark .spotlight-1 { background: rgba(245, 158, 11, 0.25); }
.theme-dark .spotlight-2 { background: rgba(13, 23, 36, 0.6); }


/* ==============================================
   TYPOGRAPHICAL GLOW TEXTS
   ============================================== */
.text-glow-gradient {
  background: linear-gradient(135deg, #f8fafc 0%, #7dd3fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 3px;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 1.2rem;
}

.header-title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.25;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.header-title-heavy {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin-bottom: 2.5rem;
}


/* ==============================================
   SECTION 01 — HERO SCOPED
   ============================================== */
.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-label {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 6px;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.6rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1.8rem;
}

.hero-desc {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-light);
  margin-bottom: 2.8rem;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.hero-visual-wrapper {
  perspective: 1000px;
}

.hero-visual {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  transition: transform 0.4s var(--ease-out-expo);
}

.hero-studio-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform 1.2s var(--ease-out-expo);
}

.hero-visual:hover .hero-studio-img {
  transform: scale(1.05);
}

.glass-reflection-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 60%, rgba(255, 255, 255, 0.02) 100%);
  pointer-events: none;
}


/* ==============================================
   SECTION 02 — FEATURED STATEMENT
   ============================================== */
.statement-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 0 1rem;
}

.statement-text {
  font-size: 2.4rem;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
  color: var(--text-light);
  letter-spacing: -0.02em;
  max-width: 960px;
}


/* ==============================================
   SECTION 03 — TRUST BAR (Floating stats)
   ============================================== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-premium-card {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease, box-shadow 0.4s ease;
}

.stat-premium-card .stat-glow {
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(125, 211, 252, 0.06) 0%, transparent 70%);
  top: -20px;
  left: -20px;
  pointer-events: none;
}

.stat-number-wrap {
  display: flex;
  align-items: center;
}

.stat-number {
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.03em;
  line-height: 1;
  background: linear-gradient(180deg, #f8fafc 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--text-light);
  text-transform: uppercase;
  margin-top: 1rem;
}


/* ==============================================
   SECTION 04 — FEATURED WORK SELECTOR (Sleek All 7)
   ============================================== */
.section-header-minimal {
  margin-bottom: 4rem;
}

.showcase-container {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 4rem;
  align-items: center;
}

.project-selector-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.selector-item {
  background: transparent;
  border: none;
  padding: 1.1rem 1.8rem;
  text-align: left;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.4s var(--ease-out-expo);
  border: 1px solid transparent;
}

.selector-item::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) scaleY(0);
  width: 3px;
  height: 28px;
  background: var(--accent);
  transition: transform 0.4s var(--ease-out-expo);
  border-radius: 0 4px 4px 0;
}

.selector-item:hover,
.selector-item.active {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.selector-item.active::after {
  transform: translateY(-50%) scaleY(1);
}

.selector-num {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.3rem;
}

.selector-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.15rem;
  letter-spacing: -0.01em;
  transition: color 0.3s;
}

.selector-artist {
  font-size: 0.8rem;
  color: var(--text-light);
  font-weight: 500;
}

/* Display card style */
.project-display-box {
  padding: 3rem;
  position: relative;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease;
}

.display-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  top: -50px;
  right: -50px;
  pointer-events: none;
  transition: background 0.8s ease;
}

.project-display-box.theme-blue .display-glow { background: var(--accent); }
.project-display-box.theme-red .display-glow { background: #f43f5e; }
.project-display-box.theme-dark .display-glow { background: #f59e0b; }

.project-image-wrap {
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #020508;
}

.project-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-out-expo);
}

.project-image-wrap:hover .project-cover-img {
  transform: scale(1.03);
}

.play-btn-circle {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  color: #071018;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.play-btn-circle:hover {
  transform: scale(1.1);
  background: var(--text-main);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.play-btn-circle i {
  margin-left: 4px;
}

.project-meta-details {
  margin-top: 2.5rem;
}

.project-tag {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--accent);
  letter-spacing: 1px;
  margin-bottom: 0.8rem;
}

.project-display-box.theme-red .project-tag { color: #f43f5e; }
.project-display-box.theme-dark .project-tag { color: #f59e0b; }

.project-meta-details .project-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.project-story {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 2rem;
  max-width: 580px;
}

.btn-link-premium {
  background: transparent;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-main);
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0;
  cursor: pointer;
  transition: gap 0.3s;
}

.btn-link-premium:hover {
  gap: 1rem;
}

.btn-link-premium i {
  font-size: 0.8rem;
  color: var(--accent);
  transition: transform 0.3s;
}

.project-display-box.theme-red .btn-link-premium i { color: #f43f5e; }
.project-display-box.theme-dark .btn-link-premium i { color: #f59e0b; }


/* ==============================================
   PREMIUM CUSTOM AUDIO PLAYER SUB-COMPONENTS
   ============================================== */
.audio-player-container-display {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0d1724 0%, #071018 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.audio-waves {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  height: 80px;
  width: 100%;
}

.wave-bar {
  display: inline-block;
  width: 4px;
  height: 80px;
  background: linear-gradient(180deg, var(--accent) 0%, rgba(125, 211, 252, 0.1) 100%);
  border-radius: 2px;
  transform-origin: bottom;
  transform: scaleY(0.15);
  transition: transform 0.3s var(--ease-out-expo);
}

.audio-waves.playing .wave-bar {
  animation: waveStretch 1.2s ease-in-out infinite alternate;
  animation-delay: var(--delay);
}

@keyframes waveStretch {
  0% { transform: scaleY(0.15); }
  100% { transform: scaleY(var(--height-multiplier)); }
}

.play-btn-circle-audio {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--text-main);
  border: none;
  color: #071018;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: all 0.3s var(--ease-out-expo);
}

.play-btn-circle-audio:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 30px rgba(125, 211, 252, 0.2);
}

.play-btn-circle-audio i {
  /* Offset play icon slightly to align perfectly in center */
  margin-left: 2px;
}

.audio-seek-wrapper {
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.2rem;
  border-radius: 12px;
}

.audio-progress-track {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.audio-progress-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
  width: 0;
  transition: width 0.1s linear;
}

.audio-time-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-light);
  font-family: monospace;
}


/* ==============================================
   SECTION 05 — SERVICES SCOPED (Split)
   ============================================== */
.services-grid-split {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
}

.services-left-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.services-menu {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 100%;
  margin-top: 1rem;
}

.service-menu-item {
  background: transparent;
  border: none;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 1.8rem;
  cursor: pointer;
  padding: 0.8rem 0;
  transition: all 0.3s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.svc-num {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-muted);
  font-family: monospace;
  transition: color 0.3s;
}

.svc-text {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-muted);
  letter-spacing: -0.02em;
  transition: all 0.3s;
}

.service-menu-item:hover .svc-text,
.service-menu-item.active .svc-text {
  color: var(--text-main);
  transform: translateX(10px);
}

.service-menu-item:hover .svc-num,
.service-menu-item.active .svc-num {
  color: var(--accent);
}

/* Right preview panel styling */
.services-right-panel {
  perspective: 1000px;
}

.services-preview-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease;
}

.preview-img-wrap {
  aspect-ratio: 16/10;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(13, 23, 36, 0.85) 100%);
}

.preview-content {
  padding: 3rem;
}

.preview-title {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 1rem;
}

.preview-desc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-light);
  margin-bottom: 2rem;
  min-height: 68px;
}


/* ==============================================
   SECTION 06 — WHY XKPRODUCTION
   ============================================== */
.why-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.why-premium-card {
  padding: 3.5rem 3rem;
  transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease;
}

.card-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(125, 211, 252, 0.06);
  border: 1px solid rgba(125, 211, 252, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

.why-premium-card h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.why-premium-card p {
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--text-light);
}


/* ==============================================
   SECTION 07 — PROCESS (horizontal timeline)
   ============================================== */
.process-timeline-container {
  padding: 4rem 3rem;
  margin-top: 1rem;
  position: relative;
  transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease;
}

.process-line {
  position: absolute;
  top: 110px;
  left: 8%;
  right: 8%;
  height: 2px;
  background: rgba(255, 255, 255, 0.05);
  z-index: 0;
}

.process-progress-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--accent) 0%, rgba(125, 211, 252, 0.2) 100%);
  transform-origin: left;
  transform: scaleX(1);
}

.process-steps-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.process-step-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-badge {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--bg-surface);
  border: 2px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px rgba(125, 211, 252, 0.1);
  transition: all 0.3s;
}

.step-num {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--text-main);
  font-family: monospace;
}

.process-step-node:hover .step-badge {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(125, 211, 252, 0.25);
  background: rgba(125, 211, 252, 0.05);
}

.step-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.8rem;
  letter-spacing: -0.01em;
}

.step-desc {
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--text-light);
  max-width: 160px;
}


/* ==============================================
   SECTION 08 — FOUNDER
   ============================================== */
.founder-grid-premium {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
}

.founder-portrait-wrap {
  perspective: 1000px;
}

.portrait-card {
  padding: 0;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4/5;
  position: relative;
  transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease;
}

.founder-portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(108%);
  transition: all 0.8s var(--ease-out-expo);
}

.portrait-card:hover .founder-portrait-img {
  filter: grayscale(10%) contrast(103%);
  transform: scale(1.02);
}

.portrait-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(7, 16, 24, 0.7) 100%);
  pointer-events: none;
}

.founder-editorial-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.founder-name-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.founder-main-name {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-main);
  letter-spacing: -0.02em;
  margin: 0;
}

.founder-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(125, 211, 252, 0.06);
  border: 1px solid rgba(125, 211, 252, 0.15);
  color: var(--accent);
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 20px;
}

.founder-philosophy {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.founder-bold-quote {
  font-size: 1.4rem;
  font-weight: 600;
  font-style: italic;
  line-height: 1.5;
  color: var(--text-main);
  border-left: 3px solid var(--accent);
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;
  max-width: 520px;
}

.founder-footer-stats {
  display: flex;
  gap: 3rem;
  margin-bottom: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 2rem;
  width: 100%;
}

.f-stat-cell {
  display: flex;
  flex-direction: column;
}

.f-stat-cell strong {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1;
}

.f-stat-cell span {
  font-size: 0.72rem;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0.5rem;
}


/* ==============================================
   SECTION 09 — TESTIMONIAL SCOPED
   ============================================== */
.testimonial-immersive-section {
  position: relative;
}

.testimonial-slider-wrap {
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 5rem 4rem;
  position: relative;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease;
}

.testimonial-slider-glow {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  filter: blur(80px);
  background: rgba(125, 211, 252, 0.05);
  inset: 0;
  margin: auto;
  pointer-events: none;
}

.quote-giant-icon {
  position: absolute;
  top: 15px;
  left: 45px;
  font-size: 8rem;
  font-family: Georgia, serif;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  pointer-events: none;
}

.testimonial-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-quote-text {
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1.7;
  color: var(--text-main);
  margin-bottom: 2.8rem;
  max-width: 720px;
  font-style: italic;
}

.testimonial-author-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar-wrap {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.author-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(15%);
}

.author-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.author-name {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--text-main);
}

.author-role {
  font-size: 0.72rem;
  color: var(--text-light);
}

/* Slider Controls */
.slider-nav-btns {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 1rem;
}

.nav-arrow {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: var(--text-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: 0.8rem;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--text-main);
  transform: scale(1.05);
}

.slide-dots {
  display: flex;
  gap: 0.6rem;
}

.slide-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 0.3s;
}

.slide-dot.active {
  background: var(--accent);
  transform: scale(1.2);
  box-shadow: 0 0 8px rgba(125, 211, 252, 0.5);
}

/* Google badge style */
.google-reviews-badge {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem 2.8rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(255, 255, 255, 0.01);
}

.reviews-score {
  font-size: 1.8rem;
  font-weight: 800;
  color: #f59e0b;
  line-height: 1;
}

.reviews-label-tag {
  font-size: 0.78rem;
  color: var(--text-light);
  margin: 0.5rem 0 1.2rem;
  font-weight: 600;
}

.btn-link-google {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-main);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 2px;
  transition: all 0.3s;
}

.btn-link-google:hover {
  border-color: var(--text-main);
  color: var(--accent);
}

.btn-link-google i:first-child {
  font-size: 0.95rem;
}

.btn-link-google i:last-child {
  font-size: 0.65rem;
}


/* ==============================================
   SECTION 10 — BIG NUMBER MOMENT
   ============================================== */
.big-numbers-section {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(255, 255, 255, 0.005);
}

.numbers-flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  flex-wrap: wrap;
}

.number-block {
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.big-huge-number {
  font-size: 7rem;
  font-weight: 800;
  line-height: 1;
  color: var(--text-main);
  letter-spacing: -0.04em;
  background: linear-gradient(180deg, #f8fafc 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.number-caption {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-light);
  max-width: 280px;
  font-weight: 500;
}


/* ==============================================
   SECTION 11 — CONTACT
   ============================================== */
.contact-split-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.contact-benefits-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.benefits-title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-main);
  letter-spacing: -0.02em;
  margin-bottom: 1.2rem;
}

.benefits-subtitle {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 3.5rem;
  max-width: 520px;
}

.benefits-checklist {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: 100%;
}

.benefit-item {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}

.benefit-item .check-icon {
  font-size: 1.2rem;
  color: var(--accent);
  margin-top: 0.15rem;
  flex-shrink: 0;
}

.benefit-item strong {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.4rem;
}

.benefit-item p {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-light);
  max-width: 480px;
}

/* Glass Form styling */
.form-container-glass {
  padding: 3.5rem 3rem;
  transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease;
}

.form-headline {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.form-subheadline {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 2.5rem;
}

.luxury-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row-premium {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 1.2rem;
}

.form-group-premium {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.form-group-premium label {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  color: var(--text-light);
  text-transform: uppercase;
}

.form-group-premium input,
.form-group-premium select,
.form-group-premium textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.95rem 1.2rem;
  color: var(--text-main);
  font-family: inherit;
  font-size: 0.88rem;
  transition: all 0.3s;
  font-weight: 500;
}

.form-group-premium input::placeholder,
.form-group-premium textarea::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.form-group-premium input:focus,
.form-group-premium select:focus,
.form-group-premium textarea:focus {
  outline: none;
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.04);
}

/* Custom Select styling */
.custom-select-wrap {
  position: relative;
}

.custom-select-wrap select {
  appearance: none;
  cursor: pointer;
  padding-right: 2.5rem;
}

.custom-select-wrap::after {
  content: '\f107';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  pointer-events: none;
  font-size: 0.88rem;
}

.form-group-premium input.error {
  border-color: rgba(244, 63, 94, 0.5) !important;
  background: rgba(244, 63, 94, 0.03) !important;
}

.field-error-text {
  font-size: 0.72rem;
  color: #f43f5e;
  font-weight: 600;
  margin-top: 0.2rem;
}

.req {
  color: #f43f5e;
}

.btn-full-width {
  width: 100%;
  padding: 1.1rem;
  letter-spacing: 1.5px;
  font-size: 0.78rem;
  text-transform: uppercase;
  margin-top: 1rem;
}

.btn-full-width:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

/* Toast alert inside form */
.form-toast {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  font-size: 0.82rem;
  font-weight: 700;
}

.form-toast-success {
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.form-toast-error {
  background: rgba(244, 63, 94, 0.06);
  border: 1px solid rgba(244, 63, 94, 0.2);
  color: #f43f5e;
}

.form-toast i {
  font-size: 1.1rem;
  flex-shrink: 0;
}


/* ==============================================
   SECTION 12 — FINAL CTA
   ============================================== */
.final-cta-section {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  position: relative;
  overflow: hidden;
}

.cta-glow-spot {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 211, 252, 0.08) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(80px);
  pointer-events: none;
}

.final-cta-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-main);
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.final-cta-desc {
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 3.5rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.btn-large {
  padding: 1.1rem 2.8rem;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}


/* ==============================================
   REVEAL ON SCROLL MOTIONS (Smoother curves)
   ============================================== */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 1.2s var(--ease-out-expo), transform 1.2s var(--ease-out-expo);
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}


/* ==============================================
   TRANSITION TRANSFORMS
   ============================================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s var(--ease-out-expo);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.5s var(--ease-out-expo), transform 0.5s var(--ease-out-expo);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

.toast-enter-active, 
.toast-leave-active { 
  transition: all 0.35s var(--ease-out-expo); 
}

.toast-enter-from, 
.toast-leave-to { 
  opacity: 0; 
  transform: translateY(-8px); 
}


/* ==============================================
   LIGHTBOX COMPONENT SCOPED
   ============================================== */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: rgba(7, 16, 24, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.25s ease forwards;
}

@keyframes fadeIn { 
  from { opacity: 0 } 
  to { opacity: 1 } 
}

.lightbox-inner {
  position: relative;
  width: 100%;
  max-width: 880px;
  background: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.8);
  animation: slideUp 0.35s var(--ease-out-expo) forwards;
}

@keyframes slideUp { 
  from { transform: translateY(30px); opacity: 0 } 
  to { transform: translateY(0); opacity: 1 } 
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-main);
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.lightbox-iframe {
  width: 100%;
  aspect-ratio: 16/9;
  display: block;
  border: none;
  background: #000;
}

.lightbox-tiktok-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 5rem 2rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(135deg, #010101 0%, #0d1724 100%);
  transition: all 0.3s;
}

.lightbox-tiktok-link:hover {
  color: var(--accent);
}

.lightbox-tiktok-link i {
  font-size: 2.2rem;
}

.lightbox-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.8rem;
  background: rgba(255, 255, 255, 0.01);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.lightbox-info strong {
  font-size: 1rem;
  color: var(--text-main);
}

.lightbox-info span {
  font-size: 0.88rem;
  color: var(--text-light);
}


/* ==============================================
   RESPONSIVENESS (RWD)
   ============================================== */
@media (max-width: 1200px) {
  .hero-title { font-size: 3rem; }
  .final-cta-title { font-size: 3rem; }
  .services-grid-split { gap: 3rem; }
  .founder-grid-premium { gap: 3rem; }
}

@media (max-width: 1024px) {
  .hero-container { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
  .hero-content { align-items: center; }
  .hero-desc { margin-left: auto; margin-right: auto; }
  .hero-actions { justify-content: center; }
  .hero-visual { max-width: 480px; margin: 0 auto; aspect-ratio: 1/1; }
  
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .showcase-container { grid-template-columns: 1fr; gap: 3rem; }
  .project-display-box { min-height: auto; }
  .services-grid-split { grid-template-columns: 1fr; gap: 4rem; }
  .services-preview-card { max-width: 600px; margin: 0 auto; }
  .why-cards-grid { grid-template-columns: 1fr; }
  .process-timeline-container { padding: 3rem 1.5rem; overflow-x: auto; }
  .process-line { display: none; }
  .process-steps-grid { grid-template-columns: 1fr; gap: 3rem; }
  .step-badge { margin-bottom: 1rem; }
  .step-desc { max-width: 100%; }
  
  .founder-grid-premium { grid-template-columns: 1fr; gap: 3rem; }
  .founder-portrait-wrap { max-width: 400px; margin: 0 auto; }
  .founder-editorial-content { align-items: center; text-align: center; }
  .founder-bold-quote { border-left: none; border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding: 1.5rem 0; margin-left: auto; margin-right: auto; }
  .founder-footer-stats { justify-content: center; }
  .founder-action-row { width: 100%; }
  
  .contact-split-grid { grid-template-columns: 1fr; gap: 4rem; }
  .contact-benefits-panel { align-items: center; text-align: center; }
  .benefits-subtitle { margin-left: auto; margin-right: auto; }
  .benefits-checklist { align-items: flex-start; text-align: left; }
  .contact-form-panel { max-width: 600px; margin: 0 auto; width: 100%; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.4rem; }
  .statement-text { font-size: 1.8rem; }
  .big-huge-number { font-size: 5rem; }
  .final-cta-title { font-size: 2.2rem; }
  
  .hero-section { padding: 60px 0 100px; }
  .statement-section,
  .stats-bar-premium,
  .featured-work-section,
  .services-premium-section,
  .why-us-section,
  .process-section,
  .founder-section-premium,
  .testimonial-immersive-section,
  .big-numbers-section,
  .contact-premium-section,
  .final-cta-section {
    padding: 100px 0;
  }
  
  .testimonial-slider-wrap { padding: 3.5rem 1.8rem; }
  .testimonial-quote-text { font-size: 1.15rem; }
  .form-container-glass { padding: 2.5rem 1.5rem; }
  .form-row-premium { grid-template-columns: 1fr; gap: 1.5rem; }
}

@media (max-width: 480px) {
  .home-page { padding-top: 72px; }
  .hero-title { font-size: 2rem; }
  .statement-text { font-size: 1.5rem; }
  .big-huge-number { font-size: 4rem; }
  .final-cta-title { font-size: 1.8rem; }
  .selector-name { font-size: 1.15rem; }
  .selector-item { padding: 1rem 1.2rem; }
  .project-display-box { padding: 1.5rem; }
  .services-preview-card { padding: 0; }
  .preview-content { padding: 1.8rem 1.2rem; }
  .svc-text { font-size: 1.4rem; }
  .service-menu-item { gap: 1rem; }
  .f-stat-cell strong { font-size: 1.6rem; }
  .founder-footer-stats { gap: 1.5rem; }
  .stats-grid { grid-template-columns: 1fr; }
}
</style>
