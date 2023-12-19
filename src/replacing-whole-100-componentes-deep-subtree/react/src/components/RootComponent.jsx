import React, { useState } from 'react';
import NestedComponent1 from './NestedComponent1';
import NestedComponent2 from './NestedComponent2';

export default function RootComponent() {
    const [value, setValue] = useState(0);

    const on_click = () => {
        setValue(value + 1);
    };

    return (
        <div>
            <button id="button" onClick={on_click}>Click me</button>
            if (value % 2 === 0) {
                <NestedComponent1 counter={100} />
            } else {
                <NestedComponent2 counter={100} />
            }
        </div>
    );
}
