import { useState } from "react";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import tiles from "./assets/tiles.jpg";
import { SearchResults } from "./components/SearchResults";
import { Flex } from "@chakra-ui/react";

export const App = () => {
  const [recipeItemChoice, setrecipeItemChoice] = useState();

  return (
    <Flex
      bgColor="blue.100"
      direction="column"
      style={{ backgroundImage: `url(${tiles})` }}
      fontFamily="Century Gothic"
      justify="center"
      minH="100vh"
    >
      {recipeItemChoice ? (
        <RecipeItemPage
          recipeItem={recipeItemChoice}
          clickFn={setrecipeItemChoice}
        />
      ) : (
        <>
          <SearchResults clickFn={setrecipeItemChoice} />
        </>
      )}
    </Flex>
  );
};
