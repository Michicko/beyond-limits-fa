import BackButton from "@/components/admin/BackButton";
import PlayerForm from "@/components/admin/Forms/PlayerForm";
import PageTitle from "@/components/admin/Layout/PageTitle";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";

function CreatePlayer() {
  return (
    <>
      <PageTitle pageTitle="Create Player" />
      <Box w={"full"} h={"full"} mt={"30px"}>
        <HStack mb={8}>
          <BackButton />
        </HStack>
        <PlayerForm />
      </Box>
    </>
  );
}

export default CreatePlayer;
