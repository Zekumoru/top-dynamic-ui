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
