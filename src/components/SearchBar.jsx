import { Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = () => {
  const [inputSearchbar, setInputSearchbar] = useState("");

  const RecipeItems = data.hits.map((RecipeItem) =>
    RecipeItem.recipe.label.toLowerCase()
  );
  const FilteredRecipes = RecipeItems.filter((RecipeItem) =>
    RecipeItem.includes(inputSearchbar.toLowerCase())
  );

  console.log(FilteredRecipes);
  return (
    <Flex m={4}>
      <Input
        m="auto"
        w="75vw"
        variant="filled"
        type="text"
        placeholder="Search your fooditem by name here"
        onChange={(event) => {
          setInputSearchbar(event.target.value);
        }}
        shadow="dark-lg"
        FilteredRecipes={FilteredRecipes}
      />
    </Flex>
  );
};
