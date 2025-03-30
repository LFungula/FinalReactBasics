import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const mapData = JSON.stringify(
    data.hits.map((element) => element.recipe.label)
  );
  const includeData = mapData.includes(value);
  console.log(includeData);

  return (
    <div>
      <Input
        m="4"
        w="75vw"
        variant="filled"
        type="text"
        placeholder="Search your fooditem by name here"
        onChange={handleChange}
        shadow="dark-lg"
        value={value}
        includeData={includeData}
      />
    </div>
  );
};
