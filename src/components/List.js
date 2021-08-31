import { Accordion, Center } from "@chakra-ui/react";
import QuestionItem from "./QuestionItem";

const List = ({ questions }) => {
  return (
    <Center width="100%" marginTop={30}>
      <Accordion width="70%">
        {questions &&
          questions.map((question) => (
            <QuestionItem
              className="question-preview"
              question={question}
              key={question.id}
            />
          ))}
      </Accordion>
    </Center>
  );
};

export default List;
