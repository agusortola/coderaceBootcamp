import { Textarea, Center, Box, Text, Code, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import Moment from "moment";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Editor from "./Editor";
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [codeFragment, setCodeFragment] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const { setNewQuestion } = useContext(DataContext);

  const handleSubmit = (e) => {
    const date = new Date().toISOString().replace("Z", "");
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
          <Text className="test" fontSize={24} fontWeight={500}>
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
            Queres agregar un fragmento de codigo como duda?
          </Text>
        </Center>
        <Box width='100%'>
          <div className="pane top-pane" style={{ height: 100 }}>
            <Editor
              language="xml"
              displayName="HTML"
              value={codeFragment}
              onChange={setCodeFragment}
            />
          </div>
          <div className="pane">
            <iframe
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              maxHeight="40px"
              height="100px"
            />
          </div>
        </Box>
        <Center className='submit-button' marginTop={10} >
          <Button colorScheme="green" onClick={handleSubmit}>
            Submit
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Create;
