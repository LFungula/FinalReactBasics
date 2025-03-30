import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = () => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Input
        m="4"
        w="90vw"
        variant="filled"
        type="text"
        value={value}
        placeholder="Search your fooditem by name here"
        onChange={handleChange}
      />
    </div>
  );
};
