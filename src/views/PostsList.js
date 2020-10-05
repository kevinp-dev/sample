import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimplePost from '../components/SimplePost'
import FormInput from '../components/FormInput'

// TODO: tests
// Renders a list of each post's title and thumbnail
function PostsList({ posts }) {

    const [filterStr, setFilter] = useState('');

    if (filterStr) {
        posts = posts.filter(post => {
            const title = post.title.toLowerCase();
            return title.includes(filterStr.toLowerCase());
        })
    }

    return (
        <React.Fragment>
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
                        id={post.id}
                        title={post.title} 
                        thumbnail={post.thumbnail} 
                    />
                ))}
            </ul>
        </React.Fragment>
    )
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PostsList;
