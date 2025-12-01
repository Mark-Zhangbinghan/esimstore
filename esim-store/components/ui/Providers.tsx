"use client";
import { Box, Text } from "@chakra-ui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Text color="gray.500" textAlign="center">Providers 组件框架（Chakra UI全局配置）</Text>
      {children}
    </Box>
  );
}