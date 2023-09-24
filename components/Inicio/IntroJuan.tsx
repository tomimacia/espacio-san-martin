import JuanIntro from "@/public/JuanIntroBio.jpg";
import {
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
const BioJuan = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const variants: Variants = {
    hidden: (delay: number) => ({
      opacity: 0,
      x: delay === 0.5 ? -50 : 50,
    }),
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: delay },
    }),
    transition: { type: "easeIn" },
  };
  const imageSize = useBreakpointValue([100, 150, 200, 250]);
  return (
    <Flex px={5} gap={4} flexDir="column">
      <Heading as="h3" alignSelf="center" size="lg">
        Sobre Juan Cruz
      </Heading>
      <Flex ref={ref} align="center" flexDir={{ base: "column", md: "row" }}>
        <motion.div
          initial="hidden"
          custom={0.5}
          animate={inView ? "visible" : ""}
          variants={variants}
        >
          <Image
            width={imageSize}
            style={{ borderRadius: "10px" }}
            height={imageSize}
            src={JuanIntro.src}
            alt="Médico-perfil"
          />
        </motion.div>
        <motion.div
          custom={0.7}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={variants}
          style={{ maxWidth: "70%" }}
        >
          <Text
            p={{ base: 0, md: 10 }}
            pt={{ base: 5, md: 0 }}
            fontSize={[13, 17, 19, 20, 21]}
          >
            <strong>Juan Cruz San Martín</strong>: Abogado, docente, y activista
            político comprometido con Esteban Echeverría. Fundador de
            merenderos, líder de una ONG y conductor de un programa radial. Su
            dedicación abarca la educación especial, la política local y el
            bienestar comunitario.
          </Text>
        </motion.div>
      </Flex>
      <motion.div
        style={{ display: "flex" }}
        initial="hidden"
        custom={0.5}
        animate={inView ? "visible" : ""}
        variants={variants}
      >
        <Button as={Link} href="/Bio" m="auto" bg="blue.400" size="sm">
          Ver más
        </Button>
      </motion.div>
    </Flex>
  );
};

export default BioJuan;
