// components/PlanCard/PlanCard.tsx
import {
  Box,
  Text,
  Button,
  Tag,
  Flex,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { motion, domAnimation, LazyMotion } from "framer-motion";
import { useRouter } from "next/navigation";

// 定义套餐数据接口
interface Plan {
  id: string;
  name: string;
  price: string;
  validity: number;
  description: string;
  isPopular?: boolean;
}

// 定义组件属性接口
interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  // 根据主题模式设置颜色 - 提高对比度
  const cardBg = useColorModeValue("white", "gray.800");
  const popularBgGradient = useColorModeValue(
    "linear(to-r, blue.600, purple.600)", // 更深的颜色提高对比度
    "linear(to-r, blue.500, purple.500)"
  );
  const normalBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200"); // 提高文本对比度
  const popularTextColor = "white"; // 固定为白色确保可读性

  // 根据套餐名称判断是否为热门套餐
  const isPopular = plan.name.includes("Global") || plan.name.includes("5GB");

  // 使用 useRouter 进行编程式导航
  const router = useRouter();

  // 处理购买按钮点击事件
  const handleGetStarted = () => {
    router.push(`/plans/${plan.id}/purchase`);
  };

  // 创建 MotionBox 组件
  const MotionBox = motion(Box);

  return (
    <LazyMotion features={domAnimation}>
      <MotionBox
        w="320px"
        bg={cardBg}
        borderRadius="2xl"
        boxShadow="xl"
        overflow="hidden"
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        border={isPopular ? "none" : "1px solid"}
        borderColor={useColorModeValue("gray.200", "gray.600")}
        display="flex"
        flexDirection="column"
        h="480px"
        position="relative"
      >
        {/* 热门标签 – 真正铺满渐变 */}
        <Box
          h="44px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgGradient={isPopular ? popularBgGradient : undefined} // ← 用 bgGradient
          bg={!isPopular ? normalBg : undefined} // ← 非热门再补纯色
          color={isPopular ? "white" : textColor}
          w="full"
        >
          <Text fontSize="sm" fontWeight="bold" letterSpacing="wide">
            {isPopular ? "POPULAR CHOICE" : "STANDARD PLAN"}
          </Text>
        </Box>

        {/* 卡片内容区域 */}
        <Flex direction="column" justify="space-between" flex="1" p={6}>
          {/* 上半部分内容 */}
          <Box>
            {/* 套餐名称区域 */}
            <Flex justify="space-between" align="center" mb={5}>
              <Text
                fontSize="xl"
                fontWeight="extrabold"
                letterSpacing="tight"
                color={textColor}
              >
                {plan.name}
              </Text>
              {isPopular && (
                <Tag
                  colorScheme="blue"
                  size="sm"
                  variant="solid"
                  borderRadius="full"
                  fontWeight="bold"
                >
                  Recommended
                </Tag>
              )}
            </Flex>

            {/* 价格信息区域 */}
            <Box mb={5} textAlign="center">
              <Text
                fontSize="4xl"
                fontWeight="black"
                bgGradient={isPopular ? popularBgGradient : undefined}
                bgClip={isPopular ? "text" : undefined}
                color={isPopular ? undefined : "blue.600"}
              >
                {plan.price}
              </Text>
              <Text fontSize="md" color={textColor} mt={1}>
                Valid for {plan.validity} days
              </Text>
            </Box>

            {/* 套餐描述 */}
            <Box mb={6}>
              <Text
                fontSize="md"
                color={textColor}
                mb={4}
                textAlign="center"
                lineHeight="tall"
              >
                {plan.description}
              </Text>

              {/* 特性列表 */}
              <Box as="ul" listStyleType="none">
                <Flex as="li" align="center" mb={3}>
                  <Badge
                    colorScheme="green"
                    mr={3}
                    borderRadius="full"
                    p={1}
                    fontSize="xs"
                  >
                    ✓
                  </Badge>
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    High-speed 4G/5G network
                  </Text>
                </Flex>

                <Flex as="li" align="center" mb={3}>
                  <Badge
                    colorScheme="green"
                    mr={3}
                    borderRadius="full"
                    p={1}
                    fontSize="xs"
                  >
                    ✓
                  </Badge>
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    Instant activation
                  </Text>
                </Flex>

                <Flex as="li" align="center" mb={3}>
                  <Badge
                    colorScheme="green"
                    mr={3}
                    borderRadius="full"
                    p={1}
                    fontSize="xs"
                  >
                    ✓
                  </Badge>
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    No contract required
                  </Text>
                </Flex>

                <Flex as="li" align="center">
                  <Badge
                    colorScheme="green"
                    mr={3}
                    borderRadius="full"
                    p={1}
                    fontSize="xs"
                  >
                    ✓
                  </Badge>
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    24/7 customer support
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>

          {/* 购买按钮 - 使用 onClick 事件而非 Link 包裹 */}
          <Button
            colorScheme="blue"
            width="full"
            size="lg"
            variant={isPopular ? "solid" : "outline"}
            borderRadius="md"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
            fontSize="sm"
            _hover={{
              transform: "translateY(-2px)",
              shadow: "lg",
            }}
            transition="all 0.2s"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </Flex>
      </MotionBox>
    </LazyMotion>
  );
}
