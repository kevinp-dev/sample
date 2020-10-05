import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PicsList from './views/PostsList';
import Pic from './views/PostDetailed';
import PostsFetcher from './containers/PostsFetcher';
import Message from './components/Message';
import './App.css'; // CSS will change

function App() {
  const subreddit = 'pics';
  return (
    <Router>
      <PostsFetcher subreddit={subreddit} render={({ isReady, hasError, data: posts }) => {
        if (hasError) {
          return <Message>Failed to load data from /r/pics.</Message>
        } else if (!isReady) {
          return <Message>Loading data from /r/pics ...</Message>
        }

        return (
          <div className="view-container">
            {/* TODO: Navigation here */}
            <Switch>
              <Route exact path="/">
                <Redirect to="/posts" />
              </Route>
              <Route exact path="/posts">
                <PicsList subreddit={subreddit} posts={posts} />
              </Route>
              <Route path="/posts/:postId">
                <Pic />
              </Route>
            </Switch>
          </div>
        );
      }}
      />
    </Router>
  );
}

export default App;
