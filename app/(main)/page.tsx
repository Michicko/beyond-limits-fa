// import { useState, useEffect } from "react";
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";
// import "../../app.css";
// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import ArticleList from "@/components/main/Article/ArticleList";
import Button from "@/components/main/Button/Button";
import Container from "@/components/main/Container/Container";
import Flex from "@/components/main/Container/Flex";
import Grid from "@/components/main/Container/Grid";
import Header from "@/components/main/Header/Header";
import HeaderLanding from "@/components/main/Header/HeaderLanding";
import MatchCard from "@/components/main/MatchCard/MatchCard";
import PlayerList from "@/components/main/Player/PlayerList";
import Standing from "@/components/main/Standing/Standing";
import CustomLink from "@/components/main/Typography/CustomLink";
import Heading from "@/components/main/Typography/Heading";
import Text from "@/components/main/Typography/Text";
import VideoCards from "@/components/main/VideoCard/VideoCards";
import {
  articles,
  match_highlights,
  matches,
  players,
  standing,
} from "@/lib/placeholder-data";
import "@aws-amplify/ui-react/styles.css";

export default function Home() {
  const previous_match = matches.find((el) => el.status === "FINISHED");
  const upcoming_match = matches.find((el) => el.status === "UPCOMING");

  return (
    <>
      <Header
        bg={"/images/home-header-bg.png"}
        alt="Beyond the limits team celebrating"
      >
        <HeaderLanding>
          <Text
            size="xxl"
            weight="light"
            color="white"
            letterCase="upper"
            type="lead"
          >
            Welcome To
          </Text>
          <Heading level={1} type={"primary"} letterCase="upper">
            Beyond Limits Fa
          </Heading>
        </HeaderLanding>
      </Header>
      <main className="main">
        <Container as="section" size="lg">
          <Grid col="55-45" gap="md">
            <Grid col="2fr" gap="md">
              <>
                {upcoming_match && previous_match && (
                  <>
                    <div>
                      <Heading
                        level={2}
                        type="secondary"
                        letterCase="upper"
                        mb="xs"
                      >
                        Previous match
                      </Heading>
                      <MatchCard
                        match={previous_match}
                        showBtn={true}
                        theme="light"
                        iconSize={"xl"}
                      />
                    </div>
                    <div>
                      <Heading
                        level={2}
                        type="secondary"
                        letterCase="upper"
                        mb="xs"
                      >
                        Next match
                      </Heading>
                      <MatchCard
                        match={upcoming_match}
                        showBtn={true}
                        theme="light"
                        iconSize={"xl"}
                      />
                    </div>
                  </>
                )}
              </>
            </Grid>
            <div>
              <Heading level={2} type="secondary" letterCase="upper" mb="xs">
                NNL standing
              </Heading>
              <Standing
                showFull={false}
                standings={standing.filter(
                  (el) => el.competition && el.competition.short_name === "nnl",
                )}
              />
            </div>
          </Grid>
        </Container>
        <Container as="section" size="lg">
          <Flex
            align="center"
            justify="between"
            wrap={true}
            gap="xxs"
            mb={"sm"}
          >
            <Heading level={2} type="secondary" letterCase="upper">
              Latest News
            </Heading>
            <CustomLink
              link={{ name: "View more news", href: "/news" }}
              type="secondary"
            />
          </Flex>
          <ArticleList articles={articles.slice(0, 4)} />
        </Container>
        <Container as="section" size="lg">
          <Flex
            align="center"
            justify="between"
            wrap={true}
            gap="xxs"
            mb={"sm"}
          >
            <Heading level={2} type="secondary" letterCase="upper">
              Our Players
            </Heading>
            <CustomLink
              link={{ name: "View Full team", href: "/players/under-19" }}
              type="secondary"
            />
          </Flex>
          <PlayerList players={players.slice(0, 3)} />
        </Container>
        <Container as="section" size="md">
          <Heading
            level={2}
            type="secondary"
            letterCase="upper"
            mb="xxl"
            align={"center"}
          >
            Upcoming matches
          </Heading>
          <Grid col="3" gap="sm">
            <>
              {upcoming_match && (
                <>
                  <MatchCard
                    match={upcoming_match}
                    showBtn={false}
                    theme="dark"
                    iconSize={"md"}
                  />
                  <MatchCard
                    match={upcoming_match}
                    showBtn={false}
                    theme="light"
                    iconSize={"md"}
                  />
                  <MatchCard
                    match={upcoming_match}
                    showBtn={false}
                    theme="dark"
                    iconSize={"md"}
                  />
                </>
              )}
            </>
          </Grid>
          <Flex justify="center" align="center" my={"iv"}>
            <Button
              type="secondary"
              isLink={true}
              size={"md"}
              text={"View more matches"}
              url={"/fixtures"}
            />
          </Flex>
        </Container>
        <Container as="section" size="md">
          <Flex justify="center" align="center" my={"iv"}>
            <Text
              color="white"
              size="base"
              letterCase="normal"
              weight="light"
              type="interlude"
            >
              At Beyond Limits Football Academy, we believe in more than just
              developing exceptional football talent; we strive to shape
              responsible, empowered individuals who contribute positively to
              society. As the juniors of the esteemed Remo Stars in the Nigerian
              Professional Football League, we take pride in our commitment to
              community development.
            </Text>
          </Flex>
        </Container>
        <Container as="section" size="md">
          <VideoCards videos={match_highlights.slice(0, 3)} />
        </Container>
      </main>
    </>
  );
}
