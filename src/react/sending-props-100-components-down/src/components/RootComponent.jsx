import React, { useState } from 'react';
import NestedComponent from './NestedComponent';

export default function RootComponent() {
    const [value, setValue] = useState(0);

    const on_click = () => {
        setValue(1);
    };

    return (
        <div>
            <button id="button" onClick={on_click}>Click me</button>
            <NestedComponent counter={100} value={value} />
        </div>
    );
}
