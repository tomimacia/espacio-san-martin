import {
  Button,
  Flex,
  Heading,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { TextAndInput } from "./Contaco/Items/TextAndInput";

export const CursoForm = () => {
  const [loadingForm, setLoadingForm] = useState(false);
  const toast = useToast();
  const form = useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoadingForm(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Enviado correctamente",
            description: "Nos contactaremos contigo a la brevedad",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setLoadingForm(false);
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error inesperado",
            description: "Intenta nuevamente en un momento o prueba otro medio",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          setLoadingForm(false);
        }
      )
      .finally(() => {
        form.current?.reset();
      });
  };
  const InputsData = [
    {
      name: "user_email",
      title: "Email",
      placeholder: "ejemplo@mail.com",
      type: "email",
    },
    {
      name: "user_name",
      title: "Nombre completo",
      placeholder: "Ingrese su nombre",
      type: "text",
    },
    {
      name: "user_asunto",
      title: "Asunto",
      placeholder: "Laboral, turnos, horarios...",
      type: "text",
    },
  ];
  return (
    <Flex flexDir="column" gap={3} w={["100%", "90%", "80%", "70%"]}>
      <Heading>¿Quieres participar?</Heading>
      <Flex flexDir="column" p={3}>
        <Heading size="lg">Inscribite!</Heading>
        <form ref={form} onSubmit={() => console.log("onSubmit")}>
          <Flex flexDir="column" gap={3}>
            {InputsData.map((data) => {
              const { name, title, placeholder, type } = data;
              return (
                <TextAndInput
                  key={name}
                  name={name}
                  title={title}
                  placeholder={placeholder}
                  type={type}
                />
              );
            })}
            
            <Button
              type="submit"
              value="send"
              mx={5}
              w="50%"
              fontWeight="bold"
              size="sm"
              maxW="200px"
              mt={5}
              bg="blue.400"
              isLoading={loadingForm}
            >
              Enviar
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};
