import React, {useEffect, useRef} from "react";

const UseRefBasics = () => {
    const data = useRef();
    useEffect(() => {
        data.current.focus()
    })

    function validateForm(e) {
        e.preventDefault()
        alert(data.current.value)
    }
    return (
        <>
            <form onSubmit={validateForm}>
                <input type='text' ref={data}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UseRefBasics
