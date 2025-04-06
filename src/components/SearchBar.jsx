import { Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";

export const Searchbar = () => {
  const [inputSearchbar, setInputSearchbar] = useState("");

  //console.log(inputSearchbar);

  const recipeItems = data.hits.map((recipeItem) => recipeItem.recipe);

  const filteredRecipes = recipeItems.filter((recipeItem) => {
    recipeItem.label.includes(inputSearchbar);
    //console.table(recipeItem);
    return recipeItem;
  });

  //  console.log("filteredRecipes");
  //  console.log(filteredRecipes);
  //  console.log(typeof filteredRecipes);

  //  const changeFn = (event) => setInputSearchbar(event.target.value);

  return (
    <Flex m={4}>
      <Input
        m="auto"
        w="75vw"
        type="text"
        placeholder="Search your fooditem by name here"
        shadow="dark-lg"
        onChange={(event) => setInputSearchbar(event.target.value)}
      />
    </Flex>
  );
};
