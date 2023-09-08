import {
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { TextAndInput } from "./Items/TextAndInput";

export const Formulario = () => {
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
      <Heading>
        ¿Tenés alguna duda o querés formar parte de nuestro equipo?
      </Heading>
      <Heading size="lg">Contáctanos!</Heading>
      <form ref={form} onSubmit={onSubmit}>
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
          <Text>Tu consulta:</Text>
          <Textarea
            placeholder="Ingresa tu consulta"
            border="1px solid gray"
            name="message"
            required
          />
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
  );
};
