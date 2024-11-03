import Filter from "./Filter";
import Postings from "./Postings";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Filter />
            <Postings />
        </div>
    );
}