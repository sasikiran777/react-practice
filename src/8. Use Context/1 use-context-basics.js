import React, {useContext, useState} from "react";
import {people} from "../general/constants";
import {logDOM} from "@testing-library/react";

const NameContext = React.createContext();
// context provides two components provider, consumer

const UseContextBasics = () => {

    const [data, setData] = useState(people)

    const removeItem = (id) => {
        let employee = data.filter((value) => value.id !== id)
        setData(employee)
    }

    return (
        <NameContext.Provider value={{ data, removeItem }}>
            <div>Context Api</div>
            <ListRender />
        </NameContext.Provider>
    )
}

const ListRender = () => {
    const people = useContext(NameContext)
    console.log(people)
    return people.data.map((value) => {
        return <SingleRender key={value.id} {...value}/>
    })
}

const SingleRender = ({id, name}) => {
    const {removeItem} = useContext(NameContext)
    return (
        <>
            <div>
                <p>{name}</p>
                <button onClick={() => removeItem(id)}>remove</button>
            </div>
        </>
    )
}

export default UseContextBasics
