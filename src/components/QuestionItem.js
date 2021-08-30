import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  IconButton,
  HStack,
  VStack,
  Badge,
  Tooltip,
} from "@chakra-ui/react";
import {
  ChatIcon,
  CheckIcon,
  ViewIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";

const QuestionItem = ({ question }) => {
  const [openCode, setOpenCode] = useState(false);

  function handleCopyId(id) {
    navigator.clipboard.writeText(id);
  }

  function formatDate(d) {
    const date = new Date(d);

    date.setHours(date.getHours() - 3);

    let formattedDate = "";

    const separated = date.toLocaleDateString().split("/");
    const month = separated[0];
    const day = separated[1];
    const year = separated[2];

    const separator = "-";

    formattedDate += day >= 10 ? day : `0${day}`;
    formattedDate += separator;
    formattedDate += month >= 10 ? month : `0${month}`;
    formattedDate += separator;
    formattedDate += year;

    formattedDate += " " + date.toLocaleTimeString();

    return formattedDate;
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
          <HStack flexGrow="1" flexGrow="1" spacing={3}>
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
                  {question.answers.length == 0 && (
                    <Badge
                      variant="subtle"
                      colorScheme="green"
                      ml="1"
                      fontStyle="normal"
                      fontSize="1em"
                      marginRight={5}
                    >
                      New
                    </Badge>
                  )}
                  Created: {formatDate(question.date)}
                </Text>
                <Tooltip label="Copiar ID">
                  <IconButton
                    color="grey"
                    size="xs"
                    variant="ghost"
                    aria-label="Search database"
                    icon={<InfoOutlineIcon fontSize={10} />}
                    onClick={() => handleCopyId(question.id)}
                  />
                </Tooltip>
              </HStack>
              <Tooltip label="Expandir respuestas" placement="top">
                <AccordionButton
                  colorScheme="blue"
                  textAlign="left"
                  flexGrow="1"
                  width="100%"
                >
                  <Text fontWeight={400} flexGrow="1" width="100%">
                    {question.title}
                  </Text>

                  <AccordionIcon />
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
                background={answer.validated ? "#d8fae8" : "#f6f6f6"}
                padding={5}
                marginTop={5}
                marginBottom={5}
              >
                <HStack>
                  <Text fontSize={10} fontStyle="italic" color="grey">
                    Created: {formatDate(answer.date)}
                  </Text>
                  <Tooltip label="Copiar ID">
                    <IconButton
                      color="grey"
                      size="xs"
                      variant="ghost"
                      aria-label="Search database"
                      icon={<InfoOutlineIcon fontSize={10} />}
                      onClick={() => handleCopyId(answer.id)}
                    />
                  </Tooltip>
                </HStack>
                <HStack justify="space-between">
                  <Text fontWeight={answer.validated ? 400 : 300}>
                    {answer.body}
                  </Text>
                  {answer.validated && (
                    <IconButton
                      colorScheme="green"
                      variant="ghost"
                      size="xs"
                      aria-label="Search database"
                      icon={<CheckIcon fontSize={14} />}
                    />
                  )}
                </HStack>
              </AccordionPanel>
            );
          })}
      </AccordionItem>
    </div>
  );
};

export default QuestionItem;
