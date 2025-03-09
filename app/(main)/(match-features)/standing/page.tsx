import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import StandingComp from "@/components/main/Standing/Standing";
import { standing } from "@/lib/placeholder-data";
import React from "react";

function Standing() {
	const standings = standing
		.filter((el) => el.competition && el.competition.short_name === "nnl")
		.sort((a, b) => a.position - b.position);

	if (!standings) return <div>No standings</div>;

	return (
		<CompetitionsLayout pageTitle="Nigerian National League">
			<StandingComp standings={standings} showFull={true} />
		</CompetitionsLayout>
	);
}

export default Standing;
