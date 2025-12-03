// components/CustomerReviewsSection.tsx
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
  Icon,
  Avatar,
  useToken,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const CustomerReviewsSection = () => {
  const [blue300, purple300, teal300] = useToken("colors", [
    "blue.300",
    "purple.300",
    "teal.300",
  ]);

  return (
    <Box
      py={24}
      bgGradient="linear(to-b, white, gray.50)"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "radial-gradient(circle at 80% 20%, rgba(66, 153, 225, 0.05) 0%, transparent 40%)",
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
          Customer Reviews
          <Text
            as="span"
            display="block"
            fontSize="xl"
            mt={3}
            fontWeight="500"
            color="gray.500"
          >
            See what our users say about our eSIM service
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
            <CardBody p={8}>
              <Flex mb={4}>
                {[...Array(5)].map((_, i) => (
                  <Icon
                    as={FaStar}
                    key={i}
                    w={5}
                    h={5}
                    color="yellow.400"
                    mr={1}
                  />
                ))}
              </Flex>

              <Text fontStyle="italic" mb={6} fontSize="lg" lineHeight="tall">
                "This eSIM service transformed my travel experience. Instant
                activation and reliable connectivity across 20+ countries with
                no hassle."
              </Text>

              <Flex align="center">
                <Avatar size="md" name="Alex Johnson" mr={4} />
                <Box>
                  <Text fontWeight="bold" color="gray.800">
                    Alex Johnson
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Frequent Traveler
                  </Text>
                </Box>
              </Flex>
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
              bgGradient={`linear(to-r, ${purple300}, purple.500)`}
            />
            <CardBody p={8}>
              <Flex mb={4}>
                {[...Array(5)].map((_, i) => (
                  <Icon
                    as={FaStar}
                    key={i}
                    w={5}
                    h={5}
                    color="yellow.400"
                    mr={1}
                  />
                ))}
              </Flex>

              <Text fontStyle="italic" mb={6} fontSize="lg" lineHeight="tall">
                "Excellent customer support and seamless connectivity. Saved me
                from outrageous roaming charges during my business trips."
              </Text>

              <Flex align="center">
                <Avatar size="md" name="Sarah Williams" mr={4} />
                <Box>
                  <Text fontWeight="bold" color="gray.800">
                    Sarah Williams
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Business Consultant
                  </Text>
                </Box>
              </Flex>
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
              bgGradient={`linear(to-r, ${teal300}, teal.500)`}
            />
            <CardBody p={8}>
              <Flex mb={4}>
                {[...Array(5)].map((_, i) => (
                  <Icon
                    as={FaStar}
                    key={i}
                    w={5}
                    h={5}
                    color="yellow.400"
                    mr={1}
                  />
                ))}
              </Flex>

              <Text fontStyle="italic" mb={6} fontSize="lg" lineHeight="tall">
                "The best eSIM provider I've used. Affordable data plans that
                actually deliver the speeds promised. No more SIM card swaps!"
              </Text>

              <Flex align="center">
                <Avatar size="md" name="Michael Chen" mr={4} />
                <Box>
                  <Text fontWeight="bold" color="gray.800">
                    Michael Chen
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Digital Nomad
                  </Text>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CustomerReviewsSection;
