import { useState } from "react";
import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";

import QuestionItem from "./QuestionItem";

const handleClick = () => {
  console.log("Clickeado");
};

const List = () => {
  const [questions, setQuestions] = useState([
    {
      title: "Acaso es alto bootcamp?",
      category: "lorem ipsum...",
      id: 1,
      date: "10-20-12",
      answers: [
        "si papurri, alto bootcamp el del nenardo",
        "no, es una vere",
        "pero aguante jugar al cs y fumar vela",
      ],
    },
    {
      title: "Ayuda con el If del ejercicio 2!!!",
      category: "orem ipsum...",
      id: 2,
      date: "10-20-12",
      answers: [
        "si papurri, alto bootcamp el del nenardo",
        "no, es una vere",
        "pero aguante jugar al cs y fumar vela",
      ],
    },
    {
      title: "aguante bokita el mas grande",
      category: "lorem ipsum...",
      id: 3,
      date: "10-20-12",
      answers: [
        "si papurri, alto bootcamp el del nenardo",
        "no, es una vere",
        "pero aguante jugar al cs y fumar vela",
      ],
    },
  ]);

  return (
    <div display="block">
      {questions.map((question) => (
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
                icon={<EditIcon />}
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
