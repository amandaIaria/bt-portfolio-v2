const
  $menuButton = document.querySelector('.menu__button'),
  $menu = document.querySelector('.menu');

$menuButton.addEventListener('click', (e) => {
  e.preventDefault();
  const $this = e.target;
  $this.classList.toggle('close');

  if ($this.classList.contains('close')) {
    $menu.classList.add('show');
    $menu.classList.remove('hide');
  } else {
    $menu.classList.add('hide');
    $menu.classList.remove('show');
  }
});
