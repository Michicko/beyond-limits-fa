import Calendar from "@/components/main/Calendar/Calendar";
import Flex from "@/components/main/Container/Flex";
import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import MatchCard from "@/components/main/MatchCard/MatchCard";
import { matches } from "@/lib/placeholder-data";
import React from "react";

const seasons = [{ season: "2023/2024" }, { season: "2024/2025" }];

function Results() {
	return (
		<CompetitionsLayout
			pageTitle="Results"
			seasons={seasons}
			headerBg="/images/results.jpg"
		>
			<>
				<Calendar />
				<Flex align="center" justify="between" direction="col" gap="sm" my="lg">
					{matches
						.filter((el) => el.status === "FINISHED")
						.map((match) => {
							return (
								<MatchCard
									match={match}
									showBtn={match.preview ? true : false}
									theme="light"
									key={match.id}
									iconSize="xl"
								/>
							);
						})}
				</Flex>
			</>
		</CompetitionsLayout>
	);
}

export default Results;
