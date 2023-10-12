import { Flex, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
type SuperTextInputType = {
  name: string;
  title: string;
  helpText?: string;
};

const TextInputSuper = ({ name, title, helpText }: SuperTextInputType) => {
  return (
    <Flex flexDir="column">
      <FormLabel>{title}</FormLabel>
      <Input
        size="sm"
        borderRadius="6px"
        borderColor="gray"
        name={name}
        type="text"
        required
      />
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
    </Flex>
  );
};

export default TextInputSuper;
