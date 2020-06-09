/**
 * These are the user event handlers
 */

// import { Contact } from './contact';
// import { Copy } from './copy';
// import { Menu } from './menu';
// import { Modal } from './modal';
// import { Projects } from './projects';
import WindowScroll from './window-scroll';

const
  // contact = new Contact(),
  // copy = new Copy(),
  // menu = new Menu(),
  // modal = new Modal(),
  // project = new Projects(),
  scroll = new WindowScroll(),
  $sections = document.querySelectorAll('.btjs-portfolio__section'),
  $menuLinks = document.querySelectorAll('.menu__link');

// window.onload = () => {
//   copy.getCopy();
//   project.loadProjects();
//   copy.setCopy();
// };
// 
// document.querySelector('.menu__button').addEventListener('click', () => {
//   menu.open();
// });

window.addEventListener('wheel', (e) => {
  scroll.scrollPanel($sections, e);
});

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  scroll.keyPressPanel($sections, e);
});

// document.querySelector('button').addEventListener('click', (e) => {
//   const $thisButton = e.target;
//   scroll.keyPressPanel($sections, $thisButton.className);
// });

// document.querySelector('.modal__backdrop').addEventListener('click', () => {
//   modal.close();
// });
// 
// document.querySelector('.modal__close-button').addEventListener('click', () => {
//   modal.close();
// });
// 
// document.querySelector('#projects').addEventListener('click', (e) => {
//   e.preventDefault();
//   if (e.srcElement.offsetParent.className === 'project') {
//     modal.open(e.srcElement.offsetParent);
//   }
// });
// 
// document.querySelector('.contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   contact.sendMessage(e);
// });
// 
// $menuLinks.forEach(($menuLink) => {
//   $menuLink.addEventListener('click', (e) => {
//     menu.goToDiv(e.target.text, e);
//   });
// });
