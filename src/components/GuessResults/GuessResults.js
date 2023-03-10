import React from "react";

function GuessResults({ guesses }) {
	console.log({ guesses });
	return (
		<div className="guess-results">
			{guesses.map(({ value, id }) => (
				<div key={id}>{value}</div>
			))}
		</div>
	);
}

export default GuessResults;
