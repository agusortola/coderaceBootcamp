import { Box, Center } from "@chakra-ui/react";
import List from "./List";

const ListContainer = () => {
  return (
    <Center marginTop={50}>
      <Box h="100%" w="60%" justifySelf="center">
        <List />
      </Box>
    </Center>
  );
};

export default ListContainer;
