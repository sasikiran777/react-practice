import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {counterUpdate} from "../actions/actions";
import TextComponent from "./text";

const Counter = () => {
    const value = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <>
            <div><h4>Counter</h4></div>
            <p>Value: {value.count}</p>
            <div>
                <button onClick={() => dispatch(counterUpdate('increment'))}>+</button>
                <button onClick={() => dispatch(counterUpdate())}>-</button>
            </div>
            <TextComponent/>
        </>
    )
}

export default Counter
