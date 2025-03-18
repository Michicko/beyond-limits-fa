import React from "react";
import { Table as ChakraTable } from "@chakra-ui/react";

function TableRows(
  props: React.JSX.IntrinsicAttributes &
    ChakraTable.RowProps &
    React.RefAttributes<HTMLTableRowElement>
) {
  return (
    <ChakraTable.Row
      h={"40px"}
      borderBottom={"1px solid"}
      borderColor={"neutral"}
      {...props}
    >
      {props.children}
    </ChakraTable.Row>
  );
}

export default TableRows;
