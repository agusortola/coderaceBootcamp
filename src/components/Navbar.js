import {
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'

const handleClick = () => {
  console.log("Clickeado");
};

const Navbar = () => {
  return (
    <HStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={15}
      justify="space-between"
      p={10}
    >
      <VStack spacing={5}>
        <Box h="40px">
        <Link to ="/">
          <Text fontWeight={700} fontSize={24}>
            Neinstein Bootcamp
          </Text>
          </Link>
        </Box>
      </VStack>
      <VStack spacing={5}>
        <Box h="40px">
          <Link to ="/create">
          <Button onClick={handleClick} colorScheme="blue">
            New
          </Button>
          </Link>
        </Box>
      </VStack>
    </HStack>
  );
};

export default Navbar;
