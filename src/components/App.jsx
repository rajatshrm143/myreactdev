import React from "react";
import MultipleElements from './MultipleElements';
import Fragement from './Fragement';
import Styling from './Styling';
import Expressions from './Expressions';
import TemplateLiterals from './TemplateLiterals';
// import firstName, { giveFullName, address, portalCode, favMovie } from './ImportExport'; 
import * as result from "./ImportExport"; // OR
import Props from "./Props";
import ArrData from "./ArrData";
import Arraycard from "./Arraycard";
import UseStateHook from "./UseStateHook";
import Form from './Form';
import ComplexForm from './ComplexForm';

function App() {
    return (
        <>
            <><MultipleElements /></> {/* returns JSX */}
            <Fragement />             {/* returns React Fragement */}
            <Styling />               {/* returns React Fragement */}
            <Expressions />           {/* returns React Fragement */}
            <TemplateLiterals />      {/* returns React Fragement */}

            {/* Fechting data/variables from different file/component */}
            {/* <ol>                  
                <li>{firstName}</li>
                <li>{giveFullName()}</li>
                <li>{address}</li>
                <li>{portalCode()}</li>
                <li>{favMovie}</li>
            </ol> */}
            {/* OR */}
            <ol >
                <li>{result?.default}</li>
                <li>{result?.giveFullName()}</li>
                <li>{result?.address}</li>
                <li>{result?.portalCode()}</li>
                <li>{result?.favMovie}</li>
            </ol>

            {/* Send data to the component, through custom Properties(called Props in react) */}
            <Props fName="Rajat" lName="Sharma" fullName="Rajat Sharma" />

            {/* Using array & map method to display data */}
            {ArrData.map((val, index) => {
                return (
                    <Arraycard
                        key={index.toString()}
                        fullName={val?.fullname}
                        address={val?.address}
                    />
                )
            })}

            {/* If/else condition in JSX */}
            <ShowCondition />

            {/* useState hook in react (functional component) */}
            <UseStateHook />

            {/* Form in React */}
            <Form />

            {/* ComplexForms with multiple input fields in React */}
            <ComplexForm />
        </>
    );
}

const ShowCondition = () => {
    if (Math.random() < 2) {
        return (
            <>
                <p style={{ color: 'green' }}><span>This is true condition</span></p>
            </>
        )
    }
    else {
        return <>
            <p><span style={{ color: 'red' }}>This is false condition</span></p>
        </>
    }
}



export default App;