import { Textarea, Center, Box, Text, Code, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [codeFragment, setCodeFragment] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    const question = {title, codeFragment}
  }
  return (
    <Center marginTop={50}>
      <Box h="100%" w="60%" justifySelf="center">
        <Center h={30} p={10}>
          <Text fontSize={24} fontWeight={500}>
            Escribi tu pregunta!
          </Text>
        </Center>
        <Center>
          <Textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Textarea>
        </Center>
        <Center h={30} p={10}>
          <Text fontSize={24} fontWeight={300}>
            Queres agregarle un fragmento de codigo? Pegalo acá abajo
          </Text>
        </Center>
        <Center>
          <Textarea
            value={codeFragment}
            onChange={(e) => setCodeFragment(e.target.value)}
          ></Textarea>
        </Center>
        <Center marginTop={10}>
          <Button colorScheme="green" onClick={handleSubmit}>Submit</Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Create;
