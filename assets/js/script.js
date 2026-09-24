// ═══════════════════════════════════════════════════════
// AWWWARDS-LEVEL NEO-MINIMALIST BENTO
// Lenis Smooth Scroll, GSAP, Custom Cursor
// ═══════════════════════════════════════════════════════

// ── 1. PRELOADER ──
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('preloader-hidden');
    }, 2000);
  }
});

// ── 2. LENIS SMOOTH SCROLL ──
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0, 0);


// ── 3. NAVBAR SCROLL & MOBILE MENU ──
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
let isMenuOpen = false;

// ── 3. NAVBAR SCROLL ──
const handleNavbarScroll = (scrollY) => {
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

// Sinkronisasi dengan Lenis & native scroll
if (typeof lenis !== 'undefined') {
  lenis.on('scroll', (e) => handleNavbarScroll(e.scroll));
} else {
  window.addEventListener('scroll', () => handleNavbarScroll(window.scrollY));
}

// Toggle mobile menu
if (mobileMenuBtn && mobileDrawer) {
  mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileDrawer.classList.toggle('open', isMenuOpen);
    mobileMenuBtn.classList.toggle('active', isMenuOpen);
    
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
      if (isMenuOpen) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      mobileDrawer.classList.remove('open');
      mobileMenuBtn.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      isMenuOpen = false;
      mobileDrawer.classList.remove('open');
      mobileMenuBtn.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });
}


// ── 5. GSAP SCROLL REVEALS ──
// Generic fade up
const fadeUps = document.querySelectorAll('.gsap-fade-up');
fadeUps.forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
});

// Parallax Section Numbers
const sectionNumbers = document.querySelectorAll('.section-number');
sectionNumbers.forEach(num => {
  gsap.to(num, {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: num.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});


// ── 6. SCROLLSPY (ACTIVE NAV LINKS) ──
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (current && link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


// ── 7. SMOOTH SCROLL (A TAGS) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      if (typeof lenis !== 'undefined') {
        lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});


// ── 8. TOAST NOTIFICATION & FORM SIMULATION ──
function showToast(msg) {
  const toast = document.getElementById('toast');
  if(toast) {
    document.getElementById('toast-msg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

window.copyToClipboard = function(text, msg) {
  navigator.clipboard.writeText(text).then(() => showToast(msg || 'Disalin!'));
}

window.downloadCV = function(e) {
  e.preventDefault();
  showToast('📄 Mengunduh CV...');
  window.open('assets/docs/CVats.pdf', '_blank');
}


// ── 9. DARK / LIGHT THEME TOGGLE ──
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Cek preferensi tersimpan saat halaman dimuat
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (themeToggleBtn) {
    const icon = themeToggleBtn.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
}

// Event listener tombol toggle tema
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const icon = themeToggleBtn.querySelector('i');

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      if (icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
  });
}


// ── 10. TYPEWRITER EFFECT (HERO) ──
const typewriterText = document.getElementById('typewriter-text');
const roles = ["DevOps Engineer", "Cloud Engineer", "Network Administrator", "Software Fundamentals"];

if (typewriterText) {
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function handleTypewriter() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      // Jeda 2 detik setelah kata selesai diketik
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Selesai menghapus, ganti kata berikutnya
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(handleTypewriter, speed);
  }

  // Mulai animasi
  setTimeout(handleTypewriter, 1000);
}