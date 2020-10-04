import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PicsList from './views/PicsList';
import Pic from './views/PicDetailed';
import './App.css'; // CSS will change

function App() {
  return (
    <Router>
      {/* TODO: Navigation here */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/pics" />
        </Route>
        <Route exact path="/pics">
          <PicsList />
        </Route>
        <Route path="/pics/:picId">
          <Pic />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
