document.addEventListener('DOMContentLoaded', () => {
  const infoSummaries = document.querySelectorAll('.info-summary');

  infoSummaries.forEach(summary => {
    summary.addEventListener('click', () => {
      const infoBox = summary.closest('.info-box'); // info-boxの親要素を取得
      const details = infoBox.querySelector('.info-details'); // 親要素内の.info-detailsを取得

      // .visible クラスの追加/削除
      details.classList.toggle('visible');  // 詳細情報を表示
      summary.classList.toggle('active');   // サマリー部分のスタイル変更

      // 詳細情報の表示/非表示を直接制御
      if (details.classList.contains('visible')) {
        details.style.display = 'block'; // 詳細を表示
        infoBox.classList.add('active'); // info-boxをアクティブにする
      } else {
        details.style.display = 'none'; // 詳細を非表示
        infoBox.classList.remove('active'); // info-boxを非アクティブにする
      }
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

