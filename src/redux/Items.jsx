import React from 'react'
import { useDispatch } from 'react-redux'

const Items = () => {
    const dispatch=useDispatch()

    const add=()=>(
        dispatch({type:'ADD_TO_WATCHLIST'})
    )
  return (
    <>
    <div className="d-flex justify-content-center">
        <div className="col-md-4">
            <button className='btn btn-primary' onClick={add}>Add Watchlist</button>
        </div>
    </div>
    </>
  )
}

export default Items