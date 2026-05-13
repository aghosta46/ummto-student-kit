

(function () {
    'use strict';

    const STORAGE_KEY = 'dzsk_theme';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        const btn = document.getElementById('themeToggleBtn');
        if (btn) {
            btn.textContent = (theme === 'dark') ? '☀️' : '🌙';
            btn.setAttribute('aria-label', theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre');
        }
    }

    function getStoredTheme() {
        try { return localStorage.getItem(STORAGE_KEY) || 'light'; }
        catch (e) { return 'light'; }
    }

    function storeTheme(theme) {
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = (current === 'light') ? 'dark' : 'light';
        applyTheme(next);
        storeTheme(next);
    }

    function injectToggleButton() {
        const nav = document.querySelector('.main-nav ul');
        if (!nav) return;
        if (document.getElementById('themeToggleBtn')) return;

        const cartLink = nav.querySelector('a[href*="commande"]');
        const insertBeforeLi = cartLink ? cartLink.closest('li') : null;

        const li = document.createElement('li');
        li.className = 'theme-toggle-li';

        const btn = document.createElement('button');
        btn.id = 'themeToggleBtn';
        btn.className = 'theme-toggle-btn';
        btn.type = 'button';
        btn.addEventListener('click', toggleTheme);

        li.appendChild(btn);

        if (insertBeforeLi) {
            nav.insertBefore(li, insertBeforeLi);
        } else {
            nav.appendChild(li);
        }
    }

    applyTheme(getStoredTheme());

    document.addEventListener('DOMContentLoaded', () => {
        injectToggleButton();
        applyTheme(getStoredTheme());
    });

})();
