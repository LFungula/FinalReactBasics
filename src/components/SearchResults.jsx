import { useState } from "react";
import { data } from "../utils/data";
import { Searchbar } from "./ui/SearchBar";
import { RecipeListPage } from "../pages/RecipeListPage";

import { VeganOptionSwitch } from "./ui/VeganOptionSwitch";

export const SearchResults = ({ clickFn }) => {
  const [searchField, setsearchField] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  //console.log(switchValue);
  const setValue = () => setSwitchValue(!switchValue);

  //switchValue ? console.log("Yes") : console.log("no");

  const foundRecipes = data.hits.filter((recipes) => {
    return recipes.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const veganRecipes = foundRecipes.filter((recipes) => {
    return recipes.recipe.healthLabels.includes("Vegan");
  });

  let generatedRecipeItems = [];

  switchValue
    ? (generatedRecipeItems = veganRecipes)
    : (generatedRecipeItems = foundRecipes);

  console.log(foundRecipes);

  const changeFn = (e) => setsearchField(e.target.value);

  return (
    <>
      <Searchbar changeFn={changeFn} />
      <VeganOptionSwitch onSetValue={setValue} />
      <RecipeListPage clickFn={clickFn} recipeItems={generatedRecipeItems} />
    </>
  );
};
