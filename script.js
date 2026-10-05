/* ==========================================================================
   script.js · light/dark theme toggle (the only script on the page).
   The page works fine without it: it simply follows the OS setting.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var button = document.querySelector('[data-theme-toggle]');
  var prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (!button) return;

  function currentTheme() {
    var chosen = root.getAttribute('data-theme');
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return prefersDark && prefersDark.matches ? 'dark' : 'light';
  }

  function syncLabel() {
    var label = 'Switch to ' + (currentTheme() === 'dark' ? 'light' : 'dark') + ' theme';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  button.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: lasts for this visit */ }
    syncLabel();
  });

  if (prefersDark && prefersDark.addEventListener) prefersDark.addEventListener('change', syncLabel);
  syncLabel();
})();
