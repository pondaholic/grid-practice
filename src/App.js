import React from 'react';
import { Link, Route } from 'react-router-dom';

import NavBar from './navbar';
import Welcome from './welcome';
import AboutMe from './about';
import Contact from './contact';

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
					{/* <p className="written">Stuff written</p> */}
					<Route exact path="/" component={() => <Welcome />} />
					<Route exact path="/me" component={() => <AboutMe />} />
					<Route exact path="/contact" component={() => <Contact />} />
				</div>
				<div className="footer">footer</div>
			</div>
		);
	}
}

export default App;
