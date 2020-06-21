import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import Project from './Project';
import portfoodtruck from '../../../../img/portfolio/foodtruck.png';
import port360Widget from '../../../../img/portfolio/360Widget.png';
import portDarkLayout from '../../../../img/portfolio/DarkLayout.png';
import porthealthyVT from '../../../../img/portfolio/healthyVT.png';
import portparentup from '../../../../img/portfolio/parentup.png';
import portsnap from '../../../../img/portfolio/snap.png';
import portweatherPrep from '../../../../img/portfolio/weatherPrep.png';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      
      projects: [
        {
          title: 'Good Food Truck',
          image: portfoodtruck,
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'My Healthy VT',
          image: porthealthyVT,
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Parent Up',
          image: portparentup,
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Snap',
          image: portsnap,
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Mapfre BreakPoint',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Mapfre Property Lead Gen',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Mapfre B2C',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'AFE',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Beautiful Tragedy Design System',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: '360 Widget',
          image: port360Widget,
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Dark Layout',
          image: portDarkLayout,
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Weather Prep',
          image: portweatherPrep,
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        }
      ],
    };

  }
 
  componentDidMount() {
    // fetch('http://localhost:8080/projects')
    //   .then(response => response.json())
    //   .then(json =>  this.setState({ projects: json }));
  }

  render() {
    const
      { projects } = this.state,
      move = {left: this.props.directionForContatiner};

    return (
      <div className="bt-projects">
        <ul className="bt-projects__container" style={move}>
          {projects.map((project, index) =>
            <li key={index} className="bt-projects__item">
              <Project projectObject={project} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

ProjectContainer.propTypes = {
  disabledParent: PropTypes.any,
  directionForContatiner: PropTypes.string
};

export default ProjectContainer;