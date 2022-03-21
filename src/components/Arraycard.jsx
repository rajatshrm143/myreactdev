import React from "react";

function Arraycard(params) {
    return (
        <>
            <p>
                <span>{params?.fullName}</span>
                <span>{params?.address}</span>
            </p>
        </>
    )
}

export default Arraycard;