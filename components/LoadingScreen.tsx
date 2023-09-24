import BannerNavBar from "@/public/BannerNavbar.jpg";
import { Center, Flex, Heading } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import ReactLoading from "react-loading";
const LoadingScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          backgroundColor: "#6233BF",
          top: 0,
          zIndex: 20000,
        }}
        variants={variants}
        transition={{ type: "tween", duration: 0.2 }}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Center alignItems="center" mt="20vh">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              alt="banner-espacio-san-martin"
              width={500}
              height={500}
              src={BannerNavBar.src}
              style={{ borderRadius: "10px", maxWidth: "85%" }}
            />
            <ReactLoading
              type="bubbles"
              color="white"
              height="50%"
              width="50%"
            />
          </Flex>
        </Center>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
