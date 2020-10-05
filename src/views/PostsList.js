import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimplePost from '../components/SimplePost'
import FormInput from '../components/FormInput'

// Renders a list of each post's title and thumbnail
function PostsList({ posts, subreddit }) {

    const [filterStr, setFilter] = useState('');

    if (filterStr) {
        posts = posts.filter(post => {
            const title = post.title.toLowerCase();
            return title.includes(filterStr.toLowerCase());
        })
    }

    return (
        <div>
            <h1>{ `/r/${subreddit} Browser` }</h1>
            <FormInput
                id="post-filter"
                label="Filter"
                value={filterStr}
                onChange={setFilter}
            />
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
