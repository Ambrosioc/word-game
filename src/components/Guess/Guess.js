import React from "react";
import { range } from "../../utils";

const Cell = ({ letter, status }) => {
	return <span className={`cell ${status}`}>{letter}</span>;
};
function Guess({ value }) {
	return (
		<p className="guess">
			{range(5).map((num) => {
				return (
					<Cell
						key={num}
						letter={value ? value[num].letter : undefined}
						status={value ? value[num].status : undefined}
					/>
				);
			})}
		</p>
	);
}

export default Guess;
