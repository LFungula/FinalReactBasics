import { Flex } from "@chakra-ui/react";

export const CustomFlex = ({ ...props }) => {
  return (
    <Flex
      wrap="wrap"
      direction="row"
      p={4}
      m={2}
      w="sm"
      h={{ base: "fit-content", md: "sm", lg: "md" }}
      borderRadius="lg"
      bgColor="seashell"
      shadow="dark-lg"
      justify="center"
      {...props}
    ></Flex>
  );
};
