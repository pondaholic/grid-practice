import React from 'react';

import mtg from './app-images/mtg-mockup.png';
import podquest from './app-images/podq.png';
import morse from './app-images/morse.png';
import MTG from './mtg';
import Podquest from './podquest';
import Morse from './morse';

import './portfolio.css';

export default class Portfolio extends React.Component {
	render() {
		return (
			<div className="portfolio">
				<div className="project-1">
					<MTG />
					<a
						href="https://mtg-deck-creator.herokuapp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={mtg} alt="mtg app screenshot" />
					</a>
				</div>
				<div className="project-2">
					<Podquest />
					<a
						href="https://podquest-app.herokuapp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={podquest} alt="podquest homepage screenshot" />
					</a>
				</div>
				<div className="project-3">
					<Morse />
					<a
						href="https://morse-learning-app.herokuapp.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={morse} alt="screenshot of Morse Code questions" />
					</a>
				</div>
			</div>
		);
	}
}
