"use client";
import React, { useState } from "react";
import Search from "../search/Search";
import NavMenu from "./NavMenu";
import clsx from "clsx";
import styles from "./Nav.module.css";
import NavLink from "./NavLink";
import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";
import NavSearchBtn from "./NavSearchBtn";

function Nav() {
	const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const openSearchBar = () => {
		setIsSearchBarOpened(true);
	};

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
