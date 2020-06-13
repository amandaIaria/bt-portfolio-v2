import React, { Component } from "react";
import Project from './Project';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      // Version one will not be using Heroku
      projects: [
        {
          title: 'Good Food Truck',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'My Healthy VT',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Parent Up',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Snap',
          image: 'https://placekitten.com/500/500',
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
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Dark Layout',
          image: 'https://placekitten.com/500/500',
          description: "I'm baby banjo letterpress marfa sustainable, knausgaard venmo keffiyeh XOXO mixtape live-edge. Meh VHS af vegan poke cardigan. Woke taxidermy subway tile PBR&B waistcoat. Selvage pickled poutine, williamsburg iPhone ethical chambray.",
          tags: [ 'Food Truck', 'charity'],
          company: 'HMC',
          url: 'http://example.com'
        },
        {
          title: 'Weather Prep',
          image: 'https://placekitten.com/500/500',
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
    const { projects } = this.state;

    return (
      <div className="bt-projects">
        <ul className="bt-projects__container">
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

export default ProjectContainer;