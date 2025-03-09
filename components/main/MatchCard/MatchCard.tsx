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
import Flex from "../Container/Flex";

function MatchCard({
	match,
	showBtn,
	theme,
	iconSize,
	showName,
}: {
	match: IMatch;
	showBtn: boolean;
	theme?: "dark" | "light" | "trans";
	iconSize: "sm" | "md" | "lg" | "xl" | "xxl";
	showName?: boolean;
}) {
	return (
		<Card theme={theme || "trans"}>
			<>
				<CardHeader theme={theme ? theme : "light"} border={true} as="div">
					<div className={clsx(styles["matchcard-header"])}>
						{match.competition && (
							<Logo
								logo={match.competition.logo}
								name={match.competition.short_name}
								size="md"
							/>
						)}
						<Text color="white" letterCase={"upper"} size="base">
							{formatDate(match.date)}
						</Text>
					</div>
				</CardHeader>
				<CardBody as="div" theme={theme || "light"}>
					<>
						{match.home.team && match.away.team && match.competition && (
							<div
								className={clsx(
									styles["matchcard-body"],
									styles[match.status.toLowerCase()],
								)}
							>
								<Flex align="center" justify="" gap="xs">
									<Logo
										logo={match.home.team?.logo}
										name={match.home.team.short_name}
										size={iconSize || "lg"}
									/>
									{showName && (
										<Text
											color="white"
											letterCase={"upper"}
											size="base"
											weight="bold"
											hide_sm={true}
										>
											{match.home.team.long_name}
										</Text>
									)}
								</Flex>

								<Details match={match} showBtn={showBtn} />
								<Flex align="center" justify="end" gap="xs">
									{showName && (
										<Text
											color="white"
											letterCase={"upper"}
											size="base"
											weight="bold"
											hide_sm={true}
										>
											{match.away.team.long_name}
										</Text>
									)}
									<Logo
										logo={match.away.team?.logo}
										name={match.away.team.short_name}
										size={iconSize || "lg"}
									/>
								</Flex>
							</div>
						)}
					</>
				</CardBody>
			</>
		</Card>
	);
}

export default MatchCard;
