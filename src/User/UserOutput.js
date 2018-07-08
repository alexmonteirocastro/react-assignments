import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is a paragraph by {props.userName}.</p>
            <p>This is another paragraph.</p>
        </div>
    )
};

export default userOutput;