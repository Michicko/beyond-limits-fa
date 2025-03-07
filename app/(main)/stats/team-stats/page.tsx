import Header from "@/components/main/Header/Header";
import LayoutHeader from "@/components/main/Layouts/CompetitionsLayout/LayoutHeader";
import LayoutMain from "@/components/main/Layouts/CompetitionsLayout/LayoutMain";
import Heading from "@/components/main/Typography/Heading";
import { seasons } from "@/lib/placeholder-data";
import React from "react";
import clsx from "clsx";
import styles from "./TeamStats.module.css";

function TeamStats() {
	return (
		<>
			<Header
				bg={"/images/teamstats.jpg"}
				alt="2024 / 2025 Stats"
				overlay={true}
			>
				<LayoutHeader>
					<>
						<Heading type="primary" level={1} letterCase="upper">
							Team Stats
						</Heading>
						{/*select team*/}
						{seasons && (
							<select name="season" id="season">
								{seasons.map((el) => {
									return (
										<option value={el.season} key={el.season}>
											{el.season}
										</option>
									);
								})}
							</select>
						)}
						{/*{teams && (
              <select name="season" id="season">
                {teams.map((el) => {
                  return (
                    <option value={el.team} key={el.team}>
                      {el.team}
                    </option>
                  );
                })}
              </select>
            )}*/}
					</>
				</LayoutHeader>
			</Header>
			<LayoutMain>
				<div className={clsx(styles["team-stats"])}>
					{/*<h2>Team stats</h2>*/}
				</div>
			</LayoutMain>
		</>
	);
}

export default TeamStats;
