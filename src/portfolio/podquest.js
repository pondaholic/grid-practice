import React from 'react';

export default function Podquest() {
	return (
		<div className="mtg-text">
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
			<p>Christopher Gonzalez, John Cosgrove, Clinton Owen & Kathy LeBoeuf</p>
			<div className="end" />
			<p>
				<b>Tech Stack:</b>
			</p>
			<p>MongoDB, Express, React, and Node were used for this app.</p>
			<div className="end" />
			<p>
				<b>Links to view the project:</b>
			</p>
			<a href="https://github.com/thinkful-ei23/podquest-client">
				<p>
					<i>PodQuest' Github</i>
				</p>
			</a>
			<a href="https://github.com/thinkful-ei23/podquest-server">
				<p>
					<i>Link to server-side code</i>
				</p>
			</a>
			<a href="https://podquest-app.herokuapp.com/">
				<p>Link to live app, or click on the image</p>
			</a>
		</div>
	);
}
