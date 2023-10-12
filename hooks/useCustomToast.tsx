import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();
  const successToast = (title: string) => {
    return toast({
      title: title,
      status: "success",
      isClosable: true,
    });
  };
  const errorToast = (title: string) => {
    return toast({
      title: title,
      status: "error",
      isClosable: true,
    });
  };
  return { errorToast, successToast };
};
