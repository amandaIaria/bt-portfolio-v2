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
    // console.info(el.id, rect); // eslint-disable-line
    return (
      rect.top >= 0
      && rect.left >= 0
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  this.scrollPanel = (panels, e) => {
    const $div = e.originalTarget;
    
    let
      nextSibling,
      nextSiblingSelector,
      prevSibling,
      prevSiblingSelector;

    /*if ($div.nextSibling === null) {
      nextSibling = panels[0].id;
    }
    else {
      nextSibling = $div.nextSibling.id;
    }

    if ($div.prevSibling === undefined) {
      prevSibling = panels[panels.length - 1].id;
    }
    else {
      prevSibling =  $div.prevSibling.id;
    }
    console.dir(e.originalTarget.id); // eslint-disable-line
    // console.log(e.deltaY, $div, nextSibling, prevSibling); // eslint-disable-line
    
    nextSiblingSelector = document.getElementById(nextSibling);
    prevSiblingSelector = document.getElementById(prevSibling);
    
    if (e.deltaY >= 0) {
      nextSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    else {
      prevSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }*/

    panels.forEach((panel, index) => {
      // console.log(e.deltaY, panel); // eslint-disable-line

      if (isElementInViewport(panel)) {
        // console.debug('current panel', panel.id);  // eslint-disable-line
        // console.info(panel.id, panels[0].id , panels[panels.length - 1].id, panel.nextSibling.id); // eslint-disable-line
        
        if (panels[index + 1] === undefined ) {
          // console.log('next sibling is null'); // eslint-disable-line
          nextSibling = panels[0].id;
        }
        else {
          nextSibling = panels[index + 1].id;
        }

        if (panels[index - 1] === undefined) {
          prevSibling = panels[panels.length - 1].id;
        }
        else {
          prevSibling =  panels[index - 1].id;
        }

        nextSiblingSelector = document.getElementById(nextSibling);
        prevSiblingSelector = document.getElementById(prevSibling);
        
        // window.scrollTo(0, ref.current.offsetTop)  

        // nextSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

        // console.log(nextSiblingSelector, prevSiblingSelector) // eslint-disable-line
        
        // if going down look at the next sibiling
        if (e.deltaY >= 0) {
          // console.log('down'); // eslint-disable-line
          nextSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
        }
        // if I'm scrolling up the look at the previous sibling
        else {
          // console.log('up'); // eslint-disable-line
          prevSiblingSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
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
