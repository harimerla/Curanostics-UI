import React from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeText = useColorModeValue("Dark", "Light");

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Website Name */}
        <Heading size="lg" color={useColorModeValue("blue.600", "blue.300")}>
          Curanostics
        </Heading>

        {/* Spacer and navigation */}
        <Spacer />
        <Flex alignItems="center" gap={4}>
          {/* Navigation Links */}
          <Button variant="ghost" colorScheme="blue">
            Home
          </Button>
          <Button variant="ghost" colorScheme="blue">
            About
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Contact
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Services
          </Button>

          {/* Toggle Dark/Light Mode */}
          <Button onClick={toggleColorMode}>Toggle {colorModeText} Mode</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
