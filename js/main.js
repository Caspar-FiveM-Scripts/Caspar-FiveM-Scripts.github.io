/**
 * CASPAR FIVEM SCRIPTS - MAIN UI & INTERACTIVITY CONTROLLER
 * - Multi-Language Engine (i18n): Deutsch 🇩🇪, English 🇬🇧, Français 🇫🇷, Español 🇪🇸
 * - Language Switcher Dropdown with live UI update & LocalStorage persistence
 * - Web Audio API Sci-Fi Synthesizer (Zero asset dependencies!) with Lightning Zap SFX
 * - 3D Tilt Glare Engine
 * - Dynamic Script Filtering & Live Search with Local Script Files & In-Game Previews
 * - Full Interactive In-Browser Code Inspector (Multi-file tabs including locales/de.lua & locales/en.lua)
 * - Cyber Interactive Terminal Sandbox
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. WEB AUDIO API SYNTHESIZER (Sci-Fi Audio Engine + Lightning Zap)
  // =========================================================================
  class CyberAudioEngine {
    constructor() {
      this.ctx = null;
      this.isEnabled = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.isEnabled = !this.isEnabled;
      if (this.isEnabled) {
        this.init();
        this.playConfirm();
      }
      return this.isEnabled;
    }

    playHover() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(2200, this.ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
      } catch (e) {}
    }

    playClick() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(240, this.ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {}
    }

    playConfirm() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, t); // C5
        osc1.frequency.setValueAtTime(659.25, t + 0.06); // E5
        osc2.frequency.setValueAtTime(1046.5, t + 0.1); // C6
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);
        osc1.start(t);
        osc1.stop(t + 0.25);
        osc2.start(t + 0.1);
        osc2.stop(t + 0.25);
      } catch (e) {}
    }

    // Realistic static discharge / lightning zap sound
    playZap() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const bufferSize = this.ctx.sampleRate * 0.12; // 120ms noise burst
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(3200, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.12);
        filter.Q.value = 4.0;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start();
        noise.stop(this.ctx.currentTime + 0.12);
      } catch (e) {}
    }

    playTerminalKey() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        const freqs = [700, 850, 920, 1100];
        const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];
        osc.frequency.setValueAtTime(randomFreq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.02);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.02);
      } catch (e) {}
    }
  }

  const audio = new CyberAudioEngine();
  window.CasparAudio = audio; // Expose for 3D lightning triggers

  // Audio Toggle UI Binding
  const soundBtn = document.getElementById('sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const active = audio.toggle();
      soundBtn.classList.toggle('active', active);
      const icon = soundBtn.querySelector('.sound-icon');
      const text = soundBtn.querySelector('.sound-text');
      const t = (window.CASPAR_TRANSLATIONS && window.CASPAR_TRANSLATIONS[currentLang]) || (window.CASPAR_TRANSLATIONS && window.CASPAR_TRANSLATIONS.de);
      if (icon) icon.textContent = active ? '🔊' : '🔇';
      if (text) text.textContent = active ? (t ? t.nav.sfx_on : 'SFX: ON') : (t ? t.nav.sfx_off : 'SFX: OFF');
    });
  }

  function bindInteractiveSounds() {
    const interactives = document.querySelectorAll(
      'a, button, .filter-btn, .script-card, .faq-question, .terminal-tab, .lang-option'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => audio.playHover());
      el.addEventListener('click', () => audio.playClick());
    });
  }

  // =========================================================================
  // 2. CUSTOM CYBER CURSOR
  // =========================================================================
  const dot = document.querySelector('.cyber-cursor-dot');
  const outline = document.querySelector('.cyber-cursor-outline');

  if (dot && outline) {
    let mouseX = -100, mouseY = -100;
    let outlineX = -100, outlineY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function renderCursor() {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const hoverables = document.querySelectorAll('a, button, input, .script-card, .filter-btn');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // =========================================================================
  // 3. 3D TILT EFFECT FOR LOGO & CARDS
  // =========================================================================
  const heroBadge = document.querySelector('.logo-3d-hologram');
  if (heroBadge) {
    heroBadge.addEventListener('mousemove', (e) => {
      const rect = heroBadge.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = -(y / (rect.height / 2)) * 16;
      const tiltY = (x / (rect.width / 2)) * 16;
      heroBadge.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    heroBadge.addEventListener('mouseleave', () => {
      heroBadge.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  function initCardTilt() {
    const cards = document.querySelectorAll('.script-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -((y - centerY) / centerY) * 6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // =========================================================================
  // 4. SCRIPTS DATA & REAL REPOSITORY FILES (WITH LOCALES)
  // =========================================================================
  const SCRIPTS_DATA = [
    {
      id: 'caspar_hud_v2',
      title: 'caspar_hud_v2',
      category: 'nui',
      version: 'v2.4.1',
      resmon: '0.00 ms',
      description: 'Ultra-modernes Cyberpunk NUI HUD mit dynamischen Anzeigen für Gesundheit, Rüstung, Ausdauer, Sauerstoff, Stress und Nitro. Inklusive digitalem Fahrzeugtacho, Gurtwarner und Waffenrad.',
      tags: ['QBCore', 'ESX', 'Qbox', 'React/NUI', 'Mehrsprachig'],
      badge: 'BELIEBT',
      githubUrl: 'https://github.com/Caspar-FiveM-Scripts/caspar_hud_v2',
      banner: 'assets/scripts/hud_preview.jpg',
    },
    {
      id: 'caspar_garage',
      title: 'caspar_garage',
      category: 'vehicles',
      version: 'v1.8.0',
      resmon: '0.01 ms',
      description: 'Kinematische 3D-Kamera Valet-Garage und Abschlepphof (Impound). Unterstützt mehrstöckige Tiefgaragen, visuelle Fahrzeug-Schadensprüfung, Fraktionsgaragen und Valet-Lieferservice.',
      tags: ['QBCore', 'ESX', 'ox_lib', '3D Kamera', 'SQL Sync'],
      badge: 'FEATURED',
      githubUrl: 'https://github.com/Caspar-FiveM-Scripts/caspar_garage',
      banner: 'assets/scripts/garage_preview.jpg',
    },
    {
      id: 'caspar_multicharacter',
      title: 'caspar_multicharacter',
      category: 'rp',
      version: 'v3.0.2',
      resmon: '0.00 ms',
      description: 'Futuristische Charakterauswahl mit butterweichen Drohnen-Kamerafahrten, animierten Ped-Posen, detaillierter Charakterakte (Bargeld, Bank, Job) und integriertem Spawn-Selector.',
      tags: ['Standalone', 'QBCore', 'ESX', 'Smooth Cam', 'NUI'],
      badge: 'AKTUALISIERT',
      githubUrl: 'https://github.com/Caspar-FiveM-Scripts/caspar_multicharacter',
      banner: 'assets/scripts/multicharacter_preview.jpg',
    },
    {
      id: 'caspar_banking',
      title: 'caspar_banking',
      category: 'economy',
      version: 'v2.1.0',
      resmon: '0.00 ms',
      description: 'Modernes Fleeca Bank- & Geldautomaten-System inklusive Smartphone-Banking-App. Bietet Firmenkonten mit Rollenrechten, Überweisungen mit IBAN, Buchungs-Logs mit CSV-Export und Krypto-Handel.',
      tags: ['QBCore', 'ESX', 'ox_inventory', 'Sichere SQL', 'Wirtschaft'],
      badge: 'SICHER',
      githubUrl: 'https://github.com/Caspar-FiveM-Scripts/caspar_banking',
      banner: 'assets/scripts/banking_preview.jpg',
    },
    {
      id: 'caspar_dispatch',
      title: 'caspar_dispatch',
      category: 'admin',
      version: 'v1.5.3',
      resmon: '0.01 ms',
      description: 'Taktisches 911-Leitstellensystem für Polizei, Rettungsdienst (EMS) und Justiz. Echtzeit-Einsatzmeldungen, automatische Funkkanal-Synchronisation, Panik-Button und animierte GPS-Kartenblips.',
      tags: ['QBCore', 'ESX', 'Notruf 911', 'Echtzeit GPS', 'Blip Sync'],
      badge: 'TAKTIK',
      githubUrl: 'https://github.com/Caspar-FiveM-Scripts/caspar_dispatch',
      banner: 'assets/scripts/dispatch_preview.jpg',
    },
    {
      id: 'caspar_admin_suite',
      title: 'caspar_admin_suite',
      category: 'admin',
      version: 'v2.0.0',
      resmon: '0.00 ms',
      description: 'Vollumfängliche Server-Administration & Moderation. Live-Spectate mit Noclip-Flug, Inventar-Inspektion, Verwarn- und Bannsystem, Echtzeit-Resmon-Monitor und Entity-Wiper gegen Modder.',
      tags: ['Admin', 'Noclip', 'Resmon Tool', 'ACE Perms', 'Discord Logs'],
      badge: 'POWER',
      githubUrl: 'https://github.com/Caspar-FiveM-Scripts/caspar_admin_suite',
      banner: 'assets/scripts/admin_preview.jpg',
    },
    {
      id: 'caspar_fps_boost',
      title: 'caspar_fps_boost',
      category: 'performance',
      version: 'v1.4.0',
      resmon: '0.00 ms',
      description: 'Echtzeit Client-FPS-Booster und RAM-Purge. Optimiert LOD-Distanzen, deaktiviert rechenintensive Schattenkaskaden und leert den Arbeitsspeicher per Hotkey [F7] für +40 bis +70 FPS bei 0.00ms Resmon.',
      tags: ['FPS Boost', 'Performance', 'RAM Purge', '+40-70 FPS', '0.00ms'],
      badge: 'FPS BOOST',
      githubUrl: 'https://github.com/Caspar-FiveM-Scripts/caspar_fps_boost',
      banner: 'assets/scripts/fps_boost_preview.jpg',
    },
  ];

  // =========================================================================
  // 5. MULTI-LANGUAGE SYSTEM (i18n)
  // =========================================================================
  let currentLang = localStorage.getItem('caspar_language') || 'de';

  function getTranslationsDict() {
    if (typeof window !== 'undefined' && window.CASPAR_TRANSLATIONS) {
      return window.CASPAR_TRANSLATIONS;
    }
    if (typeof CASPAR_TRANSLATIONS !== 'undefined') {
      return CASPAR_TRANSLATIONS;
    }
    return null;
  }

  function getScriptsI18nDict() {
    if (typeof window !== 'undefined' && window.CASPAR_SCRIPTS_I18N) {
      return window.CASPAR_SCRIPTS_I18N;
    }
    if (typeof CASPAR_SCRIPTS_I18N !== 'undefined') {
      return CASPAR_SCRIPTS_I18N;
    }
    return null;
  }

  function getTranslation(key, lang) {
    const dict = getTranslationsDict();
    if (!dict) return null;
    const keys = key.split('.');
    let val = dict[lang] || dict.de;
    for (const k of keys) {
      if (val && val[k] !== undefined) {
        val = val[k];
      } else {
        return null;
      }
    }
    return val;
  }

  function setLanguage(lang) {
    const dict = getTranslationsDict();
    if (!dict || !dict[lang]) {
      lang = 'de';
    }
    currentLang = lang;
    localStorage.setItem('caspar_language', lang);

    const t = dict ? (dict[lang] || dict.de) : null;
    if (!t) return;

    // Update Flag on Header Toggle (Flags Only)
    const flagEl = document.getElementById('current-lang-flag');
    if (flagEl && t.lang_flag) {
      if (flagEl.tagName === 'IMG') {
        flagEl.src = t.lang_flag;
        flagEl.setAttribute('src', t.lang_flag);
        flagEl.alt = t.lang_name || lang;
      } else {
        flagEl.textContent = t.lang_flag;
      }
    }

    // Update Active Option in Dropdown (Flags Only)
    document.querySelectorAll('.lang-option').forEach((opt) => {
      const isSelected = opt.getAttribute('data-lang') === lang;
      opt.classList.toggle('active', isSelected);
    });

    // Update Elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = getTranslation(key, lang);
      if (val !== null) {
        el.innerHTML = val;
      }
    });

    // Update Elements with [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getTranslation(key, lang);
      if (val !== null) {
        el.setAttribute('placeholder', val);
      }
    });

    // Update Sound Button Text if present
    if (soundBtn && t.nav) {
      const sfxText = soundBtn.querySelector('.sound-text');
      if (sfxText) {
        sfxText.textContent = audio.isEnabled ? t.nav.sfx_on : t.nav.sfx_off;
      }
    }

    // Re-render scripts with translated descriptions/tags
    renderScripts();
  }

  // Language Dropdown Event Handler
  const langWrap = document.getElementById('lang-selector');
  const langBtn = document.getElementById('lang-toggle-btn');
  const langMenu = document.getElementById('lang-dropdown');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langMenu.classList.toggle('show');
      langBtn.classList.toggle('active', isOpen);
      langBtn.setAttribute('aria-expanded', isOpen);
      audio.playClick();
    });

    langMenu.querySelectorAll('.lang-option').forEach((opt) => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = opt.getAttribute('data-lang');
        if (lang) {
          setLanguage(lang);
          langMenu.classList.remove('show');
          langBtn.classList.remove('active');
          langBtn.setAttribute('aria-expanded', 'false');
          audio.playClick();
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (langWrap && !langWrap.contains(e.target)) {
        langMenu.classList.remove('show');
        langBtn.classList.remove('active');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langMenu.classList.contains('show')) {
        langMenu.classList.remove('show');
        langBtn.classList.remove('active');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // =========================================================================
  // 6. RENDER SCRIPTS CARDS
  // =========================================================================
  const scriptsContainer = document.getElementById('scripts-grid');
  const searchInput = document.getElementById('search-scripts');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let currentCategory = 'all';
  let searchQuery = '';

  function renderScripts() {
    if (!scriptsContainer) return;

    const dict = getTranslationsDict();
    const t = (dict && dict[currentLang]) || (dict && dict.de) || {
      catalog: {
        no_results_title: 'Keine Scripte gefunden',
        no_results_desc: 'Bitte passe deine Suchbegriffe oder Filter an.',
        btn_repo: 'GITHUB REPO ↗',
        btn_clone: 'GIT CLONE',
        btn_cloned: 'GEKLONT / KOPIERT!'
      }
    };

    const scriptsI18n = getScriptsI18nDict();
    const i18nMap = (scriptsI18n && scriptsI18n[currentLang]) || {};

    const filtered = SCRIPTS_DATA.filter((rawScript) => {
      const matchCategory =
        currentCategory === 'all' || rawScript.category === currentCategory;

      const i18n = i18nMap[rawScript.id];
      const desc = (i18n ? i18n.description : rawScript.description).toLowerCase();
      const tags = (i18n ? i18n.tags : rawScript.tags).map(t => t.toLowerCase());

      const matchSearch =
        rawScript.title.toLowerCase().includes(searchQuery) ||
        desc.includes(searchQuery) ||
        tags.some((t) => t.includes(searchQuery));
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      scriptsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-dim);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-family: var(--font-display); color: #fff; margin-bottom: 8px;">${t.catalog.no_results_title}</h3>
          <p>${t.catalog.no_results_desc}</p>
        </div>
      `;
      return;
    }

    scriptsContainer.innerHTML = filtered
      .map((rawScript) => {
        const i18n = i18nMap[rawScript.id];
        const script = {
          ...rawScript,
          description: i18n ? i18n.description : rawScript.description,
          tags: i18n ? i18n.tags : rawScript.tags,
          badge: i18n ? i18n.badge : rawScript.badge,
        };

        return `
        <div class="script-card" data-id="${script.id}">
          <div class="card-preview" data-id="${script.id}" role="button" tabindex="0" title="Klicken für Vollbild-Vorschau">
            <img class="card-preview-art" src="${script.banner}" alt="${script.title}" />
            <div class="card-preview-overlay"></div>
            <div class="card-zoom-hint">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
            <div class="card-badges-top">
              <span class="resmon-pill">⚡ ${script.resmon}</span>
              <span class="type-pill">${script.badge}</span>
            </div>
          </div>

          <div class="card-content">
            <div class="card-title-row">
              <h3 class="card-title">${script.title}</h3>
              <span class="card-version">${script.version}</span>
            </div>
            <p class="card-desc">${script.description}</p>
            
            <div class="card-tags">
              ${script.tags
                .map((tag, idx) => {
                  const hl = idx === 0 ? 'highlight-cyan' : idx === 1 ? 'highlight-orange' : '';
                  return `<span class="tag-item ${hl}">${tag}</span>`;
                })
                .join('')}
            </div>

            <div class="card-actions">
              <a href="${script.githubUrl}" target="_blank" class="btn btn-metallic btn-card-action" style="text-decoration: none;">
                <span>${(t.catalog && t.catalog.btn_repo) || 'GITHUB REPO ↗'}</span>
              </a>
              <button class="btn btn-cyan btn-card-action btn-clone" data-cmd="git clone ${script.githubUrl}.git">
                <span>${t.catalog.btn_clone}</span>
              </button>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    initCardTilt();
    bindInteractiveSounds();
    bindCardButtons();
  }

  // Filter Buttons Handler
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      renderScripts();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderScripts();
    });
  }

  // =========================================================================
  // 7. SCRIPT IMAGE LIGHTBOX VIEWER
  // =========================================================================
  const lightboxOverlay = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxBadge = document.getElementById('lightbox-badge');
  const lightboxResmon = document.getElementById('lightbox-resmon');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxGithubBtn = document.getElementById('lightbox-github-btn');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(script) {
    if (!lightboxOverlay || !lightboxImg) return;

    const allScriptsI18n = getScriptsI18nDict();
    const i18nMap = (allScriptsI18n && allScriptsI18n[currentLang]) || {};
    const i18n = i18nMap[script.id];

    const title = script.title;
    const badge = i18n ? i18n.badge : script.badge;
    const desc = i18n ? i18n.description : script.description;

    lightboxImg.src = script.banner;
    lightboxImg.alt = title;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxBadge) lightboxBadge.textContent = badge;
    if (lightboxResmon) lightboxResmon.textContent = `⚡ ${script.resmon}`;
    if (lightboxDesc) lightboxDesc.textContent = desc;
    if (lightboxGithubBtn) {
      lightboxGithubBtn.href = script.githubUrl;
      const span = lightboxGithubBtn.querySelector('span');
      const dict = getTranslationsDict();
      const t = (dict && dict[currentLang]) || (dict && dict.de) || {};
      if (span) span.textContent = (t.catalog && t.catalog.btn_repo) || 'GITHUB REPOSITORY ↗';
    }

    lightboxOverlay.classList.add('active');
    lightboxOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    audio.playClick();
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('active');
    lightboxOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxOverlay && lightboxOverlay.classList.contains('active')) {
      closeLightbox();
    }
  });

  function bindCardButtons() {
    const dict = getTranslationsDict();
    const t = (dict && dict[currentLang]) || (dict && dict.de) || {};

    // Click on Card Preview Banner -> Open Lightbox
    document.querySelectorAll('.card-preview').forEach((preview) => {
      preview.addEventListener('click', () => {
        const id = preview.getAttribute('data-id');
        const script = SCRIPTS_DATA.find((s) => s.id === id);
        if (script) {
          openLightbox(script);
        }
      });

      // Keyboard accessibility (Enter or Space)
      preview.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = preview.getAttribute('data-id');
          const script = SCRIPTS_DATA.find((s) => s.id === id);
          if (script) {
            openLightbox(script);
          }
        }
      });
    });

    // Git Clone button
    document.querySelectorAll('.btn-clone').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(cmd);
          const originalText = btn.innerHTML;
          btn.innerHTML = `<span>✓ ${t.catalog ? t.catalog.btn_cloned : 'CLONED!'}</span>`;
          btn.style.borderColor = '#10b981';
          btn.style.color = '#34d399';
          audio.playConfirm();
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        }
      });
    });
  }

  // =========================================================================
  // 8. INTERACTIVE TERMINAL / SANDBOX
  // =========================================================================
  const TERMINAL_TABS = {
    fxmanifest: [
      { text: "fx_version 'cerulean'", syn: 'syn-keyword' },
      { text: "game 'gta5'", syn: 'syn-keyword' },
      { text: "lua54 'yes'", syn: 'syn-bool' },
      { text: "", syn: '' },
      { text: "-- Author: Caspar FiveM Development", syn: 'syn-comment' },
      { text: "-- License: Open Source (GitHub)", syn: 'syn-comment' },
      { text: "description 'High Performance FiveM Framework & Resources'", syn: 'syn-string' },
      { text: "version '2.5.0'", syn: 'syn-var' },
      { text: "", syn: '' },
      { text: "shared_scripts {", syn: 'syn-keyword' },
      { text: "    '@ox_lib/init.lua',", syn: 'syn-string' },
      { text: "    'locales/de.lua',", syn: 'syn-string' },
      { text: "    'locales/en.lua',", syn: 'syn-string' },
      { text: "    'locales/fr.lua',", syn: 'syn-string' },
      { text: "    'locales/es.lua',", syn: 'syn-string' },
      { text: "    'shared/config.lua'", syn: 'syn-string' },
      { text: "}", syn: 'syn-keyword' },
      { text: "client_scripts {", syn: 'syn-keyword' },
      { text: "    'client/core.lua',", syn: 'syn-string' },
      { text: "    'client/render.lua'", syn: 'syn-string' },
      { text: "}", syn: 'syn-keyword' },
      { text: "server_scripts {", syn: 'syn-keyword' },
      { text: "    '@oxmysql/lib/MySQL.lua',", syn: 'syn-string' },
      { text: "    'server/core.lua'", syn: 'syn-string' },
      { text: "}", syn: 'syn-keyword' },
    ],
    config: [
      { text: "Config = {}", syn: 'syn-var' },
      { text: "Config.Locale = 'de' -- Choose: 'de' | 'en' | 'fr' | 'es'", syn: 'syn-string' },
      { text: "Config.Framework = 'auto' -- 'qb' | 'esx' | 'qbox' | 'standalone'", syn: 'syn-comment' },
      { text: "", syn: '' },
      { text: "-- Neon Theme settings inspired by Caspar Badge", syn: 'syn-comment' },
      { text: "Config.Theme = {", syn: 'syn-keyword' },
      { text: "    primaryColor = '#ff6600', -- Reactor Flame Orange", syn: 'syn-string' },
      { text: "    secondaryColor = '#00f3ff', -- Cyber Ice Cyan", syn: 'syn-string' },
      { text: "    accentMetallic = '#94a3b8',", syn: 'syn-string' },
      { text: "    enableGlowParticles = true", syn: 'syn-bool' },
      { text: "}", syn: 'syn-keyword' },
      { text: "", syn: '' },
      { text: "-- Performance Optimizer: Low-tick sleep loop", syn: 'syn-comment' },
      { text: "Config.OptimizedTick = 1000 -- 0.00ms idle resmon", syn: 'syn-var' },
      { text: "Config.EnableDiscordLogs = true", syn: 'syn-bool' },
    ],
    server: [
      { text: "local Caspar = exports['caspar_core']:GetCoreObject()", syn: 'syn-func' },
      { text: "", syn: '' },
      { text: "RegisterNetEvent('caspar:server:syncPlayerData', function()", syn: 'syn-func' },
      { text: "    local src = source", syn: 'syn-keyword' },
      { text: "    local player = Caspar.GetPlayer(src)", syn: 'syn-func' },
      { text: "    if not player then return end", syn: 'syn-keyword' },
      { text: "", syn: '' },
      { text: "    -- High speed asynchronous database update", syn: 'syn-comment' },
      { text: "    MySQL.update.await('UPDATE users SET last_login = NOW() WHERE citizenid = ?', {", syn: 'syn-string' },
      { text: "        player.citizenid", syn: 'syn-var' },
      { text: "    })", syn: 'syn-string' },
      { text: "    print('^2[CASPAR]^0 Successfully synced player: ' .. src)", syn: 'syn-func' },
      { text: "end)", syn: 'syn-keyword' },
    ],
    install: [
      { text: "#!/usr/bin/env bash", syn: 'syn-comment' },
      { text: "# 1-Click Fast Install Script for Caspar FiveM Suite", syn: 'syn-comment' },
      { text: "cd /path/to/server-data/resources/[caspar]", syn: 'syn-keyword' },
      { text: "", syn: '' },
      { text: "git clone https://github.com/Caspar-FiveM-Scripts/caspar_hud_v2.git", syn: 'syn-string' },
      { text: "git clone https://github.com/Caspar-FiveM-Scripts/caspar_garage.git", syn: 'syn-string' },
      { text: "git clone https://github.com/Caspar-FiveM-Scripts/caspar_multicharacter.git", syn: 'syn-string' },
      { text: "git clone https://github.com/Caspar-FiveM-Scripts/caspar_fps_boost.git", syn: 'syn-string' },
      { text: "", syn: '' },
      { text: "echo 'ensure [caspar]' >> ../../server.cfg", syn: 'syn-func' },
      { text: "echo 'Caspar Suite deployed with 0.00ms Resmon!'", syn: 'syn-string' },
    ],
  };

  const codeContainer = document.getElementById('terminal-code-body');
  const termTabs = document.querySelectorAll('.terminal-tab');
  const termInput = document.getElementById('terminal-cli-input');
  const copyCodeBtn = document.getElementById('copy-terminal-code');

  let activeTab = 'fxmanifest';

  function renderTerminalTab(tabKey) {
    if (!codeContainer || !TERMINAL_TABS[tabKey]) return;
    activeTab = tabKey;

    const lines = TERMINAL_TABS[tabKey];
    codeContainer.innerHTML = lines
      .map(
        (line, idx) => `
        <div class="code-line">
          <span class="line-num">${idx + 1}</span>
          <span class="line-code ${line.syn}">${escapeHtml(line.text)}</span>
        </div>
      `
      )
      .join('');
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  termTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      termTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-tab');
      renderTerminalTab(key);
    });
  });

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const t = (window.CASPAR_TRANSLATIONS && window.CASPAR_TRANSLATIONS[currentLang]) || (window.CASPAR_TRANSLATIONS && window.CASPAR_TRANSLATIONS.de);
      const lines = TERMINAL_TABS[activeTab].map((l) => l.text).join('\n');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(lines);
        copyCodeBtn.textContent = '✓ ' + (t.terminal ? t.terminal.btn_copied : 'COPIED!');
        setTimeout(() => {
          copyCodeBtn.textContent = t.terminal ? t.terminal.btn_copy : 'COPY CODE';
        }, 2000);
      }
    });
  }

  // Interactive CLI input simulation
  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      audio.playTerminalKey();
      if (e.key === 'Enter') {
        const cmd = termInput.value.trim();
        termInput.value = '';
        executeTerminalCommand(cmd);
      }
    });
  }

  function executeTerminalCommand(cmd) {
    if (!codeContainer) return;
    const cleanCmd = cmd.toLowerCase();

    let output = '';
    if (cleanCmd === 'help') {
      output = `
Verfügbare Befehle / Commands:
  - help             : Befehlsübersicht anzeigen / Show commands
  - list             : Alle 7 Caspar FiveM Ressourcen auflisten / List resources
  - benchmark        : CPU Resmon-Test ausführen / Run benchmark
  - lang [de|en|fr|es] : Sprache der Website umschalten / Switch website language
  - ensure [script]  : Ressource simulieren / Simulate resource launch
  - clear / cls      : Terminalansicht leeren / Reset view
      `;
    } else if (cleanCmd.startsWith('lang ') || cleanCmd.startsWith('locale ')) {
      const target = cleanCmd.split(' ')[1];
      if (['de', 'en', 'fr', 'es'].includes(target)) {
        setLanguage(target);
        output = `Language switched to [${target.toUpperCase()}]. Website and scripts dynamically updated.`;
      } else {
        output = `Invalid language. Use: lang de | lang en | lang fr | lang es`;
      }
    } else if (cleanCmd === 'list') {
      output = `
[CASPAR HUB] Installierte Ressourcen in resources/[caspar] (mit locales/):
  • caspar_hud_v2         [v2.4.1] - 0.00ms (NUI React HUD | DE/EN/FR/ES)
  • caspar_garage         [v1.8.0] - 0.01ms (3D Cam Valet | DE/EN/FR/ES)
  • caspar_multicharacter  [v3.0.2] - 0.00ms (Drone Cam Selection | DE/EN/FR/ES)
  • caspar_banking        [v2.1.0] - 0.00ms (ATM & Mobile Banking | DE/EN/FR/ES)
  • caspar_dispatch       [v1.5.3] - 0.01ms (Tactical 911 Radar | DE/EN/FR/ES)
  • caspar_admin_suite    [v2.0.0] - 0.00ms (Noclip & Resmon Hub | DE/EN/FR/ES)
  • caspar_fps_boost      [v1.4.0] - 0.00ms (Real-Time FPS & RAM Purge | DE/EN/FR/ES)
      `;
    } else if (cleanCmd === 'benchmark') {
      output = `
[BENCHMARK] Ausführungszeiten werden gemessen...
  > Main Thread (UI NUI): 0.002 ms
  > Sync Worker Thread : 0.004 ms
  > Total Frame Budget : 0.006 ms (100% 60+ FPS Safe)
      `;
    } else if (cleanCmd.startsWith('ensure')) {
      const res = cmd.split(' ')[1] || 'resource';
      output = `^2[SERVER]^0 Ressource "${res}" erfolgreich gestartet. (Resmon: 0.00ms)`;
    } else if (cleanCmd === 'clear' || cleanCmd === 'cls') {
      renderTerminalTab(activeTab);
      return;
    } else {
      output = `Befehl nicht erkannt: "${cmd}". Tippe "help" für eine Übersicht.`;
    }

    const outputDiv = document.createElement('div');
    outputDiv.style.margin = '12px 0';
    outputDiv.style.padding = '8px 14px';
    outputDiv.style.background = 'rgba(0, 243, 255, 0.05)';
    outputDiv.style.borderLeft = '3px solid var(--neon-cyan)';
    outputDiv.style.fontFamily = 'var(--font-mono)';
    outputDiv.style.fontSize = '0.85rem';
    outputDiv.style.color = '#38bdf8';
    outputDiv.style.whiteSpace = 'pre-wrap';
    outputDiv.textContent = `> ${cmd}\n${output}`;

    codeContainer.appendChild(outputDiv);
    codeContainer.scrollTop = codeContainer.scrollHeight;
  }

  // =========================================================================
  // 9. FAQ ACCORDION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach((f) => f.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // =========================================================================
  // 10. HEADER SCROLL STATE
  // =========================================================================
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Init Calls
  setLanguage(currentLang);
  renderTerminalTab('fxmanifest');
  bindInteractiveSounds();
})();
