import { createStore } from 'redux'; //predefined function from redux to create new store
import rootReducer from './Reducers/index'; // self defind reducers(state processor)

// while creating the Store, it takes all the reducers, so provided all the reducers in a combined form 
// second param is optional, it tracks the states tree and show you in the browser extention
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;