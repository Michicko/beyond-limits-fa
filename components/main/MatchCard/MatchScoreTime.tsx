import React from "react";
import styles from "./MatchCard.module.css";
import clsx from "clsx";
import Text from "../Typography/Text";

function MatchScoreTime({ time }: { time: string }) {
	return (
		<div className={clsx(styles["match-score-tile"])}>
			<Text letterCase="normal" color="primary" size="base">
				{time}
			</Text>
		</div>
	);
}

export default MatchScoreTime;
