import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = () => {
  const [value, setValue] = useState("");

  const findMatch = ({ value }) => {};

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log({ value });
    findMatch(value);
  };

  return (
    <div>
      <Input
        m="4"
        w="90vw"
        variant="filled"
        onChange={handleChange}
        type="text"
        value={value}
        placeholder="Search your fooditem by name here"
      />
    </div>
  );
};
