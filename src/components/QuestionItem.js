import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Text,
  Code,
} from "@chakra-ui/react";
import { ChatIcon, CheckIcon } from "@chakra-ui/icons";
import { IconButton, HStack, VStack } from "@chakra-ui/react";
import { useState, useParams } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { useEffect } from "react";

const QuestionItem = ({ question }) => {

  const { createOrValidateAnswer } = useContext(DataContext);
  const [toggleClasses, setToggleClasses] = useState(undefined)
  useEffect(()=>{
    
  },[toggleClasses])

  function handleClick(answer) {
    
    setToggleClasses(!toggleClasses)

    answer.isValidated = !answer.isValidated

    createOrValidateAnswer(question, answer)
    console.log(answer)

    // const answer = {body, !isValidated}

  };


  return (
    <AccordionItem flex="1" key={question.id} p={5}>
      <h2>
        <AccordionButton colorScheme="blue">
          {question.title} <br></br>
          <Link to={`/questions/${question.id}`}>
            <IconButton
              colorScheme="blue"
              size="sm"
              aria-label="Search database"
              icon={<ChatIcon />}
            />
          </Link>
        </AccordionButton>
        <Code>{question.codeFragment}</Code>
      </h2>

      {!!question.answers &&
        question.answers.map((answer) => {
          return (
            <AccordionPanel>
              <Text fontWeight={answer.isValidated ? 500 : 300}>
                {answer.body}
              </Text>
              <IconButton
                onClick={() => handleClick(answer) }
                colorScheme="green"
                variant={answer.isValidated? "solid" : "outline" }
                size="xs"
                aria-label="Search database"
                icon={<CheckIcon />}
              />
            </AccordionPanel>
          );
        })}
    </AccordionItem>
  );
};

export default QuestionItem;
