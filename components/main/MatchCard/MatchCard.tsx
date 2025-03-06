import React from "react";
import styles from "./MatchCard.module.css";
import clsx from "clsx";
import Card from "../Card/Card";
import { IMatch } from "@/lib/definitions";
import CardHeader from "../Card/CardHeader";
import Text from "../Typography/Text";
import formatDate from "@/lib/formatDate";
import Logo from "./Logo";
import CardBody from "../Card/CardBody";
import Details from "./Details";

function MatchCard({
	match,
	showBtn,
	theme,
	iconSize,
}: {
	match: IMatch;
	showBtn: boolean;
	theme?: "dark" | "light" | "trans";
	iconSize: "sm" | "md" | "lg" | "xl" | "xxl";
}) {
	return (
		<Card theme={theme || "trans"}>
			<>
				<CardHeader theme={theme ? theme : "light"} border={true} as="div">
					<div className={clsx(styles["matchcard-header"])}>
						<Logo
							logo={match.competition.logo}
							name={match.competition.short_name}
							size="md"
						/>
						<Text color="white" letterCase={"upper"} size="base">
							{formatDate(match.date)}
						</Text>
					</div>
				</CardHeader>
				<CardBody as="div" theme={theme || "light"}>
					<>
						{match.home.team && match.away.team && (
							<div
								className={clsx(
									styles["matchcard-body"],
									styles[match.status.toLowerCase()],
								)}
							>
								<Logo
									logo={match.home.team?.logo}
									name={match.competition.short_name}
									size={iconSize || "lg"}
								/>
								<Details match={match} showBtn={showBtn} />
								<Logo
									logo={match.away.team?.logo}
									name={match.competition.short_name}
									size={iconSize || "lg"}
								/>
							</div>
						)}
					</>
				</CardBody>
			</>
		</Card>
	);
}

export default MatchCard;
