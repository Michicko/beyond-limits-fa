import React from "react";
import styles from "./MatchCard.module.css";
import clsx from "clsx";
import Card from "../Card/Card";
import { IMatch } from "@/lib/definitions";
import CardHeader from "../Card/CardHeader";
import Text from "../Typography/Text";
import formatDate from "@/lib/formatDate";
import Logo from "./Logo";

function MatchCard({
	match,
	no_btn,
	theme,
	padded,
}: {
	match: IMatch;
	no_btn?: boolean;
	theme?: "dark" | "light" | "trans";
	padded?: boolean;
}) {
	return (
		<Card theme={theme || "trans"}>
			<>
				<CardHeader theme={theme ? theme : "light"} border={true} as="div">
					<div className={clsx(styles["matchcard-header"])}>
						<Logo
							logo={match.competition.logo}
							name={match.competition.short_name}
						/>
						<Text color="white" letterCase={"upper"} size="md">
							{formatDate(match.date)}
						</Text>
					</div>
				</CardHeader>
			</>
		</Card>
	);
}

export default MatchCard;
