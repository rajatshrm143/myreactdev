import React from "react";
import { useSelector, useDispatch } from 'react-redux';

// these are 'actions' required by the 'reducers' to perform action/operation upon the state
import { incNum, decrNum } from './Redux/Actions/index';

const ReduxStateMgmt = () => {

    // By using 'useDispatch()' hook, we can dispatch/send the 'action' to 'reducer'
    // then 'reducer' recognizes the 'action' and based on that update & return a new state (using useSelector())
    const dispatch = useDispatch();

    // By using 'useSelector()' hook, we can get the updated state from related/any reducer
    // 'IncrDecrNum' is a reducer, it takes the existing state & action then process the action and gives a new updated state value
    const myState = useSelector((state) => state.IncrDecrNum);

    return (<>
        <h3>Using Redux to maintain the state globally: </h3>
        <button onClick={() => dispatch(incNum())}>+</button>
        <span>{myState}</span>
        <button onClick={() => dispatch(decrNum())}>-</button>
    </>);

}


export default ReduxStateMgmt;