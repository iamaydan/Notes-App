import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./commons";
import { Homepage, Archieve, Create } from "./pages";

import { NotesContextProvider } from "./context/notes";
import { Container } from "./commons";
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <NotesContextProvider>
          <Switch>
            <Route path="/notes" component={Homepage} />
            <Route path="/archieve" component={Archieve} />
            <Route path="/create" component={Create} />
          </Switch>
        </NotesContextProvider>
      </Container>
    </Router>
  );
}

export default App;
