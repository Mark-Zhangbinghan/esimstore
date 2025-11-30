// components/PopularBanner.tsx
"use client";

import { Box, Text } from "@chakra-ui/react";

export function PopularBanner() {
  return (
    <Box
      h="44px"
      borderRadius="md"
      bgGradient="linear(to-r, blue.600, purple.600)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb={4}
    >
      <Text fontWeight="bold" letterSpacing="wider">
        POPULAR CHOICE
      </Text>
    </Box>
  );
}
