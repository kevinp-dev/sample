import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../config';
import './SimplePost.css';

const SimplePost = React.memo(function SimplePost({ id, title, thumbnail }) {
    return (
        <li className="simple-post">
            <Link to={ `/${ROUTES.POSTS}/${id}` }>
                {/* Use background images to standardize presentation */}
                <div className="simple-post__thumbnail" style={{ backgroundImage: `url(${thumbnail})`}}>
                    {/* Hidden image for crawlers and screen readers */}
                    <img alt={title} src={thumbnail} style={{display: 'none'}} />
                </div>
            </Link>
            <span className="simple-post__title">{`${title}`}</span>
        </li>
    )
});

SimplePost.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}

export default SimplePost;
