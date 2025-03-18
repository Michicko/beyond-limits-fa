import React from "react";
import Logo from "./Logo";
import Text from "../Typography/Text";
import clsx from "clsx";
import styles from "./MatchCard.module.css";

function MatchCardTeam({
  showName,
  short_name,
  long_name,
  logo,
  team_goals,
  iconSize,
  team,
  status,
}: {
  showName?: boolean;
  short_name: string;
  long_name: string;
  logo: string;
  team_goals: number;
  iconSize: "sm" | "md" | "lg" | "xl" | "xxl";
  team: "home" | "away";
  status: string;
}) {
  return (
    <div className={clsx(styles["matchcard-team"], styles[team])}>
      {showName && (
        <Text
          color="white"
          letterCase={"upper"}
          size="base"
          weight="bold"
          hide_sm={true}
        >
          {long_name}
        </Text>
      )}
      <Logo logo={logo} name={short_name} size={iconSize || "lg"} />
      {status === "FINISHED" && (
        <Text color="white" letterCase="normal" size="xxl" weight="bold">
          {team_goals}
        </Text>
      )}
    </div>
  );
}

export default MatchCardTeam;
