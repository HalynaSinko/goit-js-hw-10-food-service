import menuItemsTpl from './templates/menu-items.hbs';
import menuData from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STORAGE_THEME = 'theme';

const refs = {
  menuList: document.querySelector('.js-menu'),
  checkboxThemeSwitch: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};


const menuMarkup = menuItemsTpl(menuData);
// console.log(menuMarkup);

refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);

refs.checkboxThemeSwitch.addEventListener('change', onThemeToggleChange);

const currentTheme = localStorage.getItem(STORAGE_THEME);

if (currentTheme === Theme.DARK) {
  refs.checkboxThemeSwitch.checked = true;
  refs.body.classList.add(currentTheme);
} else {
  refs.body.classList.add(Theme.LIGHT);
};

function onThemeToggleChange(e) {
  if (e.target.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem(STORAGE_THEME, Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem(STORAGE_THEME, Theme.LIGHT);
  }
}

