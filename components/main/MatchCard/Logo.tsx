import ImageComp from "@/components/ImageComp/ImageComp";
import React from "react";
import styles from "./MatchCard.module.css";
import clsx from "clsx";

function Logo({
	name,
	logo,
	size,
}: {
	name: string;
	logo: string;
	size?: "sm" | "md" | "lg";
}) {
	return (
		<div className={clsx(styles["logo-box"], size && styles[size])}>
			<div className={clsx(styles["logo"])}>
				<ImageComp image={logo} alt={`${name} logo`} />
			</div>
		</div>
	);
}

export default Logo;
