import { player_positions, players } from "@/lib/placeholder-data";
import React, { Suspense } from "react";
import styles from "./Player.module.css";
import clsx from "clsx";
import groupPlayersByPositions from "@/lib/groupPlayerByPositions";
import Heading from "@/components/main/Typography/Heading";
import PlayerList from "@/components/main/Player/PlayerList";
import Header from "@/components/main/Header/Header";
import LayoutHeader from "@/components/main/Layouts/CompetitionsLayout/LayoutHeader";
import LayoutMain from "@/components/main/Layouts/CompetitionsLayout/LayoutMain";
import Tab from "@/components/main/Tab/Tab";
import LinkTab from "@/components/main/Tab/LinkTab";

const links = [
  { name: "Under-19", href: "/players/under-19" },
  { name: "Under-17", href: "/players/under-17" },
];

function Players({ params }: { params: { playersSlug: string } }) {
  const player_rows = groupPlayersByPositions(
    player_positions.map((el) => el.long_name),
    players
  ).map((row) => {
    if (!row) return;
    return (
      <div key={row.position}>
        <Heading
          letterCase="capitalize"
          level={2}
          mb="sm"
          type="section"
        >{`${row.position}s`}</Heading>
        <PlayerList players={row.players} />
      </div>
    );
  });

  return (
    <>
      <Header
        bg={"/images/under-19-bg.png"}
        alt="2024 / 2025 ongoing campaign"
        overlay={true}
      >
        <LayoutHeader>
          <>
            <Heading
              level={1}
              letterCase="upper"
              type="primary"
              color="white"
            >{`Beyond Limits ${params.playersSlug}`}</Heading>
          </>
        </LayoutHeader>
      </Header>
      <LayoutMain>
        <>
          <div className={clsx(styles["tab-container"])}>
            <Suspense fallback={null}>
              <Tab theme="theme-2" bg="trans">
                <>
                  {links.map((link) => {
                    return <LinkTab link={link} theme="theme-2" />;
                  })}
                </>
              </Tab>
            </Suspense>
          </div>
          <div className={clsx(styles["team-container"])}>{player_rows}</div>
        </>
      </LayoutMain>
    </>
  );
}

export default Players;
