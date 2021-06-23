import React, {useEffect} from "react";

const Model = ({content, closeModel}) => {

    useEffect(() => {
        setTimeout(() => {
            closeModel()
        }, 3000)
    })
    return (
        <>
            <div style={{'background-color': '#31ffd7', 'color': 'black'}}>
                <h3>{content}</h3>
            </div>
        </>
    )
}

export default Model
