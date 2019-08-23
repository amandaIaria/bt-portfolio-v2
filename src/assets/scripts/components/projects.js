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
  const $projectContainer = document.querySelector('.projects');

  this.loadProjects = () => {
    const pC = this.projectsCollection();
    pC.forEach((project, index) => {
      $projectContainer.innerHTML += `<div id="project_${index}" class="project"><div class="project__content"><h2>${project.title}</h2></div><div style="background-image:url(${project.image})" class="project__background"></div> </div>`;
    });
  };

  this.projectsCollection = () => {
    return [
      {
        title: 'project one',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/any',
      },
      {
        title: 'project two',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/animals',
        url: 'http://google.com',
      },
      {
        title: 'project three',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/arch',
        url: 'http://google.com',
      },
      {
        title: 'project 4',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'http://placehold.it/400x400',
        url: 'http://google.com',
      },
      {
        title: 'project 5',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/nature',
        url: 'http://google.com',
      },
      {
        title: 'project 6',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/people',
        url: 'http://google.com',
      },
      {
        title: 'project 7',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/tech',
        url: 'http://google.com',
      },
      {
        title: 'project 8',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/tech/grayscale',
        url: 'http://google.com',
      },
      {
        title: 'project 9',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/tech/sepia',
        url: 'http://google.com',
      },
      {
        title: 'project 10',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/tech',
        url: 'http://google.com',
      },
      {
        title: 'project 11',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'http://placehold.it/400x400',
        url: 'http://google.com',
      },
      {
        title: 'project 12',
        content: 'Lorem ipsum dolor amet chicharrones pug quinoa, ugh yuccie occupy palo santo vexillologist fashion axe godard four loko viral. Wayfarers cred waistcoat knausgaard lyft, single-origin coffee meh coloring book 8-bit yr plaid tilde subway tile fingerstache iPhone. Deep v hell of hoodie, brunch pour-over kitsch narwhal vegan cloud bread pickled authentic activated charcoal photo booth ennui. Copper mug blog brunch lo-fi next level twee hell of yuccie chicharrones pickled thundercats hashtag photo booth adaptogen. Dreamcatcher ramps whatever pour-over master cleanse ugh. Salvia yr butcher mustache before they sold out.',
        image: 'https://placeimg.com/400/400/any',
        url: 'http://google.com',
      },
    ];
  };
}
