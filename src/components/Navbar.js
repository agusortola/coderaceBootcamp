import {
  Stack,
  HStack,
  VStack,
  Box,
  Divider,
  Center,
  Text,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

const handleClick = () => {};

const Navbar = () => {
  return (
    <div className="root">
      <HStack
        spacing={1}
        justify="space-between"
        p={5}
        width="70%"
        margin="auto"
      >
        <VStack spacing={5}>
          <Center h="40px" width="100%" flex='1' alignItems='center'>
            <Link to="/">
              <Text fontWeight={900} as="h1"  fontFamily="montserrat" fontSize={22}>
                CodeRace 
              </Text>
              <Text fontWeight={600} as="h2" color="blue" fontFamily="montserrat" font fontSize={12}  letterSpacing= {6}>
                BOOTCAMP 
              </Text>
            </Link>
          </Center>
        </VStack>
        <VStack spacing={5}>
          <Box h="40px">
            <Link to="/create">
              <Tooltip label="Crear pregunta" placement="left">
                <IconButton
                value='Nueva'
                  isRound
                  color="#0984e3"
                  colorScheme="white"
                  onClick={handleClick}
                  color="#0984e3"
                  size="sm"
                  variant="solid"
                  aria-label=" New"
                  icon={<AddIcon fontSize={22} />}
                >
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
        </VStack>
      </HStack>
      <Divider orientation="horizontal" />
    </div>
  );
};

export default Navbar;
