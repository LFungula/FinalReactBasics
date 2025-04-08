import { useState } from "react";
import { data } from "../utils/data";
import { Searchbar } from "./ui/SearchBar";
import { RecipeListPage } from "../pages/RecipeListPage";

export const SearchResults = ({ clickFn }) => {
  const [searchField, setsearchField] = useState("");

  const foundRecipes = data.hits.filter((recipes) => {
    return recipes.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });
  console.log(searchField);

  console.log(foundRecipes);

  const changeFn = (e) => setsearchField(e.target.value);

  return (
    <>
      <Searchbar changeFn={changeFn} />
      <RecipeListPage clickFn={clickFn} recipeItems={foundRecipes} />
    </>
  );
};
