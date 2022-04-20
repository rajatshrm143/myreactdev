import React, { useContext } from "react";
import { FName, LName } from './App';

const ContextChild = () => {

    // We can consume Context API values Provided in Parent's parent (App) Component by using useContext hook

    const fname = useContext(FName);
    const lname = useContext(LName);
    return (<>
        <h4>Using Context in Child component : </h4>
        <h5>{fname} {lname} </h5>
    </>)
}

export default ContextChild;