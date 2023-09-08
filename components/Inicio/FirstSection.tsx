import { Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "typewriter-effect";
const FirstSection = () => {
  const [textTitle, setTextTitle] = useState({
    title: "Explorá",
    color: "#3AA6B9",
  });

  return (
    <Flex w="100%" paddingY={14}>
      <Flex gap={3} fontSize={[20, 22, 23, 25]} pos="relative" align="center">
        <Flex minW="95px">
          <AnimatePresence mode="wait">
            <motion.h3
              key={textTitle.title}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ type: "tween", duration: 0.5 }}
              style={{
                fontWeight: "bold",
                color: textTitle.color,
              }}
            >
              {textTitle.title}
            </motion.h3>
          </AnimatePresence>
        </Flex>
        <Flex>
          <Typewriter
            onInit={(typewriter) => {
              const PAUSE_TIME = 2100;
              typewriter
                .typeString("tus posibilidades")
                .pauseFor(PAUSE_TIME)
                .deleteChars(15)
                .callFunction(() =>
                  setTextTitle({
                    title: "Descubre",
                    color: "#E966A0",
                  })
                )
                .typeString(" potencial")
                .pauseFor(PAUSE_TIME)
                .deleteChars(9)
                .callFunction(() =>
                  setTextTitle({
                    title: "Desarrollá",
                    color: "#6554AF",
                  })
                )
                .typeString("creatividad")
                .pauseFor(PAUSE_TIME)
                .deleteChars(14)
                .callFunction(() =>
                  setTextTitle({
                    title: "Conectá",
                    color: "#9575DE",
                  })
                )
                .typeString(" con tus metas")
                .pauseFor(PAUSE_TIME)
                .deleteAll()
                .callFunction(() =>
                  setTextTitle({
                    title: "Amplía",
                    color: "#3AA6B9",
                  })
                )
                .typeString(" tu horizonte creativo")
                .pauseFor(PAUSE_TIME)
                .deleteAll()
                .callFunction(() =>
                  setTextTitle({
                    title: "Explorá",
                    color: "#3AA6B9",
                  })
                )
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FirstSection;
