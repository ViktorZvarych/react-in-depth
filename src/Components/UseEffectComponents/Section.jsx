import { useState, useEffect } from "react"

export default function Section() {
    const [time, setTime] = useState(0);

    useEffect (() => console.log('Section re-render'));

    useEffect(() => {
        const timeIntervalId = setInterval(() => (setTime(prevTime => prevTime + 1)), 1000);

        return () => clearInterval(timeIntervalId);
    }, [time]);

    

    return (
        <>
            <h2>Time on page: {time} second(s)</h2>
        </>
    )

}