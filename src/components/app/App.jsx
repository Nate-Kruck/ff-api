import React from 'react';
import AllPlayers from '../../container/playerroster/playerroster';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


export default function App() {
  // return <AllPlayers />;
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/players"
            component={AllPlayers}
          />
        </Switch>
      </Router>
    </>
  );
}
