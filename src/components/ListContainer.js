import { Box, Center } from "@chakra-ui/react";
import List from "./List";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { useEffect } from "react";

const ListContainer = () => {

  const { data: questions,  } = useContext(DataContext);

  return (
    <Center marginTop={50}>
      <Box h="100%" w="60%" justifySelf="center">
        <List questions={questions}/>
      </Box>
    </Center>
  );
};

export default ListContainer;
