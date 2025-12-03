"use client";
import { Box, HStack, Link } from "@chakra-ui/react";
import { BiSolidDownload } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { IconButton } from "./components";

export default function Navbar() {
  return (
    /* 最外层导航容器：实现整体毛玻璃胶囊效果 */
    <Box
      borderRadius="full" // 胶囊圆角
      bg="rgba(255, 255, 255, 0.92)" // 半透明，移除模糊
      border="1px solid rgba(255, 255, 255, 0.25)" // 描边，让边缘更清晰
      p={{ base: 4, md: 8 }} // 小屏缩小内边距
      h="60px" // 固定高度
      left="50%" // 水平居中
      transform="translateX(-50%)" // 水平居中补偿
      top={6} // 距离顶部 4 单位S
      color="teal.700" // 文字颜色
      display="flex" // flex 布局
      alignItems="center" // 垂直居中
      justifyContent="space-between" // 左右分散对齐
      position="fixed" // 固定定位
      width={{ base: "95%", md: "80%" }} // 小屏更宽一些
      boxShadow="xl" // 阴影，突出浮层感
      zIndex={1000} // 确保在最上层
    >
      {/* 左侧品牌 Logo / 名称 */}
      <Box fontWeight="bold" p={{ base: 4, md: 12 }}>
        <Link
          href="/"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          eSIM Store
        </Link>
      </Box>

      {/* 右侧链接组：水平排列首页、套餐、联系我们 */}
      <HStack
        gap={6}
        p={{ base: 0, md: 12 }}
        display={{ base: "none", md: "flex" }} // 小屏隐藏，大屏显示
      >
        {/* 套餐链接 */}
        <IconButton href="/plans" words="Plans" rightIcon={undefined} />

        {/* 联系我们 */}
        <IconButton
          href="/contact"
          words="Contact Us"
          rightIcon={<FaArrowRight />}
        />

        <HStack gap={3}>
          {/* 分隔线 */}
          <Box
            height="24px"
            borderLeftWidth="1px"
            borderLeftStyle="solid"
            borderColor="gray.200"
          />

          {/* 下载按钮 */}
          <IconButton
            href="/contact"
            words="Download Now"
            rightIcon={<BiSolidDownload />}
          />
        </HStack>

        {/* 登录链接 */}
        <IconButton href="/" words="Log In" rightIcon={undefined} />
      </HStack>
    </Box>
  );
}
