import React from "react";
import styles from "./Typography.module.css";
import clsx from "clsx";

function Heading({
	level,
	children,
	type,
	letterCase,
}: {
	level: number;
	children: React.ReactNode;
	type: "primary" | "secondary";
	letterCase: "upper" | "lower" | "normal";
}) {
	const headingStyles = clsx(
		styles.heading,
		styles[`heading-${type}`],
		styles[letterCase],
	);

	return level === 1 ? (
		<h1 className={headingStyles}>{children}</h1>
	) : level === 2 ? (
		<h2 className={headingStyles}>{children}</h2>
	) : level === 3 ? (
		<h3 className={headingStyles}>{children}</h3>
	) : level === 4 ? (
		<h4 className={headingStyles}>{children}</h4>
	) : (
		<h5 className={headingStyles}>{children}</h5>
	);
}

export default Heading;
