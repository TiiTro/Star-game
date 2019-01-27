import React, { Component } from 'react';
import './App.scss';

const Stars = (props) => {
	const numberOfStars = 1 + Math.random()*9;

	let stars = [];
	for (let i = 0; i < numberOfStars; i ++) {
		stars.push(<i key={i} className='fa fa-star'></i>)
	}
	return(
		<div className='stars-container'>
			{stars}
		</div>
	);
}

const Button = (props) => {
	return(
		<div className='button-container'>
			<button className='button'>=</button>
		</div>
	);
}

const Answer = (props) => {
	return(
		<div className='answer-container'>
			<span>5</span>
		</div>
	);
}

const Numbers = (props) => {
	return(
		<div className='numbers-container'>
			{Numbers.list.map((number, i) => 
				<span key={i}>
					<p>{number}</p>
				</span>
			)}
		</div>
	);
}

Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Game extends React.Component {
	render() {
		return(
			<div className='game'>
				<h1>Play Nine</h1>
				<div className='flex-row'>
					<Stars />
					<Button />
					<Answer />
				</div>
				<br />
				<Numbers />
			</div>
			
		);
	}
}

class App extends Component {
	render() {
		return(
			<div className='background'>
				<Game />
			</div>
		);
	}
}

export default App;
