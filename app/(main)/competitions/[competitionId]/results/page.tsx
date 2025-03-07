import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import { competitions, seasons } from "@/lib/placeholder-data";
import React from "react";

function CompetitionResults({ params }: { params: { competitionId: string } }) {
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
				<h1>Results for {competition?.long_name}</h1>
			</div>
		</CompetitionsLayout>
	);
}

export default CompetitionResults;
