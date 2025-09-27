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
  
setInterval(() => {
  document.body.style.cursor = "url('https://raw.githubusercontent.com/shiopidayo/UchuUei/main/image/cursor.png') 4 4, auto";
  document.documentElement.style.cursor = "url('https://raw.githubusercontent.com/shiopidayo/UchuUei/main/image/cursor.png') 4 4, auto";
}, 200);
  
  //🍔
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

  // 
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add('active');
    }
  });

  // スライド
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

  // top
  const topBtn = document.getElementById('page-top');
  if (topBtn) {
    topBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // 
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
document.addEventListener("click", function (e) {
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 40 + 20; // 
    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.setProperty("--x", x);
    sparkle.style.setProperty("--y", y);

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 600);
  }
});
