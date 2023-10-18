import { Flex, Switch, Text } from "@chakra-ui/react";
import React from "react";

const IsAvailableInput = ({
  Title,
  state,
  setState,
}: {
  Title: string;
  state: boolean;
  setState: (state: boolean) => void;
}) => {
  return (
    <Flex align="center">
      <Text minW="25%">{Title}:</Text>
      <Switch
        colorScheme="teal"
        isChecked={state}
        onChange={() => setState(!state)}
        size="md"
      />
      <Text mx={2} color={state ? "green" : "red"}>{state ? "Si" : "No"}</Text>
    </Flex>
  );
};

export default IsAvailableInput;
