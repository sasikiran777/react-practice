import React, {useEffect, useState} from "react";
import { useEffectDef, useEffectRules } from "../general/constants";

function UseEffectBasics() {
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    useEffect(() => {
        if(isButtonClicked) {
            document.title = `The title is changed due to click ${isButtonClicked}`
        }
        else {
            document.title = `React App`
        }
    })

    function updateDocumentTitle() {
        setIsButtonClicked(!isButtonClicked)
    }

    return (
        <>
            <p>Def: { useEffectDef }</p>
            <p>Rules: { useEffectRules }</p>
            <p>{ !isButtonClicked ? 'Click below to change the html document title' : 'Click reset to go default'}</p>
            {
                isButtonClicked ? <p> Please Check HTML Title has changed</p> : ''
            }
            <div>
                <button onClick={updateDocumentTitle}>{ !isButtonClicked ? 'Click me' : 'Reset' }</button>
            </div>
        </>
    )
}

export default UseEffectBasics
