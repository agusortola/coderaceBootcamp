import { Textarea, Center, Box, Text, Code, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import Moment from "moment";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [codeFragment, setCodeFragment] = useState([""]);
  


  const { setNewQuestion } = useContext(DataContext);

  const handleSubmit = (e) => {
    const date = Moment().format("MMM Do YY");
    const answers = [];
    e.preventDefault();
    const question = { title, codeFragment, date, answers };
    setNewQuestion(question);
  };
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
            Queres agregar un fragmento de codigo como duda? Pegalo acá abajo (de todos modos escribi una pregunta arriba!)
          </Text>
        </Center>
        <Center>
          <Textarea
            value={codeFragment}
            onChange={(e) => setCodeFragment(e.target.value)}
          ></Textarea>
        </Center>
        <Center marginTop={10}>
            <Button colorScheme="green" onClick={handleSubmit}>
          <Link to ="/">
              Submit
          </Link>
            </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Create;
