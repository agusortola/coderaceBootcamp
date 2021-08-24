import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ListContainer from "./components/ListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <ListContainer></ListContainer>
    </ChakraProvider>
  );
}

export default App;
