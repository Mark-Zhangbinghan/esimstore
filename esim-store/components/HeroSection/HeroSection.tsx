"use client";
import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaGlobe, FaBolt, FaWifi } from "react-icons/fa";
import CountrySearch from "./CountrySearch";

export default function HeroSection() {
  return (
    <Box
      bgGradient="linear(to-br, teal.50, blue.100)" // 从teal.50到blue.100的线性渐变背景
      pt="60px" // 上内边距，为导航栏留出空间
      minH="100vh" // 最小高度为整个视口高度
      w="100%" // 避免造成橫向溢出與額外繪製
      px={[4, 6, 10, 16]} // 响应式水平内边距：移动设备4，小屏幕6，中等10，大屏幕16
      py={[10, 12, 16, 20]} // 响应式垂直内边距
      display="flex" // 使用flex布局
      alignItems="center" // 垂直居中
      justifyContent="center" // 水平居中
      position="relative" // 相对定位，为绝对定位的子元素提供参考
      overflow="hidden" // 隐藏溢出内容
    >
      {/* 背景装饰元素 */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="teal.200"
        opacity="0.2"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="blue.200"
        opacity="0.2"
      />

      {/* 主要内容容器 - 使用Flex布局 */}
      <Flex
        direction={["column", "column", "row"]} // 响应式方向：小屏垂直，大屏水平
        align="center" // 垂直居中
        justify="space-between" // 水平两端对齐
        w="100%" // 宽度100%
        maxW="1200px" // 最大宽度1200px
        zIndex={1} // 堆叠顺序，确保内容在背景之上
      >
        {/* 左侧文本内容区域 - 使用垂直堆栈 */}
        <VStack
          align={["center", "center", "flex-start"]}
          spacing={6}
          maxW={["100%", "100%", "55%"]}
          textAlign={["center", "center", "left"]}
          mb={[10, 10, 0]}
        >
          <Heading
            size={["xl", "2xl", "3xl"]}
            fontWeight="bold"
            color="teal.800"
            lineHeight="1.2"
          >
            Global eSIM is{" "}
            <Box as="span" color="teal.500">
              easy
            </Box>{" "}
            to purchase
          </Heading>

          <VStack spacing={4} align={["center", "center", "flex-start"]}>
            <HStack spacing={3}>
              {/* 闪电图标 */}
              <Icon as={FaBolt} color="teal.500" boxSize={5} />
              <Text fontSize={["md", "lg", "xl"]} color="teal.700">
                Buy and Use immediately
              </Text>
            </HStack>

            <HStack spacing={3}>
              {/* 地球图标 */}
              <Icon as={FaGlobe} color="teal.500" boxSize={5} />
              <Text fontSize={["md", "lg", "xl"]} color="teal.700">
                Supports multiple countries and regions worldwide
              </Text>
            </HStack>

            <HStack spacing={3}>
              {/* WiFi图标 */}
              <Icon as={FaWifi} color="teal.500" boxSize={5} />
              <Text fontSize={["md", "lg", "xl"]} color="teal.700">
                Freely choose your data plan
              </Text>
            </HStack>
          </VStack>

          <HStack>
            {/* 搜索框 - 支持国家模糊搜索与国旗展示 */}
            <CountrySearch />

            {/* 查看套餐按钮 */}
            <Button
              colorScheme="teal" // 颜色方案
              size="lg" // 大尺寸
              px={8} // 水平内边距
              py={6} // 垂直内边距
              borderRadius="full" // 完全圆角
              fontWeight="bold" // 粗体
              boxShadow="lg" // 阴影效果
              _hover={{
                // 悬停状态样式
                transform: "translateY(-2px)", // 上移2px
                boxShadow: "xl", // 增大阴影
              }}
              transition="all 0.2s" // 过渡动画
            >
              <a href="/plans">View Plans</a>
            </Button>
          </HStack>
        </VStack>

        {/* 右侧图片/插图区域 */}
        <Box
          w={["100%", "100%", "40%"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="100%"
            maxW="400px"
            h="300px"
            bg="white"
            borderRadius="xl"
            boxShadow="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p={6}
            bgGradient="linear(to-br, white, teal.50)"
          >
            <Box
              w="120px"
              h="120px"
              borderRadius="full"
              bgGradient="linear(to-br, teal.300, teal.500)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={6}
              color="white"
            >
              <FaGlobe size="60px" />
            </Box>
            <Text
              fontWeight="bold"
              color="teal.700"
              fontSize="lg"
              textAlign="center"
            >
              Connect to the world with our eSIM technology
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
