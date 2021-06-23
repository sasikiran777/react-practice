import React, {useRef, useState} from "react";
import {people} from "../../general/constants";

const Step1 = () => {
    const name = useRef()
    const [names, setNames] = useState(people)

    function validateForm(e) {
        e.preventDefault()
        if(name.current.value) {
            setNames([...names, { id: Date.now(), name: name.current.value }])
        }
    }

    return (
        <>
            <div>
                Use Reducer Hook
            </div>
            <div>
                <form onSubmit={validateForm}>
                    <input type='text' ref={name}/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                {names.map((value) => {
                    return <div key={value.id}><h4>{value.name}</h4></div>
                })}
            </div>
        </>
    );
}

export default Step1
