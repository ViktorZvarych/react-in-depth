import { useState, useEffect } from 'react'
import Home from './Home';

export default function UseEffectApp() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const clickhandler1 = () => setCount1(count1 + 1);
    const clickhandler2 = () => setCount2(count2 + 1);

    useEffect(() => {
        console.log('Initialize and Mount UseEffectApp!');
        return () => console.log('Unmount UseEffectApp!');
    }, [])

    useEffect(() => {
        console.log('Re-render UseEffectApp!');
    })

    useEffect(() => {
        console.log('Update UseEffectApp - Count1!');
    }, [count1])

    useEffect(() => {
        console.log('Update UseEffectApp - Count2!');
    }, [count2])

    return (
        <>
            {/* <h1>UseEffect Components</h1>
            <div>
                <button onClick={clickhandler1}>+</button>
                <p>{count1}</p>
                <br />
                <button onClick={clickhandler2}>+</button>
                <p>{count2}</p>
            </div> */}
            <Home />
        </>
    )
}
