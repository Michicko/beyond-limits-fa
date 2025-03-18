import React from "react";
import styles from "./MatchCard.module.css";
import clsx from "clsx";
import Card from "../Card/Card";
import { IMatch } from "@/lib/definitions";
import CardHeader from "../Card/CardHeader";
import Text from "../Typography/Text";
import formatDate from "@/lib/formatDate";
import Logo from "./Logo";
import CardBody from "../Card/CardBody";
import Details from "./Details";
import Flex from "../Container/Flex";
import MatchCardTeam from "./MatchCardTeam";
import Link from "next/link";

function MatchCard({
  match,
  theme,
  iconSize,
  showName,
}: {
  match: IMatch;
  theme?: "dark" | "light" | "trans";
  iconSize: "sm" | "md" | "lg" | "xl" | "xxl";
  showName?: boolean;
}) {
  return (
    <Card theme={theme || "trans"}>
      <>
        <CardHeader theme={theme ? theme : "light"} border={true} as="div">
          <div className={clsx(styles["matchcard-header"])}>
            {match.competition && (
              <Logo
                logo={match.competition.logo}
                name={match.competition.short_name}
                size="md"
              />
            )}
            <Text color="white" letterCase={"upper"} size="sm" weight="bold">
              {formatDate(match.date)}
            </Text>
          </div>
        </CardHeader>
        <CardBody as="div" theme={theme || "light"} fixedBodyHeight={false}>
          <>
            {match.home.team && match.away.team && match.competition && (
              <div className={clsx(styles["matchcard-body"])}>
                <div className={clsx(styles["matchcard-status"])}>
                  <Text
                    color="secondary"
                    letterCase="upper"
                    size="xs"
                    weight="bold"
                    center={true}
                  >
                    {match.status}
                  </Text>
                </div>
                <div className={clsx(styles["matchcard-info"])}>
                  <Text
                    color="white"
                    letterCase="upper"
                    size="sm"
                    weight="light"
                  >
                    {match.time}
                  </Text>
                  <span>|</span>
                  <Text
                    color="white"
                    letterCase="capitalize"
                    size="sm"
                    weight="light"
                  >
                    {match.venue}
                  </Text>
                </div>
                <Link
                  href={
                    match.status === "FINISHED"
                      ? `/matches/${match.id}/report`
                      : match.status === "UPCOMING"
                      ? `/matches/${match.id}/preview`
                      : "#"
                  }
                  className={clsx(
                    styles["matchcard-teams"],
                    styles[match.status.toLowerCase()],
                    showName && styles["full"]
                  )}
                >
                  <MatchCardTeam
                    long_name={match.home.team.long_name}
                    short_name={match.home.team.short_name}
                    iconSize={iconSize}
                    logo={match.home.team.logo}
                    showName={showName}
                    team={"home"}
                    team_goals={match.home.goals}
                    status={match.status}
                  />
                  <Details status={match.status} />
                  <MatchCardTeam
                    long_name={match.away.team.long_name}
                    short_name={match.away.team.short_name}
                    iconSize={iconSize}
                    logo={match.away.team.logo}
                    showName={showName}
                    team={"away"}
                    team_goals={match.away.goals}
                    status={match.status}
                  />
                </Link>
              </div>
            )}
          </>
        </CardBody>
      </>
    </Card>
  );
}

export default MatchCard;
