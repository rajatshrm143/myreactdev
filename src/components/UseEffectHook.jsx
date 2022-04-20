import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
    const [num1, updateNum1] = useState(0);
    const [num2, updateNum2] = useState(0);

    //  Using useEffect Hook, triggered after DOM render and after every DOM update 
    // first param, it takes a function(effect) to be done & second it takes array of mutable (state variable), on which we want to trigger Effect(function/action) when value update

    useEffect(() => {
        console.log("useEffect Hook appeared!!");
    }, [num1]);

    return (<>
        <h3>Using useEffect Hook after clicking Num1 button : </h3>
        <button onClick={() => { updateNum1(num1 + 1) }}>Num1 {num1}</button>
        <button onClick={() => { updateNum2(num2 + 1) }}>Num2 {num2}</button>

    </>)
}

export default UseEffectHook;