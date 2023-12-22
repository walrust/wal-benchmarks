import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const [value, setValue] = useState(0);

    const on_click = () => {
        setValue(value + 1);
    };

    return (
        <>
            <button id="button" onClick={on_click}>Click me</button>
            {Array.from({ length: 100 }).map((_, __) => (
                <ChildComponent value={value} />
            ))}
        </>
    );
}
