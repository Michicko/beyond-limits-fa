import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import MixedCup from "@/components/main/MixedCup/MixedCup";
import Standing from "@/components/main/Standing/Standing";
import Text from "@/components/main/Typography/Text";
import {
  competitions,
  cups,
  leagues,
  matches,
  mixed_cups,
  playOffs,
  standing,
} from "@/lib/placeholder-data";
import React from "react";
import clsx from "clsx";
import styles from "../../Competitions.module.css";
import Knockout from "@/components/main/Knockout/Knockout";

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

  const league_standing = standing.filter(
    (el) => league && el.league_id === league.id
  );

  const cup = cups.find((el) => el.competition_id === params.competitionId);

  const playoffs = playOffs
    .filter((el) => cup && el.cup_id === cup.id)
    .map((el) => {
      return matches.find((match) => match.id === el.match_id);
    })
    .filter((el) => el !== undefined);

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

  if (!league)
    return (
      <CompetitionsLayout
        pageTitle={"Competitions"}
        competitionId={params.competitionId}
      >
        <div>
          <Text size="base" color="white" letterCase="normal">
            No League with that id
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
        {competition.competition_type === "MIXEDCUP" && (league || cup) && (
          <>
            <MixedCup
              league_status={league.status}
              playoffs={playoffs}
              league_standing={league_standing}
            />
          </>
        )}
        {competition.competition_type === "CUP" && (
          <div>{playoffs && <Knockout playOffs={playoffs} />}</div>
        )}
        {competition.competition_type === "LEAGUE" && (
          <>
            {league && (
              <Standing
                standings={league_standing}
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
