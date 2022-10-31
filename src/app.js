import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './styles.css';

const tab = document.querySelector('.tab');
const dropdown = document.querySelector('.dropdown');
tab.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});
