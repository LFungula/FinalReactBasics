import { Flex, Heading } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { data } from "../utils/data";
import { Searchbar } from "../components/SearchBar";
import tiles from "../assets/tiles.jpg";

export const RecipeListPage = ({ clickFn, includeData }) => {
  return (
    <Flex
      bgColor="blue.100"
      direction="column"
      style={{ backgroundImage: `url(${tiles})` }}
    >
      <Flex justify="center" p={4}>
        <Heading>Welcome to our restaurant!</Heading>
      </Flex>
      <Flex justify="center">
        <Searchbar />
      </Flex>
      <Flex direction="row" gap={4} flexWrap="wrap" justifyContent="center">
        {data.hits.map((recipeItem) => (
          <RecipeCard
            key={recipeItem.recipe.label}
            recipeItem={recipeItem.recipe}
            clickFn={clickFn}
          />
        ))}
      </Flex>
    </Flex>
  );
};
