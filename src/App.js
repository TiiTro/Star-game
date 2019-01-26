import React, { Component } from 'react';
import './App.scss';

const Stars = (props) => {
	return(
		<div>
			<i className='fa fa-star'></i>
			<i className='fa fa-star'></i>
			<i className='fa fa-star'></i>
			<i className='fa fa-star'></i>
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
		<div className='answer'>
			...	
		</div>
	);
}

const Numbers = (props) => {
	return(
		<div>
			<span>1</span>
			<span>2</span>
			<span>3</span>
		</div>
	);
}

class Game extends React.Component {
	render() {
		return(
			<div className='game'>
				<div>
					<h1>Play Nine</h1>
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
