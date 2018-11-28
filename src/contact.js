import React from 'react';

import './contact.css';

export default class Contact extends React.Component {
	render() {
		return (
			<div className="contact-form" aria-label="a form to contact me with">
				<p>
					Please use the Contact Form below to send me a message or just email
					me directly here:{' '}
					<a
						href="mailto:sleung102@yahoo.com"
						aria-labelledby="my email address"
					>
						sleung102@yahoo.com
					</a>
				</p>
				<form action="https://formspree.io/sleung102@yahoo.com" method="POST">
					<input
						type="text"
						name="name"
						aria-labelledby="name"
						label="name"
						placeholder="Name"
						required={true}
					/>
					<textarea
						label="message"
						type="textarea"
						name="message"
						aria-labelledby="message to be sent"
						placeholder="Yes? You have a message for me?"
					/>
					<button type="submit">Send</button>
				</form>
			</div>
		);
	}
}
