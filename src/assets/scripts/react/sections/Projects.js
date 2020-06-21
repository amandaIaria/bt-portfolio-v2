import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'; 
import ProjectContainer from '../components/Projects/Projects';
import Project from '../components/Projects/Project';
import portfoodtruck from '../../../img/portfolio/foodtruck.png';
import port360Widget from '../../../img/portfolio/360Widget.png';
import portDarkLayout from '../../../img/portfolio/DarkLayout.png';
import porthealthyVT from '../../../img/portfolio/healthyVT.png';
import portparentup from '../../../img/portfolio/parentup.png';
import portsnap from '../../../img/portfolio/snap.png';
import portweatherPrep from '../../../img/portfolio/weatherPrep.png';
import portLeadGen from '../../../img/portfolio/pocleadgen.png';
import portinputsds from '../../../img/portfolio/inputs-ds.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveCarousel: '',
      disableLeft: true,
      disableRight: false,
      projects: [
        {
          title: 'Good Food Truck',
          image: portfoodtruck,
          description: "The Good Food Truck is a site Amanda worked on while at HMC Advertising. They worked with the CEFs (Chittenden Emergency Food Shelf). The project included the site, branding, shirts, printables, and the food truck design. With the help of HMC's Designers, they built the site, child theme, and two plugins. The Twitter map and feed, along with the Instagram feed.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://goodfoodtruckvt.org/',
          year: '2015',
        },
        {
          title: 'My Healthy VT',
          image: porthealthyVT,
          description: "Helping Yourself to Health is a site Amanda worked on while at HMC Advertising. They worked with the Vermont Department of Health to create a site that focused on multiple health topics. With the help of HMC's designers and writers they created a full WordPress theme, and a video Wordpress Plugin that allowed for easy viewing of the programs stories in shortcode format.",
          tags: [ 'Vermont State', 'health'],
          company: 'HMC',
          url: 'http://myhealthyvt.org/',
          year: '2014',
        },
        {
          title: 'Parent Up',
          image: portparentup,
          description: "ParentUp is a site Amanda worked on while at HMC Advertising. They worked with the Vermont Department of Health to create a site that focused on multiple issues for parents and teenagers. Some of the topics included Drug and Alcohol Abuse, depression, and suicide. With the help of HMC's designers and writers, Amanda created a full WordPress theme, and a plugin for the Set the Foundation [page. This page contains a mass amount of information that had to be easily ingested with good UX experience.",
          tags: [ 'Vermont State', 'parenting'],
          company: 'HMC',
          url: 'http://parentupvt.org/',
          year: '2015',
        },
        {
          title: 'Snap',
          image: portsnap,
          description: "Snap is a site Amanda worked on while at HMC Advertising. They worked with the Vermont Department of Health to create a site that focused on eating healthy for low-income Vermonters. They had a lot of information to work with and had the challenge to organize it in such a way that it would be easy to navigate and appealing.",
          tags: [ 'Vermont State', 'health'],
          company: 'HMC',
          url: 'http://www.healthyinasnapvt.org/',
          year: '2014',
        },
       
        {
          title: 'Mapfre Property Lead Gen',
          image: portLeadGen,
          description: "A new direction for Mapfre, as this was a POC. We wanted to try something new and gain a market as before we didn't have a property quote tool. Granted this doesn't give you a quote, but becomes a lead generator.",
          tags: [ 'Lead Gen', 'poc'],
          company: 'Mapfre',
          url: 'https://quote.mapfreinsurance.com/property/',
          year: '2019',
        },
        {
          title: 'Beautiful Tragedy Design System',
          image: portinputsds,
          description: "Amanda created a brand system and compoents for work with this brand. I hope to have it out soon, but for the moment the components can be found here.",
          tags: [ 'design system', 'design'],
          company: 'Beautiful Tragedy',
          url: 'http://example.com',
          year: '2019',
        },
        {
          title: '360 Widget',
          image: port360Widget,
          description: "360 Widget was a project the marketing team from Subaru wanted for their dealership sites. In order to match closer to the Subaru.com site, the team was asked to create a 360 widget, while still using the resources they have at their disposal.",
          tags: [ 'Dealership', 'layout'],
          company: 'Dealer.com',
          url: 'http://www.cannonsubaru.com/showroom/2018/Subaru/Outback/SUV.htm',
          year: '2015',
        },
        {
          title: 'Dark Layout',
          image: portDarkLayout,
          description: "Dark Layout is the second layout that Subaru Dealerships can use for their vehicle page. This was one of the first projects Amanda worked while at Dealer.com. They added new functionality to a page filled with information in order to lessen the anxiety of information overload.",
          tags: [ 'Dealership', 'layout'],
          company: 'Dealer.com',
          url: 'http://www.cannonsubaru.com/new/Subaru/2018-Subaru-Outback-lakeland-florida-80cd87e30a0e0a17779c935ff57e4e91.htm?searchDepth=1:42',
          year: '2015',
        },
        {
          title: 'Weather Prep',
          image: portweatherPrep,
          description: "Weather & Vehicle Preparation is a page Amanda wanted to do something different on. With the help of their other team members at Dealer.com Amanda was able to persuade the Subaru Marketing team to try a different approach to the page.",
          tags: [ 'Dealership', 'layout'],
          company: 'Dealer.com',
          url: 'http://www.cannonsubaru.com/subaru-service-weather-vehicle-prep.htm',
          year: '2016',
        },
        {
          title: 'Mapfre BreakPoint',
          image: 'https://placekitten.com/500/500',
          description: "hi I need copy!",
          tags: [ 'Components', 'design system'],
          company: 'HMC',
          url: 'http://example.com',
          year: '2019',
        },
        {
          title: 'Mapfre B2C',
          image: 'https://placekitten.com/500/500',
          description: "hi I need copy",
          tags: [ 'b2c', 'profile'],
          company: 'Mapfre',
          url: 'http://example.com',
          year: '2018',
        },
        {
          title: 'Mapfre Agents Portal',
          image: 'https://placekitten.com/500/500',
          description: "hi i need copy",
          tags: [ 'Agent Portal', 'B2B'],
          company: 'Mapfre',
          url: 'http://example.com',
          year: '2020',
        },
      ],
    };
    this.projects = React.createRef();
    this.projects__container = React.createRef();
    this.inLeftViewPortal = this.inLeftViewPortal.bind(this);
    this.inRightViewPortal = this.inRightViewPortal.bind(this);
    this.handeleButtonDisable = this.handeleButtonDisable.bind(this);
    this.moveProjects = this.moveProjects.bind(this);
    this.moveAmount = this.moveAmount.bind(this);
  }

  componentDidMount() {
    this.handeleButtonDisable();
  }

  inLeftViewPortal($el, $container){
    const
      rect = $el.getBoundingClientRect(),
      container = $container.getBoundingClientRect();
    console.log(rect.left, container.left); //eslint-disable-line
    return parseInt(rect.left, 10) >= parseInt(container.left, 10);
  }

  inRightViewPortal($el, $container){
    const
        rect = $el.getBoundingClientRect(),
        container = $container.getBoundingClientRect();
    console.log(rect.right, container.right); //eslint-disable-line
    return parseInt(rect.right, 10) <= parseInt(container.right, 10);
  }

  handeleButtonDisable() {
    const
      $row = this.projects.current,
      $container = this.projects__container.current,
      $firstCard = $container.children[0].children[0],
      $lastCard = $container.children[$container.children.length -1].children[0];

    if (this.inLeftViewPortal($firstCard, $row)) {
      this.setState({disableLeft: true });
    }
    else {
      this.setState({disableLeft: false });
    }

    if (this.inRightViewPortal($lastCard, $row)) {
      this.setState({disableRight: true });
    }
    else {
      this.setState({disableRight: false });
    }
  }

  moveAmount(direction) {
    const
      $card = document.querySelector('.bt-projects__link'),
      $row = document.querySelector('.bt-projects__container'),
      styles = $row === null ? null : window.getComputedStyle($row),
      cardWidth = $card === null ? 0 : $card.offsetWidth + 8,
      currentLeft = styles === null ? 0 : parseInt(styles.left);
    
    // console.log(cardWidth); // eslint-disable-line

    let moveStyle;

    if (direction === 'left') {
      moveStyle = currentLeft + cardWidth;
    }
    else if (direction === 'right') {
      moveStyle = currentLeft - cardWidth;
    }

    return moveStyle;
  }

  moveProjects(direction) {
    this.handeleButtonDisable();
    this.setState({moveCarousel: `${this.moveAmount(direction)}px` });
  }

  render() {
    const
    { projects } = this.state,
    move = {left: this.state.moveCarousel};

    return (
      <article className="aic-t-full-viewport btjs-portfolio__section" id="projects">
        <div className="bt-container aiu-spacing--p-top50">
          <div className="ail-grid__row">
            <div className="ail-grid__col ail-grid__col--6-lg bt-header">
              <h2 className="bt-header__title bt-projects__title">Featured Projects</h2>
            </div>
            <div className="ail-grid__col ail-grid__col--6-lg aiu-position--relative">
              <div className="bt-projects__content aiu-spacing--p-h16-lg">
                <p className="aiu-spacing--m0">Amanda has worked on a wide variety of projects, ranging from full sites to landing pages, new layouts to plugins, components to design systems. These are just a few of the products they have worked on in the past couple of years.</p>
                <p className="aiu-spacing--m0 aiu-spacing--p-bottom0">Want more info on a given project? Just click on one.</p>
              </div>
            </div>
          </div>
          <div className="ail-grid__row">
            <div className="ail-grid__col ail-grid__col--12">
              <button onClick={(e) => this.moveProjects('left')} disabled={this.state.disableLeft} className="aic-a-button aic-a-button--primary aic-a-button--default aiu-spacing--m-right8">Left</button>
              <button onClick={(e) => this.moveProjects('right')} disabled={this.state.disableRight} className="aic-a-button aic-a-button--primary aic-a-button--default">Right</button>
            </div>
          </div>
        </div>
        <div className="bt-container">
          <div className="ail-grid__row">
            <div className="ail-grid__col--12 aiu-spacing--p0">
              <div className="bt-projects" ref={this.projects}>
                <ul className="bt-projects__container" ref={this.projects__container} style={move}>
                  {projects.map((project, index) =>
                    <li key={index} className="bt-projects__item" ref={'project__' + index}>
                      <Project projectObject={project} />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Projects.propTypes = {
  disabledParent: PropTypes.any,
  directionForContatiner: PropTypes.string
};

export default Projects;

//<ProjectContainer directionForContatiner={this.state.moveCarousel} />