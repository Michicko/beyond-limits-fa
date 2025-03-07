import { IStandingRow } from "@/lib/definitions";
import React from "react";
import styles from "./Standing.module.css";
import clsx from "clsx";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import StandingRow from "./StandingRow";

function Standing({
	standings,
	showFull,
}: {
	standings: IStandingRow[];
	showFull: boolean;
}) {
	const sortedStandings = standings.sort((a, b) => a.position - b.position);

	// get blfc index in standing
	const blfcIndex = sortedStandings.findIndex(
		(el) => el.team && el.team.isBeyondLimits,
	);

	// get team before blfc and blfc postions
	const filteredStandings = showFull
		? standings
		: sortedStandings.slice(blfcIndex - 1, blfcIndex + 1);

	const theads = ["pos", "club", ...Object.keys(standings[0].stats)];

	return (
		<div className={clsx(styles.standing)}>
			<Card theme="light">
				<>
					<table>
						<CardHeader as="thead" theme="trans" border={true}>
							<tr>
								{theads.map((el, i) => {
									if (i === 1)
										return (
											<th key={i + 2} colSpan={5}>
												{el}
											</th>
										);
									return <th key={i + 2}>{el}</th>;
								})}
							</tr>
						</CardHeader>
						<CardBody as="tbody" theme="light">
							<>
								{filteredStandings.map((row, i) => {
									return (
										<tr
											key={i + 1 * 2}
											className={clsx(row.team?.isBeyondLimits && styles.shade)}
										>
											{<StandingRow row={row} />}
										</tr>
									);
								})}
							</>
						</CardBody>
					</table>
				</>
			</Card>
		</div>
	);
}

export default Standing;
