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
			...	
		</div>
	);
}

const Numbers = (props) => {
	return(
		<div className='numbers-container'>
			<span><p>1</p></span>
			<span className='selected'><p>2</p></span>
			<span className='used'><p>3</p></span>
			<span><p>4</p></span>
			<span><p>5</p></span>
			<span><p>6</p></span>
			<span><p>7</p></span>
			<span><p>8</p></span>
			<span><p>9</p></span>
		</div>
	);
}

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
