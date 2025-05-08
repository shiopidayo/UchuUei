document.addEventListener('DOMContentLoaded', () => {
  // インフォメーションのサマリー部分を取得
  const toggleBtn = document.querySelector('.toggle-btn');
  const infoDetails = document.querySelector('.info-details');
  
  // 他の info-summary のクリックイベント
  const infoSummaries = document.querySelectorAll('.info-summary');

  infoSummaries.forEach(summary => {
    summary.addEventListener('click', () => {
      const details = summary.nextElementSibling; // 詳細部分

      // active クラスを切り替え
      summary.classList.toggle('active');
      details.classList.toggle('active'); // 詳細部分にも active クラスを付与

      // .visible クラスの追加/削除
      details.classList.toggle('visible');
      if (details.classList.contains('visible')) {
        summary.closest('.info-box').classList.add('active');
      } else {
        summary.closest('.info-box').classList.remove('active');
      }
    });
  });

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

  // 現在のページのURLを取得
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

  // フェードインアニメーション
  const sections = document.querySelectorAll('.section');
  const catchcopy = document.querySelector('.catchcopy');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  if (catchcopy) observer.observe(catchcopy);
  sections.forEach(section => observer.observe(section));
});

