<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>Liên hệ & Đặt lịch</h1>
        <p class="page-hero-sub">Chia sẻ dự án của bạn — chúng tôi sẽ tư vấn giải pháp phù hợp nhất trong 24 giờ</p>
      </div>
    </section>

    <section style="padding: 5rem 0;">
      <div class="max-width contact-grid">

        <!-- Thông tin liên hệ -->
        <div class="contact-info">
          <h2>Thông tin liên hệ</h2>
          <div v-for="info in contactInfo" :key="info.title" class="contact-item">
            <span class="contact-icon"><i :class="info.faIcon"></i></span>
            <div>
              <strong>{{ info.title }}</strong>
              <div v-html="info.content" class="contact-content"></div>
            </div>
          </div>

          <div class="contact-hours">
            <h3>Giờ làm việc</h3>
            <p>Thứ 2 – Thứ 6: 7:00 – 22:00</p>
            <p>Thứ 7 – Chủ nhật: 8:00 – 20:00</p>
          </div>
        </div>

        <!-- Form liên hệ -->
        <div class="contact-form-wrap">
          <h2>Gửi yêu cầu tư vấn</h2>
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Họ tên *</label>
                <input type="text" id="name" v-model="form.name" placeholder="Nguyễn Văn A" required />
              </div>
              <div class="form-group">
                <label for="phone">Số điện thoại *</label>
                <input type="tel" id="phone" v-model="form.phone" placeholder="0355 356 294" required />
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="email@example.com" />
            </div>
            <div class="form-group">
              <label for="service">Dịch vụ quan tâm *</label>
              <select id="service" v-model="form.service" required>
                <option value="">Chọn dịch vụ...</option>
                <option value="thu-am">Thu âm bài hát</option>
                <option value="mixing-mastering">Mixing & Mastering</option>
                <option value="hoa-am">Hòa âm phối khí</option>
                <option value="mv-tvc">Sản xuất MV / TVC</option>
                <option value="podcast">Podcast / Voice-over</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Mô tả dự án *</label>
              <textarea id="message" v-model="form.message" placeholder="Bài hát thể loại gì? Timeline dự kiến? Ngân sách tham khảo?..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary form-submit">Gửi yêu cầu tư vấn</button>
          </form>
        </div>

      </div>
    </section>

    <!-- Map -->
    <section style="padding: 0 0 5rem;">
      <div class="max-width">
        <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05);">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0838068088755!2d105.8344206!3d20.9913684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31452843ffc2bdd1%3A0xa1c7a6c2d3b6e7f8!2sHanoi%2C%20Vietnam!5e0!3m2!1svi!2svn!4v1640000000000"
            width="100%" height="380" style="border:0; display: block;" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" title="Bản đồ XKStudio"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Liên hệ',
  description: 'Liên hệ XKStudio để đặt lịch thu âm, tư vấn mixing/mastering và sản xuất âm nhạc chuyên nghiệp.',
  ogTitle: 'Liên hệ - XKStudio'
})

useSchemaOrg([
  defineWebPage({
    name: 'Liên hệ',
    description: 'Liên hệ XKStudio để đặt lịch thu âm, tư vấn mixing/mastering và sản xuất âm nhạc chuyên nghiệp.'
  })
])

const form = reactive({ name: '', phone: '', email: '', service: '', message: '' })

const handleSubmit = () => {
  alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24 giờ.')
  Object.assign(form, { name: '', phone: '', email: '', service: '', message: '' })
}

const contactInfo = [
  { faIcon: 'fa-solid fa-phone', title: 'Hotline / Zalo', content: '<a href="tel:0355356294">0355.356.294</a>' },
  { faIcon: 'fa-solid fa-envelope', title: 'Email', content: '<a href="mailto:xkstudio29@gmail.com">xkstudio29@gmail.com</a>' },
  { faIcon: 'fa-solid fa-comment', title: 'Zalo', content: '<a href="https://zalo.me/0355356294" target="_blank" rel="noopener">0355.356.294</a>' },
  { faIcon: 'fa-brands fa-facebook-f', title: 'Facebook', content: '<a href="https://www.facebook.com/ngxkiet" target="_blank" rel="noopener">facebook.com/ngxkiet</a>' },
  { faIcon: 'fa-solid fa-location-dot', title: 'Địa chỉ', content: 'QL14 km25 xã Nghĩa Trung, Huyện Bù Đăng, Tỉnh Đồng Nai ( Bình Phước Cũ)' }
]
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2, .contact-form-wrap h2 {
  font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.5rem;
}

.contact-item {
  display: flex; gap: 1rem; align-items: flex-start;
  padding: 1rem; background: var(--bg-surface); border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.05); margin-bottom: 1rem;
}
.contact-icon { font-size: 1.4rem; flex-shrink: 0; }
.contact-content { color: var(--text-light); font-size: 0.95rem; margin-top: 0.25rem; }
.contact-content a { color: var(--primary); text-decoration: none; }
.contact-content a:hover { text-decoration: underline; }
.contact-item strong { color: var(--text-main); font-size: 0.85rem; display: block; }

.contact-hours {
  margin-top: 2rem; padding: 1.5rem; background: var(--bg-surface);
  border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);
}
.contact-hours h3 { color: var(--text-main); margin-bottom: 0.75rem; font-size: 1rem; }
.contact-hours p { color: var(--text-light); font-size: 0.9rem; margin-bottom: 0.3rem; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.form-group { margin-bottom: 1.25rem; }
.form-group label { display: block; color: var(--text-light); margin-bottom: 0.4rem; font-size: 0.9rem; }
.form-group input, .form-group select, .form-group textarea {
  width: 100%; padding: 0.85rem 1rem;
  background: rgba(20,24,45,0.6); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px; color: var(--text-main); font-family: inherit; font-size: 0.95rem;
  transition: border-color 0.2s;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  outline: none; border-color: var(--primary);
}
.form-group textarea { min-height: 140px; resize: vertical; }
.form-group select { cursor: pointer; }
.form-group select option { background: #11142b; }

.form-submit { width: 100%; padding: 1rem; font-size: 1rem; }

@media (max-width: 992px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
}
@media (max-width: 576px) {
  .form-row { grid-template-columns: 1fr; }
  .page-hero h1 { font-size: 1.9rem; }
}
</style>
