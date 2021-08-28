import { Textarea, Center, Box, Text, Code, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import Moment from "moment";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Editor from "./Editor";

const Create = () => {
  const [title, setTitle] = useState("");
  const [codeFragment, setCodeFragment] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const { setNewQuestion } = useContext(DataContext);

  const handleSubmit = (e) => {
    const date = Moment().format("MMM Do YY");
    const answers = [];
    e.preventDefault();
    const question = { title, codeFragment, date, answers };
    setNewQuestion(question);
    history.push("/");
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
            Queres agregar un fragmento de codigo como duda? Pegalo acá abajo
            (de todos modos escribi una pregunta arriba!)
          </Text>
        </Center>
        <Center>
          <Textarea
            value={codeFragment}
            onChange={(e) => setCodeFragment(e.target.value)}
          ></Textarea>
        </Center>
        <div className="pane top-pane">
          <Editor
            language="xml"
            displayName="HTML"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="pane">
          <iframe
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            maxHeight="40px"
          />
        </div>
        <Center marginTop={10}>
          <Button colorScheme="green" onClick={handleSubmit}>
            Submit
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Create;
