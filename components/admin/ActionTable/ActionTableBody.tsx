import TableBody from "@/components/Table/TableBody";
import React from "react";

function ActionTableBody({ children }: { children: React.ReactElement }) {
  return <TableBody>{children}</TableBody>;
}

export default ActionTableBody;
