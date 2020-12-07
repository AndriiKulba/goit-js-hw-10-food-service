import './styles.css';
import itemTemplate from './templates/food-items.hbs';
import menu from './menu.json';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
localStorage.setItem('theme', JSON.stringify(Theme));
const saveTheme = localStorage.getItem('theme');
const parceTheme = JSON.parse(saveTheme);
const lightTheme = parceTheme.LIGHT;
const darkTheme = parceTheme.DARK;
const markup = itemTemplate(menu);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('.theme-switch__toggle');
themeSwitchRef.addEventListener('change', handleActiveTheme);
bodyRef.classList = localStorage.getItem('activeTheme');
themeSwitchRef.checked = localStorage.getItem('checked');

function handleActiveTheme(e) {
  if (e.target.checked) {
    localStorage.setItem('activeTheme', darkTheme);
    bodyRef.classList = localStorage.getItem('activeTheme');
    localStorage.setItem('checked', 'true');
  } else {
    localStorage.setItem('activeTheme', lightTheme);
    bodyRef.classList = localStorage.getItem('activeTheme');
    localStorage.removeItem('checked');
  }
}
