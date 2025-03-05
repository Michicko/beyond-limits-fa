import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function NavLink({ link }: { link: { href: string; name: string } }) {
	const pathname = usePathname();

	return (
		<Link
			href={link.href}
			className={clsx(styles["nav-link"], {
				[styles.active]: pathname === link.href,
			})}
		>
			{link.name}
		</Link>
	);
}

export default NavLink;
