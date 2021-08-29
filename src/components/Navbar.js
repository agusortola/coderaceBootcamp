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

};

const Navbar = () => {
  return (
    <HStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={1}
      justify="space-between"
      p={10}
      width='70%'
      margin='auto'    
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
