import {
  Button,
  ButtonProps,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
type ConfirmModalType = {
  handleClick: () => void;
  children: React.ReactNode;
  ButtonText: string;
  Title: string;
  isLoading?: boolean;
  buttonProps: ButtonProps;
};
const ConfirmModal = ({
  handleClick,
  children,
  ButtonText,
  Title,
  isLoading = false,
  buttonProps,
}: ConfirmModalType) => {
  const fontColor = useColorModeValue("brandLight", "blue.400");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button onClick={onOpen} isLoading={isLoading} {...buttonProps}>
        {ButtonText}
      </Button>

      <Modal
        size={["xl", "2xl", "3xl", "3xl"]}
        isCentered
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            zIndex={10}
            _hover={{ bg: "blackAlpha.400" }}
            bg="blackAlpha.200"
          />
          <ModalBody>
            <Heading p={3} fontSize="xl">
              {Title}
            </Heading>
            {children}
            <Flex p={5} flexDir="column" gap={3}>
              <Button
                mx="auto"
                fontWeight="bold"
                maxW="200px"
                mt={5}
                bg={fontColor}
                color="white"
                border="1px solid transparent"
                _hover={{ opacity: 0.7, border: "1px solid gray" }}
                onClick={handleClick}
                isLoading={isLoading}
              >
                Confirmar
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ConfirmModal;
