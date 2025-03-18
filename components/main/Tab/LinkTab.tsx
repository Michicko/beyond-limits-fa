"use client";
import Link from "next/link";
import styles from "./Tab.module.css";
import clsx from "clsx";
import { ILink } from "@/lib/definitions";
import { usePathname, useSearchParams } from "next/navigation";

const LinkTab = ({
  link,
  theme,
  currentLink,
}: {
  link: ILink;
  theme: "theme-1" | "theme-2";
  currentLink?: string;
}) => {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const path = usePathname();
  const pathname = queryString ? path + "?" + queryString : path;

  return (
    <Link
      href={link.href}
      className={clsx(styles.tab, styles[theme], {
        [styles.current]: (currentLink || pathname) === link.href,
      })}
    >
      {link.name}
    </Link>
  );
};

export default LinkTab;
