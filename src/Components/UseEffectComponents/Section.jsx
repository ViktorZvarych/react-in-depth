import { useState, UseEffect } from "react"

export default function Section() {
    const [time, setTime] = useState(0);

    UseEffect(() => {
        const timeIntervalId = setInterval(() => (useState(time + 1)), 1000);

        return clearInterval(timeIntervalId);
    });

    

    return (
        <>
            <h2>Time on page: {time} second(s)</h2>
        </>
    )

}