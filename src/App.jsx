import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import tiles from "./assets/tiles.jpg";
import { Flex } from "@chakra-ui/react";
import { Searchbar } from "./components/SearchBar";

export const App = () => {
  const [recipeItemChoice, setrecipeItemChoice] = useState();
  const [FilteredRecipes, setFilteredRecipes] = useState();
  console.log(FilteredRecipes);

  return (
    <Flex
      bgColor="blue.100"
      direction="column"
      style={{ backgroundImage: `url(${tiles})` }}
      fontFamily="Century Gothic"
      justify="center"
    >
      <>
        <Searchbar
          FilteredRecipes={FilteredRecipes}
          setFilteredRecipes={setFilteredRecipes}
        />
        {recipeItemChoice ? (
          <RecipeItemPage
            recipeItem={recipeItemChoice}
            clickFn={setrecipeItemChoice}
          />
        ) : (
          <RecipeListPage
            clickFn={setrecipeItemChoice}
            FilteredRecipes={FilteredRecipes}
          />
        )}
      </>
    </Flex>
  );
};
