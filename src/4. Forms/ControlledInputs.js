import React, {useState} from "react";
import './css/index.css'

function ControlledInputs() {
    // let enabled = false
    const [isDisabled, setIsDisabled] = useState(true)
    const [employees, setEmployees] = useState({})
    const [employee, setEmployee] = useState({
        'name': '',
        'designation': ''
    })
    const [error, setError] = useState({})

    function validateEmployee(e) {
        e.preventDefault()
        if (!employee.name || !employee.designation) {
            // enabled = false
            setIsDisabled(true)
            setError({...error, 'general': 'Please fill all fields'})
        }
    }

    function updateValue(e, key) {
        const value = e.target.value
        // enabled = true
        setIsDisabled(false)

        if (value.includes('@')) {
            // enabled = false
            setIsDisabled(true)
            setError({...error, [key]: 'can not contain @'})
            return
        }

        if (!employee.name || !employee.designation) {
            // enabled = false
            setIsDisabled(true)
        }

        setEmployee({...employee, [key]: value})
        setError({...error, [key]: ''})
        console.log(isDisabled)
    }

    return (
        <>
            <form onSubmit={validateEmployee}>
                <div>
                    <input id='name'
                           type='text'
                           name='name' placeholder='Enter Name'
                           value={employee.name}
                           onChange={(e) => updateValue(e, 'name')}
                    />
                    <p className='error'>{error.hasOwnProperty('name') && error.name ? error.name : ''}</p>
                </div>
                <div>
                    <input id='designation'
                           type='text'
                           name='designation'
                           placeholder='Enter Designation'
                           value={employee.designation}
                           onChange={(e) => updateValue(e, 'designation')}
                    />
                    <p className='error'>{error.hasOwnProperty('designation') && error.designation ? error.designation : ''}</p>
                </div>
                <div>
                    {/*<button type='submit' disabled={enabled}>Submit</button>*/}
                    <button type='submit' disabled={isDisabled}>Submit</button>
                </div>
            </form>
            {/*{employees || <DisplayEmployees employee={employees} />}*/}
            {!employees && <DisplayEmployees employee={employees}/>}
        </>
    )
}

const DisplayEmployees = () => {

}

export default ControlledInputs
