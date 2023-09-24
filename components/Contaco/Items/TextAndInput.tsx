import { TextAndInputType } from "@/types/types";
import { Box, Input, Text } from "@chakra-ui/react";

export const TextAndInput = ({
  name,
  title,
  placeholder,
  type,
}: TextAndInputType) => {
  return (
    <Box>
      <Text>{title}:</Text>
      <Input
        name={name}
        placeholder={placeholder}
        border="1px solid gray"
        type={type}        
        required
      />
    </Box>
  );
};
