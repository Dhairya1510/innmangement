import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getHotels } from "./actions/hotels";

import Homepage from "./Components/Homepage";
import Hotelform from "./Components/Form/Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path='/form'>
          <Hotelform />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
