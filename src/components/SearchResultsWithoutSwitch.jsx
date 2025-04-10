import { useState } from "react";
import { data } from "../utils/data";
import { Searchbar } from "./ui/SearchBar";
import { RecipeListPage } from "../pages/RecipeListPage";
import { VeganOptions } from "./VeganOptions";

export const SearchResults = ({ clickFn, switchFn, filteredOnVegan }) => {
  const [searchField, setsearchField] = useState("");

  const foundRecipes = data.hits.filter((recipes) => {
    return recipes.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const changeFn = (e) => setsearchField(e.target.value);
  console.log(filteredOnVegan);

  return (
    <>
      <Searchbar changeFn={changeFn} />
      <VeganOptions onChange={switchFn} recipeItems={foundRecipes} />
      <RecipeListPage clickFn={clickFn} recipeItems={foundRecipes} />
    </>
  );
};
