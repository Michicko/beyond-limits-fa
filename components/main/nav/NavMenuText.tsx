import React from "react";
import styles from "./Nav.module.css";
import clsx from "clsx";
import Socials from "../Social/Socials";
import NavLogo from "./NavLogo";

function NavMenuText() {
	return (
		<div className={clsx(styles["nav-menu__text-box"])}>
			<NavLogo size="md" />
			<p className={clsx(styles.interlude)}>
				At Beyond Limits Football Academy, we believe in more than just
				developing exceptional football talent; we strive to shape responsible,
				empowered individuals who contribute positively to society. As the
				juniors of the esteemed Remo Stars in the Nigerian Professional Football
				League, we take pride in our commitment to community development.
			</p>
			<div className={clsx(styles["nav-menu__footer"])}>
				<Socials />
				<p>
					Beyond Limits FA &copy;{new Date().getUTCFullYear()} All rights
					reserved
				</p>
			</div>
		</div>
	);
}

export default NavMenuText;
