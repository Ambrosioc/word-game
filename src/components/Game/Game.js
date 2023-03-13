import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WinBanner from "../WinBanner/WinBanner";
import LoseBanner from "../LoseBanner/LoseBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [gameStatus, setGameStatus] = React.useState("running");
	const [guesses, setGuesses] = React.useState([]);

	function handleGuessSubmit(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);

		if (tentativeGuess.toUpperCase() === answer) {
			setGameStatus("win");
		} else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lose");
		}
	}
	const guessesCount = guesses.length;
	console.log({ guessesCount });

	return (
		<>
			{gameStatus}
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				handleGuessSubmit={handleGuessSubmit}
				gameStatus={gameStatus}
			/>
			{gameStatus === "win" && <WinBanner guessesCount={guessesCount} />}
			{gameStatus === "lose" && <LoseBanner answer={answer} />}
		</>
	);
}

export default Game;
