import React from "react";
import {useFetch} from "./hook/base";

const CustomHooksBasics = () => {
    const {loading, data} = useFetch('https://jsonplaceholder.typicode.com/users/1/todos')
    return (
        <>
            {
                loading ? 'Loading...' :
                    <div>
                        <div><h4>Users Todo List</h4></div>
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>UserId</th>
                                <th>title</th>
                                <th>completed</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((user) => {
                                return [<tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.userId}</td>
                                    <td>{user.title}</td>
                                    <td>{user.completed.toString()}</td>
                                </tr>]
                            })}
                            </tbody>
                        </table>
                    </div>
            }
        </>
    )
}

export default CustomHooksBasics
