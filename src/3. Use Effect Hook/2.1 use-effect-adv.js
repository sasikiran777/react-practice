import React, {useEffect, useState} from "react";
import {
    useEffectCarInitData,
    useEffectCarUpdatedData,
    useEffectInitData,
    useEffectUpdatedData
} from "../general/constants";

const UseEffectAdvObject = () => {
    const [data, setData] = useState(useEffectInitData)
    const [car, setCar] = useState(useEffectCarInitData)
    useEffect(() => {
        console.log('Song Changed')
    }, [data])
    return (
        <>
            <div>
                <center>Use Effect only for Song update</center>
                <p>Song: {data.song}</p>
                <p>By: {data.by}</p>
                <div>
                    <button onClick={() => setData(useEffectUpdatedData)}>Update Song</button>&nbsp;&nbsp;
                    <button onClick={() => setData(useEffectInitData)}>Reset Song</button>
                </div>
            </div>
            <br/>
            <br/>
            <div>
                <center>Use Effect will not work for Car update</center>
                <p>Car Model: {car.model}</p>
                <p>Maker: {car.maker}</p>
                <div>
                    <button onClick={() => setCar(useEffectCarUpdatedData)}>Update Car</button>&nbsp;&nbsp;
                    <button onClick={() => setCar(useEffectCarInitData)}>Reset Car</button>
                </div>
            </div>
            <br/>
            <br/>
        </>
    )
}

export default UseEffectAdvObject
