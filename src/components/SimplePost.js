import React from 'react';
import PropTypes from 'prop-types';
import './SimplePost.css';

function SimplePost({ title, thumbnail }) {
    return (
        <li className="simple-post">
            {/* Use background images to standardize presentation */}
            <div className="simple-post__thumbnail" style={{ backgroundImage: `url(${thumbnail})`}}>
                {/* Hidden image for crawlers and screen readers */}
                <img alt={title} src={thumbnail} style={{display: 'none'}} />
            </div>
            <span className="simple-post__title">{`${title}`}</span>
        </li>
    )
}

SimplePost.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}

export default SimplePost;
