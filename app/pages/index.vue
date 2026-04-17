<template>
  <div>
    <!-- CUSTOM HERO -->
    <section class="home-hero">
      <div class="max-width home-hero-grid">
        <div class="home-hero-content">
          <div class="hero-tag">STUDIO - PRODUCTION - VIDEO - ACADEMY</div>
          <h1>XKStudio <br/>Phòng thu âm & media production chuyên nghiệp</h1>
          <p class="hero-desc">
            XKStudio là điểm hẹn của nghệ sĩ, thương hiệu và nhà sản xuất tại Hà Nội. Chúng tôi quy tụ ekip producer, mixing engineer và đạo diễn có tư duy sáng tạo, kinh nghiệm thực chiến, đồng hành cùng bạn từ ý tưởng đến phát hành.
            <br/><br/>
            Thu âm, mix/master, hòa âm phối khí, sản xuất MV/TVC, podcast và tư vấn sản xuất toàn diện.
          </p>
          
          <div class="hero-features">
            <div class="feature-item">
              <span class="icon">✨</span>
              <p>Quy trình vocal production do chuyên gia xây dựng, tối ưu storytelling cảm xúc.</p>
            </div>
            <div class="feature-item">
              <span class="icon">🎚️</span>
              <p>Mixing & mastering chuẩn quốc tế, cá nhân hoá cho Spotify, YouTube, radio.</p>
            </div>
            <div class="feature-item">
              <span class="icon">🎵</span>
              <p>Đội ngũ producer định hướng phong cách, xây dựng bản phối chiến lược.</p>
            </div>
            <div class="feature-item">
              <span class="icon">🎓</span>
              <p>Mentor đồng hành từ training, workshop đến chiến dịch phát hành digital.</p>
            </div>
          </div>

          <div class="hero-actions">
            <NuxtLink to="/contact" class="btn btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; border-radius: 30px;">LIÊN HỆ NGAY</NuxtLink>
            <NuxtLink to="/services" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; border-radius: 30px; border-color: rgba(255,255,255,0.2); color: white;">KHÁM PHÁ DỊCH VỤ</NuxtLink>
            <span class="hotline" style="margin-left: 1rem;">Hotline: <strong>0355.356.294</strong></span>
          </div>

          <div class="hero-footer-tags">
            <span>PRODUCER CHO CA SĨ INDIE & MAINSTREAM</span>
            <span>ĐỐI TÁC CHIẾN LƯỢC CHO DOANH NGHIỆP</span>
            <span>MENTOR ĐÀO TẠO THẾ HỆ PRODUCER MỚI</span>
          </div>
        </div>

        <div class="home-hero-image">
          <img src="/images/hero-studio.png" alt="XKStudio Setup" />
          <p class="image-caption">🎧 Hơn 2800+ dự án thu âm & mix/master phát hành tại Việt Nam.</p>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats" style="margin-top: 2rem; margin-bottom: 6rem; background: var(--bg-surface); padding: 3rem 2rem; border-radius: 12px;">
      <div class="max-width stats-grid">
        <div class="stat-item">
          <div class="stat-number">2000+</div>
          <p>Bài hát, voice-over, podcast & dự án truyền thông được thu âm và hoàn thiện.</p>
        </div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <p>Học viên producer, mixing engineer, vocalist đã hoàn thành khóa học.</p>
        </div>
        <div class="stat-item">
          <div class="stat-number">30+</div>
          <p>Doanh nghiệp, agency, nhà đài hợp tác sản xuất TVC, radio, sự kiện.</p>
        </div>
        <div class="stat-item">
          <div class="stat-number">7 năm</div>
          <p>Kinh nghiệm sản xuất âm nhạc, đào tạo producer & triển khai chiến lược.</p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials">
      <div class="max-width">
        <h2>Khách hàng nói gì về XKStudio?</h2>
        <p class="section-subtitle">Chia sẻ thực tế từ ca sĩ, producer và doanh nghiệp</p>

        <div class="testimonials-grid">
          <div v-for="t in testimonials" :key="t.authorName" class="testimonial-card">
            <div class="stars">{{ t.stars }}</div>
            <p class="quote">{{ t.quote }}</p>
            <div class="author">
              <strong>{{ t.authorName }}</strong>
              <span>{{ t.authorRole }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="final-cta">
      <div class="max-width">
        <h2>Sẵn sàng nâng tầm dự án âm nhạc của bạn?</h2>
        <p>Hãy chia sẻ mục tiêu, chúng tôi sẽ đề xuất giải pháp thu âm, mix/master, video hoặc chiến lược âm thanh phù hợp nhất, đúng ngân sách và timeline.</p>

        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn btn-primary">Tư vấn miễn phí & báo giá</NuxtLink>
          <NuxtLink to="/services" class="btn btn-secondary">Xem danh mục dịch vụ</NuxtLink>
        </div>

        <div class="cta-footer">
          <p>📞 Hotline: <a href="tel:0355356294">0355.356.294</a></p>
          <p>📧 Email: <a href="mailto:xkstudio29@gmail.com">xkstudio29@gmail.com</a></p>
          <p>💬 Zalo: <a href="https://zalo.me/0355356294" target="_blank" rel="noopener">0355.356.294</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Trang chủ',
  description: 'XKStudio - Phòng thu âm & Sản xuất âm nhạc chuyên nghiệp tại Hà Nội. Nơi thăng hoa cảm xúc nghệ thuật.',
  ogTitle: 'Trang chủ - XKStudio'
})

