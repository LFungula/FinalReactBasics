import { FormControl, FormLabel, Switch, useBoolean } from "@chakra-ui/react";

export const VeganOptionSwitch = () => {
  const [switchValue, setSwitchValue] = useBoolean();

  const switchFn = (e) => setSwitchValue.toggle(e.target.value);

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
          onChange={switchFn}
          value={switchValue}
        />
      </FormControl>
      {console.log(switchValue)}
      {console.log(vegan)}
    </>
  );
};
