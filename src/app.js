import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import CollapsibleMenu from './components/CollapsibleMenu';
import Dropdown from './components/Dropdown';
import './styles.css';

const dropdown = document.querySelector('.dropdown-1');
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
const selection = document.querySelector('.selection');

const onMenuSelect = (selected) => {
  selection.textContent = selected.textContent;
};

new CollapsibleMenu(mobileMenu, {
  more: 'more',
  dropdown: 'dropdown-menu dropdown-menu-animated dropdown-menu-2',
  onSelect: onMenuSelect,
  onResize: (dropdown, dropdownMenu) => {
    new Dropdown(dropdown, dropdownMenu, {
      open: 'open',
      animationDuration: '300ms',
      onSelect: onMenuSelect,
    });
  },
});
