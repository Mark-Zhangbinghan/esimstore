// components/HowItWorksSection.tsx
"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useToken,
} from "@chakra-ui/react";

const HowItWorksSection = () => {
  const [blue200, blue300, blue400] = useToken("colors", [
    "blue.200",
    "blue.300",
    "blue.400",
  ]);

  return (
    <Box
      py={24}
      bgGradient={`linear(to-b, blue.700, blue.800)`}
      color="white"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: "-50%",
        right: "-10%",
        width: "300px",
        height: "300px",
        borderRadius: "full",
        background: `radial-gradient(circle, ${blue200}20 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-30%",
        left: "-10%",
        width: "250px",
        height: "250px",
        borderRadius: "full",
        background: `radial-gradient(circle, ${blue300}15 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          mb={20}
          fontWeight="800"
          letterSpacing="tight"
        >
          How It Works
          <Text
            as="span"
            display="block"
            fontSize="xl"
            mt={3}
            fontWeight="500"
            color="blue.100"
          >
            Get connected in 4 simple steps
          </Text>
        </Heading>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          divider={<StackDivider borderColor="whiteAlpha.300" />}
        >
          <Flex flex={1} direction="column" align="center" textAlign="center">
            <Flex
              justify="center"
              align="center"
              w={16}
              h={16}
              borderRadius="2xl"
              bg="white"
              color="blue.600"
              fontSize="2xl"
              fontWeight="bold"
              mb={6}
              boxShadow="0 4px 14px rgba(0, 0, 0, 0.2)"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.3s ease",
              }}
              transition="transform 0.2s ease"
            >
              1
            </Flex>
            <Heading as="h3" size="lg" mb={4}>
              Choose Your Plan
            </Heading>
            <Text fontSize="lg" opacity={0.9}>
              Select from our global or regional eSIM data plans tailored for
              travelers and remote workers.
            </Text>
          </Flex>

          <Flex flex={1} direction="column" align="center" textAlign="center">
            <Flex
              justify="center"
              align="center"
              w={16}
              h={16}
              borderRadius="2xl"
              bg="white"
              color="blue.600"
              fontSize="2xl"
              fontWeight="bold"
              mb={6}
              boxShadow="0 4px 14px rgba(0, 0, 0, 0.2)"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.3s ease",
              }}
              transition="transform 0.2s ease"
            >
              2
            </Flex>
            <Heading as="h3" size="lg" mb={4}>
              Receive QR Code
            </Heading>
            <Text fontSize="lg" opacity={0.9}>
              Get instant access to your eSIM QR code via email after purchase.
              No shipping required.
            </Text>
          </Flex>

          <Flex flex={1} direction="column" align="center" textAlign="center">
            <Flex
              justify="center"
              align="center"
              w={16}
              h={16}
              borderRadius="2xl"
              bg="white"
              color="blue.600"
              fontSize="2xl"
              fontWeight="bold"
              mb={6}
              boxShadow="0 4px 14px rgba(0, 0, 0, 0.2)"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.3s ease",
              }}
              transition="transform 0.2s ease"
            >
              3
            </Flex>
            <Heading as="h3" size="lg" mb={4}>
              Scan & Activate
            </Heading>
            <Text fontSize="lg" opacity={0.9}>
              Scan the QR code with your eSIM-compatible device and activate
              instantly, anywhere in the world.
            </Text>
          </Flex>

          <Flex flex={1} direction="column" align="center" textAlign="center">
            <Flex
              justify="center"
              align="center"
              w={16}
              h={16}
              borderRadius="2xl"
              bg="white"
              color="blue.600"
              fontSize="2xl"
              fontWeight="bold"
              mb={6}
              boxShadow="0 4px 14px rgba(0, 0, 0, 0.2)"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.3s ease",
              }}
              transition="transform 0.2s ease"
            >
              4
            </Flex>
            <Heading as="h3" size="lg" mb={4}>
              Stay Connected
            </Heading>
            <Text fontSize="lg" opacity={0.9}>
              Enjoy high-speed data in 190+ countries with no roaming fees.
              Switch plans easily as you travel.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
