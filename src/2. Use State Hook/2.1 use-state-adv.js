import React, {useState} from "react";
import {useStateAdvInitialData, useStateAdvUpdatedData } from "../general/constants";

function UseStateAdvSprade () {
    const [example1, setExample1] = useState(useStateAdvInitialData)

    return (
        <React.Fragment>
            <div>
                <p>{example1.name}</p>
                <p>{example1.age}</p>
                <p>{example1.date}</p>
                <p>{example1.type}</p>
            </div>
            <div>
                <button onClick={() => setExample1({ ...example1, 'name': 'Testttttttt'})}>Set Data</button>
            </div>
            <div>
                <button onClick={() => setExample1(useStateAdvInitialData)}>ReSet Data</button>
            </div>
        </React.Fragment>
    )
}

export default UseStateAdvSprade
