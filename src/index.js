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

function createMenuItems(menuData) {
  return menuItemsTpl(menuData);
}

const menuMarkup = createMenuItems(menuData);
// console.log(menuMarkup);

refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);

refs.checkboxThemeSwitch.addEventListener('change', onThemeToggleChange);

const currentTheme = localStorage.getItem(STORAGE_THEME);

if (!currentTheme) {
  localStorage.setItem(STORAGE_THEME, Theme.LIGHT);
}

if (currentTheme) {
  refs.body.classList.add(currentTheme);
}

if (currentTheme === Theme.DARK) {
  refs.checkboxThemeSwitch.checked = true;
}

function onThemeToggleChange() {
  if (!refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    refs.checkboxThemeSwitch.checked = true;
    localStorage.setItem(STORAGE_THEME, Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    refs.checkboxThemeSwitch.checked = false;
    localStorage.setItem(STORAGE_THEME, Theme.LIGHT);
  }
}

