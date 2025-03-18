import { player_positions, players } from "@/lib/placeholder-data";
import React from "react";
import styles from "./Player.module.css";
import clsx from "clsx";
import groupPlayersByPositions from "@/lib/groupPlayerByPositions";
import Heading from "@/components/main/Typography/Heading";
import PlayerList from "@/components/main/Player/PlayerList";
import Header from "@/components/main/Header/Header";
import LayoutHeader from "@/components/main/Layouts/CompetitionsLayout/LayoutHeader";
import LayoutMain from "@/components/main/Layouts/CompetitionsLayout/LayoutMain";

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
        <div className={clsx(styles["team-container"])}>{player_rows}</div>
      </LayoutMain>
    </>
  );
}

export default Players;
