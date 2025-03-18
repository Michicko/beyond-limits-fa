import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { getIcon } from "@/lib/icons";

function Notification({ count }: { count: number }) {
	return (
		<IconButton
			position={"relative"}
			py={"2"}
			variant={"ghost"}
			aria-label={"Notifications"}
			size={"lg"}
			color="gray.750"
		>
			{getIcon("bell")}
			<Box
				as={"span"}
				position="absolute"
				top="1px"
				right="3px"
				bg="error"
				color="white"
				borderRadius="full"
				w="15px"
				h="15px"
				display="flex"
				alignItems="center"
				justifyContent="center"
				fontFamily={"font"}
				fontSize="xs"
				fontWeight={"bold"}
			>
				{count}
			</Box>
		</IconButton>
	);
}

export default Notification;
