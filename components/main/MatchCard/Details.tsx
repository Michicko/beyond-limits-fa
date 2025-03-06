import { IMatch, Match_status } from "@/lib/definitions";
import React from "react";
import styles from "./MatchCard.module.css";
import clsx from "clsx";
import Text from "../Typography/Text";
import formatDate from "@/lib/formatDate";
import Button from "../Button/Button";

function Details({ match, showBtn }: { match: IMatch; showBtn: boolean }) {
	return (
		<div className={clsx(styles["matchcard-details"])}>
			<div
				className={clsx(
					styles["matchcard-details__box"],
					styles[match.status.toLowerCase()],
					showBtn &&
						match.status !== "CANCELED" &&
						match.status !== "ABANDONED" &&
						styles["show-btn"],
				)}
			>
				{match.status === "FINISHED" ? (
					<>
						<Text color="white" letterCase="normal" size="xxl" weight="bold">
							{match.home.goals}
						</Text>
						<Text color="white" letterCase="normal" size="xxl" weight="bold">
							-
						</Text>
						<Text color="white" letterCase="normal" size="xxl" weight="bold">
							{match.away.goals}
						</Text>
					</>
				) : match.status === "UPCOMING" ? (
					<>
						<Text color="white" letterCase="upper" size="md" weight="bold">
							{formatDate(match.date)}
						</Text>
						<Text color="white" letterCase="upper" size="sm" weight="light">
							{match.time}
						</Text>
						<Text
							color="white"
							letterCase="capitalize"
							size="sm"
							weight="light"
						>
							{match.venue}
						</Text>
					</>
				) : match.status === "ABANDONED" ? (
					<Text color="white" letterCase="upper" size="base" weight="light">
						ABANDONED
					</Text>
				) : (
					<Text color="white" letterCase="upper" size="base" weight="light">
						CANCELED
					</Text>
				)}
			</div>
			{showBtn &&
				match.status !== "CANCELED" &&
				match.status !== "ABANDONED" && (
					<div className={clsx(styles["btn-box"])}>
						<Button
							isLink={true}
							size={"sm"}
							text={
								match.status === "UPCOMING"
									? "Match Preview"
									: match.status === "FINISHED"
									? "Match Report"
									: ""
							}
							type="secondary"
							url={
								match.status === "UPCOMING"
									? `/matches/${match.id}/preview`
									: match.status === "FINISHED"
									? `/matches/${match.id}/report`
									: "#"
							}
						/>
					</div>
				)}
		</div>
	);
}

export default Details;
