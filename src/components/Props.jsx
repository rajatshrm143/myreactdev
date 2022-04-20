import React from "react";

function Props(params) {
    return <>
        <p>{params.fName}</p>
        <p>{params.lName}</p>
        <p>{params.fullName}</p>
    </>;
}

export default Props;