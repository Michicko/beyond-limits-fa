import { IStandingRow } from "@/lib/definitions";
import React from "react";
import styles from "./Standing.module.css";
import clsx from "clsx";
import ImageComp from "@/components/ImageComp/ImageComp";
import Text from "../Typography/Text";

function StandingRow({
  row,
  showLongName,
}: {
  row: IStandingRow;
  showLongName: boolean;
}) {
  return (
    <>
      <td>{row.position}</td>
      <td
        colSpan={4}
        className={clsx(styles["with-child"], showLongName && styles["long"])}
        title={row.team?.long_name}
      >
        <div className={styles["img-box"]}>
          {row.team?.logo && (
            <ImageComp
              image={row.team.logo}
              alt={`${row.team?.long_name} logo`}
            />
          )}
        </div>
        <Text color="white" letterCase="upper" size="base" weight="bold">
          {row.team?.short_name}
        </Text>
        {showLongName && (
          <Text color="white" letterCase="capitalize" size="base" weight="bold">
            {row.team?.long_name}
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
