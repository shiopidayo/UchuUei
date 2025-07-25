document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.work-item.toggle .thumbnail');
  
  toggles.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const gallery = document.getElementById(targetId);
      gallery.classList.toggle('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.getElementById('page-top');
  if (topBtn) {
    topBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
