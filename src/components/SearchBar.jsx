import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = () => {
  const [value, setValue] = useState("");

  const RecipeItems = JSON.parse(
    JSON.stringify(data.hits.map((element) => element.recipe.label))
  );

  const FilteredRecipes = RecipeItems.filter((element) =>
    element.includes(value)
  );
  console.log(FilteredRecipes);

  return (
    <div>
      <Input
        m="4"
        w="75vw"
        variant="filled"
        type="text"
        placeholder="Search your fooditem by name here"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        shadow="dark-lg"
        value={value}
        FilteredRecipes={FilteredRecipes}
      />
    </div>
  );
};
