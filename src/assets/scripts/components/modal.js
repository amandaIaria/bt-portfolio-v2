/* eslint-disable import/prefer-default-export */
import { Projects } from './projects';

/**
 * @classdesc Modal function closure that contains all functions related to modals.
 * @class
 *
 * @method open
 * @param {event} e
 * Method that opens the modal on the page.
 *
 * @method close
 * Closes the modal.
 *
 * @method placeData
 * @param {json} p
 * Gathers data from the clicked project and places it into the modal
 */

export function Modal() {
  const
    $modalContainer = document.querySelector('.modal'),
    pro = new Projects();

  this.open = (e) => {
    const
      $projectId = e.getAttribute('id'),
      projectId = $projectId.split('_'),
      id = projectId[1],
      projectObject = pro.getProjectsCollection(id);

    this.placeData(projectObject);
  };

  this.close = () => {
    $modalContainer.classList.remove('on');
  };

  this.placeData = (json) => {
    const
      $modalTitle = $modalContainer.querySelector('.modal__content h1'),
      $modalCopy = $modalContainer.querySelector('.modal__content div'),
      $modalImage = $modalContainer.querySelector('.modal__header'),
      $modalLink = $modalContainer.querySelector('.modal__footer .modal__btn');

    json.then((p) => {
      $modalTitle.textContent = p.title;
      $modalCopy.textContent = p.content;
      $modalImage.style.backgroundImage = `url(' ${p.image}')`;
      $modalLink.setAttribute('href', p.url);
      $modalContainer.classList.add('on');
    });
  };
}
