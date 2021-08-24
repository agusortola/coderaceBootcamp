import logo from './logo.svg';
import './App.css';
import { Text } from "@chakra-ui/react" 
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (

    <ChakraProvider>
      <ListContainer />
    </ChakraProvider>
  );
}

export default App;
