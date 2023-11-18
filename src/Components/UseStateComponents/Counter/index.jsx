import { useState } from 'react'

export default function Counter() {
    
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        setCount(count - 1000);
        // initial count - 1000 // 0 - 1000
        setCount(count - 1);
        // initial count - 1 // 0 - 1
        setCount(PrevCount => PrevCount - 2);
        // (initial count - 2) //  -1 - 2
    }

    const incrementCount = () => setCount(count + 1);


    return (
        <>
            <button onClick={decrementCount}>-</button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </>

    )
}
