import React from "react";
import Banner from "../Banner/Banner";

function LoseBanner({ answer }) {
	return (
		<Banner status="sad">
			<p>
				Désoler, la bonne réponse est <strong>{answer}</strong>.
			</p>
		</Banner>
	);
}

export default LoseBanner;
