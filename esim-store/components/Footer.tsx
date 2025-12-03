"use client";
import {
  Box,
  Text,
  Flex,
  Link,
  Heading,
  VStack,
  Divider,
  HStack,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaTwitter, FaGithub, FaFacebook, FaWeixin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      role="contentinfo"
      bg="gray.800"
      color="white"
      py={8}
      paddingTop={10}
      paddingBottom={10}
      // marginTop={10}
    >
      {/* 中间主体内容 */}
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW="container.xl"
        mx="auto"
        px={4}
        gap={{ base: 8, md: 16 }}
        justify="center"
        align="flex-start"
      >
        {/* 公司信息 */}
        <VStack align="flex-start" maxW="400px" p={4}>
          <Heading as="h3" size="md" mb={4} w="full">
            <Link
              href="/"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              eSIM Store
            </Link>
          </Heading>
          <Text fontSize="sm">
            We are committed to providing you with the most convenient eSIM
            solutions, allowing you to enjoy fast and stable network connections
            worldwide.
          </Text>
        </VStack>

        {/* 法律条款 */}
        <VStack align="flex-start" minW="120px">
          <Heading as="h3" size="md" mb={4}>
            Legal
          </Heading>
          <VStack align="flex-start" spacing={2}>
            <Link
              as={NextLink}
              href="/terms"
              color="gray.300"
              _hover={{ color: "white" }}
            >
              Terms of Service
            </Link>
            <Link
              as={NextLink}
              href="/privacy"
              color="gray.300"
              _hover={{ color: "white" }}
            >
              Privacy Policy
            </Link>
            <Link
              as={NextLink}
              href="/cookies"
              color="gray.300"
              _hover={{ color: "white" }}
            >
              Cookie Policy
            </Link>
          </VStack>
        </VStack>

        {/* 设置 */}
        <VStack align="flex-start" minW="120px">
          <Heading as="h3" size="md" mb={4}>
            Settings
          </Heading>
          <VStack align="flex-start" spacing={2}>
            <Link
              as={NextLink}
              href="/settings/language"
              color="gray.300"
              _hover={{ color: "white" }}
            >
              Language
            </Link>
            <Link
              as={NextLink}
              href="/settings/currency"
              color="gray.300"
              _hover={{ color: "white" }}
            >
              Currency
            </Link>
          </VStack>
        </VStack>
      </Flex>

      <Divider my={6} borderColor="gray.700" />

      {/* 社交图标 + 版权信息 */}
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "center" }}
        gap={4}
      >
        {/* 版权信息 */}
        <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
          © {currentYear} eSIM Store. All rights reserved.
        </Text>

        {/* 社交媒体图标 */}
        <HStack spacing={4} justify={{ base: "center", md: "flex-end" }}>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={5} _hover={{ color: "teal.400" }} />
          </Link>
          <Link href="https://github.com" isExternal>
            <Icon as={FaGithub} boxSize={5} _hover={{ color: "teal.400" }} />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={5} _hover={{ color: "teal.400" }} />
          </Link>
          <Link href="https://weixin.qq.com" isExternal>
            <Icon as={FaWeixin} boxSize={5} _hover={{ color: "teal.400" }} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
