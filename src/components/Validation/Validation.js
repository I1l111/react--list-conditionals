import React from 'react';

const validation = ( props ) => {

    return (
        <p>
         {props.textLength <= 5 ? 'Text is too short.' : 'Text is long enough.'}
        </p>
    )
}

export default validation;