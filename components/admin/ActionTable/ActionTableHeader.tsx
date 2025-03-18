import CheckBox from "@/components/CheckBox/CheckBox";
import TableColumnHeader from "@/components/Table/TableColumnHeader";
import TableHeader from "@/components/Table/TableHeader";
import TableRows from "@/components/Table/TableRows";
import React from "react";

function ActionTableHeader({
  onCheckedChange,
  checked,
  children,
  label,
}: {
  onCheckedChange: (changes: any) => void;
  checked: boolean | "indeterminate";
  children: React.ReactElement;
  label: string;
}) {
  return (
    <TableHeader>
      <TableRows>
        <TableColumnHeader w="6" pl={"10px"}>
          <CheckBox
            checked={checked}
            label={label}
            onCheckedChange={onCheckedChange}
          />
        </TableColumnHeader>
        {children}
      </TableRows>
    </TableHeader>
  );
}

export default ActionTableHeader;
