import MatchLayout from "@/components/main/Layouts/MatchLayout/MatchLayout";
import { matches } from "@/lib/placeholder-data";
import React from "react";
import clsx from "clsx";
import styles from "../../Match.module.css";
import Card from "@/components/main/Card/Card";
import CardHeader from "@/components/main/Card/CardHeader";
import Heading from "@/components/main/Typography/Heading";
import CardBody from "@/components/main/Card/CardBody";
import Logo from "@/components/main/MatchCard/Logo";
import MatchScoreBoard from "@/components/main/MatchCard/MatchScoreBoard";
import Text from "@/components/main/Typography/Text";
import MatchStat from "@/components/main/MatchCard/MatchStat";
import Flex from "@/components/main/Container/Flex";
import { getObjectValue } from "@/lib/helpers";

function Stats({ params }: { params: { matchId: string } }) {
	const match = matches.find((match) => match.id === params.matchId);

	if (!match) return <div>No match</div>;

	return (
		<MatchLayout match={match} currentLink={`/matches/${match.id}/stats`}>
			<div className={clsx(styles.stats)}>
				<Card theme={"trans"}>
					<>
						<CardHeader theme={"dark"} border={true} as="div">
							<div className={clsx(styles.preview__heading)}>
								<Heading
									level={3}
									letterCase="upper"
									color="secondary"
									type="section"
								>
									General
								</Heading>
							</div>
						</CardHeader>
						<CardBody as="div" theme={"light"}>
							<div className={clsx(styles.preview__body, styles.p)}>
								<ul>
									<li className={clsx(styles["preview-item"])}>
										{match.home.team && match.away.team && (
											<>
												<Logo
													logo={match.home.team.logo}
													name={match.home.team.long_name}
													size="md"
												/>
												<Flex
													direction="col"
													gap="xxs"
													align="center"
													justify="center"
												>
													<MatchScoreBoard
														status={match.status}
														home_score={match.home.goals}
														away_score={match.away.goals}
														time={match.time}
														size="md"
													/>
													<Text
														color="white"
														size="xs"
														weight="bold"
														letterCase="capitalize"
														center={true}
													>
														{match.status.toLowerCase()}
													</Text>
												</Flex>
												<Logo
													logo={match.away.team?.logo}
													name={match.away.team?.long_name}
													size="md"
												/>
											</>
										)}
									</li>
									<>
										{Object.keys(match.home.stats).map((el, i) => {
											return (
												<li
													className={clsx(
														styles["preview-item"],
														styles["no-border"],
													)}
													key={el + (i + 2) * (i * 10)}
												>
													<MatchStat
														stat={el}
														home={getObjectValue(match.home.stats, el)}
														away={getObjectValue(match.away.stats, el)}
													/>
												</li>
											);
										})}
									</>
								</ul>
							</div>
						</CardBody>
					</>
				</Card>
			</div>
		</MatchLayout>
	);
}

export default Stats;
