import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "./reducers/allReducers";
import Counter from "./components/counter";

const ReduxBasic = () => {
    const store = createStore(
        allReducers, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return (
        <Provider store={store}>
            <>
                <div><h2>Redux Tutorial</h2></div>
                <Counter/>
            </>
        </Provider>
    )
}

export default ReduxBasic
