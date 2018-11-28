import React from 'react';

import Social from './social';

import './welcome.css';

export default function Welcome() {
	return (
		<div className="welcome" role="main">
			<p className="written">Hello,</p>
			<div className="written-body">
				<p>My name is Shelly. I am a Full Stack Developer.</p>
				<p>Thank you for visitng my virtual self-portrait.</p>
				<p>Enjoy your stay.</p>
				<p>If you'd like to drop me a line, you can email me at: </p>
				<p>
					<a
						href="mailto:sleung102@yahoo.com"
						aria-labelledby="my email address"
						className="email"
					>
						sleung102@yahoo.com
					</a>
				</p>
				<div className="social">
					<p>You can also find me on: </p>
					<Social />
				</div>
			</div>
		</div>
	);
}
