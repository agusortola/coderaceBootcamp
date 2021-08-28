import {

  Accordion,
} from "@chakra-ui/react";

import QuestionItem from "./QuestionItem";
import { useContext } from "react";
import { DataContext } from "./DataContext";


const List = () => {
  
  const { data: questions } = useContext(DataContext);


  // function handleClick(){

  //   fetch("https://61293109068adf001789b814.mockapi.io/questions/" + 10,{
  //     method:"DELETE",
  //   }).then(()=>{
  //     console.log('deleteados')
  //   })
  // }

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
