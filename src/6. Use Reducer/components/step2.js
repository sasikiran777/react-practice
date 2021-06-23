import React, {useReducer, useState} from "react";
import {people} from "../../general/constants";
import Model from "./model/model";
import '../css/index.css'

const initialState = {
    names: people,
    isModelOpen: false,
    modelContent: 'Hello World'
}

const reducerMethod = (state, action) => {

    if(action.type == 'SET_NAME') {
        const newNames = [...state.names, action.payload]
        return {
            ...state, names: newNames, isModelOpen: true, modelContent: 'Added New Name'
        }
    } else if(action.type == 'ERROR_SET_NAME') {
        return {
            ...state, isModelOpen: true, modelContent: "Please enter a name"
        }
    } else if(action.type == 'CLOSE_MODEL') {
        return {
            ...state, isModelOpen: false
        }
    }
    throw new Error('Unhandled exception')
}

const Step2 = () => {

    const [data, dispatchData] = useReducer(reducerMethod, initialState)
    const [name, setName] = useState('')

    const closeModel = () => {
        dispatchData({ type: 'CLOSE_MODEL'})
    }

    const validateForm = (e) => {
        e.preventDefault()
        if(name) {
            const newName = {id: Date.now(), name: name}
            dispatchData({ type: 'SET_NAME', payload: newName})
            setName('')

        } else {
            dispatchData({ type: 'ERROR_SET_NAME' })
        }
    }

    return (
        <>
            <div>{data.isModelOpen && <Model content={data.modelContent} closeModel={closeModel} />}</div>
            <div>
                <form onSubmit={validateForm}>
                    <div>
                        <h4>Name Form</h4>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={{'margin-top': '10px'}}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <h4 className='headingBackground'>List Of Names</h4>
                </div>
                {data.names.map((value) => {
                    return <div key={value.id}>
                        <p>{value.name}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default Step2
