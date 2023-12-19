import React, { useState } from 'react';

export default function ForComponent() {
    const [value, setValue] = useState(0);

    const on_click = () => {
        setValue(value + 1);
    };

    return (
        <>
            <button id="button" onClick={on_click}>Click me</button>
            {Array.from({ length: value }).map((_, index) => (
                <div>
                    {index}
                </div>
            ))}
        </>
    );
}
