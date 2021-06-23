import React, {useState} from "react";
import {people} from "../general/constants";

//Prop drilling is not a react concept it is a generalized scenario,
// Prop drilling falls under problem scenario

// Problem is if a component not needed a set of information but a child needs it
// we need to send to that component because this info is needed by it's child

// Example: ListRender does not need removeItem but SingleRender needs it
// so we have to send it to ListRender from super parent so SingleRender can use it

// Fix is --> context api, redux

const PropDrillingBasics = () => {

    const [data, setData] = useState(people)

    const removeItem = (id) => {
        let employee = data.filter((value) => value.id !== id)
        setData(employee)
    }

    return (
        <>
            <ListRender people={data} removeItem={removeItem}/>
        </>
    )
}

const ListRender = ({people, removeItem}) => {
    return people.map((value) => {
        return <SingleRender key={value.id} {...value} removeItem={removeItem}/>
    })
}

const SingleRender = ({id, name, removeItem}) => {
    return (
        <>
            <div>
                <p>{name}</p>
                <button onClick={() => removeItem(id)}>remove</button>
            </div>
        </>
    )
}

export default PropDrillingBasics
