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
						<i class="fab fa-twitter fa-2x" />{' '}
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/le-she/"
						target="_blank"
						rel="noopener noreferrer"
						aria-labelledby="a link to my LinkedIn account"
					>
						<i class="fab fa-linkedin fa-2x" />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/pondaholic"
						target="_blank"
						rel="noopener noreferrer"
						aria-labelledby="a link to my github"
					>
						<i class="fab fa-github fa-2x" />
					</a>
				</li>
			</ul>
		</div>
	);
}
