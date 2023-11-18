export default function EventDelegation() {

    const onClickHandler = (e) => console.log(e, e.target.id, e.target.innerText);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Mark</th>
                        <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody onClick={onClickHandler}>
                    <tr>
                        <th scope="row">Math</th>
                        <td data-label="Mark" id='math-mark'>75</td>
                        <td data-label="Grade" id='math-grade'>C</td>
                    </tr>
                    <tr>
                        <th scope="row">Lit</th>
                        <td data-label="Mark" id='lit-mark'>81</td>
                        <td data-label="Grade" id='lit-grade'>B</td>
                    </tr>
                    <tr>
                        <th scope="row">Lang</th>
                        <td data-label="Mark" id='lang-mark'>95</td>
                        <td data-label="Grade" id='lang-grade'>A</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
