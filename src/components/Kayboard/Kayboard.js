import React from "react";
import { range } from "../../utils";

const ROWS = [
	["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
	["W", "X", "C", "V", "B", "N"],
];

function getStatusByLetter(validGuesses) {
	const statusObj = {};

	validGuesses.forEach((guess) => {
		guess.forEach(({ letter, status }) => {
			statusObj[letter] = status;
			console.log(statusObj);
		});
	});

	return statusObj;
}

function Kayboard({ validGuesses }) {
	let statusByLetter = getStatusByLetter(validGuesses);
	return (
		<div className="keyboard">
			{ROWS.map((row, index) => (
				<div key={index} className="keyboard-row">
					{row.map((letter) => {
						return (
							<div
								key={letter}
								className={`letter ${statusByLetter[letter] || ""}`}>
								{letter}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
}

export default Kayboard;
