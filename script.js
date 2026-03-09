const fills = document.querySelectorAll('.fill');
const revealElements = document.querySelectorAll('.reveal');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');

      if (entry.target.querySelectorAll('.fill').length) {
        entry.target.querySelectorAll('.fill').forEach((bar) => {
          bar.style.width = bar.dataset.width;
        });
      }
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach((element) => observer.observe(element));

fills.forEach((bar) => {
  const heroVisible = window.innerHeight > 0;
  if (heroVisible && bar.closest('#skill')) {
    setTimeout(() => {
      if (document.querySelector('#skill').getBoundingClientRect().top < window.innerHeight) {
        bar.style.width = bar.dataset.width;
      }
    }, 300);
  }
});

function bukaProject(judul, deskripsi) {
  alert(`${judul}\n\n${deskripsi}`);
}

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});
