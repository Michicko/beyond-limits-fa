"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function ScrollToTop() {
	const pathname = usePathname;

	useEffect(() => {
		window.scrollTo({
			left: 0,
			top: 0,
			behavior: "auto",
		});
	}, [pathname]);

	return <></>;
}

export default ScrollToTop;
