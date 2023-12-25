import React from 'react';

export default function NestedComponent2({ counter }) {
    return (
        <>
            Second version of nested component
            { counter !== 0 ? (
                <span>
                    <NestedComponent2 counter={counter - 1} />
                </span>
            ) : null }
        </>
    );
}