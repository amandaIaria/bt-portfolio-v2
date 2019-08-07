const $menuButton = document.querySelector('.menu__button');

export default function openMenu(e) {
  e.preventDefault();
  const
    $this = e.target,
    $menu = document.querySelector('.menu');

  $this.classList.toggle('close');

  if ($this.classList.contains('close')) {
    $menu.classList.add('show');
    $menu.classList.remove('hide');
  } else {
    $menu.classList.add('hide');
    $menu.classList.remove('show');
  }
}

$menuButton.addEventListener('click', openMenu);
