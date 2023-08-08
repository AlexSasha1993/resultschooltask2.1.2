import './App.css';
import { useState } from 'react';

const numbers = [
	{ id: 'a', name: 0 },
	{ id: 'b', name: 1 },
	{ id: 'c', name: 2 },
	{ id: 'd', name: 3 },
	{ id: 'e', name: 4 },
	{ id: 'f', name: 5 },
	{ id: 'g', name: 6 },
	{ id: 'h', name: 7 },
	{ id: 'i', name: 8 },
	{ id: 'j', name: 9 },
	{ id: 'k', name: '+' },
	{ id: 'l', name: '-' },
	{ id: 'm', name: '=' },
	{ id: 'n', name: 'C' },
];

const onClick = () => {};

export const App = () => {
	return (
		<div className="App">
			<div className="output">
				<input></input>
			</div>
			{numbers.map(({ id, name }) => (
				<button key={id}>{name}</button>
			))}
		</div>
	);
};
