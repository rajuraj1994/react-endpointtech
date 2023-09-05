import React from 'react'
import './test.css'
import TestNav from './TestNav'

const Test = () => {
  return (
    <>
    <TestNav/>
    <h1 style={{color:'white',backgroundColor:'slategray'}} className='text-4xl'>Test Component</h1>
    <h1 className='underline text-red-600 text-center'>Endpoint Tech</h1>
    </>
  )
}

export default Test