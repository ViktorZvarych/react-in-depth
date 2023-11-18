export default function ContactForm() {
    
    const onSubmitHandler = (e) => {
        console.log(e);
        e.preventDefault();
        const formData = new FormData(e.target);

        // 3 ways to get data after Form submission
        
        for (const entry of formData) {
            console.log(entry);
        }

        console.log([...formData.entries()]);

        console.table(Object.fromEntries(formData));
    }
    

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="first-name">
                <input type="text" name='first-name' placeholder='First name' />
            </label>
            <label htmlFor="last-name">
                <input type="text" name='last-name' placeholder='Last name' />
            </label>
            <label htmlFor="age">
                <input type="number" name='age' placeholder='10' />
            </label>
            <button type="submit" >Submit</button>
        </form>
    )
}
