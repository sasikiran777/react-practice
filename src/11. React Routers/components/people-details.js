import React, {useEffect, useState} from "react";
import {useParams, useHistory, Link } from "react-router-dom"
import {people} from "../../general/constants";
const Details = () => {
    const { id } = useParams()
    const history = useHistory();
    const [name, setName] = useState('')

    useEffect(() => {
        const data = people.find((value) => value.id === parseInt(id))
        if(data) {
            setName(data.name)
        } else {
            history.push("/error");
        }
    }, [])

    return (
        <>
            <p>{name}</p>
            <Link to={'/people'}>Back To People</Link>
        </>
    )
}

export default Details
