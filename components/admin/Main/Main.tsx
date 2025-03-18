import React from "react";
import { Box } from "@chakra-ui/react";

function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box
      h={"full"}
      w={"full"}
      overflow={"auto"}
      p={{ base: "20px 10px", sm: "20px" }}
    >
      {children}
    </Box>
  );
}

export default Main;
