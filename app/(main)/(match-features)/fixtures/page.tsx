import MatchCard from "@/components/main/MatchCard/MatchCard";
import { matches } from "@/lib/placeholder-data";
import React from "react";
import Flex from "@/components/main/Container/Flex";
import Calendar from "@/components/main/Calendar/Calendar";
import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";

function Fixtures() {
	return (
		<CompetitionsLayout pageTitle="Fixtures">
			<>
				<Calendar />
				<Flex align="center" direction="col" justify="between" gap="sm" my="lg">
					{matches
						.filter((el) => el.status === "UPCOMING")
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

export default Fixtures;
