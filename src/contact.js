import React from 'react';

export default class Contact extends React.Component {
	render() {
		return (
			<div className="contact-form">
				<form action="https://formspree.io/sleung102@yahoo.com" method="POST">
					<input type="text" name="name" placeholder="Name" />
					<input
						type="textarea"
						name="message"
						placeholder="Yes? You have a message for me?"
					/>
					<button type="submit">Send</button>
				</form>
			</div>
		);
	}
}
