import React from "react";

function Expressions() {
    // VIDEO : 11
    // JavaScript Expressions in JSX
    const fName = "Rajat";
    return (
        <>
            <h4>My name is -- {fName}</h4>
            <h4>My number is -- {2 + 5}</h4>
            <h4>My code is -- {Math.random()}</h4>
        </>
    );
}

export default Expressions;