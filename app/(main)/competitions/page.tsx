import CompetitionsLayout from "@/components/main/Layouts/CompetitionsLayout/CompetitionsLayout";
import React from "react";
import clsx from "clsx";
import ImageComp from "@/components/ImageComp/ImageComp";
import { competitions } from "@/lib/placeholder-data";
import styles from "./Competitions.module.css";
import Link from "next/link";

function Competitions() {
	return (
		<CompetitionsLayout pageTitle="Competitions">
			<div className={clsx(styles.competitions)}>
				{competitions.map((competition) => {
					return (
						<Link
							className={clsx(styles.competition)}
							key={competition.id}
							href={`/competitions/${competition.id}`}
						>
							<div className={clsx(styles["competition__logo-box"])}>
								<ImageComp
									alt={competition.long_name}
									image={competition.logo}
									placeholder={competition.logo}
									priority={false}
								/>
							</div>
							<p className={clsx(styles.competition__name)}>
								{competition.long_name}
							</p>
						</Link>
					);
				})}
			</div>
		</CompetitionsLayout>
	);
}

export default Competitions;
