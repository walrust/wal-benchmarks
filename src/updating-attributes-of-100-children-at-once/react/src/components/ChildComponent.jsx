import React from 'react';

export default function ChildComponent({ value }) {
    const divStyle = {
        color: value % 2 === 0 ? 'red' : 'blue',
    }

    return (
        <div style={divStyle}>
            <p> Const text </p>
        </div>
    );
}
