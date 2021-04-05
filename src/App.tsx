import React from "react";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Store from "./Store/Store";

function App() {
  return (
    <div className="App">
      <Store>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={MovieList} />
            <Route path="/movie-details" component={MovieDetails} />
          </Switch>
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
