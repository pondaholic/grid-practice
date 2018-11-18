import React from 'react';

import NavBar from './navbar';
import AboutMe from './about';

import './App.css';

class App extends React.Component {
	render() {
		let title = `{ Full Stack Developer : Shelly Leung }`;
		return (
			<div className="site-body">
				<div className="header">
					<h1>{title}</h1>
				</div>
				<NavBar />
				<div className="body">
					<p classname="written">Stuff written</p>
					<AboutMe />
				</div>
				<div className="footer">footer</div>
			</div>
		);
	}
}

export default App;
