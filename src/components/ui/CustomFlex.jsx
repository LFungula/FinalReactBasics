import { Flex } from "@chakra-ui/react";

export const CustomFlex = ({ ...props }) => {
  return (
    <Flex
      wrap="wrap"
      direction="row"
      p={4}
      mb={4}
      w="sm"
      minH="fit-content"
      h={{ base: "fit-content", md: "sm", lg: "md" }}
      borderRadius="lg"
      bgColor="seashell"
      shadow="dark-lg"
      justify="center"
      m={4}
      {...props}
    ></Flex>
  );
};
