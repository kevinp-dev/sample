import React from 'react';
import PropTypes from 'prop-types';

// allowed post attributes derived from prettyMap
const prettyMap = {
    name: 'post author',
    ups: 'upvotes',
    url: 'image url'
};
const whiteList = Object.keys(prettyMap);

const PicDetailed = React.memo(function PicDetailed({ post }) {
    let entries = Object.entries(post);
    entries = entries.filter(entry => whiteList.includes(entry[0]));
    return (
        <React.Fragment>
            <h2>{post.title}</h2>
            <img alt={post.title} src={post.thumbnail} />
            <ul>
                {entries.map(entry => {
                    return (
                        <li key={entry[0]}>
                            {`${prettyMap[entry[0]]}: ${entry[1]}`}
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
});

PicDetailed.propTypes = {
    post: PropTypes.object.isRequired
}


export default PicDetailed;
