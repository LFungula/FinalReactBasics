import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = () => {
  const [inputSearchbar, setInputSearchbar] = useState("");

  const RecipeItems = JSON.parse(
    JSON.stringify(data.hits.map((element) => element.recipe.label))
  );

  const FilteredRecipes = RecipeItems.filter((element) =>
    element.includes(inputSearchbar)
  );
  console.log(FilteredRecipes);
  const changeFN = () => (event) => {
    setInputSearchbar(event.target.value);
  };

  return (
    <div>
      <Input
        m="4"
        w="75vw"
        variant="filled"
        type="text"
        placeholder="Search your fooditem by name here"
        onChange={changeFN(setInputSearchbar)}
        shadow="dark-lg"
        FilteredRecipes={FilteredRecipes}
      />
    </div>
  );
};
