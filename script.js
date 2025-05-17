document.addEventListener('DOMContentLoaded', () => {
  // インフォメーションのサマリー部分を取得
  const infoSummaries = document.querySelectorAll('.info-summary');
  
  // クリックイベントを追加（モバイル版対応）
  infoSummaries.forEach(summary => {
    summary.addEventListener('click', () => {
      const details = summary.nextElementSibling; // 詳細部分

      // activeクラスのトグルを追加
      summary.classList.toggle('active');
      details.classList.toggle('active'); // 詳細部分にもactiveクラスを付与

      // 詳細の表示/非表示を切り替え
      if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block'; // 詳細を表示
        summary.closest('.info-box').classList.add('active'); // info-boxをアクティブにして背景色を変更
      } else {
        details.style.display = 'none'; // 詳細を非表示
        summary.closest('.info-box').classList.remove('active'); // info-boxのアクティブを外す
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

document.addEventListener('DOMContentLoaded', () => {
  // ページ内のすべての.fade-inクラスを対象にする
  const fadeInElements = document.querySelectorAll('.fade-in');

  // IntersectionObserverの設定
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // visibleクラスを追加して表示
      }
    });
  }, {
    threshold: 0.1 // 画面の10%が見えた時にトリガー
  });

  // すべての.fade-in要素を監視
  fadeInElements.forEach(element => observer.observe(element));
});
