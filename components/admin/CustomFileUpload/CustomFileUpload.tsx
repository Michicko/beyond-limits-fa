import { getIcon } from "@/lib/icons";
import { Box, Button, FileUpload, Icon } from "@chakra-ui/react";
import React from "react";

function CustomFileUpload({ description }: { description: string }) {
  return (
    <FileUpload.Root
      accept={["image/png", "image/jpeg", "image/webp"]}
      w={"full"}
      maxFiles={1}
      p={"10px"}
      mt={"5px"}
    >
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm" px={"20px"}>
          <Icon size="md" color="fg.muted">
            {getIcon("upload")}
          </Icon>
          Select {description}
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  );
}

export default CustomFileUpload;
