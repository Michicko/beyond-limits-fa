"use client";
import React, { useEffect, useRef, useState } from "react";
import Search from "../search/Search";
import NavMenu from "./NavMenu";
import clsx from "clsx";
import styles from "./Nav.module.css";
import NavLink from "./NavLink";
import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";
import NavSearchBtn from "./NavSearchBtn";
import { usePathname } from "next/navigation";

function Nav() {
	const pathname = usePathname();
	const isStatePopped = useRef(false);

	const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const openSearchBar = () => {
		setIsSearchBarOpened(true);
	};

	// Handling the scroll position to ensure clicking on the links
	// scrolls the page to the top with the sticky positioned navbar.
	useEffect(() => {
		const onPopState = () => (isStatePopped.current = true);

		window.addEventListener("popstate", onPopState);
		return () => window.removeEventListener("popstate", onPopState);
	}, []);

	useEffect(() => {
		if (!isStatePopped.current) {
			// navigation occurred without pressing
			// the browser's back or forward buttons
			window.scrollTo(0, 0);
		} else {
			isStatePopped.current = false;
		}
	}, [pathname]);

	return (
		<>
			<Search isOpened={isSearchBarOpened} setIsOpened={setIsSearchBarOpened} />
			<NavMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
			<div className={clsx(styles["nav-sm"])}>
				<div className={clsx(styles.left)}>
					<NavLink link={{ href: "/gallery", name: "gallery" }} />
					<NavLink link={{ href: "/fixtures", name: "fixtures" }} />
				</div>
				<p className={clsx(styles["nav-text"])}>
					Youth Development Program of Remo Stars FC
				</p>
				<NavLink link={{ href: "/contact", name: "Contact us" }} />
			</div>
			<div className={clsx(styles["nav-main"])}>
				<Hamburger setIsMenuOpened={setIsMenuOpened} />
				<NavLogo size="md" />
				<NavSearchBtn handleOnClick={openSearchBar} />
			</div>
		</>
	);
}

export default Nav;
