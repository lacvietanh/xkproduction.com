# FontAwesome 6 — Icon Replacement Report

**Ngày hoàn thành:** 2026-04-19  
**Thư viện:** Font Awesome 6.5.2 Free (via CDN)  
**CDN:** `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`

---

## 1. Cài đặt

Thêm vào `nuxt.config.ts` → `app.head.link[]`:

```ts
{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css', crossorigin: 'anonymous' }
```

---

## 2. Files đã thay thế

| File | Loại icon cũ | FA6 icon mới |
|------|-------------|-------------|
| `nuxt.config.ts` | — | Thêm CDN link |
| `components/Navbar.vue` | 7 emoji (🎙️💿🎸🎵💰👥📩) | `fa-microphone-lines`, `fa-compact-disc`, `fa-guitar`, `fa-music`, `fa-tag`, `fa-users`, `fa-paper-plane` |
| `components/Footer.vue` | emoji + ký tự f, 📷, ▶️, ♪ | `fa-brands fa-facebook-f/instagram/youtube/tiktok`, `fa-phone/envelope/comment` |
| `components/ScrollToTopButton.vue` | Ký tự `↑` | `fa-solid fa-chevron-up` |
| `pages/index.vue` | SVG inline (play, stats, services), emoji 📞📧💬 | `fa-play`, `fa-download`, `fa-graduation-cap`, `fa-handshake`, `fa-clock`, `fa-microphone`, `fa-music`, `fa-film`, `fa-phone`, `fa-envelope`, `fa-comment` |
| `pages/about.vue` | emoji 🎙️🎯⭐🎧🎛️🎼🎬, ký tự `✓` | `fa-microphone-lines`, `fa-bullseye`, `fa-star`, `fa-headphones`, `fa-sliders`, `fa-music`, `fa-film`, `fa-check` |
| `pages/contact.vue` | emoji 📞📧💬👤📍 | `fa-phone`, `fa-envelope`, `fa-comment`, `fa-brands fa-facebook-f`, `fa-location-dot` |
| `pages/services.vue` | emoji 🌟🏆🎵🎤🎹🎛️🎬, ký tự `→`, `★` | `fa-star`, `fa-trophy`, `fa-music`, `fa-microphone`, `fa-keyboard`, `fa-sliders`, `fa-film`, `fa-arrow-right` |
| `pages/pricing.vue` | emoji 🎤🎛️🎹, CSS `content: '✓'` | `fa-microphone`, `fa-sliders`, `fa-keyboard`, CSS FA6 unicode `\f00c` |
| `pages/live-band.vue` | emoji 🔊💡🎸🎛️🎪, ký tự `✓`, emoji 📞📧💬 | `fa-volume-high`, `fa-lightbulb`, `fa-guitar`, `fa-sliders`, `fa-star`, `fa-check`, `fa-phone`, `fa-envelope`, `fa-comment` |
| `pages/products.vue` | emoji 🎵🎛️🎹🎬🎙️🌟🎶🏆, ký tự `▶` | `fa-music`, `fa-sliders`, `fa-keyboard`, `fa-film`, `fa-microphone-lines`, `fa-star`, `fa-headphones`, `fa-trophy`, `fa-play` |

---

## 3. Tổng kết

- **Tổng icon đã thay:** ~80+ instances trên toàn dự án
- **Loại icon cũ:** Emoji Unicode, SVG inline, ký tự đặc biệt (✓ → ↑ ▶ ★ ♪)
- **Tất cả thay bằng:** FontAwesome 6 Free (`fa-solid`, `fa-brands`)
- **CSS pseudo-element** (`::before content`) cũng đã được cập nhật sang FA6 unicode

> [!NOTE]
> FA 7 chưa phát hành stable tại thời điểm này. FA 6.5.2 là phiên bản ổn định mới nhất và tương thích đầy đủ với codebase Nuxt 4.
