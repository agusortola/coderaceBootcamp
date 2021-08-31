import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  Stack,
  HStack,
  VStack,
  Center,
  Text,
  Button,
  IconButton,
  InputGroup,
  InputLeftElement,
  Badge,
} from "@chakra-ui/react";

const FilterComponent = () => {
  return (
    <Center width="100%" p={10}>
      <VStack spacing={2}>
        <HStack spacing={3} width="80%" marginBottom={5}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input variant="flushed" size="md" placeholder="Buscar pregunta" />
          </InputGroup>
        </HStack>
        <HStack>
          <Badge colorScheme="purple">JAVA</Badge>
          <Badge colorScheme="green">MySQL</Badge>
          <Badge colorScheme="red">MongoDB</Badge>
          <Badge colorScheme="teal">Git</Badge>
          <Badge colorScheme="yellow">Eclipse</Badge>
          <Badge colorScheme="orange">Terminal</Badge>
          <Badge colorScheme="cyan" >Bug</Badge>
          <Badge colorScheme="pink">Syntax</Badge>
        </HStack>
        <HStack>
          <Badge  variant="outline" colorScheme="blue">Capítulo 1</Badge>
          <Badge variant="outline" colorScheme="blue">Capítulo 2</Badge>
          <Badge variant="outline" colorScheme="blue">Capítulo 3</Badge>
          <Badge variant="outline" colorScheme="blue">Capítulo 4</Badge>
          <Badge variant="outline" colorScheme="blue">Capítulo 5</Badge>
          <Badge variant="outline" colorScheme="blue">Capítulo 6</Badge>
        </HStack>
      </VStack>
    </Center>
  );
};

export default FilterComponent;
