"use client";
import { Box, Text } from "@chakra-ui/react";

interface PurchaseClientProps {
  plan: any;
}

export default function PurchaseClient({ plan }: PurchaseClientProps) {
  return (
    <Box
      minH="100vh"
      pt="60px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="gray.500">PurchaseClient 组件框架（套餐：{plan.name}）</Text>
    </Box>
  );
}