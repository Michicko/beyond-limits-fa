import React from "react";
import Text from "../Typography/Text";
import clsx from "clsx";
import styles from "./MatchCard.module.css";

function Details({
  status,
  home_score,
  away_score,
}: {
  status: string;
  home_score: number;
  away_score: number;
}) {
  return status === "FINISHED" ? (
    <div className={clsx(styles["matchcard-scores"])}>
      <Text color="white" letterCase="normal" size="xxl" weight="bold">
        {home_score}
      </Text>
      <Text color="white" letterCase="upper" size="xxl" weight="bold">
        -
      </Text>
      <Text color="white" letterCase="normal" size="xxl" weight="bold">
        {away_score}
      </Text>
    </div>
  ) : status === "UPCOMING" ? (
    <>
      <Text color="white" letterCase="upper" size="xxl" weight="bold">
        -
      </Text>
    </>
  ) : status === "ABANDONED" ? (
    <Text color="white" letterCase="upper" size="base" weight="light">
      ABANDONED
    </Text>
  ) : (
    <Text color="white" letterCase="upper" size="base" weight="light">
      CANCELED
    </Text>
  );
}

export default Details;
