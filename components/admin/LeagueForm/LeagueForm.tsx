import React from "react";
import FormDialog from "../FormDialog/FormDialog";
import { Button, Field, Input, Stack } from "@chakra-ui/react";
import CustomFileUpload from "../CustomFileUpload/CustomFileUpload";
import CheckBox from "@/components/CheckBox/CheckBox";
import CustomMenuItem from "../CustomMenu/CustomMenuItem";
import { leagues } from "@/lib/placeholder-data";

function LeagueForm({ competition_id }: { competition_id: string }) {
  const btnStyles = {
    p: "10px 20px",
    fontSize: "md",
    fontWeight: "semibold",
  };
  return (
    <FormDialog
      btn={
        <CustomMenuItem
          label="Create League"
          showBorder={true}
          disabled={
            leagues.find((el) => el.competition_id === competition_id) && true
          }
        />
      }
      scrollable={true}
      name="Team"
    >
      <form>
        <Stack gap="4">
          <Field.Root required>
            <Field.Label color={"text_lg"}>Team Logo</Field.Label>
            <CustomFileUpload description="team logo" />
          </Field.Root>
          <Field.Root required>
            <Field.Label color={"text_lg"}>short name</Field.Label>
            <Input
              name={"short name"}
              type={"text"}
              placeholder="Enter Short name"
              px={"2"}
              color={"text_lg"}
              fontSize={"sm"}
              fontWeight={"medium"}
              mb={"5px"}
            />
            <Field.HelperText
              fontSize={"sm"}
              fontWeight={"normal"}
              color={"text_md"}
            >
              Enter short name e.g BLFA
            </Field.HelperText>
          </Field.Root>
          <Field.Root required>
            <Field.Label color={"text_lg"}>long name</Field.Label>
            <Input
              name={"long name"}
              type={"text"}
              placeholder="Enter long name"
              px={"2"}
              color={"text_lg"}
              fontSize={"sm"}
              fontWeight={"medium"}
              mb={"5px"}
            />
            <Field.HelperText
              fontSize={"sm"}
              fontWeight={"normal"}
              color={"text_md"}
            >
              Enter long name e.g Beyond Limits Fa
            </Field.HelperText>
          </Field.Root>
          <Button type="submit" css={btnStyles} colorPalette={"blue"}>
            Save
          </Button>
        </Stack>
      </form>
    </FormDialog>
  );
}

export default LeagueForm;
