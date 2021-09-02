import { Textarea, Center, Box, Text, Code, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import Moment from "moment";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link, useParams } from "react-router-dom";
import Paths from "../rest/paths.js";
import { useHistory } from "react-router-dom";
import Editor from "./Editor";

const CreateAnswer = () => {
  const [body, setBody] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const { createOrValidateAnswer } = useContext(DataContext);
  const { id } = useParams();
  const { data } = useFetch(Paths.QUESTION(id));
  const history = useHistory();
  const date = new Date().toISOString().replace("Z", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = { body, date };
    createOrValidateAnswer(data, answer);
    history.push("/");
  };

  return (
    <Center marginTop={50}>
      <Box h="100%" w="60%" justifySelf="center">
        <Center h={30} p={10} bg="#fafafa" borderRadius={10}>
          <Text fontSize={18} fontWeight={400}>
            {data && data.title}
          </Text>
        </Center>
        <Center width="100%" bg="#fafafa" justifyContent="start">
          {data && data.codeFragment ? (
            <Editor
              language="xml"
              displayName="HTML"
              value={data.codeFragment}
            />
          ) : (
            <></>
          )}
        </Center>
        <Center paddingTop={10}>
          <Textarea
            width="80%"
            placeholder="Escribe tu respuesta..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></Textarea>
        </Center>
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
