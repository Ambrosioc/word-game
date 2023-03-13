import React from "react";
import Banner from "../Banner/Banner";

function WinBanner({ guessesCount, action }) {
	return (
		<Banner status="happy" actionText="Nouvelle partie" action={action}>
			<p>
				<strong>Félicitaion ! </strong>Vous avez gagner en{" "}
				<strong>
					{guessesCount === 1 ? "1 manche" : `${guessesCount} manches`} !
				</strong>
			</p>
		</Banner>
	);
}

export default WinBanner;
