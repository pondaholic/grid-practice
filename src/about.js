import React from 'react';

import './about.css';

export default function AboutMe() {
	return (
		<div className="about-me">
			<h2>All About Me!</h2>
			<ul>
				<h3>
					<li className="first">
						Thing 1: A Passion for Programming/Graduating from a Coding Bootcamp
					</li>
				</h3>
				<p>
					I am a recent graduate of a coding bootcamp (Thinkful, if you're
					curious). Most people would roll their eyes. "Oh, another coding
					graduate. What can you really learn in a few months?" The answer is:
					it depends. I felt I learned enough to know I have a thirst for
					programming. To be honest, I entered my coding bootcamp full of doubt.
					I was basically riddled with Imposter's Syndrome. But, what I've
					learned is that programming is a constant learning process. It's not
					something you just know after a while.
				</p>
				<p>
					What was most valuable is that I learned coding is one of the few
					things I can see myself doing permanently. I can just sit there and
					problem-solve; and I enjoy problem-solving! Mostly, I, like many
					others, enjoy the post-solving success-high.{' '}
				</p>
				<p>
					What makes learning to code important? Instrinsic in the
					problem-sovling process is asking for help. Somehow, after "growing
					up," most of us have lost the ability to willingly and honestly ask
					for help. We can't know everything; we can't solve everything. We
					aren't black holes are communities unto ourselves. That's what
					programming/coding bootcamp has given me.
				</p>
				<h3>
					<li className="second">Thing 2: Team Player</li>
				</h3>
				<p>
					While not everyone is a team player, I would jump at the any chance to
					learn from fellow programmers and seniors with more experience.
				</p>
				<h3>
					<li className="third">Thing 3: A World Outside Code?</li>
				</h3>
				<p>
					Yes, I have a life outside coding because anyone who only obsesses
					over a single matter tends to burn out.
				</p>
			</ul>
		</div>
	);
}
