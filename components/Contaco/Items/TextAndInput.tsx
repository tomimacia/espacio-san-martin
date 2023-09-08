import { TextAndInputType } from "@/types/types";
import { Input, Text } from "@chakra-ui/react";

export const TextAndInput = ({
  name,
  title,
  placeholder,
  type,
}: TextAndInputType) => {
  return (
    <>
      <Text>{title}:</Text>
      <Input
        name={name}
        placeholder={placeholder}
        border="1px solid gray"
        type={type}
        required
      />
    </>
  );
};
