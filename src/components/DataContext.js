import { createContext } from "react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [newQuestion, setNewQuestion] = useState(undefined);

  const { data } = useFetch("http://localhost:8000/questions");

  function createNewAnswer(selectedQuestion, answer) {
    if (selectedQuestion !== undefined && answer) {
      fetch("http://localhost:8000/questions", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: selectedQuestion?.answers?.push(answer),
      }).then(() => {
        console.log("new answer added");
      });
    }
  }

  useEffect(() => {
    if (newQuestion !== undefined) {
      fetch("http://localhost:8000/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      }).then(() => {
        console.log("new question added");
      });
    }
  }, [newQuestion]);

  useEffect(() => {
    if (newQuestion !== undefined) {
      fetch("http://localhost:8000/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      }).then(() => {
        console.log("new question added");
      });
    }
  }, [newQuestion]);

  return (
    <DataContext.Provider value={{ data, setNewQuestion, createNewAnswer }}>
      {children}
    </DataContext.Provider>
  );
};
