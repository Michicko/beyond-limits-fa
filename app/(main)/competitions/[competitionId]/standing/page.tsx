import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import MixedCup from "@/components/main/MixedCup/MixedCup";
import Standing from "@/components/main/Standing/Standing";
import Text from "@/components/main/Typography/Text";
import { competitions, leagues, mixed_cups } from "@/lib/placeholder-data";
import React from "react";
import clsx from "clsx";
import styles from "../../Competitions.module.css";

function CompetitionStanding({
  params,
}: {
  params: { competitionId: string };
}) {
  const competition = competitions.find(
    (competition) => competition.id === params.competitionId
  );

  const league = leagues.find(
    (el) => el.competition_id === params.competitionId
  );

  const mixed_cup = mixed_cups.find(
    (el) => el.competition_id === params.competitionId
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

  return (
    <CompetitionsLayout
      pageTitle={competition.long_name}
      competitionId={params.competitionId}
    >
      <div className={clsx(styles["competition-box"])}>
        {!league && (
          <Text size="md" color="white" letterCase="normal">
            No League available
          </Text>
        )}
        {competition.competition_type === "MIXEDCUP" && (
          <>
            {mixed_cup && (
              <MixedCup
                mixed_cup={mixed_cup}
                competitionId={params.competitionId}
              />
            )}
            {!mixed_cup && (
              <Text size="md" color="white" letterCase="normal">
                No Mixed cup available
              </Text>
            )}
          </>
        )}
        {competition.competition_type === "LEAGUE" && (
          <>
            {league && !league.standing && (
              <Text size="md" color="white" letterCase="normal">
                No Standing available
              </Text>
            )}
            {league && league.standing && (
              <Standing
                standings={league.standing}
                showFull={true}
                showLongName={true}
              />
            )}
          </>
        )}
      </div>
    </CompetitionsLayout>
  );
}

export default CompetitionStanding;
