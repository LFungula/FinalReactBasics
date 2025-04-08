import { Flex } from "@chakra-ui/react";

export const CustomFlex = ({ ...props }) => {
  return (
    <Flex
      wrap="wrap"
      direction="row"
      p={4}
      m={4}
      w="lg"
      h="lg"
      borderRadius="lg"
      bgColor="seashell"
      shadow="dark-lg"
      justify="center"
      gap={2}
      {...props}
    ></Flex>
  );
};
