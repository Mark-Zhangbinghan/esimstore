// components/Purchase/PurchaseClient.tsx
"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  VStack,
  HStack,
  Icon,
  Badge,
  Alert,
  AlertIcon,
  Progress,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Tooltip,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  LockIcon,
  StarIcon,
  TimeIcon,
  DownloadIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import { useState } from "react";
import {
  FaPaypal,
  FaApple,
  FaGoogle,
  FaShieldAlt,
  FaGlobe,
  FaHeadset,
} from "react-icons/fa";

interface PurchaseClientProps {
  plan: any;
}

export default function PurchaseClient({ plan }: PurchaseClientProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");

  // 默认功能 - 如果计划未提供则使用
  const defaultFeatures = [
    "High-speed 4G/LTE data",
    "Instant activation",
    "No contract required",
    "24/7 customer support",
  ];

  const defaultCoverage = ["Global coverage"];

  const handlePayment = async (method: string) => {
    setIsLoading(true);
    setSelectedPayment(method);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Payment Successful!",
        description: "Your eSIM is being activated...",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      onOpen();
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or use another payment method",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const TrustBadges = () => (
    <HStack justify="center" spacing={6} mt={4} flexWrap="wrap">
      <VStack spacing={1}>
        <Icon as={FaShieldAlt} color="green.500" boxSize={5} />
        <Text fontSize="xs" color={textColor}>
          SSL Secured
        </Text>
      </VStack>
      <VStack spacing={1}>
        <Icon as={DownloadIcon} color="blue.500" boxSize={5} />
        <Text fontSize="xs" color={textColor}>
          Instant Delivery
        </Text>
      </VStack>
      <VStack spacing={1}>
        <Icon as={FaGlobe} color="purple.500" boxSize={5} />
        <Text fontSize="xs" color={textColor}>
          Global Coverage
        </Text>
      </VStack>
      <VStack spacing={1}>
        <Icon as={FaHeadset} color="orange.500" boxSize={5} />
        <Text fontSize="xs" color={textColor}>
          24/7 Support
        </Text>
      </VStack>
    </HStack>
  );

  return (
    <Box minH="100vh" pt="60px" bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.md" py={8}>
        {isLoading && (
          <Progress size="xs" isIndeterminate colorScheme="green" mb={4} />
        )}

        {/* 头部区域 */}
        <Box textAlign="center" mb={8}>
          <Flex justify="center" mb={3}>
            {plan.popular && (
              <Badge
                colorScheme="yellow"
                fontSize="md"
                px={3}
                py={1}
                borderRadius="full"
              >
                <StarIcon mr={1} /> Best Seller
              </Badge>
            )}
          </Flex>
          <Heading size="xl" mb={3} color={headingColor}>
            {plan.name}
          </Heading>
          <Text fontSize="lg" color={textColor} mb={4}>
            {plan.description}
          </Text>

          {/* 价格 */}
          <Box mb={3}>
            <Text as="span" fontSize="4xl" fontWeight="bold" color="green.500">
              {plan.price}
            </Text>
            {plan.originalPrice && (
              <>
                <Text
                  as="span"
                  fontSize="xl"
                  textDecoration="line-through"
                  color={textColor}
                  ml={2}
                >
                  {plan.originalPrice}
                </Text>
                {plan.savings && (
                  <Badge colorScheme="green" ml={2} fontSize="sm">
                    Save {plan.savings}
                  </Badge>
                )}
              </>
            )}
          </Box>

          <Badge
            colorScheme="blue"
            fontSize="md"
            px={3}
            py={1}
            borderRadius="md"
          >
            <DownloadIcon mr={1} /> Instant eSIM Delivery
          </Badge>
        </Box>

        <TrustBadges />

        {/* 计划详情 */}
        <Card
          mb={6}
          bg={cardBg}
          boxShadow="2xl"
          border={plan.popular ? "2px solid" : "1px solid"}
          borderColor={plan.popular ? "yellow.500" : borderColor}
          position="relative"
        >
          {plan.popular && (
            <Box
              position="absolute"
              top={-3}
              left="50%"
              transform="translateX(-50%)"
            >
              <Badge
                colorScheme="yellow"
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
              >
                Recommended
              </Badge>
            </Box>
          )}

          <CardHeader pb={3}>
            <Heading size="md" color={headingColor}>
              📋 Plan Details
            </Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <Flex justify="space-between" align="center">
                <Text fontWeight="semibold">Validity</Text>
                <Badge colorScheme="purple">{plan.validity} days</Badge>
              </Flex>

              {plan.data && (
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Data Allowance</Text>
                  <Text fontWeight="bold" color="blue.500">
                    {plan.data}
                  </Text>
                </Flex>
              )}
            </VStack>
          </CardBody>
        </Card>

        {/* 结账区域 */}
        <Card bg={cardBg} boxShadow="2xl" mb={6}>
          <CardHeader pb={3}>
            <Heading size="md" color={headingColor}>
              <LockIcon mr={2} color="green.500" />
              Secure Checkout
            </Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <VStack spacing={4}>
              <Tooltip label="Instant activation with QR code delivery">
                <Button
                  colorScheme="green"
                  size="lg"
                  width="full"
                  height="60px"
                  fontSize="lg"
                  leftIcon={<Icon as={CheckCircleIcon} boxSize={5} />}
                  isLoading={isLoading && selectedPayment === "card"}
                  loadingText="Processing..."
                  onClick={() => handlePayment("card")}
                  boxShadow="md"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                  transition="all 0.2s"
                >
                  💳 Buy Now & Get QR Code
                </Button>
              </Tooltip>

              <Text fontSize="sm" color={textColor} textAlign="center">
                Credit/Debit Card • Apple Pay • Google Pay
              </Text>

              <Divider />

              {/* 其他支付方式 */}
              <VStack spacing={3} width="full">
                <Button
                  variant="outline"
                  width="full"
                  height="50px"
                  leftIcon={<Icon as={FaPaypal} color="blue.500" boxSize={5} />}
                  isLoading={isLoading && selectedPayment === "paypal"}
                  onClick={() => handlePayment("paypal")}
                >
                  Pay with PayPal
                </Button>

                <Button
                  variant="outline"
                  width="full"
                  height="50px"
                  leftIcon={<Icon as={FaApple} boxSize={5} />}
                  isLoading={isLoading && selectedPayment === "apple"}
                  onClick={() => handlePayment("apple")}
                >
                  Pay with Apple Pay
                </Button>

                <Button
                  variant="outline"
                  width="full"
                  height="50px"
                  leftIcon={<Icon as={FaGoogle} color="red.500" boxSize={5} />}
                  isLoading={isLoading && selectedPayment === "google"}
                  onClick={() => handlePayment("google")}
                >
                  Pay with Google Pay
                </Button>
              </VStack>
            </VStack>
          </CardBody>
          <CardFooter pt={0}>
            <Alert status="info" borderRadius="md" fontSize="sm">
              <AlertIcon boxSize={4} />
              <Box>
                <Text fontWeight="medium">30-Day Money-Back Guarantee</Text>
                <Text fontSize="xs">
                  Full refund if you’re not satisfied with the service
                </Text>
              </Box>
            </Alert>
          </CardFooter>
        </Card>

        {/* 安全保障 */}
        <Card bg={cardBg} boxShadow="md">
          <CardBody>
            <VStack spacing={3} align="start">
              <Text fontWeight="bold" color={headingColor}>
                🔒 Payment Security
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Flex align="center">
                  <Icon as={FaShieldAlt} color="green.500" mr={2} />
                  <Text fontSize="sm">256-bit SSL Encryption</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={CheckCircleIcon} color="blue.500" mr={2} />
                  <Text fontSize="sm">PCI DSS Compliant</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={TimeIcon} color="orange.500" mr={2} />
                  <Text fontSize="sm">Instant Activation</Text>
                </Flex>
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        {/* 返回链接 */}
        <Box textAlign="center" mt={8}>
          <Link href={`/plans/${plan.id}`} passHref>
            <Button
              as="a"
              variant="ghost"
              leftIcon={<ChevronLeftIcon />}
              size="lg"
            >
              Back to Plan Details
            </Button>
          </Link>
        </Box>
      </Container>

      {/* 支付成功模态框 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <CheckCircleIcon color="green.500" boxSize={8} mb={2} />
            <Heading size="lg">Payment Successful 🎉</Heading>
          </ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Text textAlign="center" color={textColor}>
                Your eSIM has been successfully activated. The QR code and
                installation instructions will be sent to your email shortly.
              </Text>
              <Alert status="success" borderRadius="md">
                <AlertIcon />
                Please check your email for the QR code and setup instructions.
              </Alert>
              <Button
                colorScheme="blue"
                size="lg"
                width="full"
                leftIcon={<DownloadIcon />}
              >
                Download QR Code
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" as={Link} href="/my-esims">
              View My eSIM
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
