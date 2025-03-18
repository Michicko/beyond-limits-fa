import { Button } from "@chakra-ui/react";
import React from "react";

function CreateButton({ text }: { text: string }) {
  const btnStyles = {
    p: "10px 20px",
    fontSize: "md",
    fontWeight: "semibold",
  };
  return (
    <Button colorPalette={"blue"} variant={"solid"} css={btnStyles} size={"md"}>
      {text}
    </Button>
  );
}

export default CreateButton;
