import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import tiles from "./assets/tiles.jpg";
import { Flex } from "@chakra-ui/react";
import { Searchbar } from "./components/SearchBar";

export const App = () => {
  const [recipeItemChoice, setrecipeItemChoice] = useState();
  const [searchResults, setSearchResults] = useState();

  return (
    <Flex
      bgColor="blue.100"
      direction="column"
      style={{ backgroundImage: `url(${tiles})` }}
      fontFamily="Century Gothic"
      justify="center"
    >
      {recipeItemChoice ? (
        <RecipeItemPage
          recipeItem={recipeItemChoice}
          clickFn={setrecipeItemChoice}
        />
      ) : (
        <>
          <Searchbar changeFn={setSearchResults} />
          <RecipeListPage
            clickFn={setrecipeItemChoice}
            changeFn={setSearchResults}
          />
        </>
      )}
    </Flex>
  );
};
