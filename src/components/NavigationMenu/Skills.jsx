import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
const Skills = (props) => {

    //we get the URL segment as params, as we defined in the route
    const { primary, secondary } = useParams();

    // We can get the whole route/location name 
    const location = useLocation();
    console.log(location);

    return (<>
        <h3>This is our Skills page. {props.name} knows {primary}, {secondary}</h3>
        <h3>My current URL is {location.pathname} </h3>
    </>)
}

export default Skills;