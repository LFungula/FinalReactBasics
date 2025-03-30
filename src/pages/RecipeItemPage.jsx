import { Flex, Heading, HStack, Text, Tag, Button } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeItemPage = ({ recipeItem, clickFn }) => {
  console.log(recipeItem.label);
  return (
    <Flex
      bgColor="pink.100"
      direction="row"
      p={4}
      wrap="wrap"
      justify="space-evenly"
      w="100vw"
      minH="100vh"
      align="flex-start"
    >
      <Flex justify="center" w="100vw">
        <Button shadow="dark-lg" onClick={() => clickFn()}>
          Return to Menu
        </Button>
      </Flex>
      <RecipeCard recipeItem={recipeItem} />
      <Flex
        wrap="wrap"
        direction="row"
        border="2px dotted seashell"
        p={4}
        m={4}
        w="sm"
        borderRadius="lg"
        bgColor="blue.100"
        shadow="dark-lg"
        justify="center"
      >
        <Heading m={2} textAlign="center">
          Health = Welth
        </Heading>
        <HStack p={1} wrap="wrap" gap={1} justify="center">
          {recipeItem.healthLabels.map((healthLabel) => (
            <Tag w="fit-content" key={healthLabel} colorScheme="teal">
              {healthLabel}
            </Tag>
          ))}
        </HStack>
      </Flex>
      <Flex
        wrap="wrap"
        direction="row"
        border="2px dotted seashell"
        p={4}
        m={4}
        w="sm"
        borderRadius="lg"
        bgColor="teal.100"
        shadow="dark-lg"
        justify="center"
      >
        <Heading m={2} textAlign="center">
          What&apos;s in in for me?
        </Heading>
        <HStack p={1} wrap="wrap" gap={1} justify="center">
          {recipeItem.ingredientLines.map((ingredientLine) => (
            <Tag w="fit-content" key={ingredientLine} colorScheme="blue">
              {ingredientLine}
            </Tag>
          ))}
        </HStack>
      </Flex>
      <Flex
        wrap="wrap"
        direction="row"
        border="2px dotted seashell"
        p={4}
        m={4}
        w="sm"
        borderRadius="lg"
        bgColor="lightyellow"
        shadow="dark-lg"
        justify="center"
      >
        <Heading m={2} textAlign="center">
          Things you might like to know
        </Heading>
        <HStack p={1} wrap="wrap" gap={1} justify="center">
          <Tag w="fit-content" colorScheme="orange">
            It takes your chef {recipeItem.totalTime} minutes tp prepare this
            dish!
          </Tag>
          <Tag w="fit-content" colorScheme="orange">
            Cuisinetype :
            {recipeItem.cuisineType.map((cuisine) => {
              return ` ${cuisine},`;
            })}
          </Tag>
        </HStack>
      </Flex>
      <Flex
        wrap="wrap"
        direction="row"
        border="2px dotted seashell"
        p={4}
        m={4}
        w="sm"
        borderRadius="lg"
        bgColor="cyan.100"
        shadow="dark-lg"
        justify="center"
      >
        <Heading m={2} textAlign="center">
          Things you do not like to know
        </Heading>
        <HStack p={1} wrap="wrap" gap={1} justify="center">
          {recipeItem.ingredientLines.map((ingredientLine) => (
            <Tag w="fit-content" key={ingredientLine} colorScheme="pink">
              {ingredientLine}
            </Tag>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
