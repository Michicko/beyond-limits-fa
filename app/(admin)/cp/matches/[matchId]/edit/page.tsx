import PageTitle from "@/components/admin/Layout/PageTitle";
import { Box } from "@chakra-ui/react";
import React from "react";

function page() {
  return (
    <>
      <PageTitle pageTitle="Edit Match" />
      <Box w={"full"} h={"full"} mt={"20px"}></Box>
    </>
  );
}

export default page;
