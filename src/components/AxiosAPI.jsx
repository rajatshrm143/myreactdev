import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AxiosAPI() {

    // *** Here we have used Axios tool to handle API calls on every option select, we are making an API call by using "useEffect" hook with the help of "useState" hook to maintain updated values ***

    const [val, setValue] = useState(); // for selected option's value
    const [name, setName] = useState(); // for updated Pokemon's name
    const [moves, setMoves] = useState(); // for Pokemon's updated moves

    // Used in "useEffect" hook, to make API call on every option value change
    async function fetchData() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);
        // console.log(response);
        if (response.status === 200) {
            // console.log(response?.data?.name)
            // console.log(response?.data?.moves.length)
            setName(response?.data?.name); // update the name
            setMoves(response?.data?.moves.length); //update the moves
        }
    }

    // Using this hook to trigger API call after every option selected
    useEffect(() => {
        // console.log('opption selected ', { val });
        if (val !== undefined) {
            fetchData();
        }
    }, [val]);

    return (<>
        <h4>Using Axios tool to call APIs.</h4>
        <h4>You have selected {val} : {name} Pokemon and has {moves} moves</h4>

        {/* On every option select (onChange), updating the state variable's value */}
        <select value={val} onChange={(event) => { setValue(event.target.value) }}>
            <option key="1" value="1">1</option>
            <option key="2" value="2">2</option>
            <option key="3" value="3">3</option>
            <option key="4" value="4">4</option>
            <option key="5" value="5">5</option>
        </select>
    </>);
}

export default AxiosAPI;