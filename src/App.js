import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ListContainer from "./components/ListContainer";
import Navbar from "./components/Navbar";
import { DataProvider } from "./components/DataContext";
import Create from "./components/Create";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateAnswer from "./components/CreateAnswer";


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
            <Route path="/questions/:id">
              <CreateAnswer />
            </Route>
          </Switch>
        </DataProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
