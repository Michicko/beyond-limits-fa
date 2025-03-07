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

function CompetitionsLayout({
  headerBg,
  pageTitle,
  seasons,
  children,
  links,
  competitionId,
}: {
  headerBg?: string;
  pageTitle: string;
  seasons?: { season: string }[];
  children: React.ReactElement;
  links?: { name: string; href: string }[];
  competitionId?: string;
}) {
  const tabLinks = links
    ? links
    : competitionId
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
        { name: "tables", href: "/tables" },
      ];

  return (
    <>
      <Header
        bg={headerBg || "/images/fixtures-layout-header-bg.png"}
        alt="2024 / 2025 ongoing campaign"
        overlay={true}
      >
        <LayoutHeader>
          <>
            <Heading level={1} letterCase="upper" type="primary">
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
