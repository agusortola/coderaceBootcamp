import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ListContainer from "./components/ListContainer";
import Navbar from "./components/Navbar";
import { DataProvider } from "./components/DataContext";
import Create from "./components/Create";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <DataProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ListContainer />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </DataProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
