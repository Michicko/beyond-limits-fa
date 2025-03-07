import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import { competitions, seasons } from "@/lib/placeholder-data";
import React from "react";

function CompetitionStanding({
	params,
}: {
	params: { competitionId: string };
}) {
	const competition = competitions.find(
		(competition) => competition.id === params.competitionId,
	);

	if (!competition) return <div>No competition</div>;

	return (
		<CompetitionsLayout
			pageTitle={competition?.long_name}
			headerBg="/images/fixtures.jpg"
			seasons={seasons}
			competitionId={params.competitionId}
		>
			<div>
				<h1>Standing for {params.competitionId}</h1>
			</div>
		</CompetitionsLayout>
	);
}

export default CompetitionStanding;
