// import { useState, useEffect } from "react";
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";
// import "../../app.css";
// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import Header from "@/components/main/Header/Header";
import HeaderLanding from "@/components/main/Header/HeaderLanding";
import Heading from "@/components/main/Typography/Heading";
import Text from "@/components/main/Typography/Text";
import { matches } from "@/lib/placeholder-data";
import "@aws-amplify/ui-react/styles.css";

const match = matches[0];

export default function Home() {
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
    </>
  );
}
