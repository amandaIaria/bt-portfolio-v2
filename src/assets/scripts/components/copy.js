/* eslint-disable import/prefer-default-export */
/**
 * @class
 * @classdesc getting and setting the copy from the api
 *
 * @method getCopy
 *
 * @method setCopy
*/

export function Copy() {
  // const copy = [];

  this.getCopy = () => {
    const url = `${process.env.URL}JSON/copy`;

    fetch(url)
      .then(results => results.json())
      .then((results) => {
        this.setCopy(results);
      });
  };

  /* eslint-disable no-param-reassign */
  this.setCopy = (copy) => {
    copy.forEach((c) => {
      document.querySelectorAll('.portfolio__section').forEach(($section) => {
        $section.innerHTML += $section.id == c.section ? c.copy : '';
      });
    });
  };
}
