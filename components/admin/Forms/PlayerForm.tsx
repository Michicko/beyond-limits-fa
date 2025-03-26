"use client";
import { Field, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import FormLabel from "./FormLabel";
import CustomFileUpload from "../CustomFileUpload/CustomFileUpload";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CheckBox from "@/components/CheckBox/CheckBox";
import FormBtn from "./FormBtn";
import { player_positions } from "@/lib/placeholder-data";
import { IPlayer } from "@/lib/definitions";

function PlayerForm({ player }: { player?: IPlayer }) {
  const [formData, setFormData] = useState({
    firstname: player?.firstname || "",
    lastname: player?.lastname || "",
    position_id: player?.position_id || "",
    squad_no: player?.squad_no || "",
    dob: player?.dob || "",
    height: player?.height || "",
    weight: player?.weight || "",
    dominant_foot: player?.dominant_foot || "",
    isTwoFooted: player?.isTwoFooted || false,
    image_home_kit: player?.image_home_kit || "",
    image_away_kit: player?.image_away_kit || "",
    age_group: player?.age_group || "",
    status: player?.status || "",
  });

  const handleOnChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <Stack gap="4">
        <Field.Root required>
          <FormLabel>Home kit</FormLabel>
          <CustomFileUpload description="home kit" />
        </Field.Root>
        <Field.Root required>
          <FormLabel>Away kit</FormLabel>
          <CustomFileUpload description="away kit" />
        </Field.Root>
        <Field.Root required>
          <FormLabel>Position</FormLabel>
          <CustomSelect
            options={player_positions.map((el) => {
              return {
                label: el.long_name,
                value: el.id,
              };
            })}
            name="position_id"
            description="player position"
            selectedValue={formData.position_id}
            handleOnChange={handleOnChange}
          />
        </Field.Root>
        <Field.Root required>
          <FormLabel>firstname</FormLabel>
          <Input
            name={"firstname"}
            type={"text"}
            placeholder="Enter first name"
            px={"2"}
            color={"text_lg"}
            fontSize={"sm"}
            fontWeight={"medium"}
            mb={"5px"}
            value={formData.firstname}
            onChange={handleOnChange}
          />
        </Field.Root>
        <Field.Root required>
          <FormLabel>lastname</FormLabel>
          <Input
            name={"lastname"}
            type={"text"}
            placeholder="Enter lastname"
            px={"2"}
            color={"text_lg"}
            fontSize={"sm"}
            fontWeight={"medium"}
            mb={"5px"}
            value={formData.lastname}
            onChange={handleOnChange}
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
          <FormLabel>Dob</FormLabel>
          <Input
            name={"dob"}
            type={"date"}
            px={"2"}
            color={"text_lg"}
            fontSize={"sm"}
            fontWeight={"medium"}
            mb={"5px"}
            value={formData.dob}
            onChange={handleOnChange}
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
          <FormLabel>squad number</FormLabel>
          <Input
            name={"squad number"}
            type={"number"}
            placeholder="Enter squad number"
            px={"2"}
            color={"text_lg"}
            fontSize={"sm"}
            fontWeight={"medium"}
            mb={"5px"}
            value={formData.squad_no}
            onChange={handleOnChange}
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
          <FormLabel>Weight</FormLabel>
          <Input
            name={"weight"}
            type={"number"}
            placeholder="Enter weight"
            px={"2"}
            color={"text_lg"}
            fontSize={"sm"}
            fontWeight={"medium"}
            mb={"5px"}
            value={formData.weight}
            onChange={handleOnChange}
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
          <FormLabel>Height</FormLabel>
          <Input
            name={"height"}
            type={"number"}
            placeholder="Enter height"
            px={"2"}
            color={"text_lg"}
            fontSize={"sm"}
            fontWeight={"medium"}
            mb={"5px"}
            value={formData.height}
            onChange={handleOnChange}
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
          <FormLabel>Age Group</FormLabel>
          <CustomSelect
            options={["under-17", "under-19"].map((el) => {
              return {
                label: el,
                value: el.toUpperCase(),
              };
            })}
            name="age_group"
            description="age group"
            selectedValue={formData.age_group}
            handleOnChange={handleOnChange}
          />
        </Field.Root>
        <Field.Root required>
          <FormLabel>Player status</FormLabel>
          <CustomSelect
            options={["active", "loan", "inactive"].map((el) => {
              return {
                label: el,
                value: el.toUpperCase(),
              };
            })}
            name="status"
            description="player status"
            selectedValue={formData.status}
            handleOnChange={handleOnChange}
          />
        </Field.Root>
        <Field.Root required>
          <FormLabel>Dominant Foot</FormLabel>
          <CustomSelect
            options={["Left", "Right"].map((el) => {
              return {
                label: el,
                value: el.toUpperCase(),
              };
            })}
            name="dominant_foot"
            description="dominant foot"
            selectedValue={formData.dominant_foot}
            handleOnChange={handleOnChange}
          />
        </Field.Root>
        <CheckBox
          name={"isTwoFooted"}
          checked={formData.isTwoFooted}
          size="xs"
          label="Is Two Footed"
          onCheckedChange={(e) => {
            setFormData({ ...formData, isTwoFooted: e.checked });
          }}
          showLabel={true}
        />
        <FormBtn>Save</FormBtn>
      </Stack>
    </form>
  );
}

export default PlayerForm;
