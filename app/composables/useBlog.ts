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
      excerpt: 'Tổng hợp bảng giá thu âm bài hát mới nhất. Từ demo cá nhân đến phát hành thương mại — bạn cần bao nhiêu tiền và cần chuẩn bị những gì?',
      category: 'Bảng Giá',
      icon: 'fa-solid fa-tag',
      author: 'XKProduction',
      date: '28/04/2026',
      readTime: '5 phút đọc',
      thumb: '/images/blog-thu-am-gia.jpg',
      tags: ['Bảng Giá', 'Thu Âm'],
      content: `<h3>Giá thu âm phụ thuộc vào những yếu tố nào?</h3>
      <p>Không có mức giá thu âm cố định vì mỗi dự án có nhu cầu khác nhau. Các yếu tố ảnh hưởng trực tiếp đến chi phí gồm: <strong>thiết bị phòng thu</strong> (micro, preamp, interface), <strong>kinh nghiệm kỹ sư âm thanh</strong>, <strong>số lần revision</strong>, và <strong>dịch vụ đi kèm</strong> như vocal tuning, vocal production hay mix &amp; master trọn gói.</p>
      <h3>Bảng giá tham khảo tại XKProduction (2026)</h3>
      <ul>
        <li><strong>Gói Cơ Bản — Từ 350.000₫:</strong> Thu âm 1–2 tiếng, chỉnh sửa cơ bản (tuning, timing), xuất file WAV/MP3, 1 lần revision. Phù hợp với người mới bắt đầu, thu demo, học viên thanh nhạc.</li>
        <li><strong>Gói Nâng Cao — Từ 550.000₫:</strong> Thu âm 2–3 tiếng, vocal production đầy đủ, xuất đa định dạng, 2 lần revision, tư vấn kỹ thuật. Dành cho ca sĩ bán chuyên và dự án cá nhân lên YouTube.</li>
        <li><strong>Gói Chuyên Sâu (Pro) — Từ 1.000.000₫:</strong> Thu âm không giới hạn session, vocal coaching &amp; direction, vocal production nâng cao, xuất multi-track, 3 lần revision, hỗ trợ phát hành. Tối ưu cho ca sĩ chuyên nghiệp, phát hành trên Spotify/Apple Music.</li>
        <li><strong>Gói Cao Cấp (Ultimate) — Từ 1.800.000₫:</strong> Toàn bộ tính năng Pro cộng với storytelling &amp; emotional coaching, xử lý âm thanh cao cấp, revision không giới hạn, chiến lược phát hành và priority booking.</li>
      </ul>
      <h3>Phòng thu tỉnh lẻ có đáng tin không?</h3>
      <p>Nhiều nghệ sĩ lo ngại chất lượng phòng thu ở Bình Phước sẽ thua xa TP.HCM hay Hà Nội. Thực tế, chất lượng âm thanh phụ thuộc vào <em>thiết bị và kỹ năng kỹ sư</em>, không phải địa điểm. XKProduction sử dụng micro condenser Neumann, preamp SSL và phần mềm xử lý chuẩn quốc tế — cùng hệ thống cách âm đạt tiêu chuẩn phòng thu chuyên nghiệp.</p>
      <h3>Chi phí có bao gồm mix &amp; master không?</h3>
      <p>Thu âm và mix &amp; master là hai dịch vụ tách biệt. Nếu bạn cần gói trọn gói từ thu âm đến phát hành, hãy hỏi về combo để được ưu đãi. Giá mix &amp; master riêng bắt đầu từ 300.000₫ (stereo track) và 500.000₫ (multi-track chuẩn Spotify).</p>`
    },
    {
      slug: 'phong-thu-am-binh-phuoc',
      title: 'Phòng Thu Âm Bình Phước — Tại Sao Chọn XKProduction?',
      excerpt: 'Khám phá lý do XKProduction trở thành phòng thu âm được nhiều nghệ sĩ tin tưởng nhất tại Bình Phước — chất lượng quốc tế, giá địa phương.',
      category: 'Giới Thiệu',
      icon: 'fa-solid fa-building',
      author: 'Nguyễn Xuân Kiệt',
      date: '25/04/2026',
      readTime: '4 phút đọc',
      thumb: '/images/blog-phong-thu.jpg',
      tags: ['Giới Thiệu', 'Thu Âm'],
      content: `<h3>XKProduction ở đâu?</h3>
      <p>XKProduction tọa lạc tại QL14 km25, xã Nghĩa Trung, Huyện Bù Đăng, Bình Phước — dễ dàng tiếp cận từ thị xã Đồng Xoài, Phước Long và các huyện lân cận. Không gian yên tĩnh xa trung tâm đô thị giúp phòng thu không bị tiếng ồn ngoại cảnh xâm nhập.</p>
      <h3>Thiết bị và không gian như thế nào?</h3>
      <ul>
        <li><strong>Micro condenser chuyên nghiệp</strong> thu chi tiết mọi sắc thái giọng hát.</li>
        <li><strong>Preamp &amp; audio interface</strong> chất lượng cao đảm bảo nguồn tín hiệu sạch, không nhiễu.</li>
        <li><strong>Phòng thu cách âm tiêu chuẩn</strong> với tấm tiêu âm và bass trap được bố trí đúng kỹ thuật.</li>
        <li><strong>Phòng control room</strong> nghe monitor trung thực với loa studio đẳng cấp.</li>
      </ul>
      <h3>Điểm khác biệt so với phòng thu TP.HCM</h3>
      <p>Chi phí thu âm tại TP.HCM thường cao hơn 30–60% so với cùng chất lượng ở Bình Phước, chủ yếu do tiền thuê mặt bằng. XKProduction giữ được mức giá cạnh tranh trong khi vẫn duy trì chuẩn thiết bị và kỹ thuật tương đương. Founder Nguyễn Xuân Kiệt có hơn 7 năm kinh nghiệm thực chiến và đã hoàn thành 2000+ dự án cho nghệ sĩ từ nhiều tỉnh thành.</p>
      <h3>Dịch vụ đầy đủ tại một địa điểm</h3>
      <p>Tại XKProduction bạn có thể thực hiện toàn bộ quy trình sản xuất âm nhạc: thu âm giọng hát → hoà âm phối khí → mixing &amp; mastering → quay MV/TVC → phát hành đa nền tảng. Không cần qua nhiều đơn vị khác nhau, tiết kiệm thời gian và chi phí phối hợp.</p>`
    },
    {
      slug: 'mix-master-huong-dan',
      title: 'Mix Master Là Gì? Hướng Dẫn Từ A-Z Cho Người Mới',
      excerpt: 'Hiểu rõ sự khác biệt giữa mixing và mastering, quy trình thực tế và lý do đây là hai bước quyết định chất lượng bản nhạc thương mại.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-graduation-cap',
      author: 'Nguyễn Xuân Kiệt',
      date: '20/04/2026',
      readTime: '6 phút đọc',
      thumb: '/images/blog-mix-master.jpg',
      tags: ['Kiến Thức', 'Mix & Master'],
      content: `<h3>Mixing là gì?</h3>
      <p><strong>Mixing (trộn âm)</strong> là quá trình cân bằng và xử lý các track riêng lẻ — vocal, bass, kick, snare, guitar, synth... — thành một bản mix stereo hoàn chỉnh. Kỹ sư mixing dùng <em>EQ</em> để định hình tần số từng nhạc cụ, <em>Compressor</em> để kiểm soát động lực học, <em>Reverb &amp; Delay</em> để tạo không gian chiều sâu, và <em>Automation</em> để điều chỉnh mức âm lượng theo từng đoạn bài.</p>
      <p>Một bản mix tốt nghe rõ từng nhạc cụ, vocal nổi bật đúng tầm, và cảm giác âm thanh "đầy" mà không bị rối.</p>
      <h3>Mastering là gì?</h3>
      <p><strong>Mastering</strong> là bước cuối cùng trước khi phát hành. Mục tiêu là đảm bảo bản nhạc nghe nhất quán trên mọi thiết bị — tai nghe, loa Bluetooth, loa ô tô, điện thoại — và đạt chuẩn loudness của các nền tảng streaming (Spotify yêu cầu –14 LUFS, Apple Music –16 LUFS).</p>
      <p>Kỹ sư mastering dùng EQ nâng cao, Multiband Compressor và Limiter để "kết nối" bản mix với thế giới thực.</p>
      <h3>Tôi có thể bỏ qua mixing hoặc mastering không?</h3>
      <p>Không nên. Bỏ mixing khiến bản nhạc nghe "thô", nhạc cụ đè lên nhau. Bỏ mastering khiến bản nhạc nghe nhỏ hơn các bài khác trên playlist và có thể bị Spotify tự động làm lệch âm lượng. Đặc biệt với bản phát hành thương mại, cả hai bước đều bắt buộc.</p>
      <h3>Giá mix &amp; master tại XKProduction</h3>
      <ul>
        <li><strong>Mix &amp; Master Cơ Bản — Từ 300.000₫:</strong> Nhận stereo mix, EQ &amp; compression tổng thể, master chuẩn streaming, xuất WAV + MP3.</li>
        <li><strong>Mix &amp; Master Chuyên Nghiệp — Từ 500.000₫:</strong> Nhận multi-track (stems), vocal treatment riêng, EQ/Compressor/Reverb/Delay từng track, master chuẩn Spotify/Apple Music/Radio, 2 lần revision, delivery đa định dạng.</li>
      </ul>`
    },
    {
      slug: 'hoa-am-phoi-khi-online',
      title: 'Hoà Âm Phối Khí Online — Quy Trình & Chi Phí',
      excerpt: 'Bạn ở xa vẫn có thể sở hữu bản phối chuyên nghiệp. Tìm hiểu quy trình làm việc online, những gì cần chuẩn bị và mức chi phí thực tế.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-music',
      author: 'XKProduction',
      date: '15/04/2026',
      readTime: '6 phút đọc',
      thumb: '/images/blog-hoa-am.jpg',
      tags: ['Kiến Thức', 'Hoà âm'],
      content: `<h3>Hoà âm phối khí là gì?</h3>
      <p><strong>Hoà âm phối khí</strong> là quá trình biên soạn và sắp xếp tất cả nhạc cụ — keyboard, guitar, bass, strings, brass, synth, percussion... — tạo nên "phần đệm" hoàn chỉnh cho giọng ca. Đây là bước đưa bài hát từ một giai điệu thô thành một tác phẩm âm nhạc có chiều sâu và cảm xúc.</p>
      <h3>Tôi cần gửi gì để bắt đầu?</h3>
      <ul>
        <li><strong>File demo giọng hát:</strong> Ghi âm bất kỳ bằng điện thoại — không cần chất lượng cao, chỉ cần nghe rõ giai điệu và lời.</li>
        <li><strong>Sheet nhạc hoặc hợp âm:</strong> Nếu có sẵn, gửi kèm để tiết kiệm thời gian. Nếu không có, XKProduction sẽ tự phân tích từ demo.</li>
        <li><strong>Tham khảo âm thanh mong muốn:</strong> Link bài nhạc hoặc mô tả phong cách (Pop ballad, R&B, Latin, Indie Folk...) để producer hiểu đúng hướng.</li>
      </ul>
      <h3>Quy trình làm việc online từng bước</h3>
      <ol>
        <li><strong>Gửi demo &amp; trao đổi concept:</strong> Bạn gửi file demo qua Zalo/Google Drive. XKProduction nghe và đề xuất hướng phối khí phù hợp với chất giọng và thể loại.</li>
        <li><strong>Phê duyệt demo phối:</strong> Trong 2–3 ngày đầu, XKProduction gửi bản demo phối đơn giản (piano/guitar + vocal) để bạn xác nhận hướng đi trước khi triển khai toàn bộ.</li>
        <li><strong>Sản xuất đầy đủ:</strong> Producer sắp xếp nhạc cụ, thêm arrangement chi tiết, ghi âm các lớp nhạc và xử lý âm thanh chuyên sâu.</li>
        <li><strong>Revision &amp; hoàn thiện:</strong> Bạn nghe và yêu cầu chỉnh sửa theo gói đã chọn. Sau khi ổn, bản phối được xuất file WAV chất lượng cao.</li>
        <li><strong>Bàn giao:</strong> Gửi file WAV stereo mix (hoặc multi-track nếu cần) qua cloud storage. Thời gian hoàn thành thường 5–14 ngày tùy độ phức tạp.</li>
      </ol>
      <h3>Chi phí hoà âm phối khí tại XKProduction</h3>
      <ul>
        <li><strong>Hòa âm Cơ bản — Từ 1.500.000₫:</strong> Acoustic/pop đơn giản, demo hoặc bài hát nhạc trẻ.</li>
        <li><strong>Hòa âm Cao cấp — Từ 2.500.000₫:</strong> Phối khí đa thể loại, nhạc cụ thật (violin, piano real), revision không giới hạn.</li>
      </ul>`
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
