const intialState = 0;

// Reducer requires two params, first is the existing state & second is the action(event)
// on the basis of the action, it updates the state and returns a NEW state always
const IncrDecrNum = (state = intialState, action) => {
    if (action.type === 'Increment') {
        return state + 1;
    }
    if (action.type === 'Decrememnt') {
        return state - 1;
    }
    return state;
}

export default IncrDecrNum;