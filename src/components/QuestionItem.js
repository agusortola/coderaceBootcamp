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
import {
  IconButton,
  HStack,
  VStack,
  StackDivider,
  Badge,
  Tooltip,
} from "@chakra-ui/react";
import { useState, useParams } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { useEffect } from "react";
import Editor from "./Editor";

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

  function handleCopyId(id){

    navigator.clipboard.writeText(id);
    
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
          <HStack flexGrow="1" flexGrow="1" spacing={2}>
            <VStack>
              <Tooltip label={question.answers.length + " respuestas"}>
                <HStack>
                  <Text fontWeight={500} fontSize={14} color="grey">
                    {question.answers.length}
                  </Text>
                  <ChatIcon color="grey" fontSize={16}></ChatIcon>
                </HStack>
              </Tooltip>
              <VStack justify="center" width="15%">
                <Badge colorScheme="purple" size="xs">
                  JAVA
                </Badge>
              </VStack>
            </VStack>
            <VStack textAlign="left" flexGrow="1" alignItems="flex-start">
              <HStack marginLeft={5}>
                <Text fontSize={10} fontStyle="italic" color="grey">
                  Created: {question.date}
                </Text>
                <IconButton
                color="grey"
                size="xs"
                variant="ghost"
                aria-label="Search database"
                icon={<ViewIcon fontSize={10} />}
                onClick={()=>handleCopyId(question.id)}
              />
              </HStack>
              <Tooltip label="Expandir respuestas" placement='top'>
              <AccordionButton
                colorScheme="blue"
                textAlign="left"
                flexGrow="1"
                width="100%"
              >
                <Text fontWeight={400} flexGrow="1" width="100%">
                  {question.title}
                </Text>
                <AccordionIcon  />
              </AccordionButton>
                </Tooltip>
            </VStack>
            <Tooltip label="Ver código de la pregunta">
              <IconButton
                colorScheme="blue"
                size="sm"
                variant="ghost"
                aria-label="Search database"
                icon={<ViewIcon fontSize={18} />}
                onClick={() => setOpenCode(!openCode)}
              />
            </Tooltip>
            <Link to={`/questions/${question.id}`}>
              <Tooltip label="Responder">
                <IconButton
                  colorScheme="blue"
                  size="sm"
                  variant="ghost"
                  aria-label="Search database"
                  icon={<ChatIcon fontSize={18} />}
                />
              </Tooltip>
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
                padding={5}
                marginTop={5}
                marginBottom={5}
              >
                <HStack>
                  <Text fontSize={10} fontStyle="italic" color="grey">
                    Created: {question.date}
                  </Text>
                  <IconButton
                color="grey"
                size="xs"
                variant="ghost"
                aria-label="Search database"
                icon={<ViewIcon fontSize={10} />}
                onClick={()=>handleCopyId(answer.id)}
              />
                </HStack>
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
