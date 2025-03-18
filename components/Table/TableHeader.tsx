import React from "react";
import { Table as ChakraTable } from "@chakra-ui/react";

function TableHeader({ children }: { children: React.ReactElement }) {
  return <ChakraTable.Header>{children}</ChakraTable.Header>;
}

export default TableHeader;
