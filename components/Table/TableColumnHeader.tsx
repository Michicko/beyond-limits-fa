import React from "react";
import { Table as ChakraTable } from "@chakra-ui/react";

function TableColumnHeader(
  props: React.JSX.IntrinsicAttributes &
    ChakraTable.ColumnHeaderProps &
    React.RefAttributes<HTMLTableCellElement>
) {
  return (
    <ChakraTable.ColumnHeader
      textTransform={"capitalize"}
      fontWeight={"medium"}
      color={"text_lg"}
      {...props}
    >
      {props.children}
    </ChakraTable.ColumnHeader>
  );
}

export default TableColumnHeader;
