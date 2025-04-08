import { Tag } from "@chakra-ui/react";

export const CustomTag = ({ ...props }) => {
  return <Tag size="md" colorScheme="blue" {...props} textAlign="center"></Tag>;
};
