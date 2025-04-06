import { Flex, Heading } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { data } from "../utils/data";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Flex direction="column" justify="center" p={4}>
      <Heading>Welcome to our restaurant!</Heading>

      <Flex justify="center"></Flex>
      <Flex direction="row" gap={4} flexWrap="wrap" justifyContent="center">
        {data.hits.map((recipeItem) => (
          <RecipeCard
            key={recipeItem.recipe.label}
            recipeItem={recipeItem.recipe}
            clickFn={clickFn}
          />
        ))}
      </Flex>
    </Flex>
  );
};
