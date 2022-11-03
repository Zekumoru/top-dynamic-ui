import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
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
const menuItems = mobileMenu.querySelector('ul').children;
const moreItem = mobileMenu.querySelector('li.more');

const selection = document.querySelector('.selection');

const onSelect = (selected) => {
  selection.textContent = selected.textContent;
};

const onResize = (hiddenItems) => {
  // Create dropdown if doesn't exist
  let dropdownMenu = moreItem.querySelector('.dropdown-menu');

  if (!dropdownMenu) {
    dropdownMenu = document.createElement('ul');
    dropdownMenu.className = 'dropdown-menu dropdown-menu-animated dropdown-menu-2';
    new Dropdown(moreItem, dropdownMenu, {
      open: 'open',
      animationDuration: '300ms',
      onSelect: (selected) => {
        if (typeof onSelect === 'function') onSelect(selected);
      },
    });

    moreItem.appendChild(dropdownMenu);
  }

  // Populate dropdown items
  dropdownMenu.innerHTML = '';

  hiddenItems.forEach((hiddenItem) => {
    const dropdownItem = document.createElement('li');
    dropdownItem.textContent = hiddenItem.textContent;
    dropdownMenu.appendChild(dropdownItem);
  });
};

[...menuItems].forEach((menuItem) => {
  if (menuItem === moreItem) return;

  menuItem.addEventListener('click', () => {
    if (typeof onSelect === 'function') onSelect(menuItem);
  });
});

new ResizeObserver(() => {
  const hiddenItems = [];

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
    if (typeof onResize === 'function') onResize(hiddenItems);
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
    hiddenItems.push(menuItem);
  }

  if (typeof onResize === 'function') onResize(hiddenItems);
}).observe(mobileMenu);
