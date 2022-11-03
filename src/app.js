import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import Dropdown from './components/Dropdown';
import './styles.css';

const dropdown = document.querySelector('.dropdown');
const dropdownText = dropdown.querySelector('.text');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

new Dropdown(dropdown, dropdownMenu, {
  open: 'open',
  current: 'current',
  onSelect: (selected) => {
    dropdownText.textContent = selected.textContent;
  },
  animationDuration: '300ms',
});

const mobileMenu = document.querySelector('.mobile-menu');
const menuItems = mobileMenu.querySelector('ul').children;
const moreItem = mobileMenu.querySelector('li.more');

new ResizeObserver(() => {
  let width = 0;
  let indexWithMore = -1;
  moreItem.style.display = '';
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    if (menuItem === moreItem) continue;
    menuItem.style.display = '';
    menuItem.style.flex = 'initial';

    width += menuItem.offsetWidth;
    const widthWithMore = width + moreItem.offsetWidth;
    if (widthWithMore <= mobileMenu.offsetWidth) indexWithMore = i;
    menuItem.style.flex = '';
  }

  if (width <= mobileMenu.offsetWidth) {
    moreItem.style.display = 'none';
  } else {
    for (let i = 0; i <= indexWithMore; i++) {
      const menuItem = menuItems[i];
      if (menuItem === moreItem) continue;
      menuItem.style.display = '';
    }
    for (let i = indexWithMore + 1; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      if (menuItem === moreItem) continue;
      menuItem.style.display = 'none';
    }
  }

  const elementWidth = +mobileMenu.style.width.match(/^\d*/)[0];
  if (elementWidth) mobileMenu.style.width = `${elementWidth + 1}px`;
}).observe(mobileMenu);
