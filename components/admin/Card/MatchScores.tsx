import { HStack, Text } from "@chakra-ui/react";
import React from "react";

function MatchScores({ status }: { status: "finished" | "upcoming" }) {
	return status === "finished" ? (
		<HStack align={"center"} gap={"10px"}>
			<Text fontSize={"2xl"} fontWeight={"bold"} color={"primary"}>
				4
			</Text>
			<Text fontSize={"xl"} fontWeight={"bold"} color={"text_lg"}>
				:
			</Text>
			<Text fontSize={"2xl"} fontWeight={"bold"} color={"primary"}>
				2
			</Text>
		</HStack>
	) : (
		<Text fontSize={"xl"} fontWeight={"bold"} color={"error"}>
			VS
		</Text>
	);
}

export default MatchScores;
