import React from 'react';

export default function MTG() {
	return (
		<div className="mtg-text">
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
			<p>
				<b>Tech Stack:</b>
			</p>
			<p>Postgres, Express, React, and Node were used for this app.</p>
			<p>
				<b>Links to view the project:</b>
			</p>
			<a href="https://github.com/pondaholic/mtg-deck-creator">
				<p>
					<i>MTG's Github</i>
				</p>
			</a>
			<a href="https://github.com/pondaholic/mtg-server">
				<p>
					<i>Link to server-side code</i>
				</p>
			</a>
			<a href="https://mtg-deck-creator.herokuapp.com/">
				<p>Link to live app, or click on the image to the right.</p>
			</a>
		</div>
	);
}
