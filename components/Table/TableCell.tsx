import React from "react";
import { Table as ChakraTable } from "@chakra-ui/react";
function TableCell(
  props: React.JSX.IntrinsicAttributes &
    ChakraTable.CellProps &
    React.RefAttributes<HTMLTableCellElement>
) {
  return (
    <ChakraTable.Cell
      verticalAlign={"middle"}
      textTransform={"capitalize"}
      fontWeight={"medium"}
      color={"text_md"}
      {...props}
    >
      {props.children}
    </ChakraTable.Cell>
  );
}

export default TableCell;
