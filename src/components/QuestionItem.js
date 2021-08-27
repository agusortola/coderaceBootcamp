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
import { useState } from "react";

const QuestionItem = ({ question }) => {
  const handleClick = () => {
    console.log("Clickeado");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  return (
    <AccordionItem flex="1" key={question.id} p={5}>
      <h2>
        <AccordionButton>
          {question.title} <br></br>
          <IconButton
            colorScheme="blue"
            size="sm"
            aria-label="Search database"
            icon={<ChatIcon />}
          />
        </AccordionButton>
        <Code>{question.codeFragment}</Code>
      </h2>

      {!!question.answers &&
        question.answers.map((answer) => {
          return (
            <AccordionPanel>
              <Text fontWeight={answer.isValidated ? 500 : 300}>{answer.body}</Text>
              <IconButton
                onClick={() => setIsValidated(!isValidated)}
                colorScheme="green"
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
