import { useState, useEffect } from "react"
import Section from "./Section";

export default function Timer() {
    const [visits, setVisits] = useState(0);

    const visitsOnClickHandler = () => (setVisits(visits + 1));

    useEffect(() => {
        console.log('Home re-render');
    });

    return (
        <>
            <h1>Visits: {visits}</h1>
            <button onClick={visitsOnClickHandler}>+</button>
            <Section />
        </>
    )

}