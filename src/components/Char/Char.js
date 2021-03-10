import React from 'react';

const char = ( props ) => {

    const styles = {
        display: 'inline-block',
        fontSize: '16px',
        padding: '10px',
        margin: '10px',
        border: '3px double orchid',
        borderRadius: '10%'
    }

    return (
        <p 
            style={styles}
            onClick={props.delete}
        >
            {props.char}
        </p>
    )
}

export default char;