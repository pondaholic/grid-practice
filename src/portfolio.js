import React from 'react';

import mtg from './app-images/mtg.png';
import podquest from './app-images/podquest.png';
import './portfolio.css';

export default class Portfolio extends React.Component {
	render() {
		return (
			<div className="portfolio">
				<div className="project-1">
					<h3>MTG-React App</h3>
					<p>A description of the app</p>
					<p>A link to app</p>
					<img src={mtg} alt="mtg app screenshot" />
				</div>
				<div className="project-2">
					<h3>PodQuest App</h3>
					<p>A description of the app</p>
					<p>A link to app</p>
					<img src={podquest} alt="podquest homepage screenshot" />
				</div>
				<div className="project-3">Another App</div>
			</div>
		);
	}
}
