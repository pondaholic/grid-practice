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
					<a href="https://github.com/pondaholic/mtg-deck-creator">
						<p>
							<i>MTG's Github</i>
						</p>
					</a>
					<a href="https://mtg-deck-creator.herokuapp.com/">
						<img src={mtg} alt="mtg app screenshot" />
					</a>
					<a href="https://github.com/pondaholic/mtg-server">
						<p>
							<i>Link to server-side code</i>
						</p>
					</a>
				</div>
				<div className="project-2">
					<h3>PodQuest App</h3>
					<p>A description of the app</p>
					<a href="https://github.com/thinkful-ei23/podquest-client">
						<p>
							<i>PodQuest' Github</i>
						</p>
					</a>
					<a href="https://podquest-app.herokuapp.com/">
						<img src={podquest} alt="podquest homepage screenshot" />
					</a>
					<a href="https://github.com/thinkful-ei23/podquest-server">
						<p>
							<i>Link to server-side code</i>
						</p>
					</a>
				</div>
				<div className="project-3">Another App</div>
			</div>
		);
	}
}
