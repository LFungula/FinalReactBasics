import { Flex, Heading, HStack, Button, Image, Tag } from "@chakra-ui/react";
import { CustomFlex } from "../components/ui/CustomFlex";

export const RecipeItemPage = ({ recipeItem, clickFn }) => {
  const nutrients = Object.values(recipeItem.totalNutrients);

  return (
    <Flex
      className="item_page"
      direction="row"
      p={4}
      wrap="wrap"
      justify="space-evenly"
      align="center"
    >
      <Flex className="item_page_head" direction="column" m={4} w="90vw">
        <Flex justify="center" align="center" m={4}>
          <Button bgColor="seashell" shadow="dark-lg" onClick={() => clickFn()}>
            Return to Menu
          </Button>
        </Flex>

        <Flex
          direction="column"
          align="center"
          bgColor="seashell"
          wrap="wrap"
          p={4}
          borderRadius="lg"
          shadow="dark-lg"
          justify="center"
        >
          <Heading textAlign="center">{recipeItem.label}</Heading>
          <Flex gap={2}>
            <HStack>
              {recipeItem.dietLabels.map((dietLabel) => (
                <Tag size="lg" key={dietLabel} colorScheme="teal">
                  {dietLabel}
                </Tag>
              ))}
            </HStack>
            <HStack>
              {recipeItem.cautions.map((cautionsLabel) => (
                <Tag size="lg" key={cautionsLabel} colorScheme="red">
                  {cautionsLabel}
                </Tag>
              ))}
            </HStack>
            <HStack>
              {recipeItem.mealType.map((mealTypeLabel) => (
                <Tag size="lg" key={mealTypeLabel} colorScheme="blue">
                  {mealTypeLabel}
                </Tag>
              ))}
            </HStack>
            <HStack>
              {recipeItem.dishType.map((dishTypeLabel) => (
                <Tag size="lg" key={dishTypeLabel} colorScheme="yellow">
                  {dishTypeLabel}
                </Tag>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        className="item_page_body"
        direction="row"
        wrap="wrap"
        maxW="90vw"
        justifyContent="center"
        alignItems="flex-start"
      >
        <CustomFlex>
          <Image
            src={recipeItem.image}
            alt={recipeItem.label}
            borderRadius="lg"
            m={1}
          ></Image>
        </CustomFlex>

        <CustomFlex>
          <Heading m={2} textAlign="center">
            Health = Welth
          </Heading>
          <HStack wrap="wrap" justify="center">
            {recipeItem.healthLabels.map((healthLabel) => (
              <Tag
                size="lg"
                w="fit-content"
                key={healthLabel}
                colorScheme="blue"
              >
                {healthLabel}
              </Tag>
            ))}
          </HStack>
        </CustomFlex>

        <CustomFlex>
          <Heading m={2} textAlign="center">
            But how?
          </Heading>
          <HStack wrap="wrap" justify="center">
            {recipeItem.ingredientLines.map((ingredientLine) => (
              <Tag
                size="lg"
                w="fit-content"
                key={ingredientLine}
                colorScheme="blue"
              >
                {ingredientLine}
              </Tag>
            ))}
          </HStack>
        </CustomFlex>
        <CustomFlex>
          <Heading m={2} textAlign="center">
            Things you might like to know
          </Heading>

          <HStack wrap="wrap" justify="center">
            <Tag size="lg" w="fit-content" colorScheme="blue">
              Total time: {recipeItem.totalTime}
            </Tag>
          </HStack>

          <HStack wrap="wrap" justify="center">
            {recipeItem.cuisineType.map((cuisine) => (
              <Tag size="lg" w="fit-content" colorScheme="blue" key={cuisine}>
                Cuisine: {cuisine}
              </Tag>
            ))}
          </HStack>
        </CustomFlex>
        <CustomFlex overflowY="scroll" gap={0}>
          <Heading m={2} textAlign="center">
            Things you do not like to know
          </Heading>
          <HStack wrap="wrap" gap={2} justify="center">
            {nutrients.map((nutriant) => (
              <Tag
                size="lg"
                w="fit-content"
                colorScheme="blue"
                key={nutriant.quantity}
              >
                {nutriant.label} : {Math.round(nutriant.quantity)}{" "}
                {nutriant.unit}
              </Tag>
            ))}
          </HStack>
        </CustomFlex>
      </Flex>
    </Flex>
  );
};
