import React from 'react'
import { useSelector } from 'react-redux'

const Student = () => {
    const name=useSelector(store=>store.student)
  return (
    <>
    <h2 className='text-center text-success'>
        The name of the student is {name.student_name}
    </h2>
    </>
  )
}

export default Student