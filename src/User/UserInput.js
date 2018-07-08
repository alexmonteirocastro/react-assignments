import React from 'react';

const userInput = (props) => {
    return <input type="text" onChange={props.changed} defaultValue={props.default} style={props.style}/>
};

export default userInput;