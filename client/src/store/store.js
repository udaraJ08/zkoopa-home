import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
