import { LinkItemType } from "@/types/types";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
export const LinkPush = ({ title, onClick, active }: LinkItemType) => {
  const bgCustomColor = useColorModeValue("teal", "blue.400");

  return (
    <Button
      onClick={onClick}
      p={1}
      fontWeight={active ? "medium" : "normal"}
      fontSize="100%"
      bg={active ? "brandLight" : bgCustomColor}
      color="white"
      _hover={{ bg: undefined }}
      borderRadius="5px"
      w="130px"
      size="sm"
    >
      <motion.span
        style={{ padding: 1 }}
        animate={{ y: active ? 3 : 0 }}
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.span>
    </Button>
  );
};
