import './styles.css';
import itemTemplate from './templates/food-items.hbs';
import menu from './menu.json';

const markup = itemTemplate(menu);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('.theme-switch__toggle');
themeSwitchRef.addEventListener('click', () => {
  bodyRef.classList = 'dark-theme';
  console.log(bodyRef.classList);
});
