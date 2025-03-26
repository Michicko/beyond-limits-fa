import Header from "@/components/main/Header/Header";
import LayoutHeader from "@/components/main/Layouts/CompetitionsLayout/LayoutHeader";
import LayoutMain from "@/components/main/Layouts/CompetitionsLayout/LayoutMain";
import Heading from "@/components/main/Typography/Heading";
import {
  leagues as allLeagues,
  cups as all_cups,
  competitions,
  matches,
  playOffs,
  standing,
  teams,
} from "@/lib/placeholder-data";
import React, { Suspense } from "react";
import clsx from "clsx";
import styles from "./TeamStats.module.css";
import SeasonFilter from "@/components/main/Filters/SeasonFilter";
import Card from "@/components/main/Card/Card";
import CardHeader from "@/components/main/Card/CardHeader";
import CardBody from "@/components/main/Card/CardBody";
import TeamForm from "@/components/main/MatchCard/TeamForm";
import TeamStat from "@/components/main/TeamStat/TeamStat";

async function TeamStats(props: {
  searchParams?: Promise<{
    season?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentSeason = searchParams?.season || "";

  const leagues = allLeagues
    .filter((el) => el.season?.season === decodeURIComponent(currentSeason))
    .map((league) => {
      const competition = competitions.find(
        (el) => el.id === league.competition_id
      );
      return { ...league, competition };
    });

  const cups = all_cups
    .filter((el) => el.season?.season === decodeURIComponent(currentSeason))
    .map((cup) => {
      const competition = competitions.find(
        (el) => el.id === cup.competition_id
      );
      return { ...cup, competition };
    });

  const poplulatedStanding = standing.map((row) => {
    const team = teams.find((team) => team.id === row.team_id);
    return { ...row, team };
  });

  return (
    <>
      <Header
        bg={"/images/teamstats.jpg"}
        alt="2024 / 2025 Stats"
        overlay={true}
      >
        <LayoutHeader>
          <>
            <Heading
              color={"white"}
              type="primary"
              level={1}
              letterCase="upper"
            >
              Team Stats
            </Heading>
            <Suspense key={currentSeason} fallback={<div>loading...</div>}>
              <SeasonFilter />
            </Suspense>
          </>
        </LayoutHeader>
      </Header>
      <LayoutMain>
        <div className={clsx(styles["team-stats"])}>
          <Card theme={"trans"}>
            <>
              <CardHeader theme={"dark"} border={true} as="div">
                <div className={clsx(styles["team-stats__heading"])}>
                  <Heading
                    level={3}
                    letterCase="upper"
                    color="secondary"
                    type="section"
                  >
                    Competitions
                  </Heading>
                </div>
              </CardHeader>
              <CardBody as="div" theme={"light"}>
                <div className={clsx(styles["team-stats__body"], styles.py)}>
                  <ul className={clsx(styles["competition-list"])}>
                    {leagues.map((league) => {
                      const standings = poplulatedStanding.find(
                        (row) => row.team && row.team.isBeyondLimits
                      );
                      if (!league.competition || !standings) return;
                      if (league.status === "completed") return;
                      return (
                        <TeamStat
                          competition_logo={league.competition.logo}
                          competition_name={league.competition.long_name}
                          position={standings.position}
                          key={league.id}
                        />
                      );
                    })}
                  </ul>
                  <ul className={clsx(styles["competition-list"])}>
                    {cups.map((cup) => {
                      const playoffs = playOffs
                        .map((el) => {
                          return matches.find(
                            (match) => match.id === el.match_id
                          );
                        })
                        .filter((el) => el !== undefined);
                      if (!cup.competition || !playoffs) return;
                      return (
                        <TeamStat
                          competition_logo={cup.competition.logo}
                          competition_name={cup.competition.long_name}
                          position={playoffs[playoffs.length - 1].round}
                          key={cup.id}
                        />
                      );
                    })}
                  </ul>
                </div>
              </CardBody>
            </>
          </Card>
          <div className={clsx(styles["team-stats__streaks"])}>
            <div className={clsx(styles["team-stats__streak"])}>
              <h4>Wins</h4>
              <p>26</p>
            </div>
            <div className={clsx(styles["team-stats__streak"])}>
              <h4>Draws</h4>
              <p>5</p>
            </div>
            <div className={clsx(styles["team-stats__streak"])}>
              <h4>Defeat</h4>
              <p>2</p>
            </div>
          </div>
          <Card theme={"trans"}>
            <>
              <CardHeader theme={"dark"} border={true} as="div">
                <div className={clsx(styles["team-stats__heading"])}>
                  <Heading
                    level={3}
                    letterCase="upper"
                    color="secondary"
                    type="section"
                  >
                    Form
                  </Heading>
                </div>
              </CardHeader>
              <CardBody as="div" theme={"light"}>
                <div className={clsx(styles["team-stats__body"], styles.p)}>
                  <div className={clsx(styles["team-stats__forms"])}>
                    <TeamForm form={"w"} />
                    <TeamForm form={"w"} />
                    <TeamForm form={"w"} />
                    <TeamForm form={"d"} />
                    <TeamForm form={"w"} />
                  </div>
                </div>
              </CardBody>
            </>
          </Card>
        </div>
      </LayoutMain>
    </>
  );
}

export default TeamStats;
