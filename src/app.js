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

  // Find the index where to insert 'More'
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

  // If all list items can fit then do not render 'More'
  if (width <= mobileMenu.offsetWidth) {
    moreItem.style.display = 'none';
    return;
  }

  // Render only fit items
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
}).observe(mobileMenu);
