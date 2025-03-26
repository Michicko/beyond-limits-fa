import { Alert } from "@chakra-ui/react";
import React from "react";

function CustomAlert({
  title,
  status,
}: {
  title: string;
  status: "info" | "warning" | "success" | "error" | "neutral";
}) {
  return (
    <Alert.Root status={status} title={title} p={5}>
      <Alert.Indicator />
      <Alert.Title>{title}</Alert.Title>
    </Alert.Root>
  );
}

export default CustomAlert;
