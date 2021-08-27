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
  const { createOrValidateAnswer } = useContext(DataContext);
  const { id } = useParams();
  const { data } = useFetch("https://61293109068adf001789b814.mockapi.io/questions/" + id);
  const selectedQuestion = "data?.filter(i => i.id == id)"

//   const question = selectedQuestion[0]

  


  const handleSubmit = (e) => {

    e.preventDefault();
    const answer = { body, isValidated }

    createOrValidateAnswer(data, answer);

  };

  return (
    <Center marginTop={50}>
      <Box h="100%" w="60%" justifySelf="center">
        <Center h={30} p={10}>
          <Text fontSize={16} fontWeight={300}>
            {data && data.title}
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
