import React from 'react';

import './social.css';

export default function Social() {
	return (
		<div className="social-links">
			<ul>
				<li>
					<a
						href="https://twitter.com/le__she"
						target="_blank"
						rel="noopener noreferrer"
						aria-labelledby="a link to my twitter account"
					>
						Twitter
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/le-she/"
						target="_blank"
						rel="noopener noreferrer"
						aria-labelledby="a link to my LinkedIn account"
					>
						LinkedIn
					</a>
				</li>
				<li>
					<a
						href="https://github.com/pondaholic"
						target="_blank"
						rel="noopener noreferrer"
						aria-labelledby="a link to my github"
					>
						Github
					</a>
				</li>
			</ul>
		</div>
	);
}
