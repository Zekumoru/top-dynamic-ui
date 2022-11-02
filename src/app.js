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

new ResizeObserver(() => {
  for (let i = menuItems.length - 1; mobileMenu.scrollWidth > mobileMenu.offsetWidth && i >= 0; i--) {
    const menuItem = menuItems[i];
    if (menuItem.classList.contains('more')) continue;

    menuItem.style.display = 'none';
  }

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    if (menuItem.classList.contains('more')) continue;
    if (!menuItem.style.display) continue;

    menuItem.style.display = '';
    if (mobileMenu.scrollWidth > mobileMenu.offsetWidth) {
      menuItem.style.display = 'none';
      break;
    }
  }
}).observe(mobileMenu);
