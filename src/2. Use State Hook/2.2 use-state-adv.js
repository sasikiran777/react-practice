import React, {useState} from "react";
import {useStateAdvInitialData, useStateAdvUpdatedData } from "../general/constants";

function UseStateAdvSpradeWithKey () {
    const [example1, setExample1] = useState(useStateAdvInitialData)

    function setExample1Data(key, value) {
        setExample1({ ...example1, [key]: value })
    }

    return (
        <React.Fragment>
            <div>
                <p>{example1.name}</p>
                <p>{example1.age}</p>
                <p>{example1.date}</p>
                <p>{example1.type}</p>
            </div>
            <div>
                <button onClick={() => setExample1Data('name', 'updated text for name')}>Set Data</button>
            </div>
            <div>
                <button onClick={() => setExample1(useStateAdvInitialData)}>ReSet Data</button>
            </div>
        </React.Fragment>
    )
}

export default UseStateAdvSpradeWithKey
