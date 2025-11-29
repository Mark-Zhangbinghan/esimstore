"use client";
import { Box, Text } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box
      minH="100vh" 
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f5f7fa" 
      border="1px solid #eee" 
    >
      <Text color="gray.500" fontSize="2xl" fontWeight="medium">
        HeroSection 组件框架
      </Text>
    </Box>
  );
}