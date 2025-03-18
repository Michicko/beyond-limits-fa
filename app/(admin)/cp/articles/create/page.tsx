import PageTitle from "@/components/admin/Layout/PageTitle";
import { Box } from "@chakra-ui/react";
import React from "react";

function CreateArticle() {
  return (
    <>
      <PageTitle pageTitle="Create Article" />
      <Box w={"full"} h={"full"} mt={"20px"}></Box>
    </>
  );
}

export default CreateArticle;
