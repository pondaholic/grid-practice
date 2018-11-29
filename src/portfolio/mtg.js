import React from 'react';

export default function MTG() {
	return (
		<div
			className="mtg-text"
			aria-labelledby="all about the Magic the Gathering Deck Creator"
		>
			<h3>MTG Deck App</h3>
			<p>
				<b>Why?</b>
			</p>
			<p>
				This app was created for those, like me, who are fans of the Wizards of
				the Coast Magic the Gathering card game. Wherever you are, you can
				create a deck to nerd out with friends or just create it because you had
				an idea, without having to buy all the necessary cards.
			</p>
			<div className="end" />
			<p>
				<b>Tech Stack:</b>
			</p>
			<p>Postgres, Express, React, and Node were used for this app.</p>
			<div className="end" />
			<p>
				<b>Links to view the project:</b>
			</p>
			<a
				href="https://github.com/pondaholic/mtg-deck-creator"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="link to view deck creator's github"
			>
				<p>
					<i class="fab fa-github fa-2x" /> <i>Client-side code</i>
				</p>
			</a>
			<a
				href="https://github.com/pondaholic/mtg-server"
				target="_blank"
				rel="noopener noreferrer"
				aria-labelledby="link to view my project's server-side code"
			>
				<p>
					<i class="fab fa-github fa-2x" /> <i>Server-side code</i>
				</p>
			</a>
			<a
				href="https://mtg-deck-creator.herokuapp.com/"
				target="_blank"
				rel="noopener noreferrer"
				aria-labelledby="link to view the app live"
			>
				<p>
					<i>Link to live app, or click on the image</i>
				</p>
			</a>
		</div>
	);
}
