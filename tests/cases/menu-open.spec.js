// mport assert from 'assert';
// mport chai from 'chai';
// / import { OpenMenu as openMenu } from '@js/components/menu-open';
// 
// equire('chai').use(require('chai-dom'));
// 
// ar
//  expect = require('chai').expect,
//  $menu,
//  $menuButton,
//  $elementContainer,
//  $elementButton;
// 
// efore (function(){
//  $elementButton = document.createElement('a');
//  $elementContainer = document.createElement('div');
//  $elementButton.classList.add('menu__button', 'open');
//  $elementContainer.classList.add('menu', 'hide');
//  document.body.appendChild($elementButton);
//  document.body.appendChild($elementContainer);
//  $menu = document.querySelector('.menu');
//  $menuButton = document.querySelector('.menu__button');
// 
//  $menuButton.addEventListener('click', openMenu);
// );
// 
// escribe('menu open and closing on click', function() {
//  it('should add the open class to the menu and to the button', function() {
//    console.log('BEFORE CLICK menu classes:', $menu.classList[1]);
//    $menuButton.click();
//    console.log('AFTER CLICK menu classes:', $menu.classList[1]);
//    expect($menuButton).to.have.class('close');
//    expect($menu).to.have.class('show');
//  });
// 
//  it('should add the close class to the menu and to the button', function() {
//    console.log('BEFORE CLICK menu classes:', $menu.classList[1]);
//    $menuButton.click();
//    console.log('AFTER CLICK menu classes:', $menu.classList[1]);
//    expect($menuButton).to.have.class('open');
//    expect($menu).to.have.class('hide');
//  });
// );
// 
// fter (function(){
//  document.body.removeChild($elementButton);
//  document.body.removeChild($elementContainer);
// );
// 