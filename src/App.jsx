import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Center } from "@chakra-ui/react";
import { RecipeItemPage } from "./pages/RecipeItemPage";

export const App = () => {
  const [recipeItemChoice, setrecipeItemChoice] = useState();

  return (
    <Center>
      {recipeItemChoice ? (
        <RecipeItemPage
          recipeItem={recipeItemChoice}
          clickFn={setrecipeItemChoice}
        />
      ) : (
        <RecipeListPage clickFn={setrecipeItemChoice} />
      )}
    </Center>
  );
};
