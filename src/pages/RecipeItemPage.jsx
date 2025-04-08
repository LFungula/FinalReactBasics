import { Flex, Heading, HStack, Button, Image } from "@chakra-ui/react";
import { CustomFlex } from "../components/ui/CustomFlex";
import { CustomTag } from "../components/ui/CustomTag";
import { CustomHStack } from "../components/ui/CustomHStack";

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
      <Flex className="item_page_head" direction="column" m={4} w="100%">
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
            <CustomHStack>
              {recipeItem.dietLabels.map((dietLabel) => (
                <CustomTag key={dietLabel}>{dietLabel}</CustomTag>
              ))}

              {recipeItem.cautions.map((cautionsLabel) => (
                <CustomTag key={cautionsLabel}>{cautionsLabel}</CustomTag>
              ))}

              {recipeItem.mealType.map((mealTypeLabel) => (
                <CustomTag key={mealTypeLabel}>{mealTypeLabel}</CustomTag>
              ))}

              {recipeItem.dishType.map((dishTypeLabel) => (
                <CustomTag key={dishTypeLabel}>{dishTypeLabel}</CustomTag>
              ))}

              <CustomTag>Total time: {recipeItem.totalTime}</CustomTag>

              {recipeItem.cuisineType.map((cuisine) => (
                <CustomTag key={cuisine}>Cuisine: {cuisine}</CustomTag>
              ))}
            </CustomHStack>
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
        <CustomFlex alignContent="center">
          <Image
            src={recipeItem.image}
            alt={recipeItem.label}
            borderRadius="lg"
            m={1}
            maxH="95%"
            maxW="95%"
            fit="scale-down"
          ></Image>
        </CustomFlex>

        <CustomFlex>
          <Heading m={2} textAlign="center">
            Health = Welth
          </Heading>
          <CustomHStack>
            {recipeItem.healthLabels.map((healthLabel) => (
              <CustomTag key={healthLabel}>{healthLabel}</CustomTag>
            ))}
          </CustomHStack>
        </CustomFlex>

        <CustomFlex>
          <Heading m={2} textAlign="center">
            But how?
          </Heading>
          <CustomHStack>
            {recipeItem.ingredientLines.map((ingredientLine) => (
              <CustomTag key={ingredientLine}>{ingredientLine}</CustomTag>
            ))}
          </CustomHStack>
        </CustomFlex>

        <CustomFlex
          gap={0}
          w={{ base: "sm", md: "100%" }}
          h={{ base: "fit-content", lg: "fit-content" }}
        >
          <Heading m={2} textAlign="center">
            Things you do not like to know
          </Heading>
          <CustomHStack>
            {nutrients.map((nutriant) => (
              <CustomTag key={nutriant.quantity}>
                {nutriant.label} : {Math.round(nutriant.quantity)}{" "}
                {nutriant.unit}
              </CustomTag>
            ))}
          </CustomHStack>
        </CustomFlex>
      </Flex>
    </Flex>
  );
};
