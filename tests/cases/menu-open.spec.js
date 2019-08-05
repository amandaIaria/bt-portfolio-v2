import * as menuOpen from '@js/components/menu-open';

var expect = require('chai').expect;
var jsdom = require('mocha-jsdom')
var assert = require('assert');
var 
  $menu,
  $menuButton,
  $elementContainer,
  $elementButton;

jsdom();

beforeEach (function(){
  $elementButton = document.createElement('a.menu__button');
  $elementContainer = document.createElement('div.menu');
  $menu = document.querySelector('.menu');
  $menuButton = document.querySelector('.menu__button');
});

afterEach (function(){
  
});

describe('menu open', function() {
  it('should add the open class to the menu and to the button', function() {
    $menuButton.click();
    expect($menuButton).to.have.class('close');
    expect($menu).to.have.class('show');
  });
});

describe('menu close', function() {
  it('should add the close class to the menu and to the button', function() {
    $menuButton.click();
    expect($menuButton).to.have.class('close');
    expect($menu).to.have.class('hide');
  });
});