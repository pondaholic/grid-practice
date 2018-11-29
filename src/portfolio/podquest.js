import React from 'react';

export default function Podquest() {
	return (
		<div className="mtg-text" aria-labelledby="about my podquest app">
			<h3>PodQuest App</h3>
			<p>
				<b>Why?</b>
			</p>
			<p>
				This is a podcast searching app that allows users to listen to and keep
				track of their favorite channels as well as episodes.
			</p>
			<div className="end" />
			<p>
				<b>My Contributions:</b>
			</p>
			<p>
				I created the initial API call to iTunes and formated the response into
				a well-organized React Table for the user to scroll through. In
				addition, I created the subscriptions page in order for the user to
				subscribe to their favorite channels and the backend for the information
				to persist.
			</p>
			<div className="end" />
			<p>
				<b>Co-collaborators:</b>
			</p>
			<p>Christopher Gonzalez: Favorites page, Favorites routes on Backend</p>
			<p>John Cosgrove: React Component Testing</p>
			<p>
				Clinton Owen: Media Player, Testing, Responsive Navigation Bar, CSS
				Responsive Design
			</p>
			<p>Kathy LeBoeuf: Client-side CSS & Landing Page copyedit</p>
			<div className="end" />
			<p>
				<b>Tech Stack:</b>
			</p>
			<p>MongoDB, Express, React, and Node were used for this app.</p>
			<div className="end" />
			<p>
				<b>Links to view the project:</b>
			</p>
			<div className="links">
				<p>
					<a
						href="https://github.com/thinkful-ei23/podquest-client"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="link to view my project's github"
					>
						<i class="fab fa-github fa-2x" /> <i>Client-side code</i>
					</a>
				</p>
				<a
					href="https://github.com/thinkful-ei23/podquest-server"
					target="_blank"
					rel="noopener noreferrer"
					aria-labelledby="link to view my project's server-side code on github"
				>
					<p>
						<i class="fab fa-github fa-2x" /> <i>Server-side code</i>
					</p>
				</a>
				<a
					href="https://podquest-app.herokuapp.com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-labelledby="link to my project's live app"
				>
					<p>
						<i class="fas fa-desktop fa-2x" />{' '}
						<i>Link to live app, or click on the image</i>
					</p>
				</a>
			</div>
		</div>
	);
}
