import React from "react";

function GuessInput({ handleGuessSubmit, gameStatus }) {
	const [tentativeGuess, setTentativeGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();
		setTentativeGuess("");
		handleGuessSubmit(tentativeGuess);
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Entrer votre supposition:</label>
			<input
				required
				disabled={gameStatus !== "running"}
				id="guess-input"
				type="text"
				maxLength={5}
				minLength={5}
				pattern="[a-zA-Z]{5}"
				title="Mot de 5 lettres"
				value={tentativeGuess}
				onChange={(event) => {
					setTentativeGuess(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
