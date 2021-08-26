import { Textarea, Center, Box, Text, Code } from "@chakra-ui/react";

const Create = () => {
  return (
    <Center marginTop={50}>
      <Box h="100%" w="60%" justifySelf="center">
        <Center h={30} p={10}>
          <Text fontSize={24} fontWeight={500}>
            Escribi tu pregunta!
          </Text>
        </Center>
        <Center>
          <Textarea ></Textarea>
        </Center>
        <Center h={30} p={10}>
          <Text fontSize={24} fontWeight={300}>
            Queres agregarle un fragmento de codigo? Pegalo acá abajo
          </Text>
        </Center>
        <Center>
          <Textarea></Textarea>
        </Center>
      </Box>
    </Center>
  );
};

export default Create;
