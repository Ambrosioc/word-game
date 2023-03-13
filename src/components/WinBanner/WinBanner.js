import React from "react";
import Banner from "../Banner/Banner";

function WinBanner({ guessesCount }) {
	return (
		<Banner status="happy">
			<p>
				<strong>Félicitaion ! </strong>Vous avez gagnier en{" "}
				<strong>
					{guessesCount === 1 ? "1 manche" : `${guessesCount} manches`} !
				</strong>
			</p>
		</Banner>
	);
}

export default WinBanner;
