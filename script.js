// Coorsanté — interactions légères (aucune dépendance)
(function () {
  // Animation du logo : entrée des trois personnages, puis léger flottement
  var logo = document.getElementById('logoAnim');
  if (logo) {
    requestAnimationFrame(function () { logo.classList.add('play'); });
    setTimeout(function () { logo.classList.add('idle'); }, 2700);
    // Rejouer l'animation au clic sur le logo
    logo.addEventListener('click', function () {
      logo.classList.remove('play', 'idle');
      void logo.offsetWidth;
      logo.classList.add('play');
      setTimeout(function () { logo.classList.add('idle'); }, 2700);
    });
  }

  // En-tête : ombre au défilement
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Apparition des blocs au défilement
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var siblings = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
          e.target.style.transitionDelay = Math.min(siblings, 5) * 70 + 'ms';
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('visible'); });
  }

  // Lien actif dans le menu
  var links = document.querySelectorAll('.nav a[href^="#"]:not(.btn)');
  var sections = Array.prototype.map.call(links, function (l) { return document.querySelector(l.getAttribute('href')); });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });
  }

  // Année dans le pied de page
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Adresse de retour après envoi du formulaire (page merci.html)
  var next = document.querySelector('input[name="_next"]');
  if (next) next.value = new URL('merci.html', window.location.href).href;
})();
