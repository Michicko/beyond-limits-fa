import React from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

function CardBody({
	children,
	as,
	theme,
}: {
	children: React.ReactElement;
	as: "tbody" | "div";
	theme: "dark" | "light" | "trans";
}) {
	return as === "div" ? (
		<div className={clsx(styles["card-body"], styles[theme])}>{children}</div>
	) : (
		<tbody className={clsx(styles["card-body"], styles[theme])}>
			{children}
		</tbody>
	);
}

export default CardBody;
