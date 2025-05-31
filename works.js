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
