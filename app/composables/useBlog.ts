export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  icon: string
  author: string
  date: string
  readTime: string
  thumb: string
  content: string
  tags?: string[]
}

export const useBlog = () => {
  const allBlogPosts: BlogPost[] = [
    {
      slug: 'thu-am-gia-2026',
      title: 'Thu Âm Bài Hát Giá Bao Nhiêu? Bảng Giá Chi Tiết 2026',
      excerpt: 'Tổng hợp bảng giá thu âm bài hát mới nhất tại các phòng thu chuyên nghiệp. So sánh giá và chất lượng để lựa chọn phù hợp nhất.',
      category: 'Bảng Giá',
      icon: 'fa-solid fa-tag',
      author: 'XKProduction',
      date: '28/04/2026',
      readTime: '3 phút đọc',
      thumb: '/images/blog-thu-am-gia.jpg',
      tags: ['Bảng Giá', 'Thu Âm'],
      content: `<h3>Giá thu âm bài hát phụ thuộc vào những yếu tố nào?</h3>
      <p>Giá thu âm phụ thuộc vào <strong>thiết bị phòng thu</strong>, <strong>kinh nghiệm kỹ sư âm thanh</strong>, <strong>thời gian thu âm</strong> và <strong>các dịch vụ kèm theo</strong> (chỉnh sửa, tune pitch, v.v.).</p>
      <h3>Bảng giá tham khảo tại XKProduction</h3>
      <ul>
        <li><strong>Gói Cơ Bản:</strong> Từ 350.000₫ — thu âm 1-2 tiếng, chỉnh sửa cơ bản, xuất file WAV/MP3.</li>
        <li><strong>Gói Nâng Cao:</strong> Từ 550.000₫ — thu âm 2-3 tiếng, vocal production đầy đủ.</li>
        <li><strong>Gói Pro:</strong> Từ 1.000.000₫ — thu âm không giới hạn session, vocal coaching.</li>
        <li><strong>Gói Cao Cấp:</strong> Từ 1.800.000₫ — tất cả bao gồm, revision không giới hạn.</li>
      </ul>
      <h3>Tại sao nên chọn XKProduction?</h3>
      <p>XKProduction có hơn <strong>7 năm kinh nghiệm</strong>, đã hoàn thành <strong>2000+ dự án</strong>. Chúng tôi cam kết chất lượng âm thanh chuẩn quốc tế với giá cả phải chăng nhất khu vực Bình Phước.</p>`
    },
    {
      slug: 'phong-thu-am-binh-phuoc',
      title: 'Phòng Thu Âm Bình Phước — Tại Sao Chọn XKProduction?',
      excerpt: 'Khám phá lý do XKProduction trở thành phòng thu âm được nhiều nghệ sĩ tin tưởng nhất tại Bình Phước với chất lượng chuẩn quốc tế.',
      category: 'Giới Thiệu',
      icon: 'fa-solid fa-building',
      author: 'Nguyễn Xuân Kiệt',
      date: '25/04/2026',
      readTime: '4 phút đọc',
      thumb: '/images/blog-phong-thu.jpg',
      tags: ['Giới Thiệu', 'Thu Âm'],
      content: `<h3>XKProduction — Phòng thu âm chuyên nghiệp tại Bình Phước</h3>
      <p>Tọa lạc tại QL14 km25, xã Nghĩa Trung, Huyện Bù Đăng, <strong>XKProduction</strong> là phòng thu âm chuyên nghiệp hàng đầu tại Bình Phước. Với hơn 7 năm kinh nghiệm và 2000+ dự án hoàn thiện, chúng tôi tự hào mang đến dịch vụ thu âm chất lượng chuẩn quốc tế.</p>
      <h3>Điểm khác biệt</h3>
      <ul>
        <li><strong>Founder có 7+ năm kinh nghiệm</strong> trong ngành sản xuất âm nhạc.</li>
        <li><strong>Thiết bị chuyên nghiệp:</strong> Micro condenser, preamp, audio interface chất lượng cao.</li>
        <li><strong>Không gian yên tĩnh:</strong> Phòng thu được cách âm theo tiêu chuẩn quốc tế.</li>
        <li><strong>Giá cả hợp lý:</strong> Tiết kiệm hơn phòng thu tại TP.HCM nhưng chất lượng tương đương.</li>
      </ul>
      <h3>Dịch vụ tại XKProduction</h3>
      <p>Thu âm bài hát, mixing & mastering, hoà âm phối khí, quay MV/TVC, và cho thuê âm thanh ánh sáng sân khấu sự kiện.</p>`
    },
    {
      slug: 'mix-master-huong-dan',
      title: 'Mix Master Là Gì? Hướng Dẫn Từ A-Z Cho Người Mới',
      excerpt: 'Hiểu rõ quy trình mixing và mastering — hai bước quan trọng nhất quyết định chất lượng bản nhạc của bạn.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-graduation-cap',
      author: 'Nguyễn Xuân Kiệt',
      date: '20/04/2026',
      readTime: '5 phút đọc',
      thumb: '/images/blog-mix-master.jpg',
      tags: ['Kiến Thức', 'Mix & Master'],
      content: `<h3>Mixing là gì?</h3>
      <p><strong>Mixing (trộn âm)</strong> là quá trình cân bằng và xử lý các track âm thanh riêng lẻ (vocal, bass, drum, guitar...) thành một bản mix stereo hoàn chỉnh. Kỹ sư mixing sẽ sử dụng EQ, Compressor, Reverb, Delay... để tạo ra không gian và sự cân bằng cho bản nhạc.</p>
      <h3>Mastering là gì?</h3>
      <p><strong>Mastering</strong> là bước cuối cùng trước khi phát hành. Mục tiêu là đảm bảo bản nhạc có âm lượng phù hợp, cân bằng tần số, và nghe tốt trên mọi thiết bị (tai nghe, loa, điện thoại...).</p>
      <h3>Giá mix master tại XKProduction</h3>
      <ul>
        <li><strong>Mix & Master Cơ Bản:</strong> Từ 300.000₫ — stereo track + mastering chuẩn streaming.</li>
        <li><strong>Mix & Master Chuyên Nghiệp:</strong> Từ 500.000₫ — multi-track, chuẩn Spotify/Apple Music.</li>
      </ul>`
    },
    {
      slug: 'hoa-am-phoi-khi-online',
      title: 'Hoà Âm Phối Khí Online — Quy Trình & Chi Phí',
      excerpt: 'Tìm hiểu quy trình hoà âm phối khí online chuyên nghiệp và bảng giá chi tiết tại XKProduction.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-music',
      author: 'XKProduction',
      date: '15/04/2026',
      readTime: '6 phút đọc',
      thumb: '/images/blog-hoa-am.jpg',
      tags: ['Kiến Thức', 'Hoà âm'],
      content: `<h3>Hoà âm phối khí là gì?</h3>
      <p><strong>Hoà âm phối khí</strong> là quá trình biên soạn và sắp xếp các nhạc cụ, giai điệu phụ hoạ cho một bài hát. Đây là bước đưa bài hát từ giai điệu đơn giản thành một tác phẩm âm nhạc hoàn chỉnh.</p>
      <h3>Quy trình hoà âm phối khí online tại XKProduction</h3>
      <ol>
        <li><strong>Gửi demo/melody:</strong> Khách hàng gửi file ghi âm hoặc sheet nhạc.</li>
        <li><strong>Tư vấn concept:</strong> Team XKProduction nghe và tư vấn hướng phối khí phù hợp.</li>
        <li><strong>Hoà âm & phối khí:</strong> Producer sắp xếp nhạc cụ và ghi âm.</li>
        <li><strong>Hoàn thành:</strong> Gửi file WAV/MP3 và sheet nhạc chi tiết.</li>
      </ol>`
    }
  ]

  const getPostBySlug = (slug: string) => {
    return allBlogPosts.find(p => p.slug === slug)
  }

  const getRelatedPosts = (slug: string, limit = 3) => {
    const post = getPostBySlug(slug)
    if (!post) return []
    return allBlogPosts
      .filter(p => p.slug !== slug && p.category === post.category)
      .slice(0, limit)
  }

  return {
    allBlogPosts,
    getPostBySlug,
    getRelatedPosts
  }
}
