import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Center } from "@chakra-ui/react";
import { RecipeCard } from "./components/RecipeCard";

export const App = () => {
  const [recipeItemChoice, setrecipeItemChoice] = useState();

  return (
    <Center>
      {recipeItemChoice ? (
        <RecipeCard
          recipeItem={recipeItemChoice}
          clickFn={setrecipeItemChoice}
        />
      ) : (
        <RecipeListPage clickFn={setrecipeItemChoice} />
      )}
    </Center>
  );
};
