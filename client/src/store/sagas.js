import { all, fork } from "redux-saga/effects";
import appSagas from "../redux/saga";

export default function* rootSaga() {
    yield all(appSagas.map(e => fork(e)))
}
