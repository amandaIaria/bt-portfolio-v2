/**
 * @classdesc Menu all method for the menu
 * @class
 *
 * @method open
 * @param {event} e
 * opens the navigation and closes it if it is opened.
 *
 * @method goToDiv
 * @param {string} div
 * @param {event} e
 * on click the window scrolls down to the approprate div and then closes the menu.
 */

export default function Menu() {
  const
    $menu = document.querySelector('.menu'),
    $menuButton = document.querySelector('.menu__button');

  this.open = () => {
    $menuButton.classList.toggle('close');

    if ($menuButton.classList.contains('close')) {
      $menu.classList.add('show');
      $menu.classList.remove('hide');
    }
    else {
      $menu.classList.add('hide');
      $menu.classList.remove('show');
    }
  };

  this.goToDiv = (div, e) => {
    e.preventDefault();
    const $div = document.getElementById(div.toLowerCase());
    $div.scrollIntoView();
    this.open($menuButton);
  };
}
