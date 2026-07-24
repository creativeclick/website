/* Creative Click Multimedia — shared behaviour for the static site */
(function () {
  'use strict';

  var LOGO = window.LOGO_SVG || '';

  /* ---------------- NAV ---------------- */
  var NAV_LINKS = [
    { label: 'Services', href: 'services.html' },
    { label: 'Work', href: 'work.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Blog', href: 'blog.html' },
    { label: 'Contact', href: 'contact.html' },
  ];

  function buildNav() {
    var host = document.getElementById('site-nav');
    if (!host) return;
    var links = NAV_LINKS.map(function (l) {
      return '<a href="' + l.href + '" class="block px-4 py-2.5 text-sm font-medium text-black rounded-xl hover:bg-black/5 transition-colors">' + l.label + '</a>';
    }).join('');

    host.className = 'fixed top-0 left-0 right-0 z-50 flex items-start justify-between p-4 md:px-8 md:py-6 pointer-events-none';
    host.innerHTML =
      '<a href="index.html" class="flex items-center gap-2 mt-1 pointer-events-auto">' +
        '<span id="nav-logo" style="height:30px;color:#111" class="block transition-colors duration-300">' + LOGO + '</span>' +
        '<span id="nav-brand" class="hidden md:block text-sm font-semibold tracking-tight whitespace-nowrap transition-colors duration-300" style="color:#111">Creative Click Multimedia</span>' +
      '</a>' +
      '<div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-auto">' +
        '<div class="relative">' +
          '<button id="menu-btn" class="flex items-center gap-2 rounded-full pl-1 pr-3.5 py-1 shadow-lg transition-colors duration-300 bg-black">' +
            '<span id="menu-circle" class="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-black transition-transform duration-300"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>' +
            '<span id="menu-label" class="text-[11px] font-medium text-white">Menu</span>' +
          '</button>' +
          '<div id="menu-panel" class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl p-2 opacity-0 scale-95 -translate-y-2 pointer-events-none transition-all duration-300 origin-top">' +
            links +
            '<a href="request.html" class="block px-4 py-2.5 mt-1 text-sm font-medium text-white bg-black rounded-xl hover:bg-black/85 transition-colors">Start Your Project</a>' +
          '</div>' +
        '</div>' +
        '<div id="nav-tags" class="hidden md:flex items-center gap-4 rounded-full px-[18px] py-2.5 shadow-lg backdrop-blur transition-colors duration-300 bg-white/90">' +
          '<span class="nav-tag text-[11px] font-medium whitespace-nowrap" style="color:rgba(0,0,0,.7)">MVP Development</span>' +
          '<span class="nav-tag text-[11px] font-medium whitespace-nowrap" style="color:rgba(0,0,0,.7)">AI Agents</span>' +
        '</div>' +
      '</div>' +
      '<a id="nav-cta" href="request.html" class="pointer-events-auto inline-block rounded-full font-medium whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 px-5 py-3 text-[11px] uppercase tracking-widest shadow-lg bg-black text-white">Start Your Project</a>';

    /* Menu toggle */
    var open = false;
    var btn = document.getElementById('menu-btn');
    var panel = document.getElementById('menu-panel');
    var circle = document.getElementById('menu-circle');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      open = !open;
      circle.style.transform = open ? 'rotate(45deg)' : 'rotate(0deg)';
      if (open) {
        panel.className = panel.className.replace('opacity-0 scale-95 -translate-y-2 pointer-events-none', 'opacity-100 scale-100 translate-y-0');
      } else {
        panel.className = panel.className.replace('opacity-100 scale-100 translate-y-0', 'opacity-0 scale-95 -translate-y-2 pointer-events-none');
      }
    });
    document.addEventListener('click', function () {
      if (open) { btn.click(); }
    });
  }

  /* ---------------- FOOTER ---------------- */
  function buildFooter() {
    var host = document.getElementById('site-footer');
    if (!host) return;
    var nav = [
      ['Portfolio', 'work.html'], ['Contact', 'contact.html'],
    ];
    var phrase = "LET'S TALK • SAY HELLO • ";
    var chars = (phrase + phrase).split('');
    var badge = '';
    var radius = 98;
    for (var i = 0; i < chars.length; i++) {
      var angle = (360 / chars.length) * i;
      badge += '<span style="position:absolute;left:50%;top:50%;transform:rotate(' + angle + 'deg) translateY(-' + radius + 'px);transform-origin:0 0;font-size:14px;font-weight:500;letter-spacing:.06em;color:#fff">' + (chars[i] === ' ' ? '&nbsp;' : chars[i]) + '</span>';
    }

    host.setAttribute('data-nav-theme', 'dark');
    host.className = 'relative z-10 w-full bg-[#0A0F1C] text-white overflow-hidden px-4 md:px-6 pt-16 md:pt-24';
    host.innerHTML =
      '<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">' +
        '<div class="flex items-center gap-2 text-[16px] font-light shrink-0">' +
          '<a href="work.html" class="text-white/80 hover:text-white transition-colors">Portfolio <span class="text-white/40">/</span></a>' +
          '<a href="contact.html" class="text-white/80 hover:text-white transition-colors">Contact <span class="text-white/40">/</span></a>' +
        '</div>' +
        '<div class="flex flex-wrap gap-10 md:gap-16">' +
          '<div><h3 class="text-[14px] uppercase tracking-widest font-light text-white/45">Contact</h3><a href="tel:+233248949895" class="block mt-3 text-[16px] text-white/90 hover:text-white transition-colors">+233 24 894 9895</a></div>' +
          '<div><h3 class="text-[14px] uppercase tracking-widest font-light text-white/45">LinkedIn</h3><a href="https://www.creativeclickmultimedia.com/" target="_blank" rel="noopener" class="block mt-3 text-[16px] text-white/90 hover:text-white transition-colors break-all">linkedin.com/company/creativeclick</a></div>' +
          '<div><h3 class="text-[14px] uppercase tracking-widest font-light text-white/45">Email</h3><a href="mailto:hello@creativeclickmultimedia.com" class="block mt-3 text-[16px] text-white/90 hover:text-white transition-colors break-all">hello@creativeclickmultimedia.com</a></div>' +
        '</div>' +
        '<button id="to-top" aria-label="Back to top" class="w-10 h-10 shrink-0 rounded-full bg-white text-black flex items-center justify-center hover:-translate-y-1 transition-transform self-start"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg></button>' +
      '</div>' +
      '<div class="relative mt-16 md:mt-24">' +
        '<h2 class="text-left font-light tracking-[-0.04em] leading-[0.86] pb-8 md:pb-12" style="font-size:13.5vw;white-space:nowrap">' +
          '<span class="block">Creative Click</span><span class="block">Multimedia.</span>' +
        '</h2>' +
        '<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:20;pointer-events:none">' +
          '<div style="position:relative;width:220px;height:220px;border:2px solid #fff;border-radius:9999px;background:#0A0F1C;display:flex;align-items:center;justify-content:center">' +
            '<div class="cc-spin" style="position:absolute;inset:0">' + badge + '</div>' +
            '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="position:relative"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="border-t border-white/10 py-6 text-center text-[16px] text-white/40">© 2026 Creative Click Multimedia. Built for ambitious founders.</div>';

    document.getElementById('to-top').addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------- ADAPTIVE NAV THEME ---------------- */
  function initNavTheme() {
    function update() {
      var y = 44;
      var nodes = document.querySelectorAll('[data-nav-theme]');
      var theme = 'light';
      nodes.forEach(function (n) {
        var r = n.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) theme = n.getAttribute('data-nav-theme') || 'light';
      });
      var dark = theme === 'dark';
      var fg = dark ? '#FFFFFF' : '#111111';
      var logo = document.getElementById('nav-logo');
      var brand = document.getElementById('nav-brand');
      var menuBtn = document.getElementById('menu-btn');
      var menuCircle = document.getElementById('menu-circle');
      var menuLabel = document.getElementById('menu-label');
      var tags = document.getElementById('nav-tags');
      var cta = document.getElementById('nav-cta');
      if (!logo) return;
      logo.style.color = fg;
      brand.style.color = fg;
      menuBtn.classList.toggle('bg-white', dark);
      menuBtn.classList.toggle('bg-black', !dark);
      menuCircle.className = 'flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full transition-transform duration-300 ' + (dark ? 'bg-black text-white' : 'bg-white text-black');
      menuLabel.style.color = dark ? '#111' : '#fff';
      tags.classList.toggle('bg-white/15', dark);
      tags.classList.toggle('bg-white/90', !dark);
      document.querySelectorAll('.nav-tag').forEach(function (t) {
        t.style.color = dark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.7)';
      });
      cta.className = 'pointer-events-auto inline-block rounded-full font-medium whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 px-5 py-3 text-[11px] uppercase tracking-widest shadow-lg ' + (dark ? 'bg-white text-black' : 'bg-black text-white');
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.__navUpdate = update;
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  function initReveal() {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el, i) {
      var d = el.getAttribute('data-delay');
      if (d) el.style.transitionDelay = d + 'ms';
      obs.observe(el);
    });
  }

  /* ---------------- SCROLL PROGRESS ---------------- */
  function initProgress() {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;
    function upd() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? window.scrollY / h : 0;
      bar.style.transform = 'scaleX(' + p + ')';
    }
    upd();
    window.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd);
  }

  /* ---------------- MARQUEES ---------------- */
  function initMarquees() {
    document.querySelectorAll('[data-marquee]').forEach(function (m) {
      var speed = parseFloat(m.getAttribute('data-marquee')) || 30;
      var inner = m.innerHTML;
      m.classList.add('cc-marquee');
      m.innerHTML = '<div class="cc-marquee-track" style="animation-duration:' + speed + 's"><div style="display:inline-flex;flex-shrink:0">' + inner + '</div><div style="display:inline-flex;flex-shrink:0" aria-hidden="true">' + inner + '</div></div>';
    });
  }

  /* ---------------- CHARACTER REVEAL ---------------- */
  function initAnimatedText() {
    document.querySelectorAll('[data-animate-text]').forEach(function (p) {
      var text = p.textContent.replace(/\s+/g, ' ').trim();
      p.textContent = '';
      var spans = [];
      var words = text.split(' ');
      words.forEach(function (word, wi) {
        var wrap = document.createElement('span');
        wrap.style.display = 'inline-block';
        wrap.style.whiteSpace = 'nowrap';
        for (var c = 0; c < word.length; c++) {
          var s = document.createElement('span');
          s.className = 'char';
          s.style.opacity = '0.2';
          s.textContent = word[c];
          wrap.appendChild(s);
          spans.push(s);
        }
        p.appendChild(wrap);
        if (wi < words.length - 1) p.appendChild(document.createTextNode(' '));
      });
      function upd() {
        var r = p.getBoundingClientRect();
        var vh = window.innerHeight;
        var start = vh * 0.8, end = vh * 0.2;
        var prog = (start - r.top) / (start - end + r.height);
        prog = Math.max(0, Math.min(1, prog));
        var lit = Math.floor(prog * spans.length);
        for (var i = 0; i < spans.length; i++) spans[i].style.opacity = i <= lit ? '1' : '0.2';
      }
      upd();
      window.addEventListener('scroll', upd, { passive: true });
      window.addEventListener('resize', upd);
    });
  }

  /* ---------------- MAGNET ---------------- */
  function initMagnet() {
    document.querySelectorAll('[data-magnet]').forEach(function (el) {
      var strength = parseFloat(el.getAttribute('data-magnet')) || 4;
      var pad = 80;
      el.classList.add('magnet');
      window.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        var dx = Math.abs(cx - e.clientX), dy = Math.abs(cy - e.clientY);
        if (dx < r.width / 2 + pad && dy < r.height / 2 + pad) {
          el.style.transition = 'transform 0.3s ease-out';
          el.style.transform = 'translate3d(' + (e.clientX - cx) / strength + 'px,' + (e.clientY - cy) / strength + 'px,0)';
        } else {
          el.style.transition = 'transform 0.6s ease-in-out';
          el.style.transform = 'translate3d(0,0,0)';
        }
      });
    });
  }

  /* ---------------- STICKY STACK SCALE (services) ---------------- */
  function initStack() {
    var container = document.querySelector('[data-stack]');
    if (!container) return;
    var cards = Array.prototype.slice.call(container.querySelectorAll('[data-stack-card]'));
    var total = cards.length;
    function upd() {
      var cRect = container.getBoundingClientRect();
      var scrolled = -cRect.top;
      var totalScroll = container.offsetHeight - window.innerHeight;
      var prog = Math.max(0, Math.min(1, scrolled / totalScroll));
      cards.forEach(function (card, i) {
        var inner = card.firstElementChild;
        var targetScale = 1 - (total - 1 - i) * 0.03;
        var range0 = i / total;
        var local = (prog - range0) / (1 - range0);
        local = Math.max(0, Math.min(1, local));
        var scale = 1 + (targetScale - 1) * local;
        inner.style.transform = 'scale(' + scale + ')';
      });
    }
    upd();
    window.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd);
  }

  /* ---------------- REQUEST STEP FORM ---------------- */
  function initStepForm() {
    var form = document.getElementById('request-form');
    if (!form) return;
    var steps = Array.prototype.slice.call(form.querySelectorAll('[data-step]'));
    var pills = Array.prototype.slice.call(document.querySelectorAll('[data-step-pill]'));
    var cur = 0;
    function show(i) {
      steps.forEach(function (s, idx) { s.style.display = idx === i ? '' : 'none'; });
      pills.forEach(function (p, idx) {
        var active = idx === i;
        p.className = 'text-xs font-semibold rounded-full px-4 py-2 border transition-colors ' + (active ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#F5F5F5]/60 text-[#111111]/60 border-[#DDDDDD]');
      });
      cur = i;
    }
    form.querySelectorAll('[data-next]').forEach(function (b) { b.addEventListener('click', function () { show(Math.min(cur + 1, steps.length - 1)); }); });
    form.querySelectorAll('[data-back]').forEach(function (b) { b.addEventListener('click', function () { show(Math.max(cur - 1, 0)); }); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('request-success').style.display = '';
      steps.forEach(function (s) { s.style.display = 'none'; });
    });
    show(0);
  }

  /* ---------------- SIMPLE FORM ---------------- */
  function initSimpleForm() {
    var form = document.getElementById('quote-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('quote-success').style.display = '';
      form.reset();
    });
  }

  /* ---------------- PAGE TRANSITIONS ---------------- */
  function initPageTransition() {
    document.querySelectorAll('.page-fade').forEach(function (el) {
      requestAnimationFrame(function () { el.classList.add('page-in'); });
    });
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || a.target === '_blank' || /^(https?:|mailto:|tel:)/.test(href)) return;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('page-leaving');
        setTimeout(function () { window.location.href = href; }, 380);
      });
    });
  }

  /* ---------------- LENIS SMOOTH SCROLL ---------------- */
  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    var lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  /* ---------------- CONTENT LOGO SLOTS ---------------- */
  function initLogoSlots() {
    document.querySelectorAll('[data-logo]').forEach(function (el) {
      el.innerHTML = LOGO;
    });
  }

  /* ---------------- BOOT ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    buildNav();
    buildFooter();
    initLogoSlots();
    initNavTheme();
    initReveal();
    initProgress();
    initMarquees();
    initAnimatedText();
    initMagnet();
    initStack();
    initStepForm();
    initSimpleForm();
    initPageTransition();
    initLenis();
    // re-run nav theme after footer/layout settles
    setTimeout(function () { if (window.__navUpdate) window.__navUpdate(); }, 300);
  });
})();
