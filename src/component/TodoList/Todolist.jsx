import axios from "axios";
import { useEffect, useState } from "react"

export function TodoList() {
    const [appointment, setappointment] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4040/ToDo')
            .then(response => {
                setappointment(response.data)
            })
    },[])
    return (
        <div className="container-fluid">
            <h2>To-Do List</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointment.map(item=><tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><button className="btn btn-warning bi bi-pen-fill mx-2"></button>
                            <button className="btn btn-danger bi bi-trash"></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}