import { Modal } from '@js/components/modal';
import { Project } from '@js/components/projects';

var 
  expect = require('chai').expect,
  assert = require('assert'),
  $elementModal;

chai.use(require('chai-dom'));

describe('Modal Testing', function() {
  before();

  it('modal container should have the on class when the project is clicked', function() {
    expect().to.have.class('on');
  });

  it('modal container should not have the on class when the cancel is clicked', function() {
    expect().to.not.have.class('on');
  });

  it('modal container should not have the on class when the modalbg is clicked', function() {
    expect().to.not.have.class('on');
  });

  it('Modal should have the project data inject into it', function() {

  });

  after();
});
