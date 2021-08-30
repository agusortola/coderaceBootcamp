import {
  Stack,
  HStack,
  VStack,
  Box,
  Divider,
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
          <Box h="40px">
            <Link to="/">
              <Text fontWeight={700} fontSize={20}>
                Neinstein Bootcamp
              </Text>
            </Link>
          </Box>
        </VStack>
        <VStack spacing={5}>
          <Box h="40px">
            <Link to="/create">
              <Tooltip label="Crear pregunta" placement="left">
                <IconButton
                value='Nueva'
                  isRound
                  onClick={handleClick}
                  colorScheme="blue"
                  size="sm"
                  variant="solid"
                  aria-label=" New"
                  icon={<AddIcon fontSize={18} />}
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
