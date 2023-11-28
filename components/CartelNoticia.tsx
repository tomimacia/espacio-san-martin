import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const CartelNoticia = ({
  setShowCartel,
}: {
  setShowCartel: (state: boolean) => void;
}) => {
  const variants = {
    initial: {
      y: -500,
    },
    enter: {
      y: 0,
      transition: { delay: 1, type: "tween", duration: 1.5 },
    },
    exit: {
      y: -500,
    },
  };
  const height = useBreakpointValue(["7rem", "8.5rem"]);
  const router = useRouter();
  const handleClick = () => {
    router.push("/#cooperativistas", undefined, { scroll: false });
    setShowCartel(false);
  };
  return (
    <motion.div
      style={{
        position: "fixed",
        height: height,
        width: "100vw",
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
        backdropFilter: "blur(10px)",
      }}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ type: "tween" }}
    >
      <Flex
        bg="green.300"
        borderRadius="0 0 10px 10px"
        h={height}
        mx="auto"
        flexDir="column"
        align="center"
        w={["100%", "100%", "90%", "80%"]}
        pos="relative"
        justify="space-around"
      >
        <Heading as="h3" size={["sm", "md", "lg", "xl"]}>
          Sos <strong>COOPERATIVISTA</strong>?
        </Heading>
        <Button
          bg="#63B3ED"
          _hover={{ bg: "#6393E2", color: "white" }}
          onClick={handleClick}
        >
          Sumate!
        </Button>
        <IconButton
          pos="absolute"
          right={1}
          top={1}
          _hover={{opacity:0.8}}
          aria-label="close-cartel-button"
          size={["xs", "xs", "sm", "sm"]}
          icon={<CloseIcon />}
          onClick={() => setShowCartel(false)}
        />
      </Flex>
    </motion.div>
  );
};

export default CartelNoticia;
