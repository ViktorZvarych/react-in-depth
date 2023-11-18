import { useState } from 'react'
import Button from '../Button';

export default function Profile() {

    const [logged, setLogged] = useState('Logged In');

    const onClickHandler = () => {
        setLogged(logged === 'Logged In' ? 'Logged Out' : 'Logged In');
    }

    return (
        <>
            <p>{logged}</p>
            <Button onClickHandler={onClickHandler} value={logged} />
            <br />
            <button onClick={onClickHandler}>Toggle in Profile</button>
        </>

    )
}