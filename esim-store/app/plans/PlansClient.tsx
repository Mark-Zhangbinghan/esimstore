// app/plans/PlansClient.tsx
"use client";

import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import PlanCard from "@/components/PlanCard/PlanCard";
import { Plan } from "@/lib/plans";

interface Props {
  /* ① 列表页：plans 为数组  ② 详情页：plans 为单元素数组 */
  plans: Plan[];
}

export function PlansClient({ plans }: Props) {
  /* 空数组保护（详情页 404 已在服务端处理，这里兜底） */
  if (!plans.length) return null;

  /* 通用标题：如果只有 1 条，就显示「套餐详情」 */
  const isSingle = plans.length === 1;
  const title = isSingle ? "Plans Details" : "Global eSIM Data Plans";
  const subtitle = isSingle
    ? "Check the plan information and activate it for use immediately"
    : "Stay connected worldwide without physical SIM cards. Activate instantly and use immediately.";

  return (
    <Box minH="100vh" pt="60px">
      <Container maxW="container.xl" py={10}>
        <Box textAlign="center" mb={10}>
          <Heading size="xl" mb={4} color="gray.700">
            {title}
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            {subtitle}
          </Text>
        </Box>

        <Flex wrap="wrap" justify="center" gap={6}>
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </Flex>

        {!isSingle && (
          <Box textAlign="center" mt={16} color="gray.500">
            <Text>
              Need help choosing a plan?
              <Button variant="link" colorScheme="blue" ml={1}>
                Contact our support
              </Button>
            </Text>
          </Box>
        )}
      </Container>
    </Box>
  );
}
