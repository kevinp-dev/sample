import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PostsList from './views/PostsList';
import PostDetailed from './views/PostDetailed';
import PostsFetcher from './containers/PostsFetcher';
import Message from './components/Message';
import { ROUTES } from './config';
import './App.css';

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
            <h1>{ `/r/${subreddit} Browser` }</h1>
            <Switch>
              <Route exact path="/">
                <Redirect to={ `/${ROUTES.POSTS}` } />
              </Route>
              <Route exact path={ `/${ROUTES.POSTS}` }>
                <PostsList posts={posts} />
              </Route>
              <Route path={ `/${ROUTES.POSTS}/:postId` }
                render={({ match }) => {
                  const postId = match?.params?.postId;
                  const post = posts.find(post => post.id === postId);
                  return post 
                    ? <PostDetailed post={post} />
                    : <Redirect to={ `/${ROUTES.POSTS}` } />
                }}
              />
            </Switch>
          </div>
        );
      }}
      />
    </Router>
  );
}

export default App;
