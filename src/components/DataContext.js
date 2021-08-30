import { createContext } from "react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import Paths from "../rest/paths.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [newQuestion, setNewQuestion] = useState(undefined);
  const { data } = useFetch(Paths.QUESTIONS());

  const createOrValidateAnswer = (data, answer) => {
    data?.answers?.push(answer);
    console.log("data", data);

    if (data.id !== undefined && answer) {
      answer.questionId = data.id; // NO TOCAR -> pronto a refactorizarse

      fetch(Paths.ANSWER(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answer),
      })
        .then((res) => {
          console.log(data, "Ya se pusheo la respuesta!");
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    if (newQuestion !== undefined) {
      fetch(Paths.QUESTIONS(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      }).then(() => {
        console.log("new question added");
      });
    }
  }, [newQuestion]);

  return (
    <DataContext.Provider
      value={{ data, setNewQuestion, createOrValidateAnswer }}
    >
      {children}
    </DataContext.Provider>
  );
};
