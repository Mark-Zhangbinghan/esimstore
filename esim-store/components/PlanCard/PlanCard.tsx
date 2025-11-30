import { Box, Text } from "@chakra-ui/react";

export default function PlanCard({ plan }: any) {
  return (
    <Box
      w="320px"
      h="480px"
      borderRadius="2xl"
      boxShadow="xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="gray.500">PlanCard 组件框架</Text>
    </Box>
  );
}