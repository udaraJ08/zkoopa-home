import { put, takeLatest } from "redux-saga/effects";
import {testReduxSuccess} from "./actions";
import * as actionTypes from "./actionTypes";

export function* testReduxCB(action) {
    const {data} = action;
    yield put(testReduxSuccess(data+1))
}

function* watchAppSagas() {
    yield takeLatest(actionTypes.TEST_REDUX_LISTEN, testReduxCB);
}

const appSagas = [watchAppSagas];

export default appSagas;