document.addEventListener('DOMContentLoaded', () => {
  const infoSummaries = document.querySelectorAll('.info-summary');

  infoSummaries.forEach(summary => {
    summary.addEventListener('click', () => {
      const infoBox = summary.closest('.info-box'); // .info-boxの親要素を取得
      const details = infoBox.querySelector('.info-details'); // 親要素内の.info-detailsを取得

      // .info-detailsの表示/非表示を切り替える
      details.classList.toggle('visible');  // .visible クラスを切り替えて表示/非表示

      // .info-boxのactiveクラスを切り替える
      infoBox.classList.toggle('active');   // .info-boxの背景色を変更
    });
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
