import React, {useEffect, useState} from "react";

const UseEffectAdvCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth)

    const setWindowWidth = () => {
        setSize(window.innerWidth)
    }

    useEffect( () => {
        console.log('In useEffect')
        window.addEventListener('resize', setWindowWidth)
        return () => {
            console.log('In Cleanup')
            window.removeEventListener('resize', setWindowWidth)
        }
    })

    console.log('Render Started')

    return (
        <>
            Window Size: {size} px
        </>
    )
}

export default UseEffectAdvCleanUp
