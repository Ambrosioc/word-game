import React from "react";
import Banner from "../Banner/Banner";

function LoseBanner({ answer, action }) {
	return (
		<Banner status="sad" action={action} actionText="Recommancer">
			<p>
				Désoler, la bonne réponse est <strong>{answer}</strong>.
			</p>
		</Banner>
	);
}

export default LoseBanner;
