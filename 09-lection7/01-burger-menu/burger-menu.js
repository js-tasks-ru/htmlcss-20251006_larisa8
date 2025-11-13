const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
        if (menu) {
            menu.setAttribute('data-open', '');
            menu.setAttribute('aria-hidden', false);
            menuOpen.setAttribute('aria-expanded', true);
            menuClose.focus();
        }
    });
}

if (menuClose) {
    menuClose.addEventListener('click', function() {
        if (menu) {
            menu.removeAttribute('data-open');
            menu.setAttribute('aria-hidden', true);
            menuOpen.setAttribute('aria-expanded', false); 
            menuOpen.focus();
        }
    });
}
