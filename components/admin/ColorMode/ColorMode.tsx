"use client";
import React from "react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { getIcon } from "@/lib/icons";

function ColorMode() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? getIcon("moon") : getIcon("sun")}
      </IconButton>
    </ClientOnly>
  );
}

export default ColorMode;
