import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default function NavBar() {
	return (
		<div className="navbar" aria-labelledby="navigation bar">
			<ul>
				<li aria-labelledby="contact me link">
					<Link to="/contact">Let's Build Something</Link>
				</li>
				<li className="middle-link" aria-labelledby="portfolio link">
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li aria-labelledby="About me link">
					<Link to="/me">About Me</Link>
				</li>
			</ul>
		</div>
	);
}
