import { Flex } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { data } from "../utils/data";
import { Searchbar } from "../components/SearchBar";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Flex
      direction="row"
      bgColor="blue.100"
      gap={4}
      flexWrap="wrap"
      justifyContent="center"
    >
      <Searchbar />
      {data.hits.map((recipeItem) => (
        <RecipeCard
          key={recipeItem.recipe.label}
          recipeItem={recipeItem.recipe}
          clickFn={clickFn}
        />
      ))}
    </Flex>
  );
};
