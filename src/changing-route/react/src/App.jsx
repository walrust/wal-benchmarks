import HomePage from "./components/HomePage";
import AnotherPage from "./components/AnotherPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/another" element={<AnotherPage />} />
            </Routes>
        </BrowserRouter>
    );
}