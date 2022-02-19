import * as actionTypes from "./actionTypes";

const init = {
    contract: null,
    account: null,
    loading: true,
    failed: false
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
        case actionTypes.CONNECT_WEB3_SUCCESS:
            const {account, contract} = action;
            return {
                ...state,
                account: account,
                contract: contract,
                loading: false
            }
        default:
            return state;
    }
}

export default appReducer;