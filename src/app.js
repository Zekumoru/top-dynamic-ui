import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import CollapsibleMenu from './components/CollapsibleMenu';
import Dropdown from './components/Dropdown';
import './styles.css';
import planetImg from './images/planet-jck5d.jpg';
import planetImg2 from './images/planet-jck5d-2.jpg';
import landscapeImg from './images/landscape-darkmoon-art.jpg';
import lakeImg from './images/lake-elg21.jpg';

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

const imageContainerCarousel = document.querySelector('.carousel .image-container');
const images = [
  planetImg,
  lakeImg,
  planetImg2,
  landscapeImg,
];

images.forEach((image) => {
  addImage(image);
});

function addImage(source) {
  const image = document.createElement('img');
  image.src = source;
  imageContainerCarousel.appendChild(image);
}

let index = 0;
let transitioning = false;
imageContainerCarousel.addEventListener('click', () => {
  if (transitioning) return;
  if (index === (images.length - 1)) index = -1;

  imageContainerCarousel.style.transform = `translateX(-${100 * (index + 1)}%)`;
  index++;
});

imageContainerCarousel.addEventListener('transitionstart', () => {
  transitioning = true;
});

imageContainerCarousel.addEventListener('transitionend', () => {
  transitioning = false;
});
