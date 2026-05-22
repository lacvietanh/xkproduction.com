<template>
  <div>
    <section class="page-hero">
      <div class="max-width">
        <div class="hero-badge"><i class="fa-solid fa-circle-question"></i> HỎI &amp; ĐÁP</div>
        <h1>Câu hỏi thường gặp</h1>
        <p class="page-hero-sub">Giải đáp nhanh về dịch vụ, quy trình và bảng giá tại XKProduction</p>
      </div>
    </section>

    <section class="faq-section">
      <div class="max-width faq-container">
        <FaqItem v-for="faq in faqs" :key="faq.question" :question="faq.question" :answer="faq.answer" />
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-inner">
        <div class="cta-icon"><i class="fa-solid fa-headset"></i></div>
        <h2>Vẫn còn câu hỏi?</h2>
        <p>Hãy liên hệ trực tiếp — chúng tôi sẽ tư vấn trong vòng 24 giờ.</p>
        <NuxtLink to="/contact" class="cta-btn">Liên hệ ngay <i class="fa-solid fa-arrow-right"></i></NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Hỏi & Đáp - Câu hỏi thường gặp về Thu âm, Mix Master | XKProduction',
  description: 'Giải đáp câu hỏi về giá thu âm (từ 350k), quy trình, thời gian hoàn thành, nhận mix master online, phát hành Spotify... tại XKProduction.',
  ogTitle: 'Câu hỏi thường gặp về Dịch vụ Thu âm & Mix Master - XKProduction',
  ogDescription: 'Tìm hiểu về giá thu âm, quy trình, hỗ trợ online, phát hành Spotify & các dịch vụ tại XKProduction.',
  ogImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogUrl: 'https://xkproduction.com/faq',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://xkproduction.com/images/Xkpreviewnew.png',
  keywords: 'faq thu âm, câu hỏi phòng thu, giá thu âm bao nhiêu, mix master online, phát hành Spotify, XKProduction'
})

