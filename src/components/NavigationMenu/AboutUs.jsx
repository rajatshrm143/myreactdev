import React from 'react';

const AboutUs = (props) => {

    return (<>
        <h3>This is our About us page. {props.name} is an {props.qual}</h3>
    </>)
}

export default AboutUs;