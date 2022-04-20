import React from "react";
import ContextChild from './ContextChild';

const ContextAPIHook = () => {

    // Context API values can be directly consumed here or in it's own child component as well
    return (<>
        <div><ContextChild key="gyg66"></ContextChild></div>
    </>)
}

export default ContextAPIHook;