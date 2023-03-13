import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function InfoGame() {
	return (
		<div>
			<p>
				Voici un jeu de mot qui pourrait vous aider à vous faire passer le
				temps. Les mots sont en anglais.
			</p>
			<p>
				Le but est de trouver le mot caché en entrant des lettres. Vous avez{" "}
				<strong>{NUM_OF_GUESSES_ALLOWED}</strong> essais pour trouver le mot.
			</p>
			<h3>Bonne chance 🍀</h3>
		</div>
	);
}

export default InfoGame;
