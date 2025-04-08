import { Flex, Input } from "@chakra-ui/react";

export const Searchbar = ({ changeFn }) => {
  return (
    <Flex m={4}>
      <Input
        bgColor="seashell"
        m="auto"
        w="75vw"
        shadow="dark-lg"
        type="text"
        placeholder="Search your fooditem by name here"
        onChange={changeFn}
      ></Input>
    </Flex>
  );
};
