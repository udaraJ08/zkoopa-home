import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import configureStore from "./store/store";
import {createBrowserHistory} from "history";

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
        <React.StrictMode>
            <App history={history}/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
