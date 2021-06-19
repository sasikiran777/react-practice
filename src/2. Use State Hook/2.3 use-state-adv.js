import React, {useState} from "react";

function UseStateAdvPrevState() {
    const [number, setNumber] = useState(0)
    function addNumbersWithoutPreviousState() {
        setTimeout(() => {
            setNumber(number + 1)
        }, 1000)
    }

    function addNumbersWithPreviousState() {
        setTimeout(() => {
            setNumber((preState) => {
                return preState + 1
            })
        }, 1000)
    }

    return (
        <React.Fragment>
            <div>
                <p>By default the useState is async meaning does not account previous state</p>
                <p>One sec delay</p>
                <p>{ number }</p>
                <div>
                    <button onClick={addNumbersWithoutPreviousState}>No Prev State handling</button>
                </div>
                <div>
                    <button onClick={addNumbersWithPreviousState}>Prev State handling</button>
                </div>
                <div>
                    <button onClick={() => {setNumber(0)}}>Reset</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UseStateAdvPrevState
