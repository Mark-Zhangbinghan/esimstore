"use client";
import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  Icon,
  useToken,
} from "@chakra-ui/react";
import { FaBolt, FaShieldAlt, FaDollarSign } from "react-icons/fa";

const WhyChooseSection = () => {
  const [blue300, green300, yellow300] = useToken("colors", [
    "blue.300",
    "green.300",
    "yellow.300",
  ]);

  return (
    <Box
      py={24}
      bgGradient="linear(to-b, gray.50, white)"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "radial-gradient(circle at 20% 80%, rgba(159, 122, 234, 0.08) 0%, transparent 40%)",
        pointerEvents: "none",
      }}
    >
      <Container maxW="container.xl" position="relative">
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          mb={20}
          fontWeight="800"
          color="gray.800"
          letterSpacing="tight"
        >
          Why Choose Us
          <Text
            as="span"
            display="block"
            fontSize="xl"
            mt={3}
            fontWeight="500"
            color="gray.500"
          >
            Professional Service, Exceptional Experience
          </Text>
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Card
            maxW="sm"
            mx="auto"
            borderRadius="2xl"
            boxShadow="0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            border="1px solid"
            borderColor="gray.100"
            bg="white"
            position="relative"
            overflow="hidden"
            _hover={{
              transform: "translateY(-8px)",
              transition: "all 0.3s ease",
              boxShadow:
                "0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)",
            }}
            transition="all 0.2s ease"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              height="4px"
              bgGradient={`linear(to-r, ${blue300}, blue.500)`}
            />
            <CardHeader textAlign="center" pt={8} pb={4}>
              <Flex justifyContent="center" mb={6}>
                <Icon
                  as={FaBolt}
                  w={12}
                  h={12}
                  color="blue.500"
                  p={2}
                  borderRadius="full"
                  bg="blue.50"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease",
                  }}
                  transition="transform 0.2s ease"
                />
              </Flex>
              <Heading as="h3" size="lg" color="gray.800" fontWeight="700">
                Lightning Fast
              </Heading>
            </CardHeader>
            <CardBody pb={8}>
              <Text
                textAlign="center"
                color="gray.600"
                fontSize="lg"
                lineHeight="tall"
              >
                Our service delivers exceptional performance with rapid response
                times and minimal latency.
              </Text>
            </CardBody>
          </Card>

          <Card
            maxW="sm"
            mx="auto"
            borderRadius="2xl"
            boxShadow="0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            border="1px solid"
            borderColor="gray.100"
            bg="white"
            position="relative"
            overflow="hidden"
            _hover={{
              transform: "translateY(-8px)",
              transition: "all 0.3s ease",
              boxShadow:
                "0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)",
            }}
            transition="all 0.2s ease"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              height="4px"
              bgGradient={`linear(to-r, ${green300}, green.500)`}
            />
            <CardHeader textAlign="center" pt={8} pb={4}>
              <Flex justifyContent="center" mb={6}>
                <Icon
                  as={FaShieldAlt}
                  w={12}
                  h={12}
                  color="green.500"
                  p={2}
                  borderRadius="full"
                  bg="green.50"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease",
                  }}
                  transition="transform 0.2s ease"
                />
              </Flex>
              <Heading as="h3" size="lg" color="gray.800" fontWeight="700">
                Secure & Reliable
              </Heading>
            </CardHeader>
            <CardBody pb={8}>
              <Text
                textAlign="center"
                color="gray.600"
                fontSize="lg"
                lineHeight="tall"
              >
                Enterprise-grade security protection with 99.9% uptime guarantee
                keeps your data safe.
              </Text>
            </CardBody>
          </Card>

          <Card
            maxW="sm"
            mx="auto"
            borderRadius="2xl"
            boxShadow="0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            border="1px solid"
            borderColor="gray.100"
            bg="white"
            position="relative"
            overflow="hidden"
            _hover={{
              transform: "translateY(-8px)",
              transition: "all 0.3s ease",
              boxShadow:
                "0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)",
            }}
            transition="all 0.2s ease"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              height="4px"
              bgGradient={`linear(to-r, ${yellow300}, yellow.500)`}
            />
            <CardHeader textAlign="center" pt={8} pb={4}>
              <Flex justifyContent="center" mb={6}>
                <Icon
                  as={FaDollarSign}
                  w={12}
                  h={12}
                  color="yellow.500"
                  p={2}
                  borderRadius="full"
                  bg="yellow.50"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease",
                  }}
                  transition="transform 0.2s ease"
                />
              </Flex>
              <Heading as="h3" size="lg" color="gray.800" fontWeight="700">
                Cost Effective
              </Heading>
            </CardHeader>
            <CardBody pb={8}>
              <Text
                textAlign="center"
                color="gray.600"
                fontSize="lg"
                lineHeight="tall"
              >
                Competitive pricing with no hidden fees ensures maximum value
                for your investment.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyChooseSection;