useSchemaOrg([
  defineWebPage({
    name: 'Câu hỏi thường gặp - XKProduction',
    description: 'Giải đáp các câu hỏi về dịch vụ thu âm, mixing, mastering, hòa âm phối khí và sản xuất MV tại XKProduction.'
  }),
  {
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'Chi phí thu âm tại XKProduction là bao nhiêu?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chi phí thu âm bắt đầu từ 350.000₫/bài đối với gói Demo/Cơ Bản (thu 1-2h, chỉnh sửa tuning và timing cơ bản) và lên đến 1.800.000₫+ cho các gói chuyên nghiệp không giới hạn thời gian thu, tích hợp coaching biểu cảm và vocal direction chuyên sâu. Vui lòng xem chi tiết đầy đủ tại bảng giá dịch vụ để chọn gói phù hợp.' } },
      { '@type': 'Question', 'name': 'Làm thế nào để đặt lịch thu âm hoặc sản xuất?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Bạn có thể liên hệ trực tiếp qua Zalo Hotline 0355.356.294 hoặc hoàn thành form tại trang Liên hệ. Đội ngũ tiếp nhận sẽ phản hồi, tư vấn phương án phù hợp nhất trong vòng 2 giờ, sau đó hỗ trợ xếp lịch thu và gửi checklist chuẩn bị cụ thể cho bạn.' } },
      { '@type': 'Question', 'name': 'XKProduction có hỗ trợ thu âm online không?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Có, chúng tôi hỗ trợ dịch vụ Hoà âm Phối khí Online và Mix & Master Online cực kỳ linh hoạt. Bạn chỉ cần gửi file thu âm vocal mộc (file thô thu tại nhà hoặc từ phòng thu địa phương khác) kèm demo qua Zalo hoặc Google Drive. Chúng tôi sẽ sản xuất bản phối mới, cân chỉnh vocal và hoàn thiện master đạt chuẩn Spotify.' } },
      { '@type': 'Question', 'name': 'XKProduction có hỗ trợ phát hành nhạc lên Spotify không?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Có, khi đăng ký gói chuyên nghiệp hoặc gói combo sản xuất trọn gói, XKProduction sẽ hỗ trợ tư vấn và thực hiện thủ tục phân phối bản nhạc của bạn lên tất cả các nền tảng nhạc số lớn như Spotify, Apple Music, YouTube Music, TikTok... một cách chuyên nghiệp với đầy đủ thông tin tác giả và bản quyền.' } },
      { '@type': 'Question', 'name': 'Thời gian hoàn thành dự án bao lâu?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Thời gian hoàn thiện tuỳ thuộc vào quy mô dự án: Bản phối demo/beat cơ bản có thể bàn giao trong vòng 2-3 ngày làm việc; dịch vụ Mixing & Mastering chuyên nghiệp thường mất từ 3-7 ngày; đối với các dự án sản xuất MV, TVC quảng cáo trọn gói cần thời gian từ 2-4 tuần để chuẩn bị tiền kỳ và hậu kỳ kỹ lưỡng.' } },
      { '@type': 'Question', 'name': 'XKProduction có nhận dự án từ tỉnh thành khác không?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Có, với quy trình làm việc từ xa chuẩn hoá, XKProduction thường xuyên hợp tác với các nghệ sĩ, khách hàng trên khắp cả nước (TP.HCM, Hà Nội, Đà Nẵng, các tỉnh miền Tây và Tây Nguyên). Việc trao đổi ý tưởng, gửi file demo và nhận phản hồi chỉnh sửa đều được thực hiện trực tuyến vô cùng thuận tiện.' } },
      { '@type': 'Question', 'name': 'Giờ làm việc của XKProduction là mấy giờ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Phòng thu hoạt động linh hoạt từ Thứ 2 đến Thứ 6 (7:00 – 22:00) và Thứ 7 – Chủ nhật (8:00 – 20:00). Để đảm bảo trải nghiệm thu âm không bị gián đoạn và nhận được sự hỗ trợ tốt nhất từ kỹ sư âm thanh, quý khách vui lòng đặt lịch hẹn trước tối thiểu 24 tiếng.' } },
      { '@type': 'Question', 'name': 'XKProduction có hỗ trợ sản xuất MV, TVC không?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Có, bên cạnh sản xuất âm thanh, chúng tôi sở hữu ekip media chuyên nghiệp chuyên sản xuất MV ca nhạc (Music Video), TVC quảng cáo doanh nghiệp, quay Live Session ban nhạc, và sản xuất Video Podcast trọn gói từ khâu lên ý tưởng kịch bản, quay phim đến dựng hậu kỳ, phân màu.' } },
      { '@type': 'Question', 'name': 'Tôi cần chuẩn bị gì trước khi đến thu âm?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Để đạt hiệu quả thu âm cao nhất, bạn nên học thuộc lòng lời bài hát và tập hát chuẩn nhịp với beat ở nhà; giữ sức khoẻ và giọng hát ở trạng thái tốt nhất (hạn chế thức khuya, uống nước đá hoặc rượu bia trước ngày thu); gửi trước beat hoặc demo (nếu có) để kỹ sư phòng thu setup project sẵn sàng.' } },
      { '@type': 'Question', 'name': 'Sau khi thu âm tôi nhận được những file gì?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sau khi hoàn thành dự án, bạn sẽ nhận được các file xuất chất lượng cao bao gồm: Bản Master hoàn chỉnh dạng WAV (24-bit/48kHz chuẩn phát hành) & MP3 (320kbps), bản Beat đã mix lại khớp với Vocal (nếu hát karaoke/cover) và các file Multi-track/Stems lẻ nếu gói dịch vụ của bạn có hỗ trợ.' } }
    ]
  }
])

