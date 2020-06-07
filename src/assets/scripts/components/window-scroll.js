/**
 * @classdesc WindowScroll closure function, that contains all of the methods need for full screen
 * and full screen window movement.
 * @class
 *
 * @method isElementInViewport
 * @param {*} el
 * Calculates if this current div is in the window or not.
 *
 * @method scrollPanel
 * @param {event} e
 * @param {dom} panels
 * After the mouse wheel has been used, this method will move the page to the desired div
 *
 * @method keyPressPanel
 * @param {event} e
 * @param {dom} panels
 * After the arrow keys or link has been clicked, this method will move the page to the desired div
 */

export default function WindowScroll() {
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0
      && rect.left >= 0
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  this.scrollPanel = (panels, e) => {
    let
      nextSibling,
      nextSiblingSelector,
      prevSibling,
      prevSiblingSelector;

      console.info(e.deltaY); // eslint-disable-line
      console.info(panels); // eslint-disable-line

    panels.forEach((panel) => {
      if (isElementInViewport(panel)) {
        // console.info(panel.id, panel.nextSibling.id) // eslint-disable-line
        nextSibling = panel.nextSibling == null ? 'header' : panel.nextSibling.id;
        nextSiblingSelector = document.getElementById(nextSibling);
        prevSibling = panel.previousSibling == null ? 'social' : panel.previousSibling.id;
        prevSiblingSelector = document.getElementById(prevSibling);
        
        // if going down look at the next sibiling
        if (e.deltaY >= 0) {
          nextSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
        // if I'm scrolling up the look at the previous sibling
        else {
          prevSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      }
    });
  };

  this.keyPressPanel = (panels, e) => {
    let
      nextSibling,
      nextSiblingSelector,
      prevSibling,
      prevSiblingSelector;

    panels.forEach((panel) => {
      if (isElementInViewport(panel)) {
        nextSibling = panel.nextSibling == null ? 'header' : panel.nextSibling.id;
        nextSiblingSelector = document.getElementById(nextSibling);
        prevSibling = panel.previousSibling == null ? 'social' : panel.previousSibling.id;
        prevSiblingSelector = document.getElementById(prevSibling);

        // If I press the up arrow button then go to the previous sibling
        if (e.keyCode === 38 || e === 'prev') {
          prevSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }

        // If I press the down arrow button then go the the next sibling
        if (e.keyCode === 40 || e === 'next') {
          nextSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      }
    });
  };
}
