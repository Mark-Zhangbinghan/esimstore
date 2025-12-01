"use client";
import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";

export default function FeatureSection() {
  const features = [
    { title: "全球覆盖", description: "支持全球超过100个国家和地区" },
    { title: "即买即用", description: "无需实体卡，扫码激活即可使用" },
    { title: "流量自由", description: "多种流量套餐，满足不同需求" },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} my={10}>
      {features.map((f) => (
        <Box
          key={f.title}
          p={5}
          borderWidth="1px"
          borderRadius="md"
          textAlign="center"
        >
          <Heading size="md" mb={2}>
            {f.title}
          </Heading>
          <Text>{f.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
