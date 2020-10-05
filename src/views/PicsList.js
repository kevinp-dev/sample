import React from 'react';
import PropTypes from 'prop-types';

// Renders a list of each post's title and thumbnail
function PicList({ posts }) {
    return (
        <ul>
            {posts.map(post => (
                <li>{`${post.title}`}</li>
            ))}
        </ul>
    )
}

PicList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PicList;
