<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <h1>Câu hỏi thường gặp</h1>
        <p class="page-hero-sub">Giải đáp nhanh về dịch vụ, quy trình và bảng giá tại XKStudio</p>
      </div>
    </section>

    <section style="padding: 5rem 0;">
      <div class="max-width faq-container">
        <FaqItem v-for="faq in faqs" :key="faq.question" :question="faq.question" :answer="faq.answer" />
      </div>
    </section>

    <section style="text-align: center; padding: 4rem 2rem; background: var(--bg-surface);">
      <h2 style="font-size: 1.8rem; color: var(--text-main); margin-bottom: 1rem;">Vẫn còn câu hỏi?</h2>
      <p style="color: var(--text-light); margin-bottom: 2rem;">Hãy liên hệ trực tiếp — chúng tôi sẽ tư vấn trong vòng 24 giờ.</p>
      <NuxtLink to="/contact" class="btn btn-primary">Liên hệ ngay</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Câu hỏi thường gặp',
  description: 'Giải đáp các câu hỏi thường gặp về dịch vụ thu âm, mixing, mastering, hòa âm phối khí và sản xuất MV tại XKStudio.',
  ogTitle: 'Câu hỏi thường gặp - XKStudio'
})

useSchemaOrg([
  defineWebPage({
    name: 'Câu hỏi thường gặp',
    description: 'Giải đáp các câu hỏi thường gặp về dịch vụ thu âm, mixing, mastering, hòa âm phối khí và sản xuất MV tại XKStudio.'
  })
])

const faqs = [
  { question: 'Chi phí thu âm tại XKStudio là bao nhiêu?', answer: 'Chi phí thu âm bắt đầu từ 350.000₫/bài cho gói Cơ Bản, đến 1.800.000₫+ cho gói Cao Cấp với coaching chuyên biệt. Xem chi tiết tại trang Bảng giá.' },
  { question: 'Làm thế nào để đặt lịch thu âm hoặc sản xuất?', answer: 'Bạn có thể liên hệ qua Zalo, điện thoại hoặc form trên trang Liên hệ. Chúng tôi sẽ xác nhận lịch, tư vấn kỹ thuật và gửi hướng dẫn chuẩn bị cho buổi thu.' },
  { question: 'XKStudio có hỗ trợ sản xuất MV, TVC, podcast không?', answer: 'Có. XKStudio cung cấp dịch vụ sản xuất MV, TVC, podcast với ekip đa chuyên môn từ tiền kỳ, hậu kỳ, sound design cho đến phát hành đa nền tảng.' },
  { question: 'Thời gian hoàn thành dự án bao lâu?', answer: 'Tùy theo quy mô dự án. Demo/beat có thể trong 48h, mixing & mastering từ 3–7 ngày, sản xuất MV từ 2–4 tuần. Timeline cụ thể sẽ được thảo luận khi tư vấn.' },
  { question: 'XKStudio hỗ trợ phát hành nhạc lên DSP không?', answer: 'Có. XKStudio hỗ trợ phát hành lên Spotify, Apple Music, YouTube Music trong 1–2 tuần sau khi hoàn thành mastering và xử lý metadata đầy đủ.' },
  { question: 'Tôi có thể nghe thử phòng thu trước khi đặt lịch không?', answer: 'Hoàn toàn có thể. Hãy liên hệ để đặt lịch tham quan phòng thu miễn phí và gặp gỡ đội ngũ trực tiếp.' },
  { question: 'XKStudio có nhận dự án từ tỉnh thành khác không?', answer: 'Có. Chúng tôi nhận mixing, mastering, hòa âm phối khí và tư vấn online cho khách hàng trên toàn quốc. File được trao đổi qua cloud storage và điều phối qua Zalo.' },
  { question: 'Tôi cần chuẩn bị gì trước khi đến thu âm?', answer: 'Bạn nên luyện tập bài hát thuần thục, mang file nhạc đệm (nếu có), và giọng hát trong tốt nhất. Ekip sẽ tư vấn thêm khi xác nhận lịch.' }
]
</script>

<style scoped>
.page-hero {
  padding-top: 140px;
  padding-bottom: 4rem;
  background: linear-gradient(135deg, #0a0e27 0%, #11142b 100%);
  text-align: center;
}
.page-hero h1 { font-size: 2.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; }
.page-hero-sub { font-size: 1.05rem; color: var(--text-light); max-width: 600px; margin: 0 auto; }

.faq-container { max-width: 800px; margin: 0 auto; }

@media (max-width: 768px) {
  .page-hero h1 { font-size: 1.9rem; }
}
</style>
