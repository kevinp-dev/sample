import React from 'react';
import { useParams } from 'react-router-dom';

function PicDetailed() {
    const { postId } = useParams();

    return (
        <p>{`PicDetailed View: ${postId}`}</p>
    )
}

export default PicDetailed;
