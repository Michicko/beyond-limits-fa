import React from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";
import LayoutContainer from "./LayoutContainer";
import clsx from "clsx";
import Header from "../../Header/Header";
import Heading from "../../Typography/Heading";
import Tab from "../../Tab/Tab";
import LinkTab from "../../Tab/LinkTab";
import styles from "../Layout.module.css";
import { seasons } from "@/lib/placeholder-data";

function CompetitionsLayout({
  children,
  pageTitle,
  competitionId,
}: {
  children: React.ReactElement;
  competitionId?: string;
  pageTitle?: string;
}) {
  const tabLinks = competitionId
    ? [
        {
          name: "Results",
          href: `/competitions/${competitionId}/results`,
        },
        {
          name: "Fixtures",
          href: `/competitions/${competitionId}/fixtures`,
        },

        {
          name: "Standing",
          href: `/competitions/${competitionId}/standing`,
        },
      ]
    : [
        { name: "fixtures", href: "/fixtures" },
        { name: "results", href: "/results" },
        { name: "standing", href: "/standing" },
      ];

  return (
    <>
      <Header
        bg={"/images/fixtures-layout-header-bg.png"}
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
              center={true}
            >
              {pageTitle}
            </Heading>
            {seasons && (
              <select name="season" id="season">
                {seasons.map((el) => {
                  return (
                    <option value={el.season} key={el.season}>
                      {el.season}
                    </option>
                  );
                })}
              </select>
            )}
          </>
        </LayoutHeader>
      </Header>
      <LayoutMain>
        <>
          <div className={clsx(styles["layout-tab"])}>
            <Tab bg="white" theme="theme-2">
              <>
                {tabLinks.map((link) => {
                  return (
                    <LinkTab link={link} theme="theme-2" key={link.name} />
                  );
                })}
              </>
            </Tab>
          </div>
          <LayoutContainer>{children}</LayoutContainer>
        </>
      </LayoutMain>
    </>
  );
}

export default CompetitionsLayout;
