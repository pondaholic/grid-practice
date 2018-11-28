import React from 'react';

import './about.css';

export default function AboutMe() {
	return (
		<div className="about-me" role="main">
			<h2>All About Me!</h2>
			<ul>
				<li
					className="first"
					aria-labelledby="about my passion for programming"
				>
					<h3>
						Thing 1: A Passion for Programming/Graduating from a Coding Bootcamp
					</h3>
				</li>
				<p>
					I am a recent graduate of a coding bootcamp (Thinkful, if you're
					curious). Most people would roll their eyes. "Oh, another coding
					graduate. What can you really learn in a few months?" I'm very
					grateful to have entered into a coding bootcamp. I learned that I have
					a thirst for programming.
				</p>
				<p>
					To be honest, I entered my coding bootcamp full of doubt. I was
					basically riddled with Imposter's Syndrome. But, what I've learned is
					that programming is a constant learning process; it is constant
					problem-solving. Instrinsic in the process is asking for help.
					Somehow, after "growing up," most of us have lost the ability to
					willingly and honestly ask for help.
				</p>
				<p>
					We can't know everything; we can't always solve everything ourselves.
					We aren't black holes or communities unto ourselves. That's what
					programming/coding bootcamp has given me; that's why I'm passionate
					about programming.
				</p>
				<li
					className="second"
					aria-labelledby="about my ability to work on teams"
				>
					<h3>Thing 2: A Team Player</h3>
				</li>
				<p>
					While not everyone is a team player, I would jump at the any chance to
					learn from fellow programmers and seniors with more experience. It's
					an extension of my bootcamp history--the program I was part of taught
					us via daily pair-partner programming. Through it, you learn to
					communicate and, most important, learn to listen. Listening and
					communicating are key when it comes to coding projects.
				</p>
				<li className="third" aria-labelledby="about my hobbies">
					<h3>Thing 3: A World Outside Code?</h3>
				</li>
				<p>
					Is there a world outside of programming? For a while, I didn't have
					any life outside of just trying to figure out Javascript, Python, CSS,
					HTML, Node, etc.
				</p>
				<p>
					But, I've learned to leave the computer and breath. I currently have a
					life outside coding that prevents me from burning out. I wear many
					hats outside programming, including: carpentry, photography, painting,
					and drawing. You can follow me on my{' '}
					<a
						href="https://www.instagram.com/le.shelly/"
						aria-labelledby="link to my photography instagram"
					>
						Photography Instagram
					</a>{' '}
					or my{' '}
					<a
						href="https://www.instagram.com/mental.penumbra/"
						aria-labelledby="link to my drawing instagram"
					>
						Illustration Instagram
					</a>{' '}
					if you're curious.
				</p>
			</ul>
		</div>
	);
}
