import * as actionTypes from "./actionTypes";

const init = {
    num: 1
}

const appReducer = (state = init, action) => {
    const {type} = action;
    switch (type) {
        case actionTypes.TEST_REDUX_SUCCESS:
            console.log(action);
            return {
                ...state,
                num: action.data
            }
        default: return state;
    }
}

export default appReducer;