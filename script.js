document.addEventListener('DOMContentLoaded', () => {
  // （info-summary）
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

  // カーソル画像を定期的にセット（強制維持）
  setInterval(() => {
    document.body.style.cursor = "url('https://raw.githubusercontent.com/shiopidayo/UchuUei/main/image/cursor.png') 4 4, auto";
    document.documentElement.style.cursor = "url('https://raw.githubusercontent.com/shiopidayo/UchuUei/main/image/cursor.png') 4 4, auto";
  }, 200);

  // ハンバーガーメニュー
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

  // ナビゲーションの現在位置を強調
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add('active');
    }
  });

  // スライドショー
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

  // ページトップへ戻る
  const topBtn = document.getElementById('page-top');
  if (topBtn) {
    topBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
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

