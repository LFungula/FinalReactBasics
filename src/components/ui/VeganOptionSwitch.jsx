import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

export const VeganOptionSwitch = ({ onSetValue }) => {
  return (
    <>
      <FormControl
        display="flex"
        justifyContent="center"
        alignItems="baseline"
        maxW="fit-content"
        m="auto"
        bgColor="seashell"
        borderRadius="lg"
        p={2}
        shadow="dark-lg"
      >
        <FormLabel fontSize="lg" fontWeight="bold" htmlFor="vegan">
          Show Vegan options only
        </FormLabel>
        <Switch
          colorScheme="green"
          size="lg"
          id="vegan"
          onChange={onSetValue}
        />
      </FormControl>
    </>
  );
};
