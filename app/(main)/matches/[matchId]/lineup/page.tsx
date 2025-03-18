import React from "react";
import styles from "../../Match.module.css";
import clsx from "clsx";
import MatchLayout from "@/components/main/Layouts/MatchLayout/MatchLayout";
import Card from "@/components/main/Card/Card";
import CardHeader from "@/components/main/Card/CardHeader";
import Heading from "@/components/main/Typography/Heading";
import CardBody from "@/components/main/Card/CardBody";
import Text from "@/components/main/Typography/Text";
import { matches, player_positions } from "@/lib/placeholder-data";
import groupPlayersByPositions from "@/lib/groupPlayerByPositions";

function Lineup({ params }: { params: { matchId: string } }) {
  const match = matches.find((match) => match.id === params.matchId);

  if (!match) return <div>No match</div>;

  const starters = groupPlayersByPositions(
    player_positions.map((el) => el.long_name),
    match.lineup.starters
  );
  const subs = groupPlayersByPositions(
    player_positions.map((el) => el.long_name),
    match.lineup.substitutes
  );

  return (
    <MatchLayout match={match} currentLink={`/matches/${match.id}/lineup`}>
      <div className={clsx(styles.lineup)}>
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
                  Composition
                </Heading>
              </div>
            </CardHeader>
            <CardBody as="div" theme={"light"}>
              <div className={clsx(styles.preview__body, styles.grid)}>
                <ul>
                  {starters.map((lineup_obj, i) => {
                    if (!lineup_obj) return;
                    return (
                      <li
                        className={clsx(styles["preview-item"], styles.col)}
                        key={lineup_obj.position + "-" + i}
                      >
                        <Text
                          color="secondary"
                          size="sm"
                          weight="bold"
                          letterCase="upper"
                        >
                          {`${lineup_obj.position}s`}
                        </Text>

                        {lineup_obj.players.map((el, i) => {
                          return (
                            <Text
                              color="white"
                              size="base"
                              weight="light"
                              letterCase="normal"
                              key={el.squad_no}
                            >
                              {`${el.squad_no}. ${el.firstname} ${el.lastname}`}
                            </Text>
                          );
                        })}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  <li className={clsx(styles["preview-item"], styles.col)}>
                    <Text
                      color="secondary"
                      size="sm"
                      weight="bold"
                      letterCase="upper"
                    >
                      coach
                    </Text>
                    <Text
                      color="white"
                      size="base"
                      weight="light"
                      letterCase="capitalize"
                    >
                      {match.lineup.coach.name}
                    </Text>
                  </li>
                  <li className={clsx(styles["preview-item"], styles.col)}>
                    <Text
                      color="secondary"
                      size="sm"
                      weight="bold"
                      letterCase="upper"
                    >
                      Substitutes
                    </Text>
                    {subs.map((sub, i) => {
                      if (!sub) return;
                      return (
                        <React.Fragment key={sub.position + "-" + i + 2}>
                          {sub.players.map((el, i) => {
                            return (
                              <Text
                                color="white"
                                size="base"
                                weight="light"
                                letterCase="normal"
                                key={el.squad_no + "-" + i}
                              >
                                {`${el.squad_no}. ${el.firstname} ${el.lastname}`}
                              </Text>
                            );
                          })}
                        </React.Fragment>
                      );
                    })}
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

export default Lineup;
