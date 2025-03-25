import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"

export function Dashboard() {
    const [Cookies,setCookie,removeCookies] = useCookies(['userid'])
    const [Task, setTask] = useState([{ 'id': '', "title": '', "date": '', "userid": '' }])

    useEffect(() => {
        axios.get('http://localhost:4000/Assignment')
            .then(response => {
                var TaskDetails = response.data.filter(details => details.userid === Cookies['userid'])
                setTask(TaskDetails)
            })
    })
    return (
        <div className="container bg-light p-4 mt-5 rounded rounded-5" style={{ width: '600px' }}>
            <div className="d-flex justify-content-between text-center">
                <div><h3 className="bi bi-person-circle"> {Cookies['userid']}</h3></div>
                <div className="fs-3 ">DashBoard</div>
                <div>
                    <Link to={'/'} className="btn btn-danger">Logout</Link>
                </div>
            </div>
            <Link className="btn btn-success bi bi-calendar2-event mt-2" to={'/add-appointment'}> Add Appintment</Link>
            <div>
                {
                    Task.map(task => <div className="border border-dark  my-2  alert alert-success "  >
                        <h4>{task.title}</h4>
                        {task.date}
                        <div>
                            <Link to={`/edt-appointment/${task.id}`} className="bi bi-pen btn btn-warning mx-2  " />
                            <Link to={`/dlt-appointment/${task.id}`} className="bi bi-trash btn btn-danger " />
                        </div>

                    </div>)
                }

            </div>
        </div>
    )
}