/* eslint-disable import/prefer-default-export */

/**
 * @classdesc Project closure function that contains two methods for projects.
 * @class
 *
 * @method loadProjects
 * This loads the json from projectsCollection on document/window load
 *
 * @method projectsCollection
 * This is where the json for the projects will be stored. For future version
 * this will turn into a get for a json file.
 */

export function Projects() {
  const
    $projectContainer = document.querySelector('.projects'),
    url = process.env.URL;

  this.getProjectsCollection = (i = '') => {
    const jsonValue = fetch(`${url}JSON/projects?id=${i}`)
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.error(err);
      });
    return jsonValue;
  };

  this.loadProjects = () => {
    const pC = this.getProjectsCollection();
    pC.then((json) => {
      json.forEach((project, index) => {
        $projectContainer.innerHTML += `<div id="project_${index}" class="project"><div class="project__content"><h2>${project.title}</h2></div><div style="background-image:url(${project.image})" class="project__background"></div> </div>`;
      });
    });
  };
}
