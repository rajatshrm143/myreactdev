import React from "react";

function MultipleElements() {

    // We use JSX (JS XML[Extensible Markup Langauge] based in ES6) to write HTML elements/code into JavaScript 
    // which will be converted by "Babel"[translate + compiler= transpiler], into a Browser friendly Javascript

    // After transpilation by Babel, broswer will see code, like this :
    // ReactDom.render(React.createElement("h1", null, "Hello World!"), document.getElementById('root'));

    // VIDEO : 8
    // To use multiple elements - write elements within a <div> tag, like this :

    return (
        <div>
            <h1>Hello World !</h1>
            <h1>Hello People !</h1>
            <h1>Hello Guys !</h1>
        </div>,
        [
            <h2>Hello Hello World!</h2>,
            <h2>Hello Hello People!</h2>,
            <h2>Hello Hello Guys!</h2>
        ]
    );
}

export default MultipleElements;