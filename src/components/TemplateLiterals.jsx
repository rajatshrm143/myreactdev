import React from "react";

function TemplateLiterals() {
    // VIDEO : 12
    // Template Literals in JSX
    const fName1 = "Rajat";
    const lName1 = "Sharma";

    return (
        <>
            <h4>{`My name is -- ${fName1} ${lName1}`}</h4>
            <h4>{`My number is -- ${2 + 5}`}</h4>
            <h4>{`My code is -- ${Math.random()}`}</h4>
        </>
    );
}

export default TemplateLiterals;