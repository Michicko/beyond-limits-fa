import { Menu } from "@chakra-ui/react";
import React from "react";

function CustomMenuItem({
  label,
  showBorder,
  disabled,
  children,
}: {
  label: string;
  showBorder: boolean;
  disabled?: boolean;
  children?: React.ReactElement;
}) {
  const menuItemStyles = {
    p: "15px 10px",
    cursor: "pointer",
    "& a": {
      w: "full",
      h: "full",
      outline: "transparent",
      textDecoration: "none",
      border: "none",
      display: "block",
    },
  };

  return (
    <Menu.Item
      value={label}
      css={menuItemStyles}
      color={label.toLowerCase() === "delete" ? "fg.error" : "text_lg"}
      borderBottom={"1px solid"}
      borderColor={showBorder ? "neutral" : "transparent"}
      disabled={disabled}
    >
      {children || label}
    </Menu.Item>
  );
}

export default CustomMenuItem;
