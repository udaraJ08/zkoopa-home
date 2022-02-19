import { put, takeLatest, call } from "redux-saga/effects";
import {connectWeb3Success, testReduxSuccess} from "./actions";
import * as actionTypes from "./actionTypes";
import Zkoopa from "../contracts/PreSale.json";
import getWeb3 from "../getWeb3";

const fetchWeb3 = async () => {
    return await getWeb3();
}

const loadWeb3Account = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    if (accounts) return (accounts[0]);
}

const loadWeb3Contract = async (web3) => {
    const netID = await web3.eth.net.getId();
    const networkData = Zkoopa.networks[netID];

    if (networkData) {
        const abi = Zkoopa.abi;
        const address = networkData.address;
        const contract = new web3.eth.Contract(abi, address);
        return contract;
    }
}
////ASYNC FUNCTIONS END////

export function* testReduxCB(action) {
    const {data} = action;
    yield put(testReduxSuccess(data+1))
}

export function* connectToWeb3CB() {

    const web3 = yield call(fetchWeb3);

    try {
        const contract = yield call(loadWeb3Contract, web3);
        const account = yield call(loadWeb3Account, web3);

        yield put(connectWeb3Success(account, contract));
    }catch (err) {
        console.error(err);
    }
}

function* watchAppSagas() {
    yield takeLatest(actionTypes.TEST_REDUX_LISTEN, testReduxCB);
    yield takeLatest(actionTypes.CONNECT_WEB3_LISTEN, connectToWeb3CB);
}

const appSagas = [watchAppSagas];

export default appSagas;