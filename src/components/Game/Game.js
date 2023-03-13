import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WinBanner from "../WinBanner/WinBanner";
import LoseBanner from "../LoseBanner/LoseBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Kayboard from "../Kayboard/Kayboard";
import { checkGuess } from "../../game-helpers";
import InfoGame from "../InfoGame/InfoGame";

function Game() {
	const [gameStatus, setGameStatus] = React.useState("running");
	const [guesses, setGuesses] = React.useState([]);
	const [answer, setAnswer] = React.useState(() => sample(WORDS));
	console.info({ answer });

	const guessesCount = guesses.length;
	const validGuesses = guesses.map((guess) => checkGuess(guess, answer));

	function handleGuessSubmit(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);

		if (tentativeGuess.toUpperCase() === answer) {
			setGameStatus("win");
		} else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lose");
		}
	}

	function handleRestart() {
		setGameStatus("running");
		setGuesses([]);
	}

	function handleStart() {
		const newAnswer = sample(WORDS);
		setGameStatus("running");
		setGuesses([]);
		setAnswer(newAnswer);
	}

	return (
		<>
			<InfoGame />
			<GuessResults
				guesses={guesses}
				answer={answer}
				validGuesses={validGuesses}
			/>
			<GuessInput
				handleGuessSubmit={handleGuessSubmit}
				gameStatus={gameStatus}
			/>
			<Kayboard validGuesses={validGuesses} />
			{gameStatus === "win" && (
				<WinBanner guessesCount={guessesCount} action={handleStart} />
			)}
			{gameStatus === "lose" && (
				<LoseBanner answer={answer} action={handleRestart} />
			)}
		</>
	);
}

export default Game;
