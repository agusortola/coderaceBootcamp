import { useState, useEffect } from "react";
import { ChatIcon, CheckIcon } from "@chakra-ui/icons";
import {
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";

import QuestionItem from "./QuestionItem";
import { useContext } from "react";
import { DataContext } from "./DataContext";

const handleClick = () => {
  console.log("Clickeado");
};

const List = () => {
 
  const {data: questions} = useContext(DataContext)


  return (
    <div display="block">
      {questions && questions.map((question) => (
        <HStack>
          <VStack>
            <QuestionItem
              className="question-preview"
              question={question}
              key={question.id}
            />
          </VStack>
          <VStack>
            <HStack>
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={<ChatIcon />}
              />
              <IconButton
                colorScheme="green"
                aria-label="Search database"
                icon={<CheckIcon />}
              />
            </HStack>
          </VStack>
        </HStack>
      ))}
    </div>
  );
};

export default List;
