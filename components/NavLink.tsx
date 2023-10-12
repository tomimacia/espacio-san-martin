import { NavLinkType } from "@/types/types";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link"
export const NavLink = ({ title, href, onClick }: NavLinkType) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    fontSize={20}
    fontWeight="medium"    
    rounded="md"
    _hover={{
      textDecoration: "underline",
      bg: "none",
    }}
    href={href}
    onClick={onClick}    
  >
    {title}
  </Link>
);
