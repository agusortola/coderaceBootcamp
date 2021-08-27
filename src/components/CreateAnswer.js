import { Textarea, Center, Box, Text, Code, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import Moment from "moment";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link, useParams } from "react-router-dom";

const CreateAnswer = () => {
  const [body, setBody] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const { createNewAnswer } = useContext(DataContext);
  const { id } = useParams();
  const { data } = useFetch("http://localhost:8000/questions");
  const selectedQuestion = data?.filter(i => i.id == id)

  const handleSubmit = (e) => {
    //   const date = Moment().format("MMM Do YY");
    e.preventDefault();
    const answer = { body, isValidated };
    createNewAnswer(selectedQuestion, answer);
  };

  return (
    <Center marginTop={50}>
      <Box h="100%" w="60%" justifySelf="center">
        <Center h={30} p={10}>
          <Text fontSize={16} fontWeight={300}>
            {selectedQuestion && selectedQuestion[0].title}
          </Text>
        </Center>
        <Center h={30} p={10}>
          <Text fontSize={24} fontWeight={500}>
            Escribi tu respuesta!
          </Text>
        </Center>
        <Center>
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></Textarea>
        </Center>
        {/* <Center h={30} p={10}>
          <Text fontSize={24} fontWeight={300}>
            Queres agregar un fragmento de codigo como duda? Pegalo acá abajo (de todos modos escribi una pregunta arriba!)
          </Text>
        </Center>
        <Center>
          <Textarea
            value={codeFragment}
            onChange={(e) => setCodeFragment(e.target.value)}
          ></Textarea>
        </Center> */}
        <Center marginTop={10}>
          <Button colorScheme="green" onClick={handleSubmit}>
            <Link to="/">Submit</Link>
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default CreateAnswer;
