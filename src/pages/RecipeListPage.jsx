import { Flex, Heading } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ recipeItems, clickFn }) => {
  return (
    <Flex direction="column" justify="center" p={4} align="center">
      <Flex direction="row" gap={4} flexWrap="wrap" justifyContent="center">
        {recipeItems.length > 0 ? (
          recipeItems.map((recipeItem) => (
            <RecipeCard
              key={recipeItem.recipe.label}
              recipeItem={recipeItem.recipe}
              clickFn={clickFn}
            />
          ))
        ) : (
          <Heading textAlign="center">
            Sorry! <br></br> No recipes found
          </Heading>
        )}
      </Flex>
    </Flex>
  );
};
