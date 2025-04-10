import { SearchIcon, Search2Icon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
SearchIcon;

export const Searchbar = ({ changeFn }) => {
  return (
    <Flex m={4} justify="center">
      <InputGroup w="75vw">
        <InputLeftElement pointerEvents="none" h="100%">
          <Search2Icon color="blue.400"></Search2Icon>
        </InputLeftElement>
        <Input
          bgColor="seashell"
          m="auto"
          shadow="dark-lg"
          type="text"
          placeholder="Search your food / tiem by name here"
          onChange={changeFn}
          size="lg"
        ></Input>
      </InputGroup>
    </Flex>
  );
};
