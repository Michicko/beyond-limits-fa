import React from "react";
import {
  Box,
  Button,
  HStack,
  Flex,
  Heading,
  IconButton,
  AvatarGroup,
  Avatar,
  Float,
  Circle,
  Icon,
} from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import Notification from "../Notification/Notification";
import { getIcon } from "@/lib/icons";
import { usePageContext } from "@/contexts/pageContext";
import CustomMenu from "../CustomMenu/CustomMenu";
import CustomMenuItem from "../CustomMenu/CustomMenuItem";

function Navbar({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { pageTitle } = usePageContext();

  return (
    <Box
      h={"60px"}
      w={"full"}
      px={{ base: "10px", sm: "20px" }}
      bg={"white"}
      borderBottom={"1px solid"}
      borderColor={"neutral"}
    >
      <Flex justify={"space-between"} align={"center"} h={"full"} gap={"sm"}>
        <HStack>
          <IconButton
            aria-label="Search database"
            variant="ghost"
            size={"md"}
            display={{ base: "auto", lg: "none" }}
            onClick={() => setIsOpen(true)}
          >
            {getIcon("menu")}
          </IconButton>
          <Heading
            fontFamily={"font"}
            textTransform={"capitalize"}
            fontWeight={"bold"}
            color="text_lg"
            letterSpacing={"1px"}
            as={"h1"}
            fontSize={{ base: "md", md: "xl" }}
          >
            {pageTitle || "Dashboard"}
          </Heading>
        </HStack>
        <HStack gap={{ base: "1", sm: "3" }} align={"center"}>
          <ColorModeButton />
          <Notification count={5} />
          <HStack>
            <AvatarGroup>
              <Avatar.Root size={"sm"}>
                <Avatar.Fallback name="M" />
                <Float placement="bottom-end" offsetX="1" offsetY="1">
                  <Circle
                    bg="green.500"
                    size="8px"
                    outline="0.2em solid"
                    outlineColor="bg"
                  />
                </Float>
                <Avatar.Image src={"/images/avatar.webp"} />
              </Avatar.Root>
            </AvatarGroup>
            <CustomMenu
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M36 18L24 30L12 18"
                  />
                </svg>
              }
            >
              <CustomMenuItem label="Logout" showBorder={false} />
            </CustomMenu>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
