"use client";
import React, { useState } from "react";
import Standing from "../Standing/Standing";
import Knockout from "../Knockout/Knockout";
import ButtonTab from "@/components/main/Tab/ButtonTab";
import Tab from "@/components/main/Tab/Tab";
import { matches, standing } from "@/lib/placeholder-data";
import { IMixedCup } from "@/lib/definitions";
import clsx from "clsx";
import styles from "./MixedCup.module.css";

function MixedCup({
  mixed_cup,
  competitionId,
}: {
  mixed_cup: IMixedCup;
  competitionId: string;
}) {
  const mixed_cup_standing = standing.filter(
    (el) => el.competition_id === competitionId
  );

  const mixed_cup_playOffs = mixed_cup.playOffs
    .map((el) => {
      // could possibly be undefined
      const matchEl = matches.find((match) => match.id === el);
      return matchEl;
    })
    .filter((el) => el != undefined);

  const mixedTabs = [{ name: "group stage" }, { name: "knockout" }];

  const [index, setIndex] = useState(mixed_cup.playOffs.length > 0 ? 1 : 0);

  return (
    <>
      <Tab theme="theme-1" bg="trans">
        <>
          {mixedTabs.map((el, i) => {
            return (
              <ButtonTab
                currentIndex={index}
                index={i}
                setIndex={setIndex}
                theme="theme-1"
                text={el.name}
                key={el.name + i}
              />
            );
          })}
        </>
      </Tab>
      <div className={clsx(styles["body"])}>
        {index === 0 ? (
          <div>
            {mixed_cup_standing && (
              <Standing
                standings={mixed_cup_standing}
                showFull={true}
                showLongName={true}
              />
            )}
          </div>
        ) : (
          <div>
            {mixed_cup_playOffs && <Knockout playOffs={mixed_cup_playOffs} />}
          </div>
        )}
      </div>
    </>
  );
}

export default MixedCup;
