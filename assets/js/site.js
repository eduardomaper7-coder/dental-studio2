(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  if (header && menuToggle) {
    const closeMenu = () => {
      header.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    };
    menuToggle.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      document.body.classList.toggle('menu-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.innerHTML = open ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>' : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
  }

  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  document.querySelectorAll('.image-slider').forEach(slider => {
    const track = slider.querySelector('.image-slider-track');
    const slides = [...slider.querySelectorAll('.image-slide')];
    const dotsBox = slider.parentElement?.querySelector('.slider-dots');
    if (!track || slides.length < 2) return;
    let index = 0;
    let timer;
    const delay = Number(slider.dataset.autoplay) || 4500;
    const dots = slides.map((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Mostrar diapositiva ${i + 1}`);
      dot.addEventListener('click', () => show(i, true));
      dotsBox?.appendChild(dot);
      return dot;
    });
    const show = (next, restart = false) => {
      index = (next + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, i) => {
        slide.classList.remove('is-active');
        if (i === index) {
          void slide.offsetWidth;
          slide.classList.add('is-active');
        }
      });
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
      if (restart) start();
    };
    const stop = () => window.clearInterval(timer);
    const start = () => {
      stop();
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        timer = window.setInterval(() => show(index + 1), delay);
      }
    };
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    slider.addEventListener('focusin', stop);
    slider.addEventListener('focusout', start);
    show(0);
    start();
  });

  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');
      if (!item) return;
      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });

  document.querySelectorAll('.before-after').forEach(compare => {
    const range = compare.querySelector('input[type="range"]');
    if (!range) return;
    const update = () => compare.style.setProperty('--position', `${range.value}%`);
    range.addEventListener('input', update);
    update();
  });

  // Traductor clásico integrado: traduce el contenido dentro de la página.
  // Mantiene el dominio y la URL actuales y muestra el selector oficial abajo.
  const GOOGLE_LANGUAGES = 'da,de,en,es,fr,it,nl,no,pl,pt,sv';
  const switcher = document.querySelector('.language-switcher');
  const languageToggle = switcher?.querySelector('.language-toggle');
  const languageOptions = switcher ? [...switcher.querySelectorAll('.language-option')] : [];

  const getGoogleCookieLanguage = () => {
    const row = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith('googtrans='));
    if (!row) return 'es';
    const value = decodeURIComponent(row.slice(row.indexOf('=') + 1));
    const match = value.match(/^\/[^/]+\/([^/]+)$/);
    return match?.[1]?.toLowerCase() || 'es';
  };

  const updateLanguageSwitcher = lang => {
    const selected = languageOptions.find(option => option.dataset.lang === lang)
      || languageOptions.find(option => option.dataset.lang === 'es');
    if (!selected || !languageToggle) return;

    languageOptions.forEach(option => {
      const active = option === selected;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-selected', String(active));
    });

    const flag = selected.querySelector('span');
    const name = selected.querySelector('span:nth-child(2)');
    const toggleFlag = languageToggle.querySelector('span');
    const toggleName = languageToggle.querySelector('strong');
    if (flag && toggleFlag) toggleFlag.textContent = flag.textContent;
    if (name && toggleName) toggleName.textContent = name.textContent;
  };

  const clearGoogleTranslation = () => {
    const expired = 'Thu, 01 Jan 1970 00:00:00 GMT';
    const cookie = `googtrans=; path=/; expires=${expired}; SameSite=Lax`;
    document.cookie = cookie;

    const host = location.hostname.replace(/^www\./i, '');
    if (host) document.cookie = `${cookie}; domain=.${host}`;

    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = '';
      combo.dispatchEvent(new Event('change', { bubbles: true }));
    }

    location.reload();
  };

  const selectGoogleLanguage = (lang, attempt = 0) => {
    if (lang === 'es') {
      clearGoogleTranslation();
      return;
    }

    const combo = document.querySelector('.goog-te-combo');
    if (!combo) {
      if (attempt < 80) window.setTimeout(() => selectGoogleLanguage(lang, attempt + 1), 100);
      return;
    }

    combo.value = lang;
    combo.dispatchEvent(new Event('change', { bubbles: true }));
    updateLanguageSwitcher(lang);
  };

  const prepareGoogleBar = () => {
    let bar = document.querySelector('.google-translate-bar');
    if (bar) return bar;

    bar = document.createElement('div');
    bar.className = 'google-translate-bar notranslate';
    bar.setAttribute('translate', 'no');
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Traductor de Google');
    bar.innerHTML = `
      <div class="google-translate-bar__inner">
        <span class="google-translate-bar__label">
          <i class="fa-solid fa-language" aria-hidden="true"></i>
          Traducir esta página
        </span>
        <div class="google-translate-custom-slot"></div>
        <div id="google_translate_element" aria-hidden="true"></div>
      </div>`;
    document.body.appendChild(bar);

    // El selector propio se mantiene flotante en la esquina inferior izquierda.
    // Google Translate permanece oculto y se usa únicamente como motor de traducción.
    switcher?.classList.remove('language-switcher--in-bar');
    return bar;
  };

  const connectNativeGoogleSelector = (attempt = 0) => {
    const combo = document.querySelector('.goog-te-combo');
    if (!combo) {
      if (attempt < 100) window.setTimeout(() => connectNativeGoogleSelector(attempt + 1), 100);
      return;
    }

    combo.setAttribute('aria-label', 'Seleccionar idioma de traducción');
    combo.addEventListener('change', () => {
      updateLanguageSwitcher(combo.value || 'es');
    });
    updateLanguageSwitcher(combo.value || getGoogleCookieLanguage());
  };

  const loadClassicGoogleTranslator = () => {
    prepareGoogleBar();

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      const layouts = window.google.translate.TranslateElement.InlineLayout;
      new window.google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: GOOGLE_LANGUAGES,
        layout: layouts.HORIZONTAL || layouts.SIMPLE,
        autoDisplay: false,
        multilanguagePage: false
      }, 'google_translate_element');
      connectNativeGoogleSelector();
    };

    if (!document.querySelector('script[data-google-translate]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.dataset.googleTranslate = 'true';
      document.body.appendChild(script);
    }
  };

  updateLanguageSwitcher(getGoogleCookieLanguage());
  loadClassicGoogleTranslator();

  if (switcher && languageToggle) {
    switcher.classList.add('notranslate');
    switcher.setAttribute('translate', 'no');

    const close = () => {
      switcher.classList.remove('is-open');
      languageToggle.setAttribute('aria-expanded', 'false');
    };

    languageToggle.addEventListener('click', () => {
      const open = switcher.classList.toggle('is-open');
      languageToggle.setAttribute('aria-expanded', String(open));
    });

    languageOptions.forEach(option => option.addEventListener('click', () => {
      const lang = option.dataset.lang;
      close();
      if (!lang) return;
      selectGoogleLanguage(lang);
    }));

    document.addEventListener('click', event => { if (!switcher.contains(event.target)) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  }

  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 }) : null;
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('is-visible'));


  // Stagger scroll-reveal elements so groups enter with a more natural rhythm.
  document.querySelectorAll('section, footer').forEach(group => {
    [...group.querySelectorAll('[data-reveal]')].forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 85, 425)}ms`);
    });
  });

  // Animated count-up statistics (0 → 10+ / 9+) when they enter the viewport.
  const counters = [...document.querySelectorAll('.counter[data-count]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const runCounter = counter => {
    if (counter.dataset.counted === 'true') return;
    counter.dataset.counted = 'true';
    const target = Number(counter.dataset.count) || 0;
    const suffix = counter.dataset.suffix || '';
    const stat = counter.closest('.stat');
    stat?.classList.add('is-counting');
    if (reducedMotion) {
      counter.textContent = `${target}${suffix}`;
      return;
    }
    const duration = 1450;
    const start = performance.now();
    const frame = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      counter.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .55 });
    counters.forEach(counter => counterObserver.observe(counter));
  } else {
    counters.forEach(runCounter);
  }

  // A fine scroll progress line at the very top of the page.
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.prepend(progressBar);
  const updateScrollProgress = () => {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const percent = available > 0 ? Math.min(100, Math.max(0, (window.scrollY / available) * 100)) : 0;
    progressBar.style.setProperty('--scroll-progress', `${percent}%`);
  };
  updateScrollProgress();
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress);

  // Subtle pointer parallax on the main hero; disabled for touch and reduced motion.
  const heroFrame = document.querySelector('.home-hero__frame');
  if (heroFrame && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    heroFrame.addEventListener('pointermove', event => {
      const rect = heroFrame.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * -10;
      const y = ((event.clientY - rect.top) / rect.height - .5) * -8;
      heroFrame.style.setProperty('--hero-x', `${x}px`);
      heroFrame.style.setProperty('--hero-y', `${y}px`);
    });
    heroFrame.addEventListener('pointerleave', () => {
      heroFrame.style.setProperty('--hero-x', '0px');
      heroFrame.style.setProperty('--hero-y', '0px');
    });
  }

  document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      status?.classList.add('is-visible');
      form.reset();
    });
  });
})();
