import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ListContainer from "./components/ListContainer";
import Navbar from "./components/Navbar";
import { DataProvider } from "./components/DataContext";

function App() {

  return (
    <ChakraProvider>
      <DataProvider>
        <Navbar></Navbar>
        <ListContainer></ListContainer>
      </DataProvider>
    </ChakraProvider>
  );
}

export default App;
