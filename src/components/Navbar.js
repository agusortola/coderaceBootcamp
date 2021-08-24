import {
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  Text,
  Button,
  ButtonGroup
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={5}
      justify="space-between"
      p={10}
    >
      <VStack  spacing={5}>
        <Box h="40px">
          <Text fontWeight={700} fontSize={24}>
            Neinstein Bootcamp
          </Text>
        </Box>
      </VStack>
      <VStack spacing={5}>
        <Box h="40px">
            <Button colorScheme="blue">New</Button>
        </Box>
      </VStack>

    </HStack>
  );
};

export default Navbar;
