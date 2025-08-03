document.addEventListener('DOMContentLoaded', () => {
  // インフォメーションのサマリー部分を取得（info-summary）
  const infoSummaries = document.querySelectorAll('.info-summary');
  infoSummaries.forEach(summary => {
    summary.addEventListener('click', () => {
      const details = summary.nextElementSibling;
      summary.classList.toggle('active');
      details.classList.toggle('active');

      if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        summary.closest('.info-box').classList.add('active');
      } else {
        details.style.display = 'none';
        summary.closest('.info-box').classList.remove('active');
      }
    });
  });
  
setInterval(() => {
  document.body.style.cursor = "url('https://raw.githubusercontent.com/shiopidayo/UchuUei/main/image/cursor.png') 4 4, auto";
  document.documentElement.style.cursor = "url('https://raw.githubusercontent.com/shiopidayo/UchuUei/main/image/cursor.png') 4 4, auto";
}, 200);
  
  // ハンバーガーメニュー関連
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const blurOverlay = document.getElementById('blurOverlay');

  function toggleMenu() {
    mobileNav.classList.toggle('active');
    blurOverlay.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);
  blurOverlay.addEventListener('click', toggleMenu);

  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // 現在ページのナビリンクに active クラスを付ける
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add('active');
    }
  });

  // スライドショー処理
  const slides = document.querySelectorAll(".bg-slide");
  let currentIndex = 0;
  if (slides.length > 0) {
    slides[currentIndex].classList.add('active');
    setInterval(() => {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }, 6000);
  }

  // トップへ戻るボタン処理
  const topBtn = document.getElementById('page-top');
  if (topBtn) {
    topBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // フェードイン表示 & カーソル再適用
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // カーソル再適用（上書き防止）
        document.body.style.setProperty(
          'cursor',
          "url('https://raw.githubusercontent.com/shiopidayo/UchuUei/main/image/cursor.cur') 4 4, auto",
          'important'
        );
        document.documentElement.style.setProperty(
          'cursor',
          "url('https://raw.githubusercontent.com/shiopidayo/UchuUei/main/image/cursor.cur') 4 4, auto",
          'important'
        );
      }
    });
  }, {
    threshold: 0.1
  });

  fadeInElements.forEach(element => observer.observe(element));
});
