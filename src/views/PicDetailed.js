import React from 'react';
import { useParams } from 'react-router-dom';

function PicDetailed() {
    const { picId } = useParams();

    return (
        <p>{`PicDetailed View: ${picId}`}</p>
    )
}

export default PicDetailed;
