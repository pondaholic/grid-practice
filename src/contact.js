import React from 'react';
import ReactContactForm from 'react-mail-form';

export default class Contact extends React.Component {
	render() {
		return (
			<div className="contact-form">
				<ReactContactForm to="sleung102@yahoo.com" />
			</div>
		);
	}
}
