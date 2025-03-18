import { matches } from "@/lib/placeholder-data";
import React from "react";
import styles from "../../Match.module.css";
import clsx from "clsx";
import MatchLayout from "@/components/main/Layouts/MatchLayout/MatchLayout";
import Card from "@/components/main/Card/Card";
import CardHeader from "@/components/main/Card/CardHeader";
import Heading from "@/components/main/Typography/Heading";
import CardBody from "@/components/main/Card/CardBody";
import Text from "@/components/main/Typography/Text";
import MatchScoreTime from "@/components/main/MatchCard/MatchScoreTime";

function Report({ params }: { params: { matchId: string } }) {
  const match = matches.find((match) => match.id === params.matchId);

  if (!match) return <div>No match</div>;

  return (
    <MatchLayout match={match} currentLink={`/matches/${match.id}/report`}>
      <div className={clsx(styles.preview)}>
        <Card theme={"trans"}>
          <>
            <CardHeader theme={"dark"} border={true} as="div">
              <div className={clsx(styles.preview__heading)}>
                <Heading
                  level={3}
                  letterCase="upper"
                  color="secondary"
                  type="section"
                >
                  Match Context
                </Heading>
              </div>
            </CardHeader>
            <CardBody as="div" theme={"light"}>
              <div className={clsx(styles.preview__body, styles.p)}>
                <Text
                  color="white"
                  size="base"
                  cssStyles={{ lineHeight: "1.5" }}
                >
                  {match.report.context}
                </Text>
              </div>
            </CardBody>
          </>
        </Card>
        <Card theme={"trans"}>
          <>
            <CardHeader theme={"dark"} border={true} as="div">
              <div className={clsx(styles.preview__heading)}>
                <Heading
                  level={3}
                  letterCase="upper"
                  color="secondary"
                  type="section"
                >
                  Goal Scorers
                </Heading>
              </div>
            </CardHeader>
            <CardBody as="div" theme={"light"}>
              <div className={clsx(styles.preview__body, styles["py-b"])}>
                {match.scorers && match.scorers.length > 0 ? (
                  <ul className={clsx(styles["team-form__list"])}>
                    {match.scorers.map((scorer, i) => {
                      if (scorer.isBeyondLimitsPlayer) {
                        return (
                          <li
                            className={clsx(styles["preview-item"])}
                            key={scorer.name + "-" + i}
                          >
                            <Text
                              color="white"
                              size="base"
                              weight="bold"
                              letterCase="normal"
                            >
                              {scorer.name}
                            </Text>
                            <MatchScoreTime time={scorer.time} />
                          </li>
                        );
                      }
                      return (
                        <li
                          className={clsx(styles["preview-item"], styles.col)}
                          key={scorer.name + "-" + i}
                        >
                          <Text
                            color="secondary"
                            size="sm"
                            weight="bold"
                            letterCase="normal"
                          >
                            Opponent
                          </Text>
                          <div className={clsx(styles["match-score-tile"])}>
                            <Text
                              color="white"
                              size="sm"
                              weight="bold"
                              letterCase="normal"
                            >
                              {scorer.name}
                            </Text>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            </CardBody>
          </>
        </Card>
        <Card theme={"trans"}>
          <>
            <CardHeader theme={"dark"} border={true} as="div">
              <div className={clsx(styles.preview__heading)}>
                <Heading
                  level={3}
                  letterCase="upper"
                  color="secondary"
                  type="section"
                >
                  Mvp
                </Heading>
              </div>
            </CardHeader>
            <CardBody as="div" theme={"light"}>
              {match.report.mvp ? (
                <div className={clsx(styles.preview__body, styles.p)}>
                  <Text
                    color="secondary"
                    size="sm"
                    weight="bold"
                    letterCase="upper"
                    mb={"sm"}
                  >
                    {match.report.mvp.firstname} {match.report.mvp.lastname}
                  </Text>
                  <Text
                    color="white"
                    size="base"
                    weight="light"
                    letterCase="normal"
                  >
                    {match.report.aboutMvp}
                  </Text>
                </div>
              ) : (
                <></>
              )}
            </CardBody>
          </>
        </Card>
        <Card theme={"trans"}>
          <>
            <CardHeader theme={"dark"} border={true} as="div">
              <div className={clsx(styles.preview__heading)}>
                <Heading
                  level={3}
                  letterCase="upper"
                  color="secondary"
                  type="section"
                >
                  Brief
                </Heading>
              </div>
            </CardHeader>
            <CardBody as="div" theme={"light"}>
              <div className={clsx(styles.preview__body, styles["py-b"])}>
                <ul className={clsx(styles["preview-list"])}>
                  <li className={clsx(styles["preview-item"], styles.col)}>
                    <Text
                      color="secondary"
                      size="sm"
                      letterCase={"upper"}
                      weight="bold"
                    >
                      Competition
                    </Text>
                    {match.competition && (
                      <Text
                        color="white"
                        size="base"
                        letterCase={"upper"}
                        weight="bold"
                      >
                        {match.competition.long_name}
                      </Text>
                    )}
                  </li>
                  <li className={clsx(styles["preview-item"], styles.col)}>
                    <Text
                      color="secondary"
                      size="sm"
                      letterCase={"upper"}
                      weight="bold"
                    >
                      Location
                    </Text>
                    <Text
                      color="white"
                      size="base"
                      letterCase={"upper"}
                      weight="bold"
                    >
                      {match.venue}
                    </Text>
                  </li>
                </ul>
              </div>
            </CardBody>
          </>
        </Card>
      </div>
    </MatchLayout>
  );
}

export default Report;
