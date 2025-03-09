import React from "react";
import clsx from "clsx";
import styles from "./Knockout.module.css";
import Link from "next/link";
import { IMatch } from "@/lib/definitions";
import KnockoutMatchDetails from "./KnockoutMatchDetails";

function Knockout({ playOffs }: { playOffs: IMatch[] }) {
	return (
		<div className={clsx(styles.knockout)}>
			<ul>
				{playOffs.map((match) => {
					return (
						<li className={clsx(styles["knockout-round"])} key={match.round}>
							<h3 className={clsx(styles["knockout-round-title"])}>
								{match.round}
							</h3>
							<Link
								href={`/matches/${match.id}/report`}
								className={clsx(styles["knockout-match"])}
							>
								{match.home.team && (
									<KnockoutMatchDetails
										long_name={match.home.team.long_name}
										short_name={match.home.team.short_name}
										logo={match.home.team.logo}
										goals={match.home.goals}
										match_winner={match.home.goals > match.away.goals}
										win_by_penalties={
											match.home.penalties && match.away.penalties
												? match.home.penalties > match.away.penalties
												: false
										}
									/>
								)}
								<div className={clsx(styles.versus)}>:</div>
								{match.away.team && (
									<KnockoutMatchDetails
										long_name={match.away.team.long_name}
										short_name={match.away.team.short_name}
										logo={match.away.team.logo}
										goals={match.away.goals}
										match_winner={match.away.goals > match.home.goals}
										win_by_penalties={
											match.home.penalties && match.away.penalties
												? match.away.penalties > match.home.penalties
												: false
										}
									/>
								)}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Knockout;
