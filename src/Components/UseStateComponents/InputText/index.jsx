import { useState } from 'react'

export default function InputText() {
    const [text, setText] = useState('');

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [submitText, setSubmitText] = useState('');

    const inputChangeHandler = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    const input1ChangeHandler = (e) => {
        setText1(e.target.value);
    }

    const input2ChangeHandler = (e) => {
        setText2(e.target.value);
    }

    const input3ChangeHandler = (e) => {
        setText3(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault(e.target.value);
        setSubmitText(`1. ${text1} 2. ${text2} 3. ${text3}`)
        setText1('');
        setText2('');
        setText3('');
    }

    return (
        <>
            <h1>{text}</h1>
            <input type="text" onChange={inputChangeHandler} />
            <br />
            <form onSubmit={submitHandler}>
                <input type="text" onChange={input1ChangeHandler} value={text1}/>
                <input type="text" onChange={input2ChangeHandler} value={text2} />
                <input type="text" onChange={input3ChangeHandler} value={text3} />
                <button type='submit' >Submit</button>
            </form>
            <h1>{submitText}</h1>

        </>
    )
}
