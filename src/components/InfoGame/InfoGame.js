import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

const legend = (status) => {
	return range(1).map((num) => (
		<div key={num} style={styles.legend}>
			<span className={`cell ${status}`}>A</span>
		</div>
	));
};

const handleSubmit = (event) => {
	event.preventDefault();
};

function InfoGame() {
	const [level, setLevel] = React.useState("easy");
	const [theme, setTheme] = React.useState("animal");

	return (
		<>
			<div>
				<p>
					Voici un jeu de mot qui pourrait vous aider à vous faire passer le
					temps. Les mots sont en anglais.
				</p>
				<p>
					Le but est de trouver le mot caché en entrant des lettres. Vous avez{" "}
					<strong>{NUM_OF_GUESSES_ALLOWED}</strong> essais pour trouver le mot.
				</p>
				<p>
					Les lettres qui sont dans le mot et à la bonne position sont affichées
					en vert.
				</p>
				{legend("correct")}
				<p>
					Les lettres qui sont dans le mot mais qui ne sont pas à la bonne
					position sont affichées en doré.
				</p>
				{legend("misplaced")}

				<p>Les lettres qui ne sont pas dans le mot sont affichées en noire.</p>
				{legend("incorrect")}
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="level">Niveau</label>{" "}
					<select name="level" id="level" required>
						<option value="easy">Facile</option>
						<option value="medium">Moyen</option>
						<option value="hard">Difficile</option>
					</select>
					<div style={styles.theme}>
						<label htmlFor="animal">Animaux</label>
						<input
							type="radio"
							name="theme"
							id="animal"
							checked
							required></input>
						<label htmlFor="music">Instrument de musique</label>
						<input type="radio" name="theme" id="music" required></input>
						<label htmlFor="color">Couleurs</label>
						<input type="radio" name="theme" id="color" required></input>
					</div>
					<button type="submit" style={styles.button}>
						Jouer
					</button>
				</form>
			</div>
		</>
	);
}

export default InfoGame;

const styles = {
	legend: {
		display: "flex",
		padding: " 15px",
	},
	theme: {
		display: "flex",
		justifyContent: "space-around",
	},

	button: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "green",
		color: "white",
		border: "none",
		padding: "10px",
		margin: "10px",
		borderRadius: "5px",
	},
};
