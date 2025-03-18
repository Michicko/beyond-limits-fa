import { Tabs } from "@chakra-ui/react";
import React, { ReactElement } from "react";

function CustomTabList({ children }: { children: ReactElement }) {
  return <Tabs.List gap={"2"}>{children}</Tabs.List>;
}

export default CustomTabList;
