
import menuItemsTpl from './templates/menu-items.hbs';
import menuData from './menu.json';
import './styles.css';

const refs = {
    menuList: document.querySelector('.js-menu'),
};

function createMenuItems(menuData) {
    
    return menuItemsTpl(menuData);
};

const menuMarkup = createMenuItems(menuData);
console.log(menuMarkup);

refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);