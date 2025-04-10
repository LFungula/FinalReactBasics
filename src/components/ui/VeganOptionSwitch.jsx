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
      >
        <FormLabel fontSize="lg" fontWeight="bold" p={2} htmlFor="vegan">
          Show only Vegan options
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
