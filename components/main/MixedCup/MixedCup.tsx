"use client";
import React, { useState } from "react";
import Standing from "../Standing/Standing";
import Knockout from "../Knockout/Knockout";
import ButtonTab from "@/components/main/Tab/ButtonTab";
import Tab from "@/components/main/Tab/Tab";
import { ICup, ILeague, IMatch, IStandingRow } from "@/lib/definitions";
import clsx from "clsx";
import styles from "./MixedCup.module.css";

function MixedCup({
  league_standing,
  playoffs,
  league_status,
}: {
  cup?: ICup;
  league_standing: IStandingRow[];
  playoffs: IMatch[];
  league_status: string;
}) {
  const mixedTabs = [{ name: "group stage" }, { name: "knockout" }];

  const [index, setIndex] = useState(league_status === "completed" ? 1 : 0);

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
            <Standing
              standings={league_standing}
              showFull={true}
              showLongName={true}
            />
          </div>
        ) : (
          <div>{playoffs && <Knockout playOffs={playoffs} />}</div>
        )}
      </div>
    </>
  );
}

export default MixedCup;
