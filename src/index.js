import './styles.css';
import itemTemplate from './templates/food-items.hbs';
import menu from './menu.json';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
localStorage.removeItem('theme');
const markup = itemTemplate(menu);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('.theme-switch__toggle');
themeSwitchRef.addEventListener('change', handleActiveTheme);
themeSwitchRef.checked = localStorage.getItem('checked');
if (localStorage.getItem('activeTheme')) {
  bodyRef.classList = localStorage.getItem('activeTheme');
}

function handleActiveTheme(e) {
  if (e.target.checked) {
    localStorage.setItem('activeTheme', Theme.DARK);
    bodyRef.classList = Theme.DARK;
    localStorage.setItem('checked', 'true');
  } else {
    localStorage.setItem('activeTheme', Theme.LIGHT);
    bodyRef.classList = Theme.LIGHT;
    localStorage.removeItem('checked');
  }
}
