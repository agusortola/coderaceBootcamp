import {
  Textarea,
  Center,
  Box,
  Text,
  Code,
  Button,
  Select,
  HStack,
} from "@chakra-ui/react";
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
  const [openBox, setOpenBox] = useState(false);

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
    <Center marginTop={50} >
      <Box h="100%" w="50%" justifySelf="center">
        <Center h={30} p={10}>
          <Text className="test" fontSize={20} fontWeight={400}>
            Escribi tu pregunta!
          </Text>
        </Center>
        <Center>
          <Textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Textarea>
        </Center>
        <Center marginTop={5} marginBottom={10} justifyContent="space-between">
          <Select 
            width="30%"
            variant="filled"
            placeholder="Seleccioná una categoría"
          >
            <option value="JAVA">JAVA</option>
            <option value="SQL">SQL</option>
            <option value="POSTMAN">POSTMAN</option>
            <option value="POSTMAN">Git</option>
            <option value="POSTMAN">Eclipse</option>
          </Select>
          <Button variant="solid" colorScheme="blue" onClick={() => setOpenBox(!openBox)}>Añadir fragmento de código</Button>
        </Center>
        {openBox && (
          <Box width="100%" marginTop={5}>
            <div className="pane top-pane">
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
        )}
        <Center className="submit-button">
          <Button colorScheme="green" paddingLeft={10} paddingRight={10} onClick={handleSubmit}>
            Submit
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Create;
