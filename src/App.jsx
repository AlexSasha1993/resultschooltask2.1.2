import './App.css';
import { useState } from 'react';

export const App = () => {
	const [display, setDisplay] = useState('');
	const [isResult, setIsResult] = useState(false);
	const [firstNumber, setFirstNumber] = useState(0);
	const [currentOperation, setCurrentOperation] = useState('');

	const handleNumberClick = (number) => {
		if (isResult) {
			setDisplay(number);
			setIsResult(false);
		} else {
			setDisplay(display + number);
		}
	};

	const handleOperationClick = (operation) => {
		if (operation === '=') {
			if (firstNumber !== '' && display !== '') {
				const num1 = parseInt(firstNumber);
				const num2 = parseInt(display);
				let result;
				if (currentOperation === '+') {
					result = num1 + num2;
				} else if (currentOperation === '-') {
					result = num1 - num2;
				}
				setDisplay(result.toString());
				setFirstNumber('');
				setIsResult(true);
			}
		} else if (operation === 'C') {
			setDisplay('');
			setFirstNumber('');
			setIsResult(false);
		} else {
			setFirstNumber(display);
			setDisplay('');
			setCurrentOperation(operation);
			setIsResult(false);
		}
	};

	return (
		<div className="calculator">
			<div className="display" style={{ color: isResult ? 'green' : 'black' }}>
				{display}
			</div>
			<div className="buttons">
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
					<button key={number} onClick={() => handleNumberClick(number)}>
						{number}
					</button>
				))}
				<button onClick={() => handleOperationClick('+')}>+</button>
				<button onClick={() => handleOperationClick('-')}>-</button>
				<button onClick={() => handleOperationClick('=')}>=</button>
				<button onClick={() => handleOperationClick('C')}>C</button>
			</div>
		</div>
	);
};

export default App;
