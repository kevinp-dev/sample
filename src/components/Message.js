import React from 'react';
import PropTypes from 'prop-types';

function Message({children}) {
    return (
        <p>{children}</p>
    )
}

Message.propTypes = {
    children: PropTypes.node.isRequired
};

export default Message;