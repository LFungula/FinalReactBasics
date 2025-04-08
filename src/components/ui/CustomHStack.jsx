import { HStack } from "@chakra-ui/react";

export const CustomHStack = ({ ...props }) => {
  return (
    <HStack
      wrap="wrap"
      justify="center"
      gap={2}
      {...props}
      alignSelf="flex-start"
    ></HStack>
  );
};
