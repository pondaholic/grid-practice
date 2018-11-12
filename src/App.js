import React, { Component } from 'react';
// import Image from './homepage.jpg';

import './App.css';

class App extends Component {
	render() {
		let title = `{ Full Stack Developer : Shelly Leung }`;
		return (
			<div className="site-body">
				<div className="header">
					{/* <img src={Image} alt="hand and code" /> */}
					<h1>{title}</h1>
				</div>
				<div className="body">
					{/* <img src={logo} className="app-logo" /> */}
					<p classname="written">Stuff written</p>
				</div>
				<div className="navbar">nav</div>
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
