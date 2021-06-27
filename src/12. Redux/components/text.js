import React from "react";
import {useSelector} from "react-redux";

const TextComponent = () => {
    const message = useSelector(state => state.text)
    return (
        <>
            <div>
                <p>{message}</p>
            </div>
        </>
    )
}

export default TextComponent
