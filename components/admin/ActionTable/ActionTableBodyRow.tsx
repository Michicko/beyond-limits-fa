import CheckBox from "@/components/CheckBox/CheckBox";
import TableCell from "@/components/Table/TableCell";
import TableRows from "@/components/Table/TableRows";
import React from "react";

function ActionTableBodyRow({
  data_selected,
  onCheckedChange,
  checked,
  children,
}: {
  data_selected?: string;
  onCheckedChange: (changes: any) => void;
  checked: boolean;
  children: React.ReactElement;
}) {
  return (
    <TableRows data-selected={data_selected}>
      <TableCell pl={"10px"}>
        <CheckBox
          checked={checked}
          label={"Select row"}
          onCheckedChange={onCheckedChange}
        />
      </TableCell>
      {children}
    </TableRows>
  );
}

export default ActionTableBodyRow;
