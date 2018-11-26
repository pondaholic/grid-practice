import React from 'react';
import { Link } from 'react-router-dom';

import './hamburger-nav.css';

export default function HamburgerNav() {
	return (
		<div className="hamburger-nav">
			<div className="stripes">
				<div />
				<div />
				<div />
			</div>
			<div className="dropdown-content">
				<ul>
					<li>
						<Link to="/me">About Me</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link to="/contact">Let's Build Something</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
