import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

interface ResponseData {
  heading: string;
  content: string;
}

interface Props {
  response: ResponseData;
}

const InsightsCard: React.FC<Props> = ({ response }) => {
  const insights = response.content.split("\n").map((line) => line.trim());

  return (
    <Box
      maxW="4xl"
      mx="auto"
      mt={10}
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="lg"
      rounded="lg"
    >
      {/* Heading */}
      <Heading
        as="h1"
        size="lg"
        mb={4}
        color={useColorModeValue("blue.600", "blue.300")}
      >
        {response.heading}
      </Heading>

      {/* Insights List */}
      <VStack
        align="start"
        spacing={4}
        divider={
          <StackDivider
            borderColor={useColorModeValue("gray.200", "gray.700")}
          />
        }
      >
        {insights.map((insight, index) => (
          <Text
            key={index}
            fontSize="md"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            {insight}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default InsightsCard;
