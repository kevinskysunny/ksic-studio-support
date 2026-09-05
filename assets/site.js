(() => {
  const key = 'ksicSupportLanguage';
  const select = document.querySelector('#language');
  if (!select) return;

  const supported = ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt'];
  const allowed = ['system', ...supported];
  const names = {
    en: 'English',
    zh: '中文',
    ja: '日本語',
    ko: '한국어',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    pt: 'Português'
  };
  const autoLabels = {
    zh: '跟随系统（自动）',
    en: 'Follow system (automatic)',
    ja: 'システム設定に従う（自動）',
    ko: '시스템 설정 따르기 (자동)',
    de: 'Systemstandard (automatisch)',
    fr: 'Système par défaut (automatique)',
    es: 'Seguir el sistema (automático)',
    pt: 'Seguir o sistema (automático)'
  };
  const langLabels = {
    zh: '语言',
    en: 'Language',
    ja: '言語',
    ko: '언어',
    de: 'Sprache',
    fr: 'Langue',
    es: 'Idioma',
    pt: 'Idioma'
  };
  const htmlLangTags = {
    zh: 'zh-Hans',
    ja: 'ja',
    ko: 'ko',
    de: 'de',
    fr: 'fr',
    es: 'es',
    pt: 'pt',
    en: 'en'
  };

  // Ensure all supported options exist in the select dropdown across all pages
  const existingValues = Array.from(select.options).map(o => o.value);
  for (const code of supported) {
    if (!existingValues.includes(code)) {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = names[code];
      select.append(opt);
    }
  }

  let preference = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (allowed.includes(saved)) preference = saved;
  } catch (_) {}

  const requested = new URLSearchParams(location.search).get('lang');
  if (allowed.includes(requested)) preference = requested;

  function resolveLang() {
    if (preference !== 'system') return preference;
    const languages = navigator.languages || [navigator.language || 'en'];
    for (const candidate of languages) {
      const code = String(candidate).toLowerCase().split('-')[0];
      if (supported.includes(code)) return code;
    }
    return 'en';
  }

  function render() {
    let lang = resolveLang();
    // Graceful fallback if a subpage only has en/zh sections
    if (!document.querySelector(`main section[data-lang="${lang}"]`)) {
      lang = lang === 'zh' ? 'zh' : 'en';
    }

    document.documentElement.lang = htmlLangTags[lang] || 'en';

    document.querySelectorAll('[data-lang]').forEach(node => {
      node.hidden = node.dataset.lang !== lang;
    });

    select.value = preference;
    select.setAttribute('aria-label', langLabels[lang] || 'Language');
    if (select.options[0]) {
      select.options[0].textContent = autoLabels[lang] || 'Follow system (automatic)';
    }

    const heading = document.querySelector(`main section[data-lang="${lang}"] h1`);
    if (heading) {
      document.title = heading.textContent.replace(/\s+/g, ' ').trim() + ' — KSIC';
    }
  }

  select.addEventListener('change', () => {
    preference = select.value;
    try {
      localStorage.setItem(key, preference);
    } catch (_) {}
    const url = new URL(location.href);
    url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    render();
  });

  window.addEventListener('languagechange', () => {
    if (preference === 'system') render();
  });

  render();
})();
