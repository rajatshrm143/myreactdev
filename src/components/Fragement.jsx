import React from "react";

function Fragement() {

    // VIDEO : 9
    // React Fragement - instead of using a <div>, we can simply use <React.Fragment>, like this :
    // Also, we can use a syntactic sugar of <React.Fragment> as <> only, like this :
    const fName = "Rajat";

    return (
        <React.Fragment>
            <h3>Hello -- World!</h3>
            <h3>Hello -- People!</h3>
            <h3>Hello -- Guys!</h3>
        </React.Fragment>,
        <>
            <h4>My name is -- {fName}</h4>
            <h4>My number is -- {2 + 5}</h4>
            <h4>My code is -- {Math.random()}</h4>
        </>
    );
}

export default Fragement;