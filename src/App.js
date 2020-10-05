import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PicsList from './views/PicsList';
import Pic from './views/PicDetailed';
import PostsFetcher from './components/PostsFetcher';
import Message from './components/Message';
import './App.css'; // CSS will change

function App() {
  return (
    <Router>
      {/* TODO: Navigation here */}
      <PostsFetcher subreddit="pics" render={({ isReady, hasError, data: posts }) => {
        if (hasError) {
          return <Message>Failed to load data from /r/pics.</Message>
        } else if (!isReady) {
          return <Message>Loading data from /r/pics ...</Message>
        }

        return (
          <Switch>
            <Route exact path="/">
              <Redirect to="/pics" />
            </Route>
            <Route exact path="/pics">
              <PicsList posts={posts} />
            </Route>
            <Route path="/pics/:picId">
              <Pic />
            </Route>
          </Switch>
        );
      }}
      />
    </Router>
  );
}

export default App;
