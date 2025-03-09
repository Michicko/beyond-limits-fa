import Calendar from "@/components/main/Calendar/Calendar";
import Flex from "@/components/main/Container/Flex";
import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import MatchCard from "@/components/main/MatchCard/MatchCard";
import { matches } from "@/lib/placeholder-data";
import React from "react";

function Results() {
	return (
		<CompetitionsLayout pageTitle="Results">
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
									showName={true}
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
