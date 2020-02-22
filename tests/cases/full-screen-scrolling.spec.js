// This Test is a wash
/*

import assert from 'assert';
import chai from 'chai';

chai.use(require('chai-dom'));

var 
  expect = chai.expect,
  $elementSectionOne,
  $elementSectionTwo,
  $elementSectionThree,
  $elementPrev,
  $elementNext,
  $buttons,
  $sectionOne,
  $sectionTwo,
  $sectionThree,
  bodyStyle = "width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;",
  styleFull = "align-items: center; height: 100vh; width: 100vw; display: grid; position: relative;";

before(function () {
  // Create Elements
  $elementSectionOne = document.createElement('section');
  $elementSectionTwo = document.createElement('section');
  $elementSectionThree = document.createElement('section');
  $elementPrev = document.createElement('button');
  $elementNext = document.createElement('button');
  $elementPrev.classList.add('next');
  $elementNext.classList.add('prev');
  $elementSectionOne.classList.add('portfolio__section', 'one');
  $elementSectionTwo.classList.add('portfolio__section', 'two');
  $elementSectionThree.classList.add('portfolio__section', 'three');
  $elementSectionOne.id = 'one' ;
  $elementSectionTwo.id = 'two';
  $elementSectionThree.id = 'three';
  $elementSectionOne.setAttribute("style", styleFull);
  $elementSectionTwo.setAttribute("style", styleFull);
  $elementSectionThree.setAttribute("style", styleFull);
  document.body.setAttribute("style", bodyStyle);
  document.body.appendChild($elementSectionOne);
  document.body.appendChild($elementSectionTwo);
  document.body.appendChild($elementSectionThree);
  document.body.appendChild($elementPrev);
  document.body.appendChild($elementNext);
  document.height = 500;

  // Queries
  $sectionOne = document.querySelector('#one');
  $sectionTwo = document.querySelector('#two');
  $sectionTwo = document.querySelector('#three');
});

describe('Full page scroll, with full page sections', function () {
  before(function(){
    window.addEventListener('wheel', function(e) {
      MovementFunctions.scrollPanel($sections, e);
    });
  });

  it('it should go to the next section', function () {
    console.log('window pos Y:', window.pageYOffset);
    window.scroll(0,900);
    console.log('window pos Y:', window.pageYOffset);
    expect($sectionTwo).to.be.visible;
  });

  it('it should go to the prev section', function () {
    console.log('window pos Y:', window.pageYOffset);
    window.scroll(0,0);
    console.log('window pos Y:', window.pageYOffset);
    expect($sectionOne).to.be.visible;
  });
  
  it('last slide should go to the first', function () {

  });
  
  it('first slide should go to the last', function () {

  });
});

describe('Full page scroll keyboard press of arrow buttons, with full page sections', function () {
  before(function(){
    window.addEventListener('keydown', function(e) {
      e.preventDefault();
      MovementFunctions.keyPressPanel($sections, e);
    });
  });

  it('it should go to the next section', function () {

  });

  it('it should go to the prev section', function () {

  });
  
  it('last slide should go to the first', function () {

  });
  
  it('first slide should go to the last', function () {

  });
});

describe('Full page scroll on click, with full page sections', function () {
  before(function(){
    document.querySelectorAll('button').forEach(function($button){
      $button.addEventListener('click', function(e) {
        const $thisButton = e.target;
        MovementFunctions.keyPressPanel($sections, $thisButton.className);
      });
    });
  });

  it('it should go to the next section', function () {

  });

  it('it should go to the prev section', function () {

  });
  
  it('last slide should go to the first', function () {

  });
  
  it('first slide should go to the last', function () {

  });
});

after(function () {
  document.body.removeChild($elementSectionOne);
  document.body.removeChild($elementSectionTwo);
  document.body.removeChild($elementSectionThree);
  document.body.removeChild($elementPrev);
  document.body.removeChild($elementNext);
});

*/
