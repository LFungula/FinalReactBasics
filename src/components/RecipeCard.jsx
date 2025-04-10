import { Image, HStack, Tag, Heading } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const RecipeCard = ({ recipeItem, clickFn }) => {
  return (
    <Card
      m={4}
      bgColor="seashell"
      w={{ base: "90%", sm: "xs" }}
      onClick={() => clickFn(recipeItem)}
      cursor="pointer"
      borderRadius="lg"
      shadow="dark-lg"
      maxH={{ base: "fit-content", md: "80vw" }}
      overflow="auto"
    >
      <CardHeader>
        <Heading size="lg" textAlign="center">
          {recipeItem.label}{" "}
        </Heading>
      </CardHeader>
      <CardBody overflowY="contain">
        <Flex
          direction="column"
          wrap="wrap"
          justify="center"
          alignItems="center"
        >
          <Flex direction="row">
            {recipeItem.healthLabels.includes("Vegetarian") ? (
              <Tag colorScheme="green" size="md" m={1}>
                Vegetarian
              </Tag>
            ) : (
              ""
            )}
            {recipeItem.healthLabels.includes("Vegan") ? (
              <Tag colorScheme="green" size="md" m={1}>
                Vegan
              </Tag>
            ) : (
              ""
            )}
          </Flex>

          <Image
            src={recipeItem.image}
            alt={recipeItem.label}
            borderRadius="lg"
            m={1}
            objectFit="scale-down"
            maxH="30vh"
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
        </Flex>
      </CardBody>
    </Card>
  );
};
