import BannerNavbar from "@/public/BannerNavbar.jpg";
import LogoNavbar from "@/public/LogoNavbar.jpg";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ColorModeSwitch from "./ColorModeSwitch";
import { NavLink } from "./NavLink";
import Media from "./Contaco/Media";
const Links = [
  { title: "Cursos", href: "/Cursos" },
  { title: "Sobre Nosotros", href: "/Nosotros" },
  { title: "Contacto", href: "/Contacto" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const variants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };
  const imageNavbarSize = useBreakpointValue([50, 95]);
  return (
    <Box position="relative" zIndex={10} pos="fixed" as="nav" w="100%">
      <Flex
        fontSize={[13, 14, 15, 16, 18, 20]}
        align="center"
        fontWeight="medium"
        h={["4.8rem", "6rem"]}
        bg={useColorModeValue("brandLight", "brandDark")}
        justify="center"
        px={0}
      >
        <Flex w="100%" maxW="65%" justify="space-around" gap={10}>
          <Image
            alt="depierre-logo"
            width={220}
            style={{
              objectFit: "contain",
              borderRadius: "10px",
            }}
            height={220}
            src={BannerNavbar.src}
          />
          <Flex borderRadius="10px">
            <Media dir="row" size={25} />
          </Flex>
          {/* <Flex minW="50%">
            <Flex justify="space-around" fontSize={[14,14,15,16,17]} flexDir="column">
              <Text>Lun a vie de 9:00 a 17:00 Hs.</Text>
              <Text>Ecocardiograma Vie 13:00 Hs.</Text>
              <Text>Tel: (+54) 11-3572-0347</Text>
            </Flex>
          </Flex> */}
        </Flex>
      </Flex>
      <Box bg="whiteAlpha.400" style={{ backdropFilter: "blur(10px)" }}>
        <Flex
          mx="auto"
          maxW="1500px"
          h="2.8em"
          alignItems="center"
          justifyContent="space-between"
          pl={3}
          gap={4}
        >
          <motion.div
            style={{ borderRadius: "50%", border: "1px solid transparent" }}
            whileHover={{ rotate: 10, border: "1px solid blue" }}
          >
            <Link href="/">
              <Image
                alt="depierre-logo"
                width={imageNavbarSize}
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
                height={20}
                src={LogoNavbar.src}
              />
            </Link>
          </motion.div>
          <Flex gap={2} align="center">
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems="center">
              <HStack
                as="nav"
                spacing={6}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => {
                  const { title, href } = link;
                  return <NavLink key={title} title={title} href={href} />;
                })}
              </HStack>
            </HStack>
            <ColorModeSwitch />
          </Flex>
        </Flex>

        <AnimatePresence initial mode="wait">
          {isOpen && (
            <motion.div
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ type: "tween" }}
            >
              <Box pl={3} pb={4} display={{ md: "none" }}>
                <Stack w="50%" as="nav" spacing={4}>
                  {Links.map((link) => {
                    const { title, href } = link;
                    return (
                      <NavLink
                        key={title}
                        title={title}
                        onClick={onClose}
                        href={href}
                      />
                    );
                  })}
                </Stack>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}
