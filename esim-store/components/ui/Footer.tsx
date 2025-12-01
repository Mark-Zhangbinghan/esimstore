"use client";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      py={8}
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="gray.500">Footer 组件框架</Text>
    </Box>
  );
}