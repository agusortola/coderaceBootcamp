import { createContext } from "react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import Paths from "../rest/paths.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [newQuestion, setNewQuestion] = useState(undefined);

  const { data } = useFetch(Paths.QUESTIONS());

  console.log(Paths.QUESTIONS())

  // function validateAnswer(data, answer, id) {

  //   data.answers.push(answer)
  //   // console.log("data", data)

  //   if (data.id !== undefined && answer) {
  //     fetch("https://61293109068adf001789b814.mockapi.io/" + data.id , {
  //       method:'PUT',
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data)
  //     })
  //     .then(res => {
  //       console.log(data);
  //     })
  //   }
  // }

  const createOrValidateAnswer = (data, answer) => {

    if(data.answers.includes(answer)){
      console.log('si lo contiene pa')
    }else{
      data.answers.push(answer)
      // console.log("data", data)
    }

    if (data.id !== undefined && answer) {
      fetch("https://61293109068adf001789b814.mockapi.io/questions/" + data.id , {
        method:'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(res => {
        console.log(data);
      })
    }
  }



  useEffect(() => {
    if (newQuestion !== undefined) {
      fetch(Paths.QUESTIONS() , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      }).then(() => {
        console.log("new question added");
      });
    }
  }, [newQuestion]);

  return (
    <DataContext.Provider value={{ data, setNewQuestion, createOrValidateAnswer }}>
      {children}
    </DataContext.Provider>
  );
};