useSchemaOrg([
  defineWebPage({
    name: 'Trang chủ',
    description: 'XKStudio - Phòng thu âm & Sản xuất âm nhạc chuyên nghiệp tại Hà Nội.'
  })
])

useScrollAnimation()

// Testimonials
const testimonials = [
  { stars: '★★★★★', quote: 'Chất lượng dịch vụ tuyệt vời, kỹ thuật viên rất chuyên nghiệp và tâm huyết. Sản phẩm đúng ngày hẹn, âm thanh rất hay.', authorName: 'Nguyễn Hoàng Long', authorRole: 'Rapper / Singer' },
  { stars: '★★★★★', quote: 'Xkstudio giúp tôi hoàn thiện demo sản phẩm rất chuyên nghiệp. Đội ngũ tư vấn rõ ràng, chi phí hợp lý, hỗ trợ tốt.', authorName: 'Nguyễn Khánh Linh', authorRole: 'Composer / Teacher' },
  { stars: '★★★★★', quote: 'Cảm ơn XKStudio rất nhiều. Sản phẩm rất hay và có tâm, nhờ đó tôi đã đạt giải đặc biệt cấp thành phố.', authorName: 'Tống Đức Thành', authorRole: 'Entrepreneur / CEO' },
  { stars: '★★★★★', quote: 'Đội ngũ nhiệt tình, sản phẩm đạt chuẩn phát hành. Mixing chắc chắn, mastering rất chuyên nghiệp. Sẽ tiếp tục hợp tác.', authorName: 'Lạc Việt Anh', authorRole: 'Founder / Producer' }
]
</script>

<style scoped>
.home-hero {
  padding-top: 140px;
  padding-bottom: 4rem;
  background: linear-gradient(135deg, #0a0e27 0%, #11142b 100%);
}

.home-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 992px) {
  .home-hero-grid {
    grid-template-columns: 1fr;
  }
}

.hero-tag {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.home-hero h1 {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: var(--text-main);
}

.hero-desc {
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.hero-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.feature-item .icon {
  font-size: 1.2rem;
  margin-top: 0.2rem;
}

.feature-item p {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.5;
  margin: 0;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.hotline {
  font-size: 0.95rem;
  color: var(--text-light);
}

.hotline strong {
  color: var(--primary);
}

.hero-footer-tags {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.hero-footer-tags span {
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  font-weight: 600;
}

.home-hero-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  object-fit: cover;
  aspect-ratio: 4/3;
}

.image-caption {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.stat-item {
  text-align: left;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-item .stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  text-align: left;
}

.stat-item p {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.5;
  margin: 0;
  text-align: left;
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.testimonial-card {
  background: rgba(20,24,45,0.5);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 1.5rem;
}

.testimonial-card .stars {
  color: #f59e0b;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.testimonial-card .quote {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 1rem;
}

.testimonial-card .author {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.testimonial-card .author strong {
  color: var(--text-main);
  font-size: 0.9rem;
}

.testimonial-card .author span {
  color: var(--text-muted);
  font-size: 0.8rem;
}
</style>
