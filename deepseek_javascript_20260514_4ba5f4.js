document.addEventListener('DOMContentLoaded', () => {
    const page = document.body;
    const lightBtn = document.querySelector('.theme-switch__button_light');
    const darkBtn = document.querySelector('.theme-switch__button_dark');

    // Сохраняем выбранную тему в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        page.className = `page theme_${savedTheme}`;
    }

    lightBtn.addEventListener('click', () => {
        page.className = 'page theme_light';
        localStorage.setItem('theme', 'light');
    });

    darkBtn.addEventListener('click', () => {
        page.className = 'page theme_dark';
        localStorage.setItem('theme', 'dark');
    });
});