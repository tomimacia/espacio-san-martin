import { Flex, FormHelperText, FormLabel, Textarea } from "@chakra-ui/react";
type SuperTextInputType = {
  name: string;
  title: string;
  helpText?: string;
};

const TextAreaSuper = ({ name, title, helpText }: SuperTextInputType) => {
  return (
    <Flex flexDir="column">
      <FormLabel>{title}</FormLabel>
      <Textarea        
        size="sm"
        borderRadius="6px"
        borderColor="gray"
        name={name}
        required
      />
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
    </Flex>
  );
};

export default TextAreaSuper;
