/**
 * These are the user event handlers
 */

import { Menu } from './menu';
import { WindowScroll } from './window-scroll';
import { Modal } from './modal';
import { Projects } from './projects';

const
  scroll = new WindowScroll(),
  modal = new Modal(),
  project = new Projects(),
  menu = new Menu(),
  $sections = document.querySelectorAll('.portfolio__section'),
  $menuLinks = document.querySelectorAll('.menu__link');

window.onload = () => {
  project.loadProjects();
};

document.querySelector('.menu__button').addEventListener('click', () => {
  menu.open();
});

window.addEventListener('wheel', (e) => {
  scroll.scrollPanel($sections, e);
});

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  scroll.keyPressPanel($sections, e);
});

document.querySelector('button').addEventListener('click', (e) => {
  const $thisButton = e.target;
  scroll.keyPressPanel($sections, $thisButton.className);
});

document.querySelector('.modal__backdrop').addEventListener('click', () => {
  modal.close();
});

document.querySelector('.modal__close-button').addEventListener('click', () => {
  modal.close();
});

document.querySelector('#projects').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.srcElement.offsetParent.className === 'project') {
    modal.open(e.srcElement.offsetParent);
  }
});

$menuLinks.forEach(($menuLink) => {
  $menuLink.addEventListener('click', (e) => {
    menu.goToDiv(e.target.text, e);
  });
});
