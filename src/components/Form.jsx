import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState();
    // Triggers every time when user gives any input
    const setNameEvent = (event) => {
        // console.log(event?.target?.value)
        setName(event?.target?.value); // update the "name" variable continiously
    }

    const [fullName, setFullName] = useState();
    // Triggers every time when user click on submit button
    const submitHandler = () => {
        setFullName(name);
    }

    return (
        <>
            <div>
                <p>Hello {fullName}</p>
                <input type="text" defaultValue="" placeholder="Enter your name"
                    value={name} onChange={setNameEvent} />
                <button onClick={submitHandler} >Submit</button>
            </div>
        </>
    )

}

export default Form;