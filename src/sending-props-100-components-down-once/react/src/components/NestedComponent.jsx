import React from 'react';

export default function NestedComponent({ counter, value }) {
    return (
        counter !== 0 ? (
            <div>
                <NestedComponent counter={counter - 1} value={value} />
            </div>
        ) : (
            value
        )
    );
}