const faqs = [
  {
    question: 'Chi phí thu âm tại XKProduction là bao nhiêu?',
    answer: 'Chi phí thu âm tại XKProduction bắt đầu từ 350.000₫/bài đối với gói Demo/Cơ Bản (thu 1-2h, chỉnh sửa tuning và timing cơ bản) và lên đến 1.800.000₫+ cho các gói chuyên nghiệp không giới hạn thời gian thu, tích hợp coaching biểu cảm và vocal direction chuyên sâu. Vui lòng xem chi tiết đầy đủ tại bảng giá dịch vụ để chọn gói phù hợp.'
  },
  {
    question: 'Làm thế nào để đặt lịch thu âm hoặc sản xuất?',
    answer: 'Bạn có thể liên hệ trực tiếp qua Zalo Hotline 0355.356.294 hoặc hoàn thành form tại trang Liên hệ. Đội ngũ tiếp nhận sẽ phản hồi, tư vấn phương án phù hợp nhất trong vòng 2 giờ, sau đó hỗ trợ xếp lịch thu và gửi checklist chuẩn bị cụ thể cho bạn.'
  },
  {
    question: 'XKProduction có hỗ trợ thu âm online không?',
    answer: 'Có, chúng tôi hỗ trợ dịch vụ Hoà âm Phối khí Online và Mix & Master Online cực kỳ linh hoạt. Bạn chỉ cần gửi file thu âm vocal mộc (file thô thu tại nhà hoặc từ phòng thu địa phương khác) kèm demo qua Zalo hoặc Google Drive. Chúng tôi sẽ sản xuất bản phối mới, cân chỉnh vocal và hoàn thiện master đạt chuẩn Spotify.'
  },
  {
    question: 'XKProduction có hỗ trợ sản xuất MV, TVC, podcast không?',
    answer: 'Có, bên cạnh sản xuất âm thanh, chúng tôi sở hữu ekip media chuyên nghiệp chuyên sản xuất MV ca nhạc (Music Video), TVC quảng cáo doanh nghiệp, quay Live Session ban nhạc, và sản xuất Video Podcast trọn gói từ khâu lên ý tưởng kịch bản, quay phim đến dựng hậu kỳ, phân màu.'
  },
  {
    question: 'Thời gian hoàn thành dự án bao lâu?',
    answer: 'Thời gian hoàn thiện tuỳ thuộc vào quy mô dự án: Bản phối demo/beat cơ bản có thể bàn giao trong vòng 2-3 ngày làm việc; dịch vụ Mixing & Mastering chuyên nghiệp thường mất từ 3-7 ngày; đối với các dự án sản xuất MV, TVC quảng cáo trọn gói cần thời gian từ 2-4 tuần để chuẩn bị tiền kỳ và hậu kỳ kỹ lưỡng.'
  },
  {
    question: 'XKProduction hỗ trợ phát hành nhạc lên Spotify không?',
    answer: 'Có, khi đăng ký gói chuyên nghiệp hoặc gói combo sản xuất trọn gói, XKProduction sẽ hỗ trợ tư vấn và thực hiện thủ tục phân phối bản nhạc của bạn lên tất cả các nền tảng nhạc số lớn như Spotify, Apple Music, YouTube Music, TikTok... một cách chuyên nghiệp với đầy đủ thông tin tác giả và bản quyền.'
  },
  {
    question: 'Tôi có thể tham quan phòng thu trước khi đặt lịch không?',
    answer: 'Hoàn toàn có thể. Hãy liên hệ qua Hotline 0355.356.294 để đặt lịch hẹn ghé thăm phòng thu của chúng tôi hoàn toàn miễn phí, tham quan cơ sở vật chất, hệ thống trang thiết bị và trao đổi trực tiếp ý tưởng âm nhạc với đội ngũ kỹ sư âm thanh.'
  },
  {
    question: 'XKProduction có nhận dự án từ tỉnh thành khác không?',
    answer: 'Có, với quy trình làm việc từ xa chuẩn hoá, XKProduction thường xuyên hợp tác với các nghệ sĩ, khách hàng trên khắp cả nước (TP.HCM, Hà Nội, Đà Nẵng, các tỉnh miền Tây và Tây Nguyên). Việc trao đổi ý tưởng, gửi file demo và nhận phản hồi chỉnh sửa đều được thực hiện trực tuyến vô cùng thuận tiện.'
  },
  {
    question: 'Giờ làm việc của XKProduction là mấy giờ?',
    answer: 'Phòng thu hoạt động linh hoạt từ Thứ 2 đến Thứ 6 (7:00 – 22:00) và Thứ 7 – Chủ nhật (8:00 – 20:00). Để đảm bảo trải nghiệm thu âm không bị gián đoạn và nhận được sự hỗ trợ tốt nhất từ kỹ sư âm thanh, quý khách vui lòng đặt lịch hẹn trước tối thiểu 24 tiếng.'
  },
  {
    question: 'Tôi cần chuẩn bị gì trước khi đến thu âm?',
    answer: 'Để đạt hiệu quả thu âm cao nhất, bạn nên: 1. Học thuộc lòng lời bài hát và tập hát chuẩn nhịp với beat ở nhà; 2. Giữ sức khoẻ và giọng hát ở trạng thái tốt nhất (hạn chế thức khuya, uống nước đá hoặc rượu bia trước ngày thu); 3. Gửi trước beat hoặc demo (nếu có) để kỹ sư phòng thu setup project sẵn sàng.'
  },
  {
    question: 'Sau khi thu âm tôi nhận được những file gì?',
    answer: 'Sau khi hoàn thành dự án, bạn sẽ nhận được các file xuất chất lượng cao bao gồm: Bản Master hoàn chỉnh dạng WAV (24-bit/48kHz chuẩn phát hành) & MP3 (320kbps), bản Beat đã mix lại khớp with Vocal (nếu hát karaoke/cover) và các file Multi-track/Stems lẻ nếu gói dịch vụ của bạn có hỗ trợ.'
  }
]
</script>

