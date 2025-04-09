import { useState } from "react";
import { data } from "../utils/data";
import { Searchbar } from "./ui/SearchBar";
import { RecipeListPage } from "../pages/RecipeListPage";
import { VeganOptionSwitch } from "./ui/VeganOptionSwitch";

export const SearchResults = ({ clickFn, switchValue, switchFn }) => {
  const [searchField, setsearchField] = useState("");
  console.log(switchValue);

  const foundRecipes = data.hits.filter((recipes) => {
    return recipes.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const changeFn = (e) => setsearchField(e.target.value);

  return (
    <>
      <Searchbar changeFn={changeFn} />
      <VeganOptionSwitch onChange={switchFn} switchValue={switchValue} />
      <RecipeListPage clickFn={clickFn} recipeItems={foundRecipes} />
    </>
  );
};
