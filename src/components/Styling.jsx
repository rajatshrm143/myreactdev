import React from "react";
import '../index.css';

function Styling() {
    // VIDEO : 14
    // Applying CSS & Importing CSS files
    // "className" is an JSX attribute instead of "class"

    // VIDEO : 17
    // Applying Internal & Inline CSS
    const internalStyle = {
        color: 'yellow',
        textAlign: 'center', // text-align: center
        textTransformation: 'capitalize' // text-transform: capitalize
    };

    const fName = "Rajat";

    return (<>
        <h4 className="heading">My name is -- {fName}</h4> {/** External CSS applied */}
        <h4 style={internalStyle}>My name is -- {fName}</h4> {/** Internal CSS applied */}
        <h4 style={{ color: 'red' }}>My number is -- {2 + 5}</h4> {/** Inline CSS applied */}
        <h4>My code is -- {Math.random()}</h4>
    </>);
}

export default Styling;