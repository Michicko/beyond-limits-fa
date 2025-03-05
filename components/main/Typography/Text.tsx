import clsx from "clsx";
import React from "react";
import styles from "./Typography.module.css";

function Text({
	children,
	size,
	weight,
	color,
	letterCase,
	type,
}: {
	children: React.ReactNode;
	size: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "iv" | "v" | "vi";
	weight?: "light" | "bold";
	color: string;
	letterCase: "upper" | "lower" | "normal";
	type?: "lead" | "text";
}) {
	return (
		<p
			className={clsx(
				styles.text,
				styles[size],
				styles[weight || "light"],
				styles[color],
				styles[letterCase],
				styles[type || "text"],
			)}
		>
			{children}
		</p>
	);
}

export default Text;
