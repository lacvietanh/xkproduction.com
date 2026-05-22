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
      thumb: '/images/blog-vocal-production.jpg',
      tags: ['Vocal Production', 'Kiến Thức', 'Thu Âm'],
      content: `<h3>Vocal Tuning là gì?</h3>
      <p><strong>Vocal Tuning</strong> là quá trình can thiệp vào cao độ (pitch) của giọng hát để đưa những nốt nhạc bị phô, chênh về đúng nốt nhạc mục tiêu. Công cụ phổ biến nhất là <em>Melodyne</em>, <em>Antares Auto-Tune</em> hoặc <em>Waves Tune</em>. Tuy nhiên, tuning chuyên nghiệp không phải là làm cho giọng hát nghe như robot, mà là giữ lại sự tự nhiên trong khi vẫn đảm bảo sự hoàn hảo về nhạc lý.</p>
      <h3>Vocal Production — Bước tiến xa hơn</h3>
      <p>Vocal Production bao gồm Tuning nhưng rộng lớn hơn nhiều. Nó bao gồm:</p>
      <ul>
        <li><strong>Timing Correction:</strong> Chỉnh sửa nhịp điệu để giọng hát khớp hoàn hảo với bản phối.</li>
        <li><strong>Vocal Comping:</strong> Chọn lọc những phân đoạn tốt nhất từ nhiều lần thu (take) khác nhau để ghép thành một bản thu hoàn hảo nhất.</li>
        <li><strong>Harmonies &amp; Doubling:</strong> Tạo ra các lớp bè và làm dày giọng hát bằng cách nhân bản hoặc thu thêm các layer bổ trợ.</li>
        <li><strong>Formant Shifting:</strong> Thay đổi đặc tính giọng hát (nam tính hơn hoặc nữ tính hơn) mà không đổi cao độ.</li>
      </ul>
      <h3>Tại sao bạn cần Vocal Production chuyên nghiệp?</h3>
      <p>Ngay cả những ca sĩ hàng đầu thế giới cũng sử dụng vocal production. Nó giúp người nghe tập trung vào cảm xúc của bài hát thay vì bị xao nhãng bởi những lỗi kỹ thuật nhỏ. Tại XKProduction, chúng tôi coi giọng hát là "nhạc cụ quan trọng nhất" và dành phần lớn thời gian để xử lý hậu kỳ cho vocal thật tỉ mỉ.</p>`
    },
    {
      slug: 'timing-vocal-bi-quyet-hat-dung-nhip',
      title: 'Timing Vocal — Bí Quyết Để Giọng Hát Luôn Đúng Nhịp',
      excerpt: 'Lỗi nhịp là vấn đề phổ biến nhất trong phòng thu. Làm thế nào để cải thiện kỹ năng timing và quy trình chỉnh nhịp hậu kỳ chuyên nghiệp.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-clock',
      author: 'Nguyễn Xuân Kiệt',
      date: '12/05/2026',
      readTime: '5 phút đọc',
      thumb: '/images/blog-timing.jpg',
      tags: ['Vocal Production', 'Kỹ Thuật', 'Thu Âm'],
      content: `<h3>Tầm quan trọng của Timing trong âm nhạc</h3>
      <p>Một giọng hát dù hay đến đâu nhưng nếu lệch nhịp (off-beat) sẽ làm hỏng toàn bộ cảm xúc của bài hát. <strong>Timing vocal</strong> tốt giúp giọng hát "quyện" vào trống và bass, tạo nên độ nẩy (groove) cần thiết cho bản nhạc.</p>
      <h3>Các lỗi timing thường gặp</h3>
      <ul>
        <li><strong>Hát sớm:</strong> Thường do tâm lý nôn nóng hoặc chưa nắm rõ tiết tấu bài hát.</li>
        <li><strong>Hát trễ:</strong> Do lấy hơi không kịp hoặc kỹ thuật nhả chữ quá chậm.</li>
        <li><strong>Kéo dài đuôi chữ:</strong> Làm bản mix trở nên rườm rà và mất đi sự gọn gàng của nhịp điệu.</li>
      </ul>
      <h3>Quy trình chỉnh nhịp tại phòng thu</h3>
      <p>Nếu trong lúc thu ca sĩ không thể khắc phục hoàn toàn, kỹ sư âm thanh sẽ sử dụng các công cụ như <em>Audio Bend</em> hoặc <em>VocAlign</em> để căn chỉnh. Tại XKProduction, chúng tôi ưu tiên hướng dẫn ca sĩ hát đúng nhịp ngay từ lúc thu để giữ được độ chuyển động tự nhiên của âm thanh trước khi can thiệp phần mềm.</p>
      <h3>Mẹo cải thiện timing cho bạn</h3>
      <p>Hãy tập hát với máy đánh nhịp (Metronome) thường xuyên. Trước khi đến phòng thu, hãy nghe thật kỹ beat và đánh dấu những điểm nhấn quan trọng của nhịp điệu (thường là tiếng Kick hoặc Snare).</p>`
    },
    {
      slug: 'mixing-mastering-chuyen-nghiep-cho-ca-si',
      title: 'Mixing & Mastering Chuyên Nghiệp — Chìa Khóa Của Bản Hit',
      excerpt: 'Tại sao bản thu tại nhà không bao giờ nghe "xịn" bằng phòng thu? Khám phá sự khác biệt của Mixing & Mastering chuyên nghiệp.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-sliders',
      author: 'XKProduction',
      date: '14/05/2026',
      readTime: '8 phút đọc',
      thumb: '/images/blog-mixing-pro.jpg',
      tags: ['Mix & Master', 'Kiến Thức'],
      content: `<h3>Sự khác biệt nằm ở đâu?</h3>
      <p>Nhiều bạn có thiết bị thu âm tốt tại nhà nhưng bản mix vẫn nghe "mỏng", "đục" hoặc "rời rạc". Mixing &amp; Mastering chuyên nghiệp giải quyết các vấn đề về không gian, tần số và độ nén mà các plugin tự động không thể làm tốt bằng tai người kỹ sư kinh nghiệm.</p>
      <h3>Quy trình Mixing tại XKProduction</h3>
      <ol>
        <li><strong>Cleaning:</strong> Loại bỏ tạp âm, tiếng thở thừa, xì xì (de-essing).</li>
        <li><strong>Balance:</strong> Cân bằng âm lượng giữa các nhạc cụ và vocal.</li>
        <li><strong>EQ &amp; Compression:</strong> Tạo khoảng trống cho từng thành phần và kiểm soát độ ổn định của âm thanh.</li>
        <li><strong>Depth &amp; Width:</strong> Sử dụng Reverb, Delay và Stereo Imaging để tạo không gian 3D cho bản nhạc.</li>
      </ol>
      <h3>Mastering — Đưa nhạc ra thế giới</h3>
      <p>Bước này giúp bản nhạc của bạn có âm lượng tương đồng với các bài hát trên radio hay Spotify mà không bị méo tiếng. Chúng tôi đảm bảo độ tương thích trên mọi thiết bị nghe nhạc từ tai nghe rẻ tiền đến dàn âm thanh hi-end.</p>
      <p><strong>Bảng giá Mix &amp; Master:</strong> Chúng tôi cung cấp các gói từ 300k cho demo và từ 800k cho các dự án phát hành chuyên nghiệp chuẩn quốc tế.</p>`
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
      thumb: '/images/blog-phong-thu-binh-phuoc.jpg',
      tags: ['Bình Phước', 'Thu Âm', 'Giới Thiệu'],
      content: `<h3>Nhu cầu thu âm tại Bình Phước tăng cao</h3>
      <p>Bình Phước đang ngày càng có nhiều tài năng âm nhạc trẻ. Tuy nhiên, việc tìm kiếm một phòng thu có đầy đủ trang thiết bị và kỹ sư có tâm không phải dễ. XKProduction ra đời để lấp đầy khoảng trống đó, mang chất lượng âm thanh chuẩn Sài Gòn về tận Bình Phước.</p>
      <h3>Tại sao nên chọn XKProduction?</h3>
      <ul>
        <li><strong>Thiết bị hiện đại:</strong> Micro Neumann, Interface Apollo, Loa kiểm âm Yamaha/Genelec.</li>
        <li><strong>Kinh nghiệm:</strong> Kỹ sư âm thanh Nguyễn Xuân Kiệt với hàng nghìn dự án thực chiến.</li>
        <li><strong>Giá cả hợp lý:</strong> Phù hợp với học sinh, sinh viên và cả nghệ sĩ chuyên nghiệp.</li>
        <li><strong>Vị trí thuận lợi:</strong> Nằm trên trục QL14, dễ tìm và có chỗ đậu xe thoải mái.</li>
      </ul>
      <h3>Các dịch vụ chính</h3>
      <p>Chúng tôi cung cấp trọn gói: Thu âm bài hát, Thu âm quảng cáo, Lồng tiếng phim, Hòa âm phối khí, Mix &amp; Master. Khách hàng từ Đồng Xoài, Chơn Thành, Bù Đăng đều có thể dễ dàng ghé thăm và trải nghiệm dịch vụ.</p>`
    },
    {
      slug: 'bang-gia-thu-am-chi-tiet-2026-xkproduction',
      title: 'Bảng Giá Thu Âm Chi Tiết 2026 — Phù Hợp Mọi Đối Tượng',
      excerpt: 'Cập nhật bảng giá thu âm mới nhất tại XKProduction. Từ thu demo giá rẻ đến sản xuất album chuyên nghiệp.',
      category: 'Bảng Giá',
      icon: 'fa-regular fa-money-bill-1',
      author: 'XKProduction',
      date: '18/05/2026',
      readTime: '4 phút đọc',
      thumb: '/images/blog-price-list.jpg',
      tags: ['Bảng Giá', 'Thu Âm'],
      content: `<h3>Lựa chọn gói thu âm phù hợp</h3>
      <p>Tại XKProduction, chúng tôi chia nhỏ các gói dịch vụ để khách hàng dễ dàng lựa chọn theo ngân sách và mục đích sử dụng.</p>
      <h3>Bảng giá chi tiết</h3>
      <ul>
        <li><strong>Gói Sinh Viên: 250.000₫/bài</strong> — Thu âm 1 tiếng, chỉnh phô cơ bản. Dành cho các bạn muốn lưu giữ kỷ niệm.</li>
        <li><strong>Gói Bán Chuyên: 500.000₫/bài</strong> — Thu âm không giới hạn thời gian (trong 1 buổi), Tuning &amp; Timing kỹ lưỡng, Mix &amp; Master tiêu chuẩn.</li>
        <li><strong>Gói Chuyên Nghiệp: 1.200.000₫/bài</strong> — Vocal Coaching trực tiếp, Mix &amp; Master chuyên sâu, hỗ trợ bè, hỗ trợ phát hành nhạc.</li>
        <li><strong>Dịch vụ lẻ:</strong> Thu âm theo giờ (200k/h), Mix &amp; Master lẻ (300k - 800k).</li>
      </ul>
      <p><em>* Lưu ý: Giá trên đã bao gồm phí kỹ thuật viên hỗ trợ trong suốt quá trình thu.</em></p>
      <h3>Ưu đãi đặc biệt</h3>
      <p>Giảm ngay 10% cho khách hàng thu album (từ 5 bài trở lên) hoặc khách hàng thân thiết. Liên hệ Zalo để nhận báo giá chính xác nhất cho dự án của bạn.</p>`
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
      thumb: '/images/blog-sheet-music.jpg',
      tags: ['Ký Âm', 'Sheet Nhạc', 'Kiến Thức'],
      content: `<h3>Ký âm là gì?</h3>
      <p><strong>Ký âm</strong> là quá trình chuyển đổi âm thanh (giai điệu bạn hát hoặc chơi nhạc cụ) thành các ký hiệu nhạc lý trên bản nhạc (Sheet nhạc). Đây là bước bắt buộc nếu bạn muốn đăng ký bản quyền tác giả hoặc gửi bài hát cho các ban nhạc, ca sĩ chuyên nghiệp biểu diễn.</p>
      <h3>Tại sao bạn cần bản ký âm chuẩn?</h3>
      <ul>
        <li><strong>Chuyên nghiệp:</strong> Thể hiện sự nghiêm túc với tác phẩm âm nhạc của mình.</li>
        <li><strong>Bảo quyền:</strong> Là bằng chứng pháp lý quan trọng khi có tranh chấp bản quyền.</li>
        <li><strong>Phổ biến:</strong> Giúp người khác có thể đọc và chơi lại bài hát của bạn một cách chính xác nhất.</li>
      </ul>
      <h3>Dịch vụ ký âm tại XKProduction</h3>
      <p>Chúng tôi nhận ký âm từ file ghi âm điện thoại, file demo. Sản phẩm bàn giao gồm file PDF (sheet nhạc đẹp, rõ ràng) và file XML/MIDI nếu khách hàng yêu cầu. Chi phí chỉ từ 200.000₫ cho một bản ký âm đơn giản.</p>`
    },
    {
      slug: 'hoa-am-phoi-khi-online-nen-chon-goi-nao',
      title: 'Hoà Âm Phối Khí Online — Nên Chọn Gói Nào Để Tối Ưu?',
      excerpt: 'Phân tích các gói hoà âm phối khí phổ biến. Làm sao để chọn gói phù hợp với phong cách âm nhạc của bạn.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-compact-disc',
      author: 'XKProduction',
      date: '22/05/2026',
      readTime: '7 phút đọc',
      thumb: '/images/blog-arranging-online.jpg',
      tags: ['Hoà Âm', 'Kiến Thức'],
      content: `<h3>Hoà âm phối khí online là xu hướng</h3>
      <p>Không cần đến tận studio, bạn vẫn có thể làm việc với những producer hàng đầu qua internet. Tuy nhiên, việc lựa chọn gói dịch vụ phù hợp sẽ giúp bạn tiết kiệm chi phí mà vẫn đạt hiệu quả mong muốn.</p>
      <h3>Các loại gói phối khí phổ biến</h3>
      <ul>
        <li><strong>Gói Acoustic (Piano/Guitar):</strong> Phù hợp với các bản ballad nhẹ nhàng, sâu lắng. Ưu điểm là làm nổi bật giọng hát và chi phí thấp.</li>
        <li><strong>Gói Pop/R&amp;B/EDM Standard:</strong> Sử dụng các nhạc cụ ảo (VSTi) chất lượng cao. Phù hợp cho hầu hết các bài hát hiện đại.</li>
        <li><strong>Gói Full Band/Premium:</strong> Có sự tham gia của nhạc cụ thật (guitar thật, bass thật) và arrangement phức tạp. Dành cho các sản phẩm đầu tư chuyên nghiệp, thi đấu âm nhạc.</li>
      </ul>
      <h3>Lưu ý khi đặt phối khí online</h3>
      <p>Hãy chuẩn bị một bản demo hát trên nền nhạc cụ đơn giản (hoặc hát không nhạc nhưng phải đúng nhịp). Cung cấp 2-3 bài hát tham khảo (reference) để producer hiểu gu thẩm mỹ của bạn.</p>`
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
      thumb: '/images/blog-preparation.jpg',
      tags: ['Thu Âm', 'Kiến Thức'],
      content: `<h3>Buổi thu thành công bắt đầu từ sự chuẩn bị</h3>
      <p>Nhiều bạn đến phòng thu mới bắt đầu học lời hoặc chọn tone, điều này làm lãng phí thời gian và làm giảm cảm xúc khi hát. Dưới đây là danh sách kiểm tra dành cho bạn:</p>
      <h3>Checklist chuẩn bị</h3>
      <ul>
        <li><strong>Thuộc lời bài hát:</strong> Điều này giúp bạn tập trung 100% vào cảm xúc thay vì phải nhìn văn bản.</li>
        <li><strong>Luyện tập với beat:</strong> Hãy chắc chắn bạn đã thuộc nhịp và các điểm nghỉ hơi.</li>
        <li><strong>Giữ gìn sức khỏe:</strong> Tránh uống nước đá, rượu bia hoặc thức khuya trước ngày thu.</li>
        <li><strong>Chuẩn bị nước lọc:</strong> Uống nước ở nhiệt độ phòng trong suốt buổi thu để giữ cổ họng ẩm.</li>
        <li><strong>Tâm lý thoải mái:</strong> Hãy coi phòng thu là nơi bạn tự do thể hiện bản thân, đừng quá áp lực.</li>
      </ul>
      <h3>Mang theo gì?</h3>
      <p>Hãy mang theo lời bài hát (nếu chưa thuộc kỹ) và file beat chất lượng cao (nếu bạn tự chuẩn bị beat). Một chiếc điện thoại đầy pin để quay lại khoảnh khắc trong phòng thu cũng là ý kiến hay!</p>`
    },
    {
      slug: 'cach-phat-hanh-nhac-len-spotify-va-apple-music',
      title: 'Cách Phát Hành Nhạc Lên Spotify & Apple Music Từ A-Z',
      excerpt: 'Hướng dẫn chi tiết quy trình đưa bài hát của bạn lên các nền tảng âm nhạc quốc tế. Những điều cần lưu ý về bản quyền và doanh thu.',
      category: 'Kiến Thức',
      icon: 'fa-brands fa-spotify',
      author: 'XKProduction',
      date: '26/05/2026',
      readTime: '9 phút đọc',
      thumb: '/images/blog-distro.jpg',
      tags: ['Phát Hành', 'Kiến Thức', 'Spotify'],
      content: `<h3>Tại sao nên đưa nhạc lên streaming?</h3>
      <p>Spotify, Apple Music, TikTok và YouTube Music là nơi khán giả hiện đại nghe nhạc. Việc có mặt trên các nền tảng này giúp bạn trở thành "nghệ sĩ chính thức" và có cơ hội nhận tiền bản quyền từ lượt nghe.</p>
      <h3>Quy trình phát hành</h3>
      <ol>
        <li><strong>Hoàn thiện âm thanh:</strong> Bài hát phải được Master chuẩn (thường là -14 LUFS cho Spotify).</li>
        <li><strong>Chuẩn bị Artwork:</strong> Hình ảnh vuông (3000x3000px), không chứa logo mạng xã hội hay thông tin liên hệ.</li>
        <li><strong>Chọn nhà phân phối (Distributor):</strong> Các đơn vị như <em>DistroKid</em>, <em>Tunecore</em>, hoặc <em>Believe</em> sẽ thay bạn gửi nhạc lên các store.</li>
        <li><strong>Cung cấp Metadata:</strong> Tên bài hát, tên nghệ sĩ, tác giả, thể loại, ngày phát hành.</li>
      </ol>
      <h3>Lưu ý quan trọng</h3>
      <p>Phát hành nhạc cần thời gian duyệt (thường từ 1-2 tuần). Hãy lập kế hoạch trước ít nhất 3 tuần để kịp các chiến dịch marketing. Tại XKProduction, chúng tôi có dịch vụ hỗ trợ phát hành nhạc trọn gói cho nghệ sĩ.</p>`
    },
    {
      slug: 'hoc-lam-nhac-cho-nguoi-moi-bat-dau',
      title: 'Học Làm Nhạc Cho Người Mới Bắt Đầu — Cần Những Gì?',
      excerpt: 'Lộ trình cơ bản để bắt đầu hành trình trở thành một Music Producer. Từ phần mềm đến thiết bị và tư duy âm nhạc.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-headset',
      author: 'Nguyễn Xuân Kiệt',
      date: '28/05/2026',
      readTime: '10 phút đọc',
      thumb: '/images/blog-music-production.jpg',
      tags: ['Học Làm Nhạc', 'Kiến Thức'],
      content: `<h3>Làm nhạc bắt đầu từ đâu?</h3>
      <p>Sản xuất âm nhạc (Music Production) không còn là đặc quyền của các studio triệu đô. Chỉ với một chiếc laptop đủ mạnh, bạn đã có thể bắt đầu tạo ra những bản hit ngay tại nhà.</p>
      <h3>Thiết bị tối thiểu (Home Studio)</h3>
      <ul>
        <li><strong>Máy tính:</strong> Càng nhiều RAM và CPU mạnh càng tốt để chạy các nhạc cụ ảo.</li>
        <li><strong>Phần mềm (DAW):</strong> Ableton Live, FL Studio, Logic Pro hoặc Studio One. Hãy chọn cái bạn thấy dễ làm quen nhất.</li>
        <li><strong>Loa kiểm âm hoặc Tai nghe kiểm âm:</strong> Để nghe âm thanh trung thực, không nịnh tai.</li>
        <li><strong>Midi Controller:</strong> Giúp việc nhập nốt nhạc nhanh và cảm xúc hơn.</li>
      </ul>
      <h3>Lộ trình học tập</h3>
      <ol>
        <li><strong>Nhạc lý cơ bản:</strong> Hiểu về nhịp, tông, hợp âm.</li>
        <li><strong>Sử dụng DAW:</strong> Làm chủ các công cụ trong phần mềm bạn chọn.</li>
        <li><strong>Sound Design:</strong> Cách tạo ra những âm thanh độc đáo.</li>
        <li><strong>Arrangement:</strong> Cách sắp xếp bố cục bài hát.</li>
        <li><strong>Mixing cơ bản:</strong> Làm cho bài nhạc nghe sạch và cân đối.</li>
      </ol>
      <p>Hành trình này cần sự kiên trì. Hãy bắt đầu bằng việc "remake" lại những bài hát bạn yêu thích để hiểu cách họ làm.</p>`
    },
    {
      slug: 'thu-am-quang-cao-tvc-chuyen-nghiep-binh-phuoc',
      title: 'Thu Âm Quảng Cáo, TVC Chuyên Nghiệp Tại Bình Phước',
      excerpt: 'Dịch vụ thu âm voice-over cho quảng cáo, video giới thiệu doanh nghiệp. Giọng đọc đa dạng, chất lượng âm thanh đỉnh cao.',
      category: 'Giới Thiệu',
      icon: 'fa-solid fa-bullhorn',
      author: 'XKProduction',
      date: '30/05/2026',
      readTime: '5 phút đọc',
      thumb: '/images/blog-voice-over.jpg',
      tags: ['Quảng Cáo', 'Bình Phước', 'Giới Thiệu'],
      content: `<h3>Âm thanh là linh hồn của quảng cáo</h3>
      <p>Một video quảng cáo đẹp nhưng giọng đọc thô, chất lượng âm thanh kém sẽ làm giảm uy tín của thương hiệu. XKProduction cung cấp giải pháp thu âm chuyên nghiệp cho các doanh nghiệp tại Bình Phước và trên toàn quốc.</p>
      <h3>Dịch vụ của chúng tôi bao gồm</h3>
      <ul>
        <li><strong>Thu âm TVC/Viral Clip:</strong> Giọng đọc truyền cảm, phù hợp với tinh thần thương hiệu.</li>
        <li><strong>Thu âm lời chào tổng đài:</strong> Chuyên nghiệp, rõ ràng.</li>
        <li><strong>Thu âm loa phát thanh siêu thị/cửa hàng:</strong> Thu hút sự chú ý của khách hàng.</li>
        <li><strong>Lồng tiếng phim/hoạt hình:</strong> Đa dạng màu sắc giọng nói.</li>
      </ul>
      <h3>Quy trình làm việc chuyên nghiệp</h3>
      <p>Chúng tôi hỗ trợ tìm kiếm giọng đọc (Voice Talent) phù hợp, chỉnh sửa kịch bản âm thanh và mix nhạc nền bản quyền. Đảm bảo sản phẩm cuối cùng đạt chuẩn phát sóng radio, truyền hình hoặc social media.</p>`
    },
    {
      slug: 'mix-nhac-rap-nhung-dieu-can-luu-y',
      title: 'Mix Nhạc Rap — Những Điều Cần Lưu Ý Để Vocal "Cháy" Hơn',
      excerpt: 'Kỹ thuật mix nhạc Rap khác gì so với Pop? Cách xử lý flow, nén vocal và tạo không gian cho các Rapper.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-microphone-flash',
      author: 'Nguyễn Xuân Kiệt',
      date: '02/06/2026',
      readTime: '7 phút đọc',
      thumb: '/images/blog-mix-rap.jpg',
      tags: ['Rap', 'Mix & Master', 'Kiến Thức'],
      content: `<h3>Đặc thù của Mix nhạc Rap</h3>
      <p>Trong nhạc Rap, vocal là yếu tố quan trọng nhất. Nó cần sự sắc nét, uy lực và phải nằm ngay "trước mặt" người nghe. Kỹ thuật mix rap đòi hỏi sự hiểu biết sâu về nhịp điệu và năng lượng của giọng đọc.</p>
      <h3>Các bước xử lý quan trọng</h3>
      <ul>
        <li><strong>Heavy Compression:</strong> Nhạc rap cần vocal cực kỳ ổn định. Việc sử dụng 2-3 tầng compressor là chuyện bình thường.</li>
        <li><strong>Saturation:</strong> Thêm một chút độ "bẩn" và ấm để vocal dày dặn và có thái độ hơn.</li>
        <li><strong>De-essing:</strong> Xử lý gắt các âm "s", "x" vì vocal rap thường được boost dải cao rất nhiều.</li>
        <li><strong>Ad-libs &amp; Doubles:</strong> Xử lý các lớp bè, nhấn chữ sang hai bên tai để tạo độ rộng cho không gian.</li>
      </ul>
      <h3>Sự quan trọng của Beat</h3>
      <p>Kỹ sư mix phải tạo ra khoảng trống trong beat (thường bằng kỹ thuật Sidechain hoặc Dynamic EQ) để vocal rap có thể xuyên thấu qua lớp nhạc cụ dày đặc.</p>`
    },
    {
      slug: 'vocal-production-nang-tam-giong-hat',
      title: 'Vocal Production — Nâng Tầm Giọng Hát Lên Chuẩn Nghệ Sĩ',
      excerpt: 'Tại sao cùng một giọng hát nhưng khi qua tay producer chuyên nghiệp lại nghe hay hơn hẳn? Bí mật nằm ở Vocal Production.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-wand-magic-sparkles',
      author: 'XKProduction',
      date: '04/06/2026',
      readTime: '6 phút đọc',
      thumb: '/images/blog-vocal-pro.jpg',
      tags: ['Vocal Production', 'Kiến Thức'],
      content: `<h3>Nghệ thuật sản xuất giọng hát</h3>
      <p>Vocal Production không chỉ là chỉnh lỗi, mà là tạo ra một "phiên bản tốt nhất" của giọng hát. Nó bắt đầu từ lúc chọn micro, hướng dẫn ca sĩ lấy hơi, đến khi hậu kỳ tỉ mỉ từng chữ một.</p>
      <h3>Những kỹ thuật "phù thủy"</h3>
      <ul>
        <li><strong>Breath Control:</strong> Giữ lại hoặc loại bỏ tiếng thở một cách nghệ thuật để tạo sự gần gũi hoặc sạch sẽ.</li>
        <li><strong>Tone Shaping:</strong> Sử dụng EQ đặc biệt để làm nổi bật những tần số đẹp nhất trong giọng hát của mỗi người.</li>
        <li><strong>Creative FX:</strong> Sử dụng Vocoder, Pitch Shifting hoặc Radio Filter để tạo điểm nhấn cho bài hát.</li>
      </ul>
      <p>Tại XKProduction, chúng tôi tin rằng mỗi giọng hát là duy nhất. Chúng tôi không áp dụng một công thức chung cho tất cả, mà luôn tìm tòi màu sắc riêng cho từng nghệ sĩ.</p>`
    },
    {
      slug: 'sheet-nhac-la-gi-tam-quan-trong-trong-bieu-dien',
      title: 'Sheet Nhạc Là Gì? Tầm Quan Trọng Trong Biểu Diễn Chuyên Nghiệp',
      excerpt: 'Hiểu về bản nhạc giấy và tại sao mọi nghệ sĩ thực thụ đều cần đến nó khi lên sân khấu hoặc vào phòng thu.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-music',
      author: 'Nguyễn Xuân Kiệt',
      date: '06/06/2026',
      readTime: '5 phút đọc',
      thumb: '/images/blog-what-is-sheet.jpg',
      tags: ['Sheet Nhạc', 'Kiến Thức'],
      content: `<h3>Ngôn ngữ chung của âm nhạc</h3>
      <p><strong>Sheet nhạc</strong> (hay bản nhạc) là hệ thống ký hiệu giúp ghi lại giai điệu, nhịp điệu và các chỉ dẫn biểu diễn. Nếu coi âm nhạc là một câu chuyện, thì sheet nhạc chính là văn bản ghi lại câu chuyện đó.</p>
      <h3>Tại sao bạn cần sheet nhạc?</h3>
      <ul>
        <li><strong>Giao tiếp với ban nhạc:</strong> Thay vì giải thích bằng lời, bạn chỉ cần đưa sheet nhạc là ban nhạc có thể chơi đúng ý bạn ngay lập tức.</li>
        <li><strong>Lưu trữ ý tưởng:</strong> Cảm hứng thường đến bất chợt, ghi lại bằng nhạc lý giúp bạn không bao giờ quên những giai điệu hay.</li>
        <li><strong>Học tập và nghiên cứu:</strong> Giúp bạn hiểu sâu hơn về cấu trúc và tư duy của các tác giả lớn.</li>
      </ul>
      <p>Dù bạn chơi nhạc theo bản năng hay trường lớp, việc biết đọc và sử dụng sheet nhạc là một lợi thế cực lớn trong sự nghiệp âm nhạc chuyên nghiệp.</p>`
    },
    {
      slug: 'cach-chon-bai-hat-phu-hop-voi-chat-giong',
      title: 'Cách Chọn Bài Hát Phù Hợp Với Chất Giọng — Bí Quyết Để Tỏa Sáng',
      excerpt: 'Hát hay không bằng hát đúng bài. Hướng dẫn cách xác định quãng giọng và phong cách âm nhạc phù hợp nhất với bạn.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-user-check',
      author: 'XKProduction',
      date: '08/06/2026',
      readTime: '6 phút đọc',
      thumb: '/images/blog-choosing-song.jpg',
      tags: ['Kiến Thức', 'Vocal'],
      content: `<h3>Đừng cố quá sức</h3>
      <p>Một sai lầm phổ biến là chọn những bài hát quá cao hoặc quá thấp so với quãng giọng tự nhiên. Điều này không chỉ làm bạn mệt mỏi mà còn làm lộ ra những khuyết điểm trong giọng hát.</p>
      <h3>Các bước xác định</h3>
      <ol>
        <li><strong>Xác định quãng giọng (Vocal Range):</strong> Bạn là Soprano, Alto, Tenor hay Bass? Hãy thử giọng với đàn piano để biết nốt thấp nhất và cao nhất bạn có thể hát thoải mái.</li>
        <li><strong>Tìm hiểu màu giọng (Timbre):</strong> Giọng bạn ấm áp, khàn, sáng hay mỏng? Mỗi màu giọng sẽ phù hợp với những thể loại nhạc khác nhau.</li>
        <li><strong>Thử nghiệm các thể loại:</strong> Đừng ngần ngại thử hát từ Ballad, Rock đến Jazz để tìm ra nơi bạn thấy tự tin nhất.</li>
      </ol>
      <p>Nếu bạn chưa tự tin, hãy đến XKProduction. Chúng tôi sẽ giúp bạn test giọng và tư vấn những bài hát, cũng như cách xử lý phù hợp nhất để tôn vinh giọng hát của bạn.</p>`
    },
    {
      slug: 'luu-y-khi-thu-am-podcast-va-voice-over',
      title: 'Lưu Ý Khi Thu Âm Podcast & Voice Over — Chất Lượng Là Trên Hết',
      excerpt: 'Làm sao để có một bản podcast nghe chuyên nghiệp như đài truyền hình? Những kỹ thuật thu âm giọng nói bạn cần biết.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-microphone',
      author: 'Nguyễn Xuân Kiệt',
      date: '10/06/2026',
      readTime: '6 phút đọc',
      thumb: '/images/blog-podcast-tips.jpg',
      tags: ['Podcast', 'Voice Over', 'Kiến Thức'],
      content: `<h3>Podcast đang bùng nổ</h3>
      <p>Nội dung âm thanh đang trở lại mạnh mẽ. Tuy nhiên, người nghe podcast cực kỳ khắt khe với chất lượng âm thanh vì họ thường nghe qua tai nghe trong thời gian dài.</p>
      <h3>Kỹ thuật thu âm giọng nói chuyên nghiệp</h3>
      <ul>
        <li><strong>Khoảng cách micro:</strong> Giữ khoảng cách khoảng 10-15cm so với micro để tránh hiệu ứng gần (proximity effect) quá đà hoặc âm thanh bị loãng.</li>
        <li><strong>Sử dụng Pop Filter:</strong> Để triệt tiêu các phụ âm nổ như "p", "b", "t".</li>
        <li><strong>Xử lý phòng:</strong> Podcast cần âm thanh "khô", không có tiếng vang. Hãy thu âm trong không gian có nhiều đồ vải hoặc mút tiêu âm.</li>
        <li><strong>Cường độ giọng nói:</strong> Hãy nói như đang trò chuyện trực tiếp với một người bạn, điều này tạo cảm giác gần gũi hơn.</li>
      </ul>
      <p>Tại XKProduction, chúng tôi hỗ trợ thu âm podcast với hệ thống lọc nhiễu cao cấp, giúp giọng nói của bạn trở nên ấm áp và cuốn hút hơn bao giờ hết.</p>`
    },
    {
      slug: 'bi-quyet-mix-vocal-day-va-sang-trong-phong-thu',
      title: 'Bí Quyết Mix Vocal Dày & Sang — Kỹ Thuật Của Các Producer',
      excerpt: 'Làm thế nào để giọng hát vừa ấm áp, dày dặn mà vẫn giữ được độ sáng và chi tiết? Khám phá các plugin và quy trình xử lý.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-waveform-lines',
      author: 'XKProduction',
      date: '12/06/2026',
      readTime: '8 phút đọc',
      thumb: '/images/blog-vocal-mixing.jpg',
      tags: ['Mix & Master', 'Vocal', 'Kiến Thức'],
      content: `<h3>Nghịch lý của âm thanh</h3>
      <p>Thông thường, khi bạn tăng bass để vocal dày hơn, nó sẽ bị đục. Khi bạn tăng treble để sáng hơn, nó sẽ bị chói. Bí quyết của dân chuyên nghiệp là sự cân bằng và sử dụng đúng công cụ.</p>
      <h3>Các bước thực hiện</h3>
      <ol>
        <li><strong>Subtractive EQ:</strong> Cắt bỏ những tần số thừa, ù (thường ở vùng 200-500Hz) thay vì chỉ tăng những tần số đẹp.</li>
        <li><strong>Parallel Compression:</strong> Trộn tín hiệu vocal sạch với một tín hiệu đã nén cực mạnh để giữ được độ động mà vẫn có sự ổn định, dày dặn.</li>
        <li><strong>Exciter &amp; Saturation:</strong> Thêm các hài âm (harmonics) để tạo độ sáng tự nhiên mà không cần tăng EQ dải cao quá nhiều.</li>
        <li><strong>Multi-band Compression:</strong> Kiểm soát các vùng tần số gắt một cách linh hoạt.</li>
      </ol>
      <p>Kỹ thuật này đòi hỏi đôi tai nhạy bén và sự tinh tế. Đừng ngại thử nghiệm và so sánh với các bản mix chuẩn để cải thiện kỹ năng của mình.</p>`
    },
    {
      slug: 'huong-dan-dang-ky-ban-quyen-tac-gia-cho-bai-hat',
      title: 'Hướng Dẫn Đăng Ký Bản Quyền Tác Giả Cho Bài Hát Mới',
      excerpt: 'Đừng để chất xám của bạn bị đánh cắp. Quy trình thủ tục đăng ký bản quyền bài hát tại Việt Nam mới nhất.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-shield-halved',
      author: 'Nguyễn Xuân Kiệt',
      date: '14/06/2026',
      readTime: '7 phút đọc',
      thumb: '/images/blog-copyright.jpg',
      tags: ['Bản Quyền', 'Kiến Thức'],
      content: `<h3>Tại sao phải đăng ký bản quyền?</h3>
      <p>Trong thời đại internet, việc đạo nhạc hoặc sử dụng trái phép tác phẩm diễn ra rất thường xuyên. Giấy chứng nhận bản quyền là bằng chứng thép để bạn bảo vệ quyền lợi hợp pháp và nhận tiền tác quyền sau này.</p>
      <h3>Hồ sơ cần chuẩn bị</h3>
      <ul>
        <li><strong>Tờ khai đăng ký:</strong> Theo mẫu của Cục Bản quyền tác giả.</li>
        <li><strong>Bản sao tác phẩm:</strong> 02 bản đóng tập (gồm lời và nhạc/ký âm).</li>
        <li><strong>Giấy tờ định danh:</strong> CMND/CCCD của tác giả và chủ sở hữu.</li>
        <li><strong>Cam đoan:</strong> Văn bản cam đoan tự sáng tác, không sao chép.</li>
      </ul>
      <h3>Nộp ở đâu?</h3>
      <p>Bạn có thể nộp trực tiếp tại Cục Bản quyền tác giả (Hà Nội, TP.HCM, Đà Nẵng) hoặc nộp qua đường bưu điện. Thời gian giải quyết thường từ 15-30 ngày làm việc.</p>`
    },
    {
      slug: 'cach-xay-dung-kenh-youtube-music-cho-nghe-si-moi',
      title: 'Xây Dựng Kênh YouTube Music — Bước Đệm Cho Nghệ Sĩ Mới',
      excerpt: 'YouTube là nền tảng video âm nhạc lớn nhất thế giới. Làm thế nào để tối ưu kênh của bạn và thu hút lượt đăng ký.',
      category: 'Kiến Thức',
      icon: 'fa-brands fa-youtube',
      author: 'XKProduction',
      date: '16/06/2026',
      readTime: '8 phút đọc',
      thumb: '/images/blog-youtube-marketing.jpg',
      tags: ['YouTube', 'Marketing', 'Kiến Thức'],
      content: `<h3>Kênh nghệ sĩ chính thức (Official Artist Channel)</h3>
      <p>Hãy nâng cấp kênh của bạn lên OAC để có biểu tượng nốt nhạc bên cạnh tên. Điều này giúp gộp tất cả nhạc của bạn từ các nguồn khác nhau về một nơi và trông chuyên nghiệp hơn rất nhiều.</p>
      <h3>Tối ưu hóa kênh</h3>
      <ul>
        <li><strong>Branding:</strong> Ảnh bìa, ảnh đại diện đồng nhất về phong cách.</li>
        <li><strong>Danh sách phát (Playlist):</strong> Sắp xếp theo album, theo thể loại hoặc các buổi biểu diễn live.</li>
        <li><strong>Mô tả kênh:</strong> Viết một tiểu sử (bio) ấn tượng và đừng quên để lại thông tin liên hệ booking.</li>
        <li><strong>Tương tác:</strong> Trả lời bình luận của khán giả để tạo cộng đồng fan trung thành.</li>
      </ul>
      <h3>Chiến lược nội dung</h3>
      <p>Ngoài MV chính thức, hãy đăng thêm các video behind-the-scenes (hậu trường phòng thu), video cover hoặc các bản acoustic đơn giản. Sự đều đặn là chìa khóa để thuật toán YouTube chú ý đến bạn.</p>`
    },
    {
      slug: 'thiet-bi-phong-thu-am-co-ban-can-nhung-gi',
      title: 'Thiết Bị Phòng Thu Âm Cơ Bản — Đầu Tư Gì Cho Hiệu Quả?',
      excerpt: 'Bạn muốn mở phòng thu tại nhà? Tư vấn danh sách thiết bị cần thiết từ mức giá rẻ đến tầm trung.',
      category: 'Kiến Thức',
      icon: 'fa-solid fa-gears',
      author: 'Nguyễn Xuân Kiệt',
      date: '18/06/2026',
      readTime: '9 phút đọc',
      thumb: '/images/blog-studio-gear.jpg',
      tags: ['Thiết Bị', 'Kiến Thức'],
      content: `<h3>Đừng chạy đua vũ trang</h3>
      <p>Rất nhiều người mới bắt đầu vội vàng mua những chiếc micro đắt tiền nhưng lại bỏ qua việc xử lý phòng hoặc loa kiểm âm. Hãy đầu tư một cách thông minh và đồng bộ.</p>
      <h3>Thứ tự ưu tiên đầu tư</h3>
      <ol>
        <li><strong>Audio Interface:</strong> Trái tim của phòng thu. Hãy chọn loại có preamp sạch và độ trễ (latency) thấp (Ví dụ: Focusrite Scarlett, Audient iD series).</li>
        <li><strong>Microphone:</strong> Một chiếc Condenser màng lớn là lựa chọn tốt nhất cho vocal (Ví dụ: Rode NT1-A, AKG P220).</li>
        <li><strong>Loa/Tai nghe kiểm âm:</strong> Để bạn nghe đúng những gì mình đang làm (Ví dụ: Yamaha HS5, tai nghe Beyerdynamic DT770 Pro).</li>
        <li><strong>Xử lý âm học:</strong> Ít nhất hãy có mút tiêu âm hoặc tấm chắn micro để giảm tiếng vang của phòng.</li>
      </ol>
      <p>Nhớ rằng: Thiết bị chỉ chiếm 30% kết quả, 70% còn lại nằm ở kỹ năng và đôi tai của bạn. Hãy học cách sử dụng thật tốt những gì mình đang có trước khi nâng cấp.</p>`
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
