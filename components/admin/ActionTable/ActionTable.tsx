"use client";
import Table from "@/components/Table/Table";
import { ActionBar, Button, Portal } from "@chakra-ui/react";

const ActionTable = ({
  children,
  selection,
  hasSelection,
}: {
  children: React.ReactElement;
  selection: string[];
  hasSelection: boolean;
}) => {
  const btnStyles = {
    p: "10px 20px",
    fontSize: "md",
    fontWeight: "semibold",
  };
  return (
    <>
      <Table>{children}</Table>
      <ActionBar.Root open={hasSelection}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger color={"text_lg"} p="10px 20px">
                {selection.length} selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button
                variant={"outline"}
                colorPalette={"pink"}
                css={btnStyles}
                size={"md"}
              >
                Delete
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  );
};

export default ActionTable;
