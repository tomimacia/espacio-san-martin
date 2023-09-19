import { useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const useEmailJsForm = (callback:()=>void) => {
  const [loadingForm, setLoadingForm] = useState(false);
  const toast = useToast();
  const form = useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoadingForm(true);   
    console.log(form.current); 
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
        callback()
      });
  };  
 
  return { onSubmit, loadingForm, form };
};

export default useEmailJsForm;
