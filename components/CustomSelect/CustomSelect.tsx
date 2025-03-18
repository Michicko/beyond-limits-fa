import { NativeSelect } from "@chakra-ui/react";
import React from "react";

function CustomSelect({
  options,
  name,
  value,
  setValue,
}: {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: { label: string; value: string }[];
}) {
  return (
    <NativeSelect.Root size={"md"} variant={"outline"} colorPalette={"gray"}>
      <NativeSelect.Field
        placeholder={`Select ${name}`}
        color={"text_lg"}
        fontSize={"sm"}
        fontWeight={"medium"}
        pl={"10px"}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
}

export default CustomSelect;
