import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import Dropdown from './components/Dropdown';
import './styles.css';

const tab = document.querySelector('.tab');
const tabName = tab.querySelector('.tab-name');
const dropdownList = tab.querySelector('.dropdown');

new Dropdown(tab, dropdownList, {
  open: 'open',
  current: 'current',
  onSelect: (selected) => {
    tabName.textContent = selected.textContent;
  },
  animationDuration: '300ms',
});
