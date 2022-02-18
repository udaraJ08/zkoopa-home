import * as actionTypes from "./actionTypes";

export const testReduxListen = (data) => {
    return {
        type: actionTypes.TEST_REDUX_LISTEN,
        data
    }
}

export const testReduxSuccess = (data) => {
    return {
        type: actionTypes.TEST_REDUX_SUCCESS,
        data
    }
}