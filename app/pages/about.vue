<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>Về XKStudio</h1>
        <p class="page-hero-sub">Câu chuyện, sứ mệnh và đội ngũ đằng sau những dự án âm nhạc</p>
      </div>
    </section>

    <section id="story" style="padding: 5rem 0;">
      <div class="max-width">
        <div class="section-title"><h2>Câu chuyện của chúng tôi</h2><p>Hành trình từ một phòng thu nhỏ đến trung tâm sản xuất âm nhạc chuyên nghiệp</p></div>
        <div class="grid-2" style="gap: 3rem; margin-top: 3rem;">
          <div>
            <p style="color: var(--text-light); line-height: 1.8; font-size: 1.05rem; margin-bottom: 1.5rem;">
              XKStudio được thành lập với sứ mệnh đơn giản: tạo ra một không gian nơi các nghệ sĩ, nhà sản xuất và doanh nghiệp có thể hiện thực hoá ý tưởng âm thanh của mình một cách chuyên nghiệp và hiệu quả nhất.
            </p>
            <p style="color: var(--text-light); line-height: 1.8; font-size: 1.05rem;">
              Trải qua hơn 7 năm, chúng tôi đã hoàn thiện kỹ năng, đầu tư vào thiết bị hiện đại và xây dựng đội ngũ gồm các kỹ thuật viên, producer và mix engineer có tư duy sáng tạo, kinh nghiệm thực chiến trên thị trường Việt Nam.
            </p>
          </div>
          <div style="background: linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.08) 100%); border-radius: 12px; padding: 2.5rem; border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; min-height: 280px;">
            <div style="text-align: center;">
              <div style="font-size: 4rem; margin-bottom: 1rem;"><i class="fa-solid fa-microphone-lines" style="color: var(--primary);"></i></div>
              <p style="color: var(--text-muted); font-size: 0.95rem;">Hơn 7 năm đồng hành cùng nghệ sĩ & doanh nghiệp Việt Nam</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="mission" style="padding: 4rem 0; background: var(--bg-surface);">
      <div class="max-width">
        <div class="section-title"><h2>Sứ mệnh & Giá trị</h2><p>Những nguyên tắc định hướng mọi dự án chúng tôi thực hiện</p></div>
        <div class="grid-2" style="margin-top: 3rem;">
          <div class="card">
            <div style="font-size: 2rem; margin-bottom: 1rem;"><i class="fa-solid fa-bullseye" style="color: var(--primary);"></i></div>
            <h3>Sứ mệnh</h3>
            <p style="color: var(--text-light);">Trao quyền cho nghệ sĩ và doanh nghiệp thông qua các giải pháp sản xuất âm thanh chuyên nghiệp, truyền cảm hứng và tạo ra tác động thực sự.</p>
          </div>
          <div class="card">
            <div style="font-size: 2rem; margin-bottom: 1rem;"><i class="fa-solid fa-star" style="color: var(--primary);"></i></div>
            <h3>Giá trị cốt lõi</h3>
            <ul style="text-align: left; color: var(--text-light); list-style: none; padding: 0;">
              <li style="margin-bottom: 0.6rem;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i>Chất lượng trong từng dự án</li>
              <li style="margin-bottom: 0.6rem;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i>Minh bạch &amp; chuyên nghiệp</li>
              <li style="margin-bottom: 0.6rem;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i>Sáng tạo &amp; đổi mới liên tục</li>
              <li style="margin-bottom: 0.6rem;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i>Đồng hành &amp; lắng nghe khách hàng</li>
              <li><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i>Cam kết đúng timeline &amp; ngân sách</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="team" style="padding: 5rem 0;">
      <div class="max-width">
        <div class="section-title"><h2>Đội ngũ</h2><p>Những con người tài năng đằng sau XKStudio</p></div>
        <div class="grid-4" style="margin-top: 3rem;">
          <div v-for="m in team" :key="m.name" class="card" style="text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1rem;"><i :class="m.faIcon" style="color: var(--primary);"></i></div>
            <h3>{{ m.name }}</h3>
            <p style="color: var(--primary); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">{{ m.role }}</p>
            <p style="color: var(--text-muted); font-size: 0.85rem;">{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" style="text-align: center; padding: 5rem 2rem; background: var(--bg-surface);">
      <h2 style="font-size: 2.2rem; margin-bottom: 1rem;">Hãy cùng tạo ra điều tuyệt vời</h2>
      <p style="font-size: 1.05rem; color: var(--text-light); margin-bottom: 2rem; max-width: 560px; margin-left: auto; margin-right: auto;">Chia sẻ ý tưởng của bạn — chúng tôi sẽ đề xuất giải pháp phù hợp nhất.</p>
      <NuxtLink to="/contact" class="btn btn-primary">Liên hệ ngay</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Về chúng tôi',
  description: 'Tìm hiểu về XKStudio - phòng thu âm & sản xuất âm nhạc chuyên nghiệp. Đội ngũ producer, mix engineer và kỹ thuật viên giàu kinh nghiệm.',
  ogTitle: 'Về chúng tôi - XKStudio'
})

useSchemaOrg([
  defineWebPage({
    name: 'Về chúng tôi',
    description: 'Tìm hiểu về XKStudio - phòng thu âm & sản xuất âm nhạc chuyên nghiệp. Đội ngũ producer, mix engineer và kỹ thuật viên giàu kinh nghiệm.'
  })
])

const team = [
  { faIcon: 'fa-solid fa-headphones', name: 'Xuân Kiệt', role: 'Founder & Producer', desc: 'Hơn 7 năm kinh nghiệm sản xuất và định hướng sáng tạo' },
  { faIcon: 'fa-solid fa-sliders', name: 'Mix Engineer', role: 'Mixing & Mastering', desc: 'Chuyên gia xử lý âm thanh chuẩn quốc tế' },
  { faIcon: 'fa-solid fa-music', name: 'Hòa Âm Sĩ', role: 'Phối khí & Sáng tác', desc: 'Biên soạn bản phối đa thể loại' },
  { faIcon: 'fa-solid fa-film', name: 'Video Producer', role: 'MV & TVC', desc: 'Đạo diễn và ekip sản xuất hình ảnh' }
]
</script>

<style scoped>
.page-hero {
  padding-top: 140px;
  padding-bottom: 4rem;
  background: linear-gradient(135deg, #06080f 0%, #0d1117 100%);
  text-align: center;
}

.page-hero h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.page-hero-sub {
  font-size: 1.05rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }

@media (max-width: 992px) {
  .grid-2 { grid-template-columns: 1fr; }
  .grid-4 { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 576px) {
  .grid-4 { grid-template-columns: 1fr; }
  .page-hero h1 { font-size: 2rem; }
}

.section-title { text-align: center; }
.section-title h2 { font-size: 2rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; }
.section-title p { color: var(--text-light); }
</style>
