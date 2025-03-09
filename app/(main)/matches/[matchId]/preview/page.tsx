import Card from "@/components/main/Card/Card";
import MatchLayout from "@/components/main/Layouts/MatchLayout/MatchLayout";
import React from "react";
import styles from "../../Match.module.css";
import clsx from "clsx";
import { matches } from "@/lib/placeholder-data";
import CardHeader from "@/components/main/Card/CardHeader";
import Heading from "@/components/main/Typography/Heading";
import Text from "@/components/main/Typography/Text";
import CardBody from "@/components/main/Card/CardBody";
import TeamForm from "@/components/main/MatchCard/TeamForm";

function Review({ params }: { params: { matchId: string } }) {
	const match = matches.find((match) => match.id === params.matchId);

	if (!match) return <div>No match</div>;

	return (
		<MatchLayout match={match} currentLink={`/matches/${match.id}/preview`}>
			<div className={clsx(styles.preview)}>
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
									Match Context
								</Heading>
							</div>
						</CardHeader>
						<CardBody as="div" theme={"light"}>
							<div className={clsx(styles.preview__body, styles.p)}>
								<Text
									color="white"
									size="base"
									cssStyles={{ lineHeight: "1.5" }}
								>
									At Beyond the Limits, we pride ourselves on our
									accomplishments. Our devotion to developing young, talented
									players and pushing the boundaries has earned us numerous
									prestigious honours.
								</Text>
							</div>
						</CardBody>
					</>
				</Card>
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
									Team Form
								</Heading>
							</div>
						</CardHeader>
						<CardBody as="div" theme={"light"}>
							<div className={clsx(styles.preview__body, styles["py-b"])}>
								<ul className={clsx(styles["team-form__list"])}>
									<li className={clsx(styles["preview-item"])}>
										<Text
											color="white"
											size="base"
											weight="bold"
											letterCase="capitalize"
										>
											{match.home.team?.long_name}
										</Text>
										<div className={clsx(styles["team-form"])}>
											{match.form.home.map((el, i) => {
												return <TeamForm form={el} key={match.id + i} />;
											})}
										</div>
									</li>

									<li className={clsx(styles["preview-item"])}>
										<Text
											color="white"
											size="base"
											weight="bold"
											letterCase="capitalize"
										>
											{match.away.team?.long_name}
										</Text>
										<div className={clsx(styles["team-form"])}>
											{match.form.away.map((el, i) => {
												return <TeamForm form={el} key={match.id + (i + 2)} />;
											})}
										</div>
									</li>
								</ul>
							</div>
						</CardBody>
					</>
				</Card>
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
									key players to watch
								</Heading>
							</div>
						</CardHeader>
						<CardBody as="div" theme={"light"}>
							<div className={clsx(styles.preview__body, styles.p)}>
								<Text color="secondary" size="sm" letterCase={"upper"}>
									{match.preview.keyPlayer?.firstname}{" "}
									{match.preview.keyPlayer?.lastname}
								</Text>
								<Text color="white" size="base">
									{match.preview.aboutKeyPlayer}
								</Text>
							</div>
						</CardBody>
					</>
				</Card>
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
									Brief
								</Heading>
							</div>
						</CardHeader>
						<CardBody as="div" theme={"light"}>
							<div className={clsx(styles.preview__body, styles["py-b"])}>
								<ul className={clsx(styles["preview-list"])}>
									{match.competition && (
										<li className={clsx(styles["preview-item"], styles.col)}>
											<Text
												color="secondary"
												size="xs"
												letterCase={"upper"}
												weight="bold"
											>
												Competition
											</Text>
											<Text
												color="white"
												size="base"
												letterCase={"upper"}
												weight="bold"
											>
												{match.competition.long_name}
											</Text>
										</li>
									)}
									<li className={clsx(styles["preview-item"], styles.col)}>
										<Text
											color="secondary"
											size="xs"
											letterCase={"upper"}
											weight="bold"
										>
											Location
										</Text>
										<Text
											color="white"
											size="base"
											letterCase={"upper"}
											weight="bold"
										>
											{match.venue}
										</Text>
									</li>
								</ul>
							</div>
						</CardBody>
					</>
				</Card>
			</div>
		</MatchLayout>
	);
}

export default Review;
