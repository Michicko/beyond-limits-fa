import Grid from "@/components/main/Container/Grid";
import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import MatchCard from "@/components/main/MatchCard/MatchCard";
import Text from "@/components/main/Typography/Text";
import { competitions, matches, seasons } from "@/lib/placeholder-data";
import React from "react";

function CompetitionResults({ params }: { params: { competitionId: string } }) {
	const competition = competitions.find(
		(competition) => competition.id === params.competitionId,
	);

	const match_list = matches.filter(
		(el) =>
			el.competition_id === params.competitionId && el.status === "FINISHED",
	);

	// no competition with that id
	if (!competition)
		return (
			<CompetitionsLayout
				pageTitle={"Competitions"}
				competitionId={params.competitionId}
			>
				<div>
					<Text size="base" color="white" letterCase="normal">
						No Competition with that id
					</Text>
				</div>
			</CompetitionsLayout>
		);

	// no new fixtures
	if (match_list.length < 1)
		return (
			<CompetitionsLayout
				pageTitle={competition.long_name}
				competitionId={params.competitionId}
			>
				<div>
					<Text size="sm" color="white" letterCase="normal">
						No Results available
					</Text>
				</div>
			</CompetitionsLayout>
		);

	return (
		<CompetitionsLayout
			pageTitle={competition.long_name}
			competitionId={params.competitionId}
		>
			<Grid gap="sm">
				{match_list.map((match) => {
					return (
						<MatchCard
							match={match}
							key={match.id}
							showBtn={true}
							showName={true}
							theme="light"
							iconSize="md"
						/>
					);
				})}
			</Grid>
		</CompetitionsLayout>
	);
}

export default CompetitionResults;
