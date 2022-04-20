import React, { useState } from 'react';

const ComplexForm = () => {

    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        pnumber: ''
    });

    const inputSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    }

    const inputChange = (event) => {
        // console.log(event.target.value);
        // console.log(event?.target?.name);

        const { name, value } = event.target;
        setInput((prevValue) => {
            // console.log(prevValue); // contains the previous data set
            // return {
            //     fname: (event.target.name === 'fname') ? event.target.value : prevValue?.fname,
            //     lname: (event.target.name === 'lname') ? event.target.value : prevValue?.lname,
            //     email: (event.target.name === 'email') ? event.target.value : prevValue?.email,
            //     pnumber: (event.target.name === 'pnumber') ? event.target.value : prevValue?.pnumber
            // }

            // {Just put the Previous Data Set first [...prevValue],
            //  then overlap the latest changed values [event?.target?.name]: event?.target?.value] }
            return { ...prevValue, [name]: value };
        });
    }

    return (
        <>
            <div> <h1>Multiple Form Fields : </h1>
                <form onSubmit={inputSubmit}>
                    <div>
                        <label>fname : </label>
                        <input type="text" defaultValue={input.fname} name="fname" onChange={inputChange} />
                    </div>
                    <div>
                        <label>lname : </label>
                        <input type="text" name="lname" value={input.lname} onChange={inputChange} />
                    </div>
                    <div>
                        <label>email : </label>
                        <input type="email" name="email" value={input.email} onChange={inputChange} />
                    </div>
                    <div>
                        <label>pnumber : </label>
                        <input type="number" name="pnumber" value={input.pnumber} onChange={inputChange} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )

}

export default ComplexForm;