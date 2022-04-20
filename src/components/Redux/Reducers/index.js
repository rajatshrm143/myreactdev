// 'combineReducers' provided by redux to combine all the reducers
import { combineReducers } from "redux";

import IncrDecrNum from './IncrDecrNum'; //created Reducer to +/- the number

// when we create the Store(Global State manager), it takes/requires all the reducers in a combined form
const rootReducer = combineReducers({
    IncrDecrNum,
    // We cann add more reducers here, as per requirement/operations, like:
    // MultiplyNumState,
    // DevideNum,
    // SumOfNum
});

export default rootReducer;