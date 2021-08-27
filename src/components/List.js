import {
  IconButton,
  HStack,
  VStack,
  Text,
  Center,
  Accordion,
} from "@chakra-ui/react";

import QuestionItem from "./QuestionItem";
import { useContext } from "react";
import { DataContext } from "./DataContext";

const handleClick = () => {

};

const List = () => {
  const { data: questions } = useContext(DataContext);

  return (
    <div display="block" width="100%">
      <Accordion width="100%">
        {questions &&
          questions.map((question) => (
            <QuestionItem
              className="question-preview"
              question={question}
              key={question.id}
            />
          ))}
      </Accordion>
    </div>
  );
};

export default List;
