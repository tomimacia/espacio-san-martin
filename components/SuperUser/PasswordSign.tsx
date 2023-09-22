import { useEnter } from "@/hooks/eventHooks/useEnter";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const PasswordSign = ({
  setPassword,
}: {
  setPassword: (password: string) => void;
}) => {
  const [inputText, setInputText] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const toast = useToast();
  const valueRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => setShow(!show);

  const handleIngresar = () => {
    if (!inputText) return;
    setPassword(inputText);
    if (inputText !== process.env.NEXT_PUBLIC_SUPERUSER_PWD) {
      toast({
        title: "Error",
        description: "Contraseña incorrecta",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex gap={5} flexDir="column" w="50%" justify="center">
      <Text fontSize={20} fontWeight="bold">
        Contraseña:
      </Text>
      <InputGroup size="md">
        <Input
          borderColor="gray"
          ref={valueRef}
          onKeyDown={useEnter(valueRef, handleIngresar)}
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Ingresar contraseña"
          onChange={(e) => setInputText(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        w="50%"
        maxW={"220px"}
        bg="blue.400"
        _hover={{ bg: "blue.200" }}
        onClick={handleIngresar}
      >
        Ingresar
      </Button>
    </Flex>
  );
};

export default PasswordSign;
