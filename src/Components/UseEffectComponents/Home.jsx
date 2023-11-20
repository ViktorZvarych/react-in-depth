import { useState, UseEffect } from "react"
import Section from "./Section";

export default function Home() {
    const [visits, setVisits] = useState(0);

    const visitsOnClickHandler = () => (setVisits(visits + 1));

    return (
        <>
            <h1>Visits: {visits}</h1>
            <button onClick={visitsOnClickHandler}>+</button>
            <Section />
        </>
    )

}