import React, { useState,useCallback } from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    const [count, setCount] = useState(1)
    const [data,setData]=useState(20)

    const test=useCallback(()=>{
        console.log('React js')
    },[data])
    return (
        <>
            <ChildComp data={data} test={test} />
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-md-5 shadow p-3">
                        <h1>{count}</h1>
                        <button className='btn btn-secondary' onClick={() => setCount(count + 1)}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ParentComp