<style scoped>
.page-hero {
  padding-top: 140px;
  padding-bottom: 5rem;
  background: linear-gradient(160deg, #06080f 0%, #0d1117 60%, rgba(26, 140, 255, 0.04) 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(26, 140, 255, 0.05) 0%, transparent 65%);
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.2rem;
  border: 1px solid rgba(26, 140, 255, 0.25);
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--primary);
  margin-bottom: 1.5rem;
  background: rgba(26, 140, 255, 0.06);
}

.page-hero h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #e6edf3 30%, #1a8cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-hero-sub {
  font-size: 1.05rem;
  color: var(--text-light);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.7;
}

/* FAQ SECTION */
.faq-section {
  padding: 5rem 0;
  position: relative;
}

.faq-container {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* CTA SECTION */
.cta-section {
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(13, 17, 23, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.cta-inner {
  text-align: center;
  max-width: 520px;
  padding: 3.5rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(26, 140, 255, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 60px rgba(26, 140, 255, 0.06), 0 20px 60px rgba(0, 0, 0, 0.3);
}

.cta-icon {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 0 12px rgba(26, 140, 255, 0.4));
}

.cta-inner h2 {
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.85rem;
}

.cta-inner p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 2rem;
  background: linear-gradient(135deg, #1a8cff 0%, #0066cc 100%);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 0 25px rgba(26, 140, 255, 0.35);
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 40px rgba(26, 140, 255, 0.5), 0 8px 25px rgba(0, 0, 0, 0.3);
}

.cta-btn i {
  transition: transform 0.3s ease;
}

.cta-btn:hover i {
  transform: translateX(3px);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .page-hero h1 { font-size: 2rem; }
  .cta-inner { padding: 2.5rem 1.5rem; }
  .cta-inner h2 { font-size: 1.5rem; }
}

@media (max-width: 480px) {
  .page-hero h1 { font-size: 1.7rem; }
}
</style>
