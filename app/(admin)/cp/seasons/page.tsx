"use client";
import PageTitle from "@/components/admin/Layout/PageTitle";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Field,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import TableColumnHeader from "@/components/Table/TableColumnHeader";
import TableCell from "@/components/Table/TableCell";
import Pagination from "@/components/Pagination/Pagination";
import FormDialog from "@/components/admin/FormDialog/FormDialog";
import ActionTable from "@/components/admin/ActionTable/ActionTable";
import ActionTableHeader from "@/components/admin/ActionTable/ActionTableHeader";
import ActionTableBody from "@/components/admin/ActionTable/ActionTableBody";
import ActionTableBodyRow from "@/components/admin/ActionTable/ActionTableBodyRow";
import Table from "@/components/Table/Table";
import TableHeader from "@/components/Table/TableHeader";
import TableRows from "@/components/Table/TableRows";
import TableBody from "@/components/Table/TableBody";
import CustomMenu from "@/components/admin/CustomMenu/CustomMenu";
import CustomMenuItem from "@/components/admin/CustomMenu/CustomMenuItem";

const seasons = [
  {
    id: "2380576c-20d9-4d05-9a96-0735514f13fc",
    season: "2022/2023",
    competitions: 5,
    matches: 54,
    createdAt: "2022-05-19",
  },
  {
    id: "2380576c-20d9-4d05-9a96-1735514f03fc",
    season: "2023/2024",
    competitions: 4,
    matches: 54,
    createdAt: "2023-05-19",
  },
  {
    id: "2380576c-20d9-4d05-9a96-0735514f03fc",
    season: "2024/2025",
    competitions: 4,
    matches: 54,
    createdAt: "2024-05-19",
  },
];

function Seasons() {
  const btnStyles = {
    p: "10px 20px",
    fontSize: "md",
    fontWeight: "semibold",
  };

  const [selection, setSelection] = useState<string[]>([]);
  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < seasons.length;

  return (
    <>
      <PageTitle pageTitle="Seasons" />
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
                  Create Season
                </Button>
              }
              name="Season"
            >
              <form>
                <Stack gap="4">
                  <Field.Root required>
                    <Field.Label color={"text_lg"}>Season</Field.Label>
                    <Input
                      name={"season"}
                      type={"text"}
                      placeholder="Enter Season"
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
                      Enter season e.g 2023/2024
                    </Field.HelperText>
                  </Field.Root>
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
                    {[
                      ...Object.keys(seasons[0]).filter((el) => el !== "id"),
                      "",
                    ].map((head, i) => {
                      return (
                        <TableColumnHeader
                          key={head}
                          textAlign={i === 1 || i === 2 ? "center" : "left"}
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
                  {seasons.map((season) => {
                    return (
                      <TableRows
                        key={season.season}
                        data-selected={
                          selection.includes(season.season) ? "" : undefined
                        }
                      >
                        <>
                          <TableCell pl={"10px"}>{season.season}</TableCell>
                          <TableCell textAlign={"center"}>
                            {season.competitions}
                          </TableCell>
                          <TableCell textAlign={"center"}>
                            {season.matches}
                          </TableCell>
                          <TableCell>{season.createdAt}</TableCell>
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
          {/* <ActionTable selection={selection} hasSelection={hasSelection}>
            <>
              <ActionTableHeader
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                label={"Select all rows"}
                onCheckedChange={(changes: { checked: any }) => {
                  setSelection(
                    changes.checked
                      ? seasons.map((season) => season.season)
                      : []
                  );
                }}
              >
                <>
                  {Object.keys(seasons[0])
                    .filter((el) => el !== "id")
                    .map((head, i) => {
                      return (
                        <TableColumnHeader
                          key={head}
                          textAlign={i === 1 || i === 2 ? "center" : "left"}
                          pl={i === 0 ? "10px" : "0"}
                        >
                          {head}
                        </TableColumnHeader>
                      );
                    })}
                </>
              </ActionTableHeader>
              <ActionTableBody>
                <>
                  {seasons.map((season) => {
                    return (
                      <ActionTableBodyRow
                        key={season.season}
                        checked={selection.includes(season.season)}
                        data_selected={
                          selection.includes(season.season) ? "" : undefined
                        }
                        onCheckedChange={(changes) => {
                          setSelection((prev) =>
                            changes.checked
                              ? [...prev, season.season]
                              : selection.filter(
                                  (name) => name !== season.season
                                )
                          );
                        }}
                      >
                        <>
                          <TableCell pl={"10px"}>{season.season}</TableCell>
                          <TableCell textAlign={"center"}>
                            {season.competitions}
                          </TableCell>
                          <TableCell textAlign={"center"}>
                            {season.matches}
                          </TableCell>
                          <TableCell>{season.createdAt}</TableCell>
                        </>
                      </ActionTableBodyRow>
                    );
                  })}
                </>
              </ActionTableBody>
            </>
          </ActionTable> */}
          <HStack justify={"center"} w={"full"}>
            <Pagination />
          </HStack>
        </Container>
      </Box>
    </>
  );
}

export default Seasons;
