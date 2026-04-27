# Kế hoạch Tối ưu hóa Package SEO (Refactor Nuxt SEO)

## Mục tiêu
Loại bỏ gói combo `@nuxtjs/seo` nặng nề và thay thế bằng các module độc lập (`@nuxtjs/sitemap` và `@nuxtjs/robots`). Qua đó, cắt bỏ hoàn toàn các phụ thuộc rác chứa file binary (như `nuxt-og-image`, `@takumi-rs/core`) để:
1. Giải quyết dứt điểm lỗi lệch lockfile giữa macOS và Linux trên Cloudflare Pages.
2. Cho phép đưa `package-lock.json` trở lại Git để tận dụng sức mạnh caching của `npm ci`.
3. Giảm thời gian cài đặt (`npm install`) từ gần 2 phút xuống dưới 10 giây.
4. Đảm bảo triết lý "Native flow, không over-engineering" — chỉ cài những gì thực sự sử dụng.

## Phân tích hiện trạng
- Dự án đang sử dụng gói `@nuxtjs/seo`. Đây là một meta-package kéo theo 6 module con.
- Dự án chỉ thực sự cần 2 module: **Sitemap** và **Robots**.
- Việc kéo theo module `nuxt-og-image` (mặc dù cấu hình đã tắt) ép npm tải xuống core render ảnh bằng Rust (`@takumi-rs`), gây phình to dự án và tạo ra lỗi khi Cloudflare chạy lệnh `npm ci`.

## Các bước triển khai chi tiết

### Bước 1: Gỡ bỏ gói combo SEO cũ
Chạy lệnh gỡ cài đặt gói `@nuxtjs/seo` hiện tại để làm sạch cây dependency:
```bash
npm uninstall @nuxtjs/seo
```

### Bước 2: Cài đặt các module độc lập cần thiết
Chỉ cài đúng 2 thư viện mà dự án đang sử dụng cho việc SEO tĩnh:
```bash
npm install -D @nuxtjs/sitemap @nuxtjs/robots
```

### Bước 3: Cập nhật cấu hình Nuxt (`nuxt.config.ts`)
Thay thế cấu hình module cũ bằng cấu hình mới, và dọn dẹp các cấu hình thừa:
1. Đổi `modules: ['@nuxtjs/seo']` thành `modules: ['@nuxtjs/sitemap', '@nuxtjs/robots']`.
2. Xóa bỏ dòng cấu hình `ogImage: { enabled: true }` (vì không còn sử dụng).
3. (Tùy chọn tối ưu) Thêm `zeroRuntime: true` vào khối cấu hình `sitemap` để tối ưu bundle size cho server.

### Bước 4: Khôi phục và tái tạo `package-lock.json`
Vì lỗi đa nền tảng đã được giải quyết bằng việc xóa `@takumi-rs`, chúng ta có thể tự tin đưa lockfile trở lại để tăng tốc build:
1. Chạy lệnh `npm install` để tạo lại file `package-lock.json` sạch sẽ và nhẹ nhàng.
2. Vào file `.gitignore`, xóa dòng `package-lock.json` (nếu có).
3. Đưa file này vào git tracking: `git add package-lock.json`.

### Bước 5: Commit và Push (Trigger Deploy)
Ghi nhận thay đổi và đẩy lên Github để Cloudflare tự động chạy bản build mới thần tốc:
```bash
git add package.json package-lock.json nuxt.config.ts .gitignore
git commit -m "refactor(seo): remove heavy @nuxtjs/seo bundle, use lightweight sitemap and robots"
git push
```

## Đánh giá kết quả mong đợi
- **Cloudflare Build:** Lệnh `npm clean-install` (npm ci) sẽ được sử dụng trở lại thành công. Thời gian cài đặt dự kiến giảm mạnh từ ~100 giây xuống dưới 10 giây.
- **Tính năng SEO:** Sitemap và file robots.txt vẫn hoạt động bình thường, không làm ảnh hưởng đến SEO của website. Toàn bộ các thẻ meta tags cơ bản vẫn được render tốt từ config gốc của ứng dụng.
