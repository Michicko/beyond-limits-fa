import { IStandingRow } from "@/lib/definitions";
import React from "react";
import styles from "./Standing.module.css";
import clsx from "clsx";
import ImageComp from "@/components/ImageComp/ImageComp";
import Text from "../Typography/Text";
import { teams } from "@/lib/placeholder-data";

function StandingRow({
  row,
  showLongName,
}: {
  row: IStandingRow;
  showLongName: boolean;
}) {
  const team = teams.find((team) => team.id === row.team_id);

  return (
    <>
      <td>{row.position}</td>
      <td
        colSpan={4}
        className={clsx(styles["with-child"], showLongName && styles["long"])}
        title={team?.long_name}
      >
        <div className={styles["img-box"]}>
          {team?.logo && (
            <ImageComp image={team.logo} alt={`${team?.long_name} logo`} />
          )}
        </div>
        <Text color="white" letterCase="upper" size="base" weight="semibold">
          {team?.short_name}
        </Text>
        {showLongName && (
          <Text
            color="white"
            letterCase="capitalize"
            size="base"
            weight="semibold"
          >
            {team?.long_name}
          </Text>
        )}
      </td>
      <td>{row.stats.p}</td>
      <td>{row.stats.w}</td>
      <td>{row.stats.d}</td>
      <td>{row.stats.l}</td>
      <td colSpan={2}>{row.stats.g}</td>
      <td>{row.stats.gd}</td>
      <td>{row.stats.pts}</td>
    </>
  );
}

export default StandingRow;
