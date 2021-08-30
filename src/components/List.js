import { Accordion } from "@chakra-ui/react";
import QuestionItem from "./QuestionItem";

const List = ({ questions }) => {
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
