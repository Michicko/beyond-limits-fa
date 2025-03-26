import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import StandingComp from "@/components/main/Standing/Standing";
import { leagues, standing, teams } from "@/lib/placeholder-data";
import React from "react";

function Standing() {
  const league = leagues.find((el) => el.competition?.short_name === "nnl");
  const standings = standing.filter(
    (el) => league && el.league_id === league.id
  );
  const nnl_standing = standings.map((el) => {
    const team = teams.find((team_el) => team_el.id === el.team_id);
    return {
      ...el,
      team,
    };
  });

  if (!standings) return <div>No standings</div>;

  return (
    <CompetitionsLayout pageTitle="Nigerian National League">
      <StandingComp
        standings={nnl_standing}
        showFull={true}
        showLongName={true}
      />
    </CompetitionsLayout>
  );
}

export default Standing;
