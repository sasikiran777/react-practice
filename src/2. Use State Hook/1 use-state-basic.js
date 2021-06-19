import React, {useState} from 'react';
import {useStateHookInitialData, useStateHookUpdatedData} from "../general/constants";

function UseStateBasic() {
    const [data, setData] = useState(useStateHookInitialData)

    const setHookData = (data) => {
        setData(data)
    }

    return (
        <React.Fragment>
            <div>
                <p>{data}</p>
            </div>

            <div>
                <button onClick={ () => setHookData(useStateHookUpdatedData) }>Set Data</button>
            </div>

            <div>
                <button onClick={ () => setHookData(useStateHookInitialData) }>reSet Data</button>
            </div>
        </React.Fragment>
    );
}

export default UseStateBasic;
