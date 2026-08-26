// theme.js – управление темой
(function() {
  const root = document.documentElement;
  const themeSelect = document.getElementById('theme-select');

  function applyTheme(theme) {
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'system';
    if (themeSelect) themeSelect.value = savedTheme;
    applyTheme(savedTheme);

    if (themeSelect) {
      themeSelect.addEventListener('change', function(e) {
        applyTheme(e.target.value);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
