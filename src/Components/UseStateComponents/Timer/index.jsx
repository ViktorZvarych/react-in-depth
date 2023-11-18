import { useState, useEffect } from 'react'

export default function Timer() {

    const [timer, setTimer] = useState(100);

    const decrementTimer = () => {
        // console.log(timer);
        setTimer(timer - 1);
        // console.log(timer);
    }

    useEffect(
        () => {
            // console.log(timer);
            const interval = setInterval(decrementTimer, 1000);
            return () => clearInterval(interval);
        }
    )

    return (
        <>
            <p>{timer}</p>
        </>

    )
}
