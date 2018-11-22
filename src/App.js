import React from 'react';
import { Link, Route } from 'react-router-dom';

import NavBar from './navbar';
import AboutMe from './about';

import './App.css';

class App extends React.Component {
	render() {
		let title = `{ Full Stack Developer : Shelly Leung }`;
		return (
			<div className="site-body">
				<div className="header">
					<h1>
						<Link to="/">{title}</Link>
					</h1>
				</div>
				<NavBar />
				<div className="body">
					<p classname="written">Stuff written</p>
					<Route exact path="/me" component={() => <AboutMe />} />
				</div>
				<div className="footer">footer</div>
			</div>
		);
	}
}

export default App;
