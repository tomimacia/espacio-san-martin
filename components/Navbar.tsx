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
import { useRouter } from "next/router";
import { useClickOutside } from "@/hooks/useClickOutside";
const Links = [
  { title: "Cursos", href: "/Cursos" },
  { title: "Nosotros", href: "/Nosotros" },
  { title: "Sobre Juan", href: "/Bio" },
  { title: "Contacto", href: "/Contacto" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const domNode = useClickOutside(() => {
    onClose();
  });
  const variants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -10,
    },
  };
  const imageNavbarSize = useBreakpointValue([55, 60, 65, 95]);
  return (
    <Box id="NavBarID" position="relative" zIndex={10} pos="fixed" as="nav" w="100%">
      <Flex
        align="center"
        h={["4.8rem", "6rem"]}
        bg={useColorModeValue("brandLight", "brandDark")}
        justify="center"
        px={0}
      >
        <Flex
          align="center"
          justifyContent="space-around"
          w="100%"
          maxW="65%"
          justify="space-around"
          gap={[2, 4, 7, 10]}
        >
          <Image
            onClick={() => router.push("/")}
            alt="depierre-logo"
            width={220}
            style={{
              objectFit: "contain",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            height={220}
            src={BannerNavbar.src}
          />

          <Media dir="row" size={25} />
        </Flex>
      </Flex>
      <Box
        ref={domNode}
        bg="whiteAlpha.400"
        style={{ backdropFilter: "blur(10px)" }}
      >
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
              bg="blackAlpha.300"
              border="1px solid gray"
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
