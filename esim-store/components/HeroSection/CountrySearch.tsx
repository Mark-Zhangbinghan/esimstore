"use client";
import { useMemo, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { allCountries } from "../../utils/countries";
import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

type Country = {
  ISO2: string;
  ISO3: string;
  English: string;
  China: string;
  Taiwan: string;
  Hongkong: string;
};

export default function CountrySearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  {
    /* 监听用户输入query变化 */
  }
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as Country[];
    const list = (allCountries as Country[]) || [];
    // 简单模糊：在英文/简中/繁中/港澳名及代码里匹配
    const filtered = list.filter((c) => {
      const hay = [c.English, c.China, c.Taiwan, c.Hongkong, c.ISO2, c.ISO3]
        .filter(Boolean)
        .map((s) => String(s).toLowerCase());
      return hay.some((s) => s.includes(q));
    });
    // 限制最多6条
    return filtered.slice(0, 6);
  }, [query]);

  {
    /* 点击对应国家后跳转到对应页面 */
  }
  const handleSelect = (c: Country) => {
    setQuery("");
    setFocused(false);
    const id = (c.ISO2 || "").toLowerCase();
    if (id && id.length === 2) router.push(`/plans/${id}`);
  };

  return (
    <Box position="relative" width="100%" maxW="400px">
      <InputGroup>
        {/* 用户输入query触发onchange，点击其他地方触发onBlur隐藏下拉列表 */}
        <Input
          placeholder="Search your destination..."
          borderRadius="full"
          boxShadow="sm"
          size="lg"
          bg="white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
          _focus={{ boxShadow: "md", borderColor: "teal.400" }}
        />
        <InputRightElement h="full" display="flex" alignItems="center" pr={4}>
          <FaSearch color="gray" />
        </InputRightElement>
      </InputGroup>

      {/* 点击搜索框后触发focused，如果有搜索结果就显示下拉框 */}
      {focused && results.length > 0 && (
        <Box
          position="absolute"
          top="calc(100% + 8px)"
          left={0}
          right={0}
          bg="white"
          borderRadius="lg"
          boxShadow="xl"
          borderWidth="1px"
          zIndex={10}
          maxH="300px"
          overflowY="auto"
        >
          <List>
            {results.map((c) => (
              <ListItem
                key={`${c.ISO2}-${c.English}`}
                px={3}
                py={2}
                _hover={{ bg: "gray.50", cursor: "pointer" }}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(c)}
              >
                <HStack gap={3} align="center">
                  <Box w="22px" minW="22px">
                    <ReactCountryFlag
                      svg
                      countryCode={(c.ISO2 || "").slice(0, 2)}
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "4px",
                      }}
                      aria-label={c.English}
                      title={c.English}
                    />
                  </Box>
                  <Text fontWeight="medium" color="teal.700">
                    {c.English}
                  </Text>
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}
