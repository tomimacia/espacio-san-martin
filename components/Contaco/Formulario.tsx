import useEmailJsForm from "@/hooks/emailJS";
import { Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { TextAndInput } from "./Items/TextAndInput";

export const Formulario = () => {
  const { onSubmit, loadingForm, form } = useEmailJsForm(() =>
    console.log("Sent")
  );

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
        <Input type="hidden" value="Consultas" name="area" />
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
            mx={"auto"}
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
