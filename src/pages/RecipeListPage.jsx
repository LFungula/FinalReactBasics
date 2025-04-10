import { Flex, Heading } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { useEffect } from "react";

export const RecipeListPage = ({ recipeItems, clickFn }) => {
  useEffect(() => {
    window.scroll(0, 0, "smooth");
  });

  return (
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
  );
};
