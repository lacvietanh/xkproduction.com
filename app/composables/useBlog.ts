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
      excerpt: 'Tổng hợp bảng giá thu âm bài hát mới nhất. Từ demo cá nhân đến phát hành thương mại — bạn cần bao nhiêu tiền và chuẩn bị những gì?',
      category: 'Bảng Giá',
      icon: 'fa-solid fa-tag',
      author: 'XKProduction',
      date: '28/04/2026',
      readTime: '5 phút đọc',
      thumb: '/images/blog-thu-am-gia.jpg',
      tags: ['Bảng Giá', 'Thu Âm'],
      content: `<h3>Giá thu âm phụ thuộc vào những yếu tố nào?</h3>
      <p>Thực ra mức giá không bao giờ là cố định vì mỗi bài hát, mỗi giọng hát lại có một nhu cầu khác nhau. Thường thì chi phí sẽ xoay quanh: <strong>chất lượng thiết bị</strong> (như micro Neumann hay preamp SSL mình đang dùng), <strong>kinh nghiệm của người trực tiếp thu</strong>, và các dịch vụ đi kèm như nắn giọng (tuning) hay căn nhịp (timing).</p>
      <h3>Bảng giá tại XKProduction (2026)</h3>
      <ul>
        <li><strong>Gói Cơ Bản — 350.000₫:</strong> Phù hợp cho các bạn mới, thu demo hoặc học viên thanh nhạc. Bao gồm 1-2 tiếng thu và chỉnh sửa cơ bản.</li>
        <li><strong>Gói Nâng Cao — 550.000₫:</strong> Dành cho các bạn muốn làm sản phẩm chỉn chu hơn để đăng YouTube. Gói này mình sẽ làm vocal production kỹ hơn.</li>
        <li><strong>Gói Chuyên Nghiệp — 1.000.000₫:</strong> Đây là lựa chọn của các anh chị ca sĩ chuyên nghiệp. Mình sẽ trực tiếp coaching, hướng dẫn cách hát sao cho tình nhất và xử lý hậu kỳ chuẩn Spotify.</li>
      </ul>
      <h3>Ở Bình Phước thì chất lượng có bằng Sài Gòn không?</h3>
      <p>Nhiều bạn cứ lo là ở tỉnh thì đồ đạc không bằng. Thực tế, chất lượng âm thanh nó nằm ở cái tai và thiết bị chứ không phải ở cái địa chỉ. Mình đầu tư micro Neumann, interface Apollo... đều là chuẩn quốc tế cả, nên anh em cứ yên tâm là chất lượng không thua kém gì các studio lớn ở thành phố đâu.</p>`
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
      content: `<h3>Vị trí của XKProduction</h3>
      <p>Studio mình nằm ngay QL14, đoạn Bù Đăng, Bình Phước. Chỗ này không gian thoáng đãng, yên tĩnh, rất phù hợp để anh em nghệ sĩ tập trung sáng tạo mà không bị tiếng còi xe làm phiền.</p>
      <h3>Đồ đạc ở đây có gì?</h3>
      <p>Mình trang bị đầy đủ từ Micro condenser xịn, Preamp đến hệ thống cách âm được tính toán kỹ lưỡng. Đặc biệt là phòng control room được mình setup loa monitor nghe cực kỳ trung thực, giúp quá trình mix nhạc được chính xác nhất.</p>
      <h3>Kinh nghiệm thực chiến</h3>
      <p>Với hơn 7 năm làm nghề và hơn 2000 dự án đã hoàn thành, mình hiểu mỗi nghệ sĩ cần gì khi bước vào phòng thu. Không chỉ là bấm máy thu, mình còn chia sẻ, góp ý để bản thu của bạn đạt được cảm xúc tốt nhất.</p>`
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
      content: `<h3>Mixing là làm cái gì?</h3>
      <p>Nói đơn giản thì <strong>Mixing (trộn âm)</strong> là lúc mình gôm tất cả các đường tiếng lại: giọng hát, tiếng đàn, tiếng trống... rồi xào nấu sao cho chúng hòa quyện vào nhau. Mình dùng EQ để gọt tần số, Compressor để giữ giọng hát ổn định, và Reverb để tạo không gian rộng mở cho bài nhạc.</p>
      <h3>Còn Mastering thì sao?</h3>
      <p><strong>Mastering</strong> là bước cuối cùng. Nhiệm vụ của nó là làm cho bài nhạc nghe to rõ, đầy đặn và quan trọng nhất là nghe hay trên mọi thiết bị, từ loa điện thoại đến loa sân khấu. Nó cũng giúp bài của bạn đạt đúng chuẩn âm lượng của Spotify hay Apple Music.</p>
      <h3>Giá mix nhạc ở XKProduction</h3>
      <p>Mình có các gói từ 300k cho các bản demo đơn giản đến 500k-800k cho các bài hát phát hành chuyên nghiệp. Anh em cứ gửi track mình nghe thử rồi mình sẽ tư vấn gói phù hợp nhất.</p>`
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
      content: `<h3>Làm nhạc online có khó không?</h3>
      <p>Nhiều anh em ở xa hay ngại, nhưng thực ra làm việc online bây giờ rất nhanh. Bạn chỉ cần gửi cho mình file demo hát (thu bằng điện thoại cũng được) và nói cho mình biết bạn thích style nhạc nào (ví dụ như Pop Ballad, R&B hay Remix...).</p>
      <h3>Quy trình của mình</h3>
      <ol>
        <li>Bạn gửi demo và ý tưởng qua Zalo.</li>
        <li>Mình làm bản nháp (piano/guitar) gửi bạn nghe thử hướng đi.</li>
        <li>Sau khi bạn ok, mình sẽ phối full nhạc cụ và xử lý chi tiết.</li>
        <li>Mình gửi bản hoàn thiện, bạn nghe và yêu cầu chỉnh sửa nếu cần.</li>
      </ol>
      <h3>Chi phí</h3>
      <p>Gói hòa âm cơ bản bên mình từ 1.500.000₫. Nếu bạn muốn bản phối dày dặn, nhiều nhạc cụ thật và revision thoải mái thì có gói chuyên nghiệp từ 2.500.000₫.</p>`
    },
    {
      slug: 'vocal-tuning-va-vocal-production-la-gi',
      title: 'Vocal Tuning & Vocal Production Là Gì? Tại Sao Cần Thiết?',
      excerpt: 'Tìm hiểu về quy trình làm đẹp giọng hát. Vocal tuning không chỉ là chỉnh phô, mà là cả một nghệ thuật sản xuất giọng hát chuyên nghiệp.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-microphone-lines',
      author: 'XKProduction',
      date: '10/05/2026',
      readTime: '7 phút đọc',
      thumb: '/images/quocchi-2.jpg',
      tags: ['Vocal Production', 'Kiến Thức', 'Thu Âm'],
      content: `<h3>Đừng ngại việc chỉnh giọng</h3>
      <p>Nhiều người nghĩ hát dở mới phải chỉnh, nhưng thực ra ca sĩ chuyên nghiệp ai cũng dùng <strong>Vocal Tuning</strong> cả. Nó giúp những nốt hơi chênh một chút trở nên hoàn hảo, giúp bản thu nghe mượt mà hơn mà vẫn giữ được cái hồn của giọng hát.</p>
      <h3>Sản xuất giọng hát chuyên nghiệp</h3>
      <p>Vocal Production nó còn rộng hơn cả chỉnh phô. Đó là việc mình chọn ra những câu hát hay nhất từ nhiều lần thu khác nhau, chỉnh lại nhịp điệu cho thật khít với beat, rồi thêm các lớp bè để giọng hát dày và sang hơn.</p>
      <p>Tại XKProduction, mình coi giọng hát là linh hồn của bài nhạc, nên bước này mình làm cực kỳ kỹ, có khi mất cả buổi chỉ để chỉnh cho một đoạn điệp khúc sao cho "cháy" nhất.</p>`
    },
    {
      slug: 'chuan-bi-truoc-khi-den-phong-thu-am',
      title: 'Chuẩn Bị Gì Trước Khi Đến Phòng Thu? Mẹo Để Có Bản Thu Tốt',
      excerpt: '10 điều bạn cần chuẩn bị để buổi thu âm diễn ra suôn sẻ và đạt kết quả cao nhất. Đừng để lãng phí thời gian và tiền bạc.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-list-check',
      author: 'Nguyễn Xuân Kiệt',
      date: '24/05/2026',
      readTime: '5 phút đọc',
      thumb: '/images/blog-meo-thu-am.jpg',
      tags: ['Thu Âm', 'Kiến Thức'],
      content: `<h3>Để có một buổi thu hiệu quả</h3>
      <p>Đừng để đến phòng thu rồi mới lật đật xem lời hay chọn tone nhạc. Việc chuẩn bị kỹ ở nhà sẽ giúp bạn tự tin hơn và tiết kiệm được rất nhiều thời gian (cũng như tiền bạc) đấy.</p>
      <h3>Kinh nghiệm cho bạn</h3>
      <ul>
        <li><strong>Phải thuộc lời:</strong> Cái này quan trọng lắm, thuộc lời thì bạn mới tập trung vào cảm xúc được.</li>
        <li><strong>Luyện với beat trước:</strong> Hãy nghe beat thật nhiều, nắm chắc nhịp để khi vào thu không bị bỡ ngỡ.</li>
        <li><strong>Ngủ đủ giấc:</strong> Giọng hát nó phản ánh sức khỏe của bạn. Đừng thức khuya hay uống nước đá trước ngày thu nhé.</li>
      </ul>
      <p>Và quan trọng nhất là cứ thoải mái tâm lý, mình ở đây là để hỗ trợ bạn làm ra sản phẩm hay nhất, nên đừng áp lực quá!</p>`
    },
    {
      slug: 'thu-am-binh-phuoc-dia-chi-uy-tin',
      title: 'Thu Âm Bình Phước — Top 1 Địa Chỉ Uy Tín Cho Nghệ Sĩ',
      excerpt: 'Bạn đang tìm phòng thu âm tại Bình Phước? XKProduction tự hào là đơn vị dẫn đầu về công nghệ và chất lượng âm thanh tại khu vực.',
      category: 'Giới Thiệu',
      icon: 'fa-solid fa-location-dot',
      author: 'Nguyễn Xuân Kiệt',
      date: '16/05/2026',
      readTime: '6 phút đọc',
      thumb: '/images/blog-phong-thu.jpg',
      tags: ['Bình Phước', 'Thu Âm', 'Giới Thiệu'],
      content: `<h3>Tại sao anh em Bình Phước tin tưởng mình?</h3>
      <p>Trước đây anh em muốn thu bài xịn thường phải chạy xuống tận Sài Gòn. Giờ thì ngay tại Bù Đăng, mình đã setup một studio với đầy đủ đồ chơi không thua kém gì dưới đó. Từ micro Neumann, preamp SSL đến dàn loa monitor chuẩn.</p>
      <h3>Dịch vụ trọn gói</h3>
      <p>Mình nhận làm từ A-Z: từ thu âm, hòa âm phối khí đến mix & master. Khách của mình có đủ cả, từ các bạn học sinh thu chơi đến các anh chị ca sĩ đi hát chuyên nghiệp. Anh em ở Đồng Xoài, Phước Long hay Chơn Thành ghé mình cũng rất nhiều vì tin tưởng cái tâm làm nghề của mình.</p>`
    },
    {
      slug: 'ky-am-bai-hat-va-soan-sheet-nhac-chuyen-nghiep',
      title: 'Ký Âm Bài Hát & Soạn Sheet Nhạc — Lưu Giữ Tác Phẩm',
      excerpt: 'Bạn có giai điệu nhưng không biết viết nhạc lý? Dịch vụ ký âm và soạn sheet nhạc chuyên nghiệp sẽ giúp bạn.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-file-music',
      author: 'Nguyễn Xuân Kiệt',
      date: '20/05/2026',
      readTime: '6 phút đọc',
      thumb: '/images/Xkpreviewnew.png',
      tags: ['Ký Âm', 'Sheet Nhạc', 'Kiến Thức'],
      content: `<h3>Giữ lại đứa con tinh thần của bạn</h3>
      <p>Nhiều bạn sáng tác ra một giai điệu rất hay nhưng lại không biết ghi lại bằng nốt nhạc thế nào. Đó là lúc bạn cần đến dịch vụ <strong>ký âm</strong>. Mình sẽ nghe file bạn hát rồi chuyển nó thành bản nhạc giấy (Sheet nhạc) hoàn chỉnh.</p>
      <h3>Tại sao nên làm sheet nhạc?</h3>
      <p>Ngoài việc để lưu giữ, sheet nhạc còn giúp bạn dễ dàng đăng ký bản quyền tác giả hoặc gửi cho ban nhạc để họ tập bài cho bạn. Nhìn một bản nhạc được trình bày sạch đẹp, rõ ràng cũng thấy cái tầm của tác giả khác hẳn luôn.</p>
      <p>Chi phí ký âm bên mình cũng rất dễ thở, chỉ từ 200k cho một bài cơ bản. Anh em sáng tác cứ liên hệ mình nhé.</p>`
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
