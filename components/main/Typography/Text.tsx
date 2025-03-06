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
	cssStyles,
}: {
	children: React.ReactNode;
	size: "sm" | "base" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "iv" | "v" | "vi";
	weight?: "light" | "bold";
	color: string;
	letterCase: "upper" | "lower" | "capitalize" | "normal";
	type?: "lead" | "text";
	cssStyles?: object;
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
			style={cssStyles && { ...cssStyles }}
		>
			{children}
		</p>
	);
}

export default Text;
