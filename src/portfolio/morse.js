import React from 'react';

export default function Morse() {
	return (
		<div
			className="morse-text"
			aria-labelledby="all about learning morse code app"
		>
			<h3>Learn Morse Code App</h3>
			<p>
				<b>Why?</b>
			</p>
			<p>
				This app was created for anybody who wants to learn morse code. It uses
				a spaced repetition algorithm to present information that would repeat
				only what the user hasn't yet learned.
			</p>
			<div className="end" />
			<p>
				<b>My Contributions:</b>
			</p>
			<p>
				I created the algorithm that spaced out questions depending on if the
				user answered correctly or incorrectly via Linked List and updated the
				backend when the user logged out so that they may continue where they
				left off when they log back in.
			</p>
			<div className="end" />
			<p>
				<b>Co-collaborators:</b>
			</p>
			<p>Christopher Gonzalez: User registration/login & CSS</p>
			<p>Ryan Ureta: Client-side CSS</p>
			<div className="end" />
			<p>
				<b>Tech Stack:</b>
			</p>
			<p>MongoDB, Express, React, and Node were used for this app.</p>
			<div className="end" />

			<p>
				<b>Links to view the project:</b>
			</p>
			<a
				href="https://github.com/thinkful-ei23/SRC-Morse-Client"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="link to view this app's github"
			>
				<p>
					<i class="fab fa-github fa-2x" /> <i>Client-side code</i>
				</p>
			</a>
			<a
				href="https://github.com/thinkful-ei23/SRC-Morse-Server"
				target="_blank"
				rel="noopener noreferrer"
				aria-labelledby="link to view the server-side code on github"
			>
				<p>
					<i class="fab fa-github fa-2x" /> <i>Server-side code</i>
				</p>
			</a>
			<a
				href="https://morse-learning-app.herokuapp.com"
				target="_blank"
				rel="noopener noreferrer"
				aria-labelledby="link to use the app live"
			>
				<p>
					<i class="fas fa-desktop fa-2x" />{' '}
					<i>Link to live app, or click on the image</i>
				</p>
			</a>
		</div>
	);
}
