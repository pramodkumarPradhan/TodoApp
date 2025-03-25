import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './Todo.css';
import { Todohome } from './Todohome';
import { Todologin } from './Todologin';
import { Todoregister } from './Todoregister';
import { Dashboard } from './Todoboard';
import { TodoAddAppointment } from './add-appointment';
import { TodoAppointmentDlt } from './dlt-appointment';
import { TodoAssignmentEdit } from './edit-appointment';
export function Todoindex() {
    return (

        <div className="bg-image" style={{ height: '100vh' }}>

            <div className='bg-shade'>
                <BrowserRouter>
                    <div className='d-flex  justify-content-center  align-items-center '>
                        <header className='text-center w-25  m-2 fw-bold fs-2 text-secondary '>
                            <div><Link to={'/'} className='btn btn-danger w-100 p-2 fs-5' >TO-DO APP</Link></div>
                        </header>
                    </div>
                    <section>
                        <Routes>
                            <Route path='/' element={<Todohome />} />
                            <Route path='login' element={<Todologin />} />
                            <Route path='register' element={<Todoregister />} />
                            <Route path='dash-board' element={<Dashboard />} />
                            <Route path='add-appointment' element={<TodoAddAppointment />} />
                            <Route path='dlt-appointment/:id' element={<TodoAppointmentDlt />} />
                            <Route path='edt-appointment/:id' element={<TodoAssignmentEdit />} />
                        </Routes>
                    </section>
                </BrowserRouter>
            </div>


        </div>


    )
}