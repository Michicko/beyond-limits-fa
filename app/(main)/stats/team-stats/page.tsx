import Header from "@/components/main/Header/Header";
import LayoutHeader from "@/components/main/Layouts/CompetitionsLayout/LayoutHeader";
import LayoutMain from "@/components/main/Layouts/CompetitionsLayout/LayoutMain";
import Heading from "@/components/main/Typography/Heading";
import {
  leagues as allLeagues,
  mixed_cups as allMixedCups,
  matches,
} from "@/lib/placeholder-data";
import React, { Suspense } from "react";
import clsx from "clsx";
import styles from "./TeamStats.module.css";
import SeasonFilter from "@/components/main/Filters/SeasonFilter";
import Card from "@/components/main/Card/Card";
import CardHeader from "@/components/main/Card/CardHeader";
import CardBody from "@/components/main/Card/CardBody";
import Text from "@/components/main/Typography/Text";
import Logo from "@/components/main/MatchCard/Logo";
import TeamForm from "@/components/main/MatchCard/TeamForm";

async function TeamStats(props: {
  searchParams?: Promise<{
    season?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentSeason = searchParams?.season || "";
  const leagues = allLeagues.filter(
    (el) => el.season?.season === decodeURIComponent(currentSeason)
  );
  const mixed_cups = allMixedCups.filter(
    (el) => el.season?.season === decodeURIComponent(currentSeason)
  );

  const endings = [
    {
      nums: [1],
      ending: "st",
    },
    {
      nums: [2],
      ending: "nd",
    },
    {
      nums: [3],
      ending: "rd",
    },
    {
      nums: [4, 5, 6, 7, 8, 9, 0],
      ending: "th",
    },
  ];

  const getPosition = (num: number) => {
    const position = endings.find((el) => el.nums.includes(num))?.ending;
    return position ? num + position : num;
  };

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
                      const standing = league.standing.find(
                        (standing) => standing.team?.isBeyondLimits
                      );
                      return (
                        <li
                          className={clsx(styles["competition"])}
                          key={league.id}
                        >
                          <div>
                            <Text
                              color="secondary"
                              size="md"
                              weight="bold"
                              letterCase="normal"
                            >
                              {standing?.position &&
                                getPosition(standing.position)}
                            </Text>
                            <Text
                              color="white"
                              size="md"
                              weight="bold"
                              letterCase="upper"
                            >
                              {standing?.competition?.long_name}
                            </Text>
                          </div>
                          {standing?.competition && (
                            <Logo
                              name={standing.competition.long_name}
                              logo={standing.competition.logo}
                              size="lg"
                            />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className={clsx(styles["competition-list"])}>
                    {mixed_cups.map((cup) => {
                      const standing = cup.standing.find(
                        (el) => el.team?.isBeyondLimits
                      );
                      const playOffs = cup.playOffs.map((el) => {
                        return matches.find((match) => match.id === el);
                      });
                      return (
                        <li
                          className={clsx(styles["competition"])}
                          key={cup.id}
                        >
                          <div>
                            <Text
                              color="secondary"
                              size="md"
                              weight="bold"
                              letterCase="normal"
                            >
                              {(playOffs &&
                                playOffs.length > 0 &&
                                playOffs[playOffs.length - 1]?.round) ||
                                (standing && getPosition(standing.position))}
                            </Text>
                            <Text
                              color="white"
                              size="md"
                              weight="bold"
                              letterCase="upper"
                            >
                              {standing?.competition?.long_name}
                            </Text>
                          </div>
                          {standing?.competition && (
                            <Logo
                              name={standing.competition.long_name}
                              logo={standing.competition.logo}
                              size="lg"
                            />
                          )}
                        </li>
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
