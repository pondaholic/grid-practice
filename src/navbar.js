import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default function NavBar() {
	return (
		<div className="navbar" aria-label="navigation bar">
			<ul>
				<li aria-label="About me link">
					<Link to="/me">About Me</Link>
				</li>
				<li className="middle-link" aria-label="portfolio link">
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li aria-label="contact me link">
					<Link to="/contact">Let's Build Something</Link>
				</li>
			</ul>
		</div>
	);
}
