"use client";
import { Box, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      h="60px"
      position="fixed"
      width={{ base: "95%", md: "80%" }}
      top={6}
      left="50%"
      transform="translateX(-50%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="gray.500">Navbar 组件框架</Text>
    </Box>
  );
}