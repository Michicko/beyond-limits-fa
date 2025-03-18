import { IMatch, Match_status } from "@/lib/definitions";
import React from "react";
import styles from "./MatchCard.module.css";
import clsx from "clsx";
import Text from "../Typography/Text";
import formatDate from "@/lib/formatDate";
import Button from "../Button/Button";
import Flex from "../Container/Flex";

function Details({ status }: { status: string }) {
  return status === "FINISHED" || status === "UPCOMING" ? (
    <>
      <Text color="white" letterCase="upper" size="xxl" weight="bold">
        -
      </Text>
    </>
  ) : status === "ABANDONED" ? (
    <Text color="white" letterCase="upper" size="base" weight="light">
      ABANDONED
    </Text>
  ) : (
    <Text color="white" letterCase="upper" size="base" weight="light">
      CANCELED
    </Text>
  );
}

export default Details;
