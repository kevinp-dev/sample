import React from 'react';
import PropTypes from 'prop-types';
import SimplePost from '../components/SimplePost'

// Renders a list of each post's title and thumbnail
function PostsList({ posts, subreddit }) {
    return (
        <div>
            <h1>{ `/r/${subreddit} Browser` }</h1>
            <ul>
                {posts.map(post => (
                    <SimplePost 
                        key={post.id} 
                        title={post.title} 
                        thumbnail={post.thumbnail} 
                    />
                ))}
            </ul>
        </div>
    )
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    subreddit: PropTypes.string.isRequired
}

export default PostsList;
