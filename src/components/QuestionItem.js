import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Center,
  Stack,
  Button,
} from "@chakra-ui/react";
import { ChatIcon, CheckIcon, ViewIcon } from "@chakra-ui/icons";
import { IconButton, HStack, VStack } from "@chakra-ui/react";
import { useState, useParams } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { useEffect } from "react";
import Editor from "./Editor";
import { Badge } from "@chakra-ui/react";

const QuestionItem = ({ question }) => {
  const { createOrValidateAnswer } = useContext(DataContext);
  const [toggleClasses, setToggleClasses] = useState(undefined);
  const [openCode, setOpenCode] = useState(false);

  useEffect(() => {}, [toggleClasses]);

  function handleClick(answer) {
    setToggleClasses(!toggleClasses);
    answer.isValidated = !answer.isValidated;
    createOrValidateAnswer(question, answer);
  }

  return (
    <div className="root">
      <AccordionItem flex="1" key={question.id} p={5}>
        <HStack
          flex="1"
          className="question"
          justify="space-between"
          marginBottom={5}
        >
          <HStack flex="0" flexGrow="0">
            <Text fontWeight={500} fontSize={14} color="grey">
              {question.answers.length}
            </Text>
            <ChatIcon color="grey" fontSize={16}></ChatIcon>
          </HStack>
          <VStack textAlign="left" flexGrow="1" alignItems="flex-start">
            <p>
              <AccordionButton colorScheme="blue" textAlign="left">
                <Text fontWeight={400}>{question.title}</Text>
                <AccordionIcon />
              </AccordionButton>
            </p>
            <HStack justify="space-between">
              <Badge colorScheme="purple">JAVA</Badge> 
              <Badge>SQL</Badge>
              <Badge colorScheme="yellow">git</Badge>
              <Badge colorScheme="green">Mongo</Badge>
            </HStack>
          </VStack>
          <HStack>
            <IconButton
              colorScheme="blue"
              size="sm"
              variant="ghost"
              aria-label="Search database"
              icon={<ViewIcon fontSize={18} />}
              onClick={() => setOpenCode(!openCode)}
            />
            <Link to={`/questions/${question.id}`}>
              <IconButton
                colorScheme="blue"
                size="sm"
                variant="ghost"
                aria-label="Search database"
                icon={<ChatIcon fontSize={18} />}
              />
            </Link>
          </HStack>
        </HStack>
        {openCode && (
          <Editor
            language="xml"
            displayName="HTML"
            value={question.codeFragment}
          />
        )}

        {!!question.answers &&
          question.answers.map((answer) => {
            return (
              <AccordionPanel
                borderRadius={10}
                background={answer.isValidated ? "#d8fae8" : "#f6f6f6"}
                padding={10}
                marginTop={5}
                marginBottom={5}
              >
                <HStack justify="space-between">
                  <Text fontWeight={answer.isValidated ? 400 : 300}>
                    {answer.body}
                  </Text>
                  <IconButton
                    onClick={() => handleClick(answer)}
                    colorScheme={answer.isValidated ? "green" : "grey"}
                    variant="ghost"
                    size="xs"
                    aria-label="Search database"
                    icon={<CheckIcon fontSize={answer.isValidated ? 14 : 10} />}
                  />
                </HStack>
              </AccordionPanel>
            );
          })}
      </AccordionItem>
    </div>
  );
};

export default QuestionItem;
