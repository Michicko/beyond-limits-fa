import { IStandingRow } from "@/lib/definitions";
import React from "react";
import styles from "./Standing.module.css";
import clsx from "clsx";
import ImageComp from "@/components/ImageComp/ImageComp";
import Text from "../Typography/Text";
import Flex from "../Container/Flex";

function StandingRow({ row }: { row: IStandingRow }) {
	return (
		<>
			<td>{row.position}</td>
			<td colSpan={5} className={clsx(styles["with-child"])}>
				<Flex align="center" justify="none" gap={"xxs"}>
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
					<Text color="white" letterCase="capitalize" size="base" weight="bold">
						{row.team?.long_name}
					</Text>
				</Flex>
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
