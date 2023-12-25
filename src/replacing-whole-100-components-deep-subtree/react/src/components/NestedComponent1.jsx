import React from 'react';

export default function NestedComponent1({ counter }) {
    return (
        <>
            First version of nested component
            { counter !== 0 ? (
                <div>
                    <NestedComponent1 counter={counter - 1} />
                </div>
            ) : null }
        </>
    );
}