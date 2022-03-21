import React, { useState } from "react";

const UseStateHook = () => {

    // console.log(useState(9)); // [undefined,function()]

    const [newVal, oldVal] = useState(0); // Array Destructuring & passing initial value to useState hook

    // On button click pa
    function IncreaseValue() {
        oldVal(newVal + 1);
    }
    return (
        <>
            <p><span>{newVal}</span></p>
            <p><button onClick={IncreaseValue}>Click Me!</button></p>
        </>
    )
}

export default UseStateHook;