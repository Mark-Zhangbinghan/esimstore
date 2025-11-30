// utils/Navbar/components.tsx
"use client";
import { Button, Link } from "@chakra-ui/react";

export const IconButton = ({ href, words, rightIcon }) => (
  <Button
    as={Link}
    href={href}
    color="teal"
    variant="solid"
    borderRadius="full"
    size={{ base: "sm", md: "md" }}
    _hover={{ textDecoration: "none" }}
    rightIcon={rightIcon}
  >
    {words}
  </Button>
);
