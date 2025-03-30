import {
  Box,
  Flex,
  Heading,
  Stack,
  HStack,
  Text,
  Tag,
  Button,
} from "@chakra-ui/react";
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
    >
      <Box w="100vw">
        <Flex justify="center">
          <Button shadow="dark-lg" onClick={() => clickFn()}>
            Return to Menu
          </Button>
        </Flex>
      </Box>
      <Box>
        <RecipeCard recipeItem={recipeItem} />
      </Box>
      <Box
        border="2px dotted seashell"
        p={4}
        m={4}
        w="sm"
        borderRadius="lg"
        bgColor="blue.100"
        shadow="dark-lg"
      >
        <Flex wrap="wrap" direction="row">
          <Heading>
            <HStack p={1} wrap="wrap" gap={1} justify="center">
              {recipeItem.healthLabels.map((healthLabel) => (
                <Tag w="fit-content" key={healthLabel} colorScheme="teal">
                  {healthLabel}
                </Tag>
              ))}
            </HStack>
          </Heading>
          <Text>{recipeItem.label}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
