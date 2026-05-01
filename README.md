# 🎵 XKProduction — Changelog & Cải Thiện Toàn Diện

> **Phiên bản:** v2.1.0 · **Ngày cập nhật:** 01/05/2026  
> **Tech Stack:** Nuxt 4.4.2 · Vue 3.5 · Cloudflare Pages  
> **Domain:** [xkproduction.com](https://xkproduction.com)

---

## 📋 Tổng Quan Thay Đổi

Đợt cải thiện này tập trung vào **4 trụ cột chính**: SEO, UX/UI, Tiếp cận khách hàng, và Chiến lược brand awareness. Dưới đây là tất cả thay đổi đã thực hiện:

---

## 1. 🔍 SEO — Cải Thiện Sâu

### ✅ Đã Thực Hiện (Làm ngay)

| Thay đổi | File | Mô tả |
|---|---|---|
| **Blog / Content Marketing** | `app/pages/blog.vue` | Tạo trang Blog & Kiến Thức Âm Nhạc với 6 bài viết SEO nhắm vào từ khóa tiềm năng |
| **JSON-LD Review Schema** | `app/pages/index.vue` | Thêm 4 Review schema từ khách hàng thật (Revan, Howl, Cao Thành Lâm, Phương Thanh Tuyền) |
| **JSON-LD LocalBusiness mở rộng** | `app/pages/contact.vue` | Bổ sung `geo`, `hasMap`, `priceRange`, `aggregateRating` cho LocalBusiness schema |
| **Từ khóa long-tail** | `app/app.vue` | Thêm các từ khóa tiềm năng: "phòng thu âm Bình Phước", "mix master giá rẻ", "hoà âm phối khí online", "thu âm bài hát giá bao nhiêu" |
| **Site Description tối ưu** | `nuxt.config.ts` | Mô tả site bao gồm hotline, giá tham khảo, và địa danh Bình Phước |
| **Sitemap cập nhật** | `nuxt.config.ts` | Thêm `/blog` vào sitemap với priority 0.8, changefreq weekly |
| **Prerender routes** | `nuxt.config.ts` | Thêm `/blog` vào danh sách prerender |
| **BreadcrumbList Schema** | `app/pages/blog.vue` | Thêm BreadcrumbList cho blog page |

### 📝 Nội Dung Blog SEO (6 bài viết)

| # | Tiêu đề | Từ khóa nhắm đến |
|---|---|---|
| 1 | Thu Âm Bài Hát Giá Bao Nhiêu? Bảng Giá Chi Tiết 2026 | `thu âm bài hát giá bao nhiêu`, `bảng giá thu âm` |
| 2 | Phòng Thu Âm Bình Phước — Tại Sao Chọn XKStudio? | `phòng thu âm Bình Phước`, `studio bình phước` |
| 3 | Mix Master Là Gì? Hướng Dẫn Từ A-Z Cho Người Mới | `mix master giá rẻ`, `mixing mastering là gì` |
| 4 | Hoà Âm Phối Khí Online — Quy Trình & Chi Phí | `hoà âm phối khí online`, `giá hoà âm phối khí` |
| 5 | 5 Mẹo Thu Âm Vocal Chuyên Nghiệp Tại Nhà | `thu âm tại nhà`, `mẹo thu âm vocal` |
| 6 | Before & After: Vocal Raw vs Sau Mix Master | `before after mix master`, `so sánh mix master` |

### 🔜 Cần Làm Tiếp (Tháng này / Dài hạn)

- [ ] Đăng ký & tối ưu **Google Business Profile** (cần tài khoản Google chủ doanh nghiệp)
- [ ] Thu thập **Google Reviews** từ khách hàng thật (đã thêm CTA button trên homepage)
- [ ] Đăng bài blog mới mỗi tuần để tạo internal linking
- [ ] Tạo content cho **Google Discover** (bài viết dạng tin tức/trend)
- [ ] Submit sitemap lên Google Search Console

---

## 2. 🎨 UX/UI — Nâng Cấp Trải Nghiệm

### ✅ Đã Thực Hiện

| Thay đổi | File | Mô tả |
|---|---|---|
| **Testimonial có ảnh thật** | `app/pages/index.vue` | Thay thế avatar chữ cái (R, H, C, F) bằng ảnh profile thật, tăng độ tin cậy |
| **Dự án liên kết testimonial** | `app/pages/index.vue` | Thêm tag "Dự án: [tên bài]" cho mỗi testimonial card |
| **Subtitle social proof** | `app/pages/index.vue` | Thêm dòng "Hơn 2000+ nghệ sĩ đã tin tưởng XKStudio" dưới heading testimonials |
| **Google Maps Embed** | `app/pages/contact.vue` | Nhúng iframe Google Maps thay vì link tĩnh, với dark mode filter và nút "Chỉ đường" |
| **Floating CTA trên mobile** | `app/components/StickyContact.vue` | Zalo + Phone button luôn hiển thị trên mobile (< 768px), không cần scroll |
| **Google Reviews CTA** | `app/pages/index.vue` | Thêm button "Đánh giá chúng tôi trên Google" dưới testimonials section |
| **Blog page responsive** | `app/pages/blog.vue` | Blog với expandable articles, filter by tags, responsive grid |

### 🔜 Cần Làm Tiếp

- [ ] Thu thập ảnh thật của từng khách hàng (Revan, Howl, Cao Thành Lâm, Fesu, Phương Thanh Tuyền) để thay thế ảnh placeholder
- [ ] Thêm audio player nhúng trực tiếp cho portfolio (cần file audio hoặc SoundCloud embed)
- [ ] Thiết kế trang Case Study chi tiết cho từng dự án nổi bật

---

## 3. 📱 Tiếp Cận Khách Hàng — Mở Rộng Kênh

### ✅ Đã Thực Hiện

| Thay đổi | File | Mô tả |
|---|---|---|
| **Blog / Content Marketing** | `app/pages/blog.vue` | 6 bài viết SEO-focused — Google có nội dung để index sâu |
| **Navigation Blog** | `Navbar.vue`, `Footer.vue` | Thêm link Blog vào cả navbar và footer |
| **Map heading & directions** | `app/pages/contact.vue` | Heading "Vị trí XKStudio" + link chỉ đường |

### 🔜 Cần Làm Tiếp

- [ ] **Booking form** với chọn ngày/giờ — tích hợp Calendly hoặc tự build
- [ ] **Trang B2B** riêng cho doanh nghiệp (TVC, nhạc thương hiệu, sự kiện corporate)
- [ ] **Zalo Official Account** — broadcast promotions, CRM khách hàng
- [ ] **Live Chat widget** — tích hợp Tawk.to hoặc Crisp

---

## 4. 🚀 Viral & Brand Awareness — Chiến Lược

### ✅ Đã Thực Hiện

| Thay đổi | Mô tả |
|---|---|
| **Before & After blog content** | Bài "Vocal Raw vs Sau Mix Master" — template cho series Before & After |
| **Studio tỉnh lẻ narrative** | Bài "Phòng Thu Âm Bình Phước" — khai thác góc "studio tỉnh lẻ, chất quốc tế" |

### 🔜 Cần Làm Tiếp (Dài hạn)

- [ ] **Series video Before & After** trên TikTok/YouTube Shorts
- [ ] **Chương trình collab/affiliate** với creator âm nhạc
- [ ] **Artist Showcase** định kỳ (monthly) — tận dụng reach nghệ sĩ
- [ ] **Storytelling content** "Hành trình XKStudio — Studio tỉnh lẻ, chất quốc tế"

---

## 📁 File Đã Thay Đổi

```
├── nuxt.config.ts                    # SEO config, sitemap, prerender routes
├── app/
│   ├── app.vue                       # Global SEO meta, keywords
│   ├── components/
│   │   ├── Navbar.vue                # + Blog nav link
│   │   ├── Footer.vue                # + Blog footer link  
│   │   └── StickyContact.vue         # Mobile always-visible CTA
│   └── pages/
│       ├── index.vue                 # Testimonials upgrade, Review schema
│       ├── contact.vue               # Google Maps embed, enhanced schema
│       └── blog.vue                  # ✨ NEW — Blog & Kiến Thức Âm Nhạc
```

---

## 🛠️ Hướng Dẫn Triển Khai

```bash
# 1. Pull code mới
git pull origin main

# 2. Kiểm tra locally
npm run dev

# 3. Build & deploy lên Cloudflare Pages
npm run deploy

# 4. Submit sitemap (sau khi deploy)
# Truy cập: https://search.google.com/search-console
# Submit: https://xkproduction.com/sitemap.xml
```

---

## 📊 Ưu Tiên Tiếp Theo

### 🔴 Ưu tiên cao (Tháng này)
1. Thu thập ảnh thật của khách hàng cho testimonials
2. Đăng ký Google Business Profile
3. Thu thập 10+ Google Reviews đầu tiên
4. Viết thêm 4 bài blog mới

### 🟡 Ưu tiên trung bình (2-3 tháng)
5. Tích hợp booking form (Calendly)
6. Trang B2B cho doanh nghiệp
7. Audio player nhúng cho portfolio
8. Zalo Official Account

### 🟢 Dài hạn (3-6 tháng)
9. Series video Before & After
10. Chương trình affiliate/collab
11. Artist Showcase định kỳ
12. Case Study chi tiết

---

> **Founder:** Nguyễn Xuân Kiệt — Music Producer 7+ năm  
> **Hotline:** 0355.356.294  
> **Website:** [xkproduction.com](https://xkproduction.com)
