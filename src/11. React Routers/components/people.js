import React from "react";
import {people} from "../../general/constants";
import {Link} from "react-router-dom";

const People = () => {

    return(
        <>
            {people.map(value => {
                return <div>
                    <p>{value.name}</p>
                    <Link to={`/people/${value.id}`}>View</Link>
                </div>
            })}
        </>
    )
}

export default People
