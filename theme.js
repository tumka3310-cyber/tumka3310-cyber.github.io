// theme.js – управление темой и сохранение выбора пользователя

(function() {
  'use strict';

  // Получаем элемент переключателя (если есть)
  const themeSelect = document.getElementById('theme-select');
  const root = document.documentElement;

  // Функция применения темы
  function applyTheme(theme) {
    if (theme === 'system') {
      // Удаляем атрибут data-theme, чтобы работал media query
      root.removeAttribute('data-theme');
    } else {
      // Устанавливаем атрибут data-theme="light" или "dark"
      root.setAttribute('data-theme', theme);
    }
    // Сохраняем выбор в localStorage
    localStorage.setItem('theme', theme);
  }

  // Функция инициализации
  function initTheme() {
    // Читаем сохранённое значение (по умолчанию 'system')
    const savedTheme = localStorage.getItem('theme') || 'system';

    // Устанавливаем выбранное значение в select, если он есть
    if (themeSelect) {
      themeSelect.value = savedTheme;
    }

    // Применяем тему
    applyTheme(savedTheme);

    // Обработчик изменения выбора
    if (themeSelect) {
      themeSelect.addEventListener('change', function(event) {
        applyTheme(event.target.value);
      });
    }
  }

  // Запускаем после полной загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
