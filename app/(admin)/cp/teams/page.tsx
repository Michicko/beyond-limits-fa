"use client";
import MatchIcon from "@/components/admin/Card/MatchIcon";
import CustomFileUpload from "@/components/admin/CustomFileUpload/CustomFileUpload";
import CustomMenu from "@/components/admin/CustomMenu/CustomMenu";
import CustomMenuItem from "@/components/admin/CustomMenu/CustomMenuItem";
import FormDialog from "@/components/admin/FormDialog/FormDialog";
import PageTitle from "@/components/admin/Layout/PageTitle";
import CheckBox from "@/components/CheckBox/CheckBox";
import Pagination from "@/components/Pagination/Pagination";
import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableCell from "@/components/Table/TableCell";
import TableColumnHeader from "@/components/Table/TableColumnHeader";
import TableHeader from "@/components/Table/TableHeader";
import TableRows from "@/components/Table/TableRows";
import { teams } from "@/lib/placeholder-data";
import {
  Box,
  Button,
  Container,
  Field,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

function Teams() {
  const [selection, setSelection] = useState<string[]>([]);
  const hasSelection = selection.length > 0;

  const [isBeyonLimits, setIsBeyondLimits] = useState(false);

  const btnStyles = {
    p: "10px 20px",
    fontSize: "md",
    fontWeight: "semibold",
  };
  return (
    <>
      <PageTitle pageTitle="Teams" />
      <Box w={"full"} h={"full"} mt={"30px"}>
        <Container maxW={"4xl"} fluid margin={"0 auto"}>
          <HStack justify={"flex-end"} mb={"20px"} gap="4">
            <FormDialog
              btn={
                <Button
                  colorPalette={"blue"}
                  variant={"solid"}
                  css={btnStyles}
                  size={"md"}
                >
                  Create Team
                </Button>
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
                  <CheckBox
                    checked={isBeyonLimits}
                    size="xs"
                    label="Is BeyonLimits Fa"
                    onCheckedChange={(e) => {
                      setIsBeyondLimits(e.checked);
                    }}
                    showLabel={true}
                  />
                  <Button type="submit" css={btnStyles} colorPalette={"blue"}>
                    Save
                  </Button>
                </Stack>
              </form>
            </FormDialog>
          </HStack>
          <Table>
            <>
              <TableHeader>
                <TableRows>
                  <>
                    {["team", "stadium", ""]
                      .filter((el) => el !== "id")
                      .map((head, i) => {
                        return (
                          <TableColumnHeader
                            key={head}
                            pl={i === 0 ? "10px" : "0"}
                          >
                            {head}
                          </TableColumnHeader>
                        );
                      })}
                  </>
                </TableRows>
              </TableHeader>
              <TableBody>
                <>
                  {teams.map((team) => {
                    return (
                      <TableRows
                        key={team.short_name}
                        data-selected={
                          selection.includes(team.short_name) ? "" : undefined
                        }
                      >
                        <>
                          <TableCell pl={"10px"}>
                            <HStack align={"center"}>
                              <MatchIcon
                                src={team.logo}
                                size={"xl"}
                                radius={false}
                              />
                              {team.long_name}
                            </HStack>
                          </TableCell>
                          <TableCell>{team.stadium}</TableCell>
                          <TableCell>
                            <CustomMenu>
                              <>
                                <CustomMenuItem
                                  label="Edit"
                                  showBorder={true}
                                />
                                <CustomMenuItem
                                  label="Delete"
                                  showBorder={false}
                                />
                              </>
                            </CustomMenu>
                          </TableCell>
                        </>
                      </TableRows>
                    );
                  })}
                </>
              </TableBody>
            </>
          </Table>
          <HStack justify={"center"} w={"full"}>
            <Pagination />
          </HStack>
        </Container>
      </Box>
    </>
  );
}

export default Teams;
