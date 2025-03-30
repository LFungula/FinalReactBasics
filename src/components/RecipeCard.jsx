import { Image, HStack, Tag, VStack, Heading } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const RecipeCard = ({ recipeItem, clickFn }) => {
  return (
    <Card
      m={4}
      bgColor="seashell"
      w="sm"
      onClick={() => clickFn(recipeItem)}
      cursor="pointer"
      borderRadius="lg"
    >
      <CardBody>
        <Flex direction="column">
          <CardHeader>
            <Heading textAlign="center">{recipeItem.label} </Heading>
          </CardHeader>
          <VStack>
            <Image
              src={recipeItem.image}
              alt={recipeItem.label}
              maxW="container.fit-content"
              borderRadius="lg"
            ></Image>

            <HStack p={1}>
              {recipeItem.dietLabels.map((dietLabel) => (
                <Tag key={dietLabel} colorScheme="teal">
                  {dietLabel}
                </Tag>
              ))}
            </HStack>
            <HStack p={1}>
              {recipeItem.cautions.map((cautionsLabel) => (
                <Tag key={cautionsLabel} colorScheme="red">
                  {cautionsLabel}
                </Tag>
              ))}
            </HStack>
            <HStack p={1}>
              {recipeItem.mealType.map((mealTypeLabel) => (
                <Tag key={mealTypeLabel} colorScheme="blue">
                  {mealTypeLabel}
                </Tag>
              ))}
            </HStack>
            <HStack p={1}>
              {recipeItem.dishType.map((dishTypeLabel) => (
                <Tag key={dishTypeLabel} colorScheme="yellow">
                  {dishTypeLabel}
                </Tag>
              ))}
            </HStack>
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};
