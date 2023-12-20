import React from 'react';
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link id="button" to="/another">Go to Another Page</Link>
        </div>
    );
}
