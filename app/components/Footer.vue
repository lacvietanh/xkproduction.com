<template>
  <footer class="footer">
    <div class="max-width">
      <div class="footer-content">
        <div class="footer-column">
          <h4><i class="fa-solid fa-music"></i> XKStudio</h4>
          <p>Phòng thu âm &amp; studio sản xuất âm nhạc chuyên nghiệp. Đồng hành cùng ca sĩ, producer và doanh nghiệp từ ý tưởng đến phát hành.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/ngxkiet" title="Facebook" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" title="Instagram" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/@Xkstudio29" title="YouTube" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.tiktok.com/@xkstudio" title="TikTok" target="_blank" rel="noopener"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>

        <div class="footer-column">
          <h4>Dịch vụ</h4>
          <ul>
            <li><NuxtLink to="/services">Thu âm &amp; Vocal Production</NuxtLink></li>
            <li><NuxtLink to="/services">Mixing &amp; Mastering</NuxtLink></li>
            <li><NuxtLink to="/services">Hòa âm phối khí</NuxtLink></li>
            <li><NuxtLink to="/services">MV &amp; TVC</NuxtLink></li>
            <li><NuxtLink to="/live-band">Live Band &amp; Sự kiện</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Trang</h4>
          <ul>
            <li><NuxtLink to="/">Trang chủ</NuxtLink></li>
            <li><NuxtLink to="/about">Về chúng tôi</NuxtLink></li>
            <li><NuxtLink to="/courses">Khóa Học</NuxtLink></li>
            <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Liên hệ</h4>
          <ul>
            <li><a href="tel:0355356294"><i class="fa-solid fa-phone"></i> 0355.356.294</a></li>
            <li><a href="mailto:xkstudio29@gmail.com"><i class="fa-solid fa-envelope"></i> xkstudio29@gmail.com</a></li>
            <li><a href="https://zalo.me/0355356294" target="_blank" rel="noopener"><i class="fa-solid fa-comment"></i> Zalo</a></li>
            <li><a href="https://www.facebook.com/ngxkiet" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 XKStudio. Tất cả quyền được bảo lưu.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  margin-top: 0;
  padding: 3rem 2rem;
  position: relative;
  z-index: 1;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-column h4 {
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.footer-column p {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.footer-column a:hover {
  color: var(--primary);
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--bg-light);
  color: var(--text-light);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.85rem;
}

.social-links a:hover {
  background: var(--primary);
  color: var(--bg-dark);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.85rem;
}
</style>
