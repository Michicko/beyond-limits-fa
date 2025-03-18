"use client";
import PlayerCard from "@/components/admin/Card/PlayerCard";
import CustomFileUpload from "@/components/admin/CustomFileUpload/CustomFileUpload";
import FormDialog from "@/components/admin/FormDialog/FormDialog";
import PageTitle from "@/components/admin/Layout/PageTitle";
import CheckBox from "@/components/CheckBox/CheckBox";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CustomTabContent from "@/components/Tabs/CustomTabContent";
import CustomTabList from "@/components/Tabs/CustomTabList";
import CustomTabs from "@/components/Tabs/CustomTabs";
import CustomTabTrigger from "@/components/Tabs/CustomTabTrigger";
import { player_positions, players } from "@/lib/placeholder-data";
import {
  Box,
  Button,
  Card,
  Field,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Players() {
  const [ageGroup, setAgeGroup] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [dominantFoot, setDominantFoot] = useState("");
  const [isTwoFooted, setIsTwoFooted] = useState<boolean>(false);
  const player_groups = [...new Set(players.map((el) => el.age_group))];

  const position_groups = [
    ...new Set(players.map((el) => el.position?.long_name)),
  ];

  const [selectedPositionFilter, setSelectedPositionFilter] = useState("all");

  const btnStyles = {
    p: "10px 20px",
    fontSize: "md",
    fontWeight: "semibold",
  };

  const positionFilterStyles = {
    px: "20px",
    borderRadius: "3xl",
    fontSize: "sm",
    textTransform: "uppercase",
    fontWeight: "semibold",
    bg: "blue.100",
    color: "black",
    "&:hover": {
      bg: "primary",
      color: "white",
    },
    "&.current": {
      bg: "primary",
      color: "white",
    },
  };

  const filtered_players = players.filter((player) => {
    if (selectedPositionFilter === "all") return player;
    else return player.position?.long_name === selectedPositionFilter;
  });

  const getGroup = (group: string) => {
    const groupedPlayers = filtered_players.filter(
      (el) => el.age_group === group
    );
    return groupedPlayers.filter((el) => el !== undefined);
  };

  return (
    <>
      <PageTitle pageTitle="Players" />
      <Box w={"full"} h={"full"} mt={"10px"}>
        <HStack justify={"flex-end"} mb={"20px"} gap="2">
          <FormDialog
            btn={
              <Button
                colorPalette={"blue"}
                variant={"solid"}
                css={btnStyles}
                size={"md"}
              >
                Create Player
              </Button>
            }
            scrollable={true}
            name="Player"
          >
            <form>
              <Stack gap="2">
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Home kit</Field.Label>
                  <CustomFileUpload description="home kit" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Away kit</Field.Label>
                  <CustomFileUpload description="away kit" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Position</Field.Label>
                  <CustomSelect
                    options={player_positions.map((el) => {
                      return {
                        label: el.long_name,
                        value: el.long_name,
                      };
                    })}
                    name="Position"
                    value={playerPosition}
                    setValue={setPlayerPosition}
                  />
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>firstname</Field.Label>
                  <Input
                    name={"firstname"}
                    type={"text"}
                    placeholder="Enter first name"
                    px={"2"}
                    color={"text_lg"}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                    mb={"5px"}
                  />
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>lastname</Field.Label>
                  <Input
                    name={"lastname"}
                    type={"text"}
                    placeholder="Enter lastname"
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
                    Enter lastname (surname)
                  </Field.HelperText>
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Dob</Field.Label>
                  <Input
                    name={"dob"}
                    type={"date"}
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
                    Enter Date of birth
                  </Field.HelperText>
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>squad number</Field.Label>
                  <Input
                    name={"squad number"}
                    type={"number"}
                    placeholder="Enter squad number"
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
                    Enter squad number e.g 7
                  </Field.HelperText>
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Weight</Field.Label>
                  <Input
                    name={"weight"}
                    type={"number"}
                    placeholder="Enter weight"
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
                    Enter weight in (kg) e.g 75
                  </Field.HelperText>
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Height</Field.Label>
                  <Input
                    name={"height"}
                    type={"number"}
                    placeholder="Enter height"
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
                    Enter height in (cm) e.g 156
                  </Field.HelperText>
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Age Group</Field.Label>
                  <CustomSelect
                    options={["UNDER-17", "UNDER-19"].map((el) => {
                      return {
                        label: el,
                        value: el,
                      };
                    })}
                    name="Age Group"
                    value={ageGroup}
                    setValue={setAgeGroup}
                  />
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Player status</Field.Label>
                  <CustomSelect
                    options={["active", "loan", "inactive"].map((el) => {
                      return {
                        label: el,
                        value: el,
                      };
                    })}
                    name="Player status"
                    value={playerPosition}
                    setValue={setPlayerPosition}
                  />
                </Field.Root>
                <Field.Root required>
                  <Field.Label color={"text_lg"}>Dominant Foot</Field.Label>
                  <CustomSelect
                    options={["left", "right"].map((el) => {
                      return {
                        label: el,
                        value: el,
                      };
                    })}
                    name="Dominant foot"
                    value={dominantFoot}
                    setValue={setDominantFoot}
                  />
                </Field.Root>
                <CheckBox
                  checked={isTwoFooted}
                  size="xs"
                  label="Is Two Footed"
                  onCheckedChange={(e) => {
                    setIsTwoFooted(e.checked);
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

        {/* position filters */}
        <Flex gap={"2"} flexWrap={"wrap"} mb={"20px"}>
          {["all", ...position_groups].map((position) => {
            if (!position) return;
            return (
              <Button
                key={position}
                size={"sm"}
                css={positionFilterStyles}
                className={position === selectedPositionFilter ? "current" : ""}
                onClick={() => setSelectedPositionFilter(position)}
              >
                {position}
              </Button>
            );
          })}
        </Flex>

        {/* age group tabs */}
        <Box>
          <CustomTabs defaultValue={"UNDER-19"}>
            <>
              {
                <CustomTabList>
                  <>
                    {player_groups.map((group) => {
                      return (
                        <CustomTabTrigger
                          key={group}
                          label={group}
                          value={group}
                        />
                      );
                    })}
                  </>
                </CustomTabList>
              }
              {player_groups.map((group) => {
                return (
                  <CustomTabContent value={group}>
                    <Flex my={"20px"} direction={"column"} gap={"4"}>
                      {getGroup(group).map((player) => {
                        return <PlayerCard key={player.id} player={player} />;
                      })}
                    </Flex>
                  </CustomTabContent>
                );
              })}
            </>
          </CustomTabs>
        </Box>
      </Box>
    </>
  );
}

export default Players;
