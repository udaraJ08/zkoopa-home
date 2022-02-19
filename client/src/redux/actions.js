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

export const connectWeb3Listen = () => {
    return {
        type: actionTypes.CONNECT_WEB3_LISTEN,
    }
}

export const connectWeb3Success = (account, contract) => {
    return {
        type:actionTypes.CONNECT_WEB3_SUCCESS,
        account,
        contract
    }
}
