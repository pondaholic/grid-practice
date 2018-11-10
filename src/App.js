import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="site-body">
				<div className="header">header</div>
				<div className="body">
					body
					<div className="navbar">nav</div>
				</div>
				<div className="footer">footer</div>
			</div>

			// <div className="site-border">
			// 	<div className="site-body">
			// 		<div className="container">container</div>
			// 		<img src={logo} className="App-logo" alt="logo" />
			// 		<p>
			// 			Edit <code>src/App.js</code> and save to reload.
			// 		</p>
			// 		<a
			// 			className="App-link"
			// 			href="https://reactjs.org"
			// 			target="_blank"
			// 			rel="noopener noreferrer"
			// 		>
			// 			Learn React
			// 		</a>
			// 	</div>
			// </div>
		);
	}
}

export default App;
