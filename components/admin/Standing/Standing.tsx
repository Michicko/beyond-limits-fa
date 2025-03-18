import { IStandingRow } from "@/lib/definitions";
import { Table, Card, Heading } from "@chakra-ui/react";
import React from "react";

function Standing({ standings }: { standings: IStandingRow[] }) {
  const statsHead = ["pos", "team", "p", "w", "d", "l", "g", "gd", "pts"];
  const headingStyles = {
    color: "text_lg",
    mb: "10px",
    fontWeight: "semibold",
  };

  const tdStyles = {
    color: "text_lg",
    fontWeight: "medium",
    fontSize: "sm",
    verticalAlign: "middle",
    textTransform: "uppercase",
  };

  const tableRowStyles = {
    h: "45px !important",
    minH: "45px !important",
  };

  return (
    <Card.Root border={"1px solid"} borderColor={"neutral"} p={"10px"}>
      <Card.Header pt={"10px"}>
        <Heading as={"h3"} css={headingStyles}>
          Standing
        </Heading>
      </Card.Header>

      <Table.Root size="sm">
        <Table.Header css={tableRowStyles}>
          <Table.Row verticalAlign={"middle"} css={tableRowStyles}>
            {statsHead.map((el, i) => {
              return (
                <Table.ColumnHeader
                  css={tableRowStyles}
                  textTransform={"uppercase"}
                  verticalAlign={"middle"}
                  textAlign={i <= 1 ? "left" : "center"}
                  key={el}
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"text_md"}
                  pl={i <= 1 ? "4px" : 0}
                  display={
                    i >= 6 && i <= 7
                      ? { base: "none", md: "table-cell" }
                      : { base: "table-cell" }
                  }
                >
                  {el}
                </Table.ColumnHeader>
              );
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {standings
            .sort((a, b) => a.position - b.position)
            .map((standing, i) => (
              <Table.Row
                key={standing.id}
                h={"40px"}
                borderBottom={"1px solid"}
                borderColor={
                  i === standings.length - 1 ? "transparent" : "neutral"
                }
                bg={
                  standing.team && standing.team.isBeyondLimits
                    ? "neutral"
                    : "transparent"
                }
              >
                <Table.Cell css={tdStyles} pl={"4px"}>
                  {standing.position}
                </Table.Cell>
                <Table.Cell
                  css={tdStyles}
                  pl={"4px"}
                  display={{ base: "table-cell", md: "none" }}
                >
                  {standing.team && standing.team.short_name}
                </Table.Cell>
                <Table.Cell
                  css={tdStyles}
                  pl={"4px"}
                  display={{ base: "none", md: "table-cell" }}
                >
                  {standing.team && standing.team.long_name}
                </Table.Cell>
                <Table.Cell css={tdStyles} textAlign="center">
                  {standing.stats.p}
                </Table.Cell>
                <Table.Cell css={tdStyles} textAlign="center">
                  {standing.stats.w}
                </Table.Cell>
                <Table.Cell css={tdStyles} textAlign="center">
                  {standing.stats.d}
                </Table.Cell>
                <Table.Cell css={tdStyles} textAlign="center">
                  {standing.stats.l}
                </Table.Cell>
                <Table.Cell
                  css={tdStyles}
                  textAlign="center"
                  display={{ base: "none", md: "table-cell" }}
                >
                  {standing.stats.g}
                </Table.Cell>
                <Table.Cell
                  css={tdStyles}
                  textAlign="center"
                  display={{ base: "none", md: "table-cell" }}
                >
                  {standing.stats.gd}
                </Table.Cell>
                <Table.Cell css={tdStyles} textAlign="center">
                  {standing.stats.pts}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </Card.Root>
  );
}

export default Standing;
