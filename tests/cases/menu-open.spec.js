var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');
var 
  $menu,
  $menuButton,
  $elementContainer,
  $elementButton;

chai.use(require('chai-dom'));

before (function(){
  $elementButton = d.createElement('a');
  $elementContainer = d.createElement('div');
  $elementButton.classList.add('menu__button', 'open');
  $elementContainer.classList.add('menu', 'hide');
  d.body.appendChild($elementButton);
  d.body.appendChild($elementContainer);
  $menu = d.querySelector('.menu');
  $menuButton = d.querySelector('.menu__button');

  $menuButton.addEventListener('click', function(e){
    e.preventDefault();
    var $this = e.target;
    $this.classList.toggle('close');

    if ($this.classList.contains('close')) {
      $menu.classList.add('show');
      $menu.classList.remove('hide');
    } else {
      $menu.classList.add('hide');
      $menu.classList.remove('show');
    }
  });
});

after (function(){
  d.body.removeChild($elementButton);
  d.body.removeChild($elementContainer);
});

describe('menu open and closing on click', function() {
  

  it('should add the open class to the menu and to the button', function() {
    $menuButton.click();
    expect($menuButton).to.have.class('close');
    expect($menu).to.have.class('show');
  });

  it('should add the close class to the menu and to the button', function() {
    $menuButton.click();
    expect($menuButton).to.have.class('open');
    expect($menu).to.have.class('hide');
  });
});
