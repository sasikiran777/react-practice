import React, {useState} from "react";
import {validateForm} from "../common/validations";

function UnControlledInputs() {
    const keys = ['name', 'designation']
    const [employees, setEmployees] = useState([])
    const [employee, setEmployee] = useState({
        name: '',
        designation: ''
    })
    const [error, setError] = useState({})

    const validateEmployee = (e) => {
        e.preventDefault()
        setError({})
        let hasError = false
        let errors = validateForm(keys, employee);
        let finaError = {}
        for (const key in errors) {
            for (const inner_key in errors[key])  {
                finaError[inner_key] = errors[key][inner_key]
                if (errors[key][inner_key] !== true) {
                    hasError = true
                }
            }
        }
        setError({...finaError})
        if(!hasError)
        {
            employees.push(employee)
            setEmployees(employees)
        }
    }

    return (
        <>
            <form onSubmit={validateEmployee}>
                <div>
                    {/*<label htmlFor='name'>Name</label>*/}
                    <input id='name' type='text'
                           value={employee.name}
                           name='name'
                           onChange={(e) => setEmployee({...employee, 'name': e.target.value})}
                           placeholder='Enter Name' required/>
                    {error.hasOwnProperty('name') && error.name !== true ?
                        <p className='error'>{error.name}</p> : ''}
                </div>
                <div>
                    {/*<label htmlFor='designation'>Designation</label>*/}
                    <input id='designation' type='text'
                           value={employee.designation}
                           name='designation'
                           onChange={(e) => setEmployee({...employee, 'designation': e.target.value})}
                           placeholder='Enter Designation' required/>
                    {error.hasOwnProperty('designation') && error.designation !== true ?
                        <p className='error'>{error.designation}</p> : ''}
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            {/*{employees || <DisplayEmployees employee={employees} />}*/}
            {employees && <DisplayEmployees employee={employees}/>}
        </>
    )
}

const DisplayEmployees = ({employee}) => {
    return (
        <>
            {
                employee.map(function (data, index) {
                    return (
                        <div key={index}>
                            <p>Employee name: {data.name}</p>
                            <p>Employee designation: {data.designation}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UnControlledInputs
