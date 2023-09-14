import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const StudentForm = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const change=()=>{
        dispatch({type:'CHANGE_NAME',payload:name})
        setName('')
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-md-5">
                    <input type="text" placeholder='Type Your Name' onChange={e => setName(e.target.value)}  className='form-control' value={name}/>
                    <button className='btn btn-primary' onClick={change}>Click</button>
                </div>
            </div>
        </>
    )
}

export default StudentForm