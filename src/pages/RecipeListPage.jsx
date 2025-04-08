import { Flex, Heading } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ recipeItems, clickFn }) => {
  return (
    <Flex direction="column" justify="center" p={4} align="center">
      <Heading>Welcome to our restaurant!</Heading>

      <Flex direction="row" gap={4} flexWrap="wrap" justifyContent="center">
        {recipeItems.map((recipeItem) => (
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
