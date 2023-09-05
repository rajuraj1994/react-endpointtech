import React from 'react'
import TestNav from './TestNav'

export const First = () => {
  return (
    <>
    <TestNav/>
    <h2 className='text-center text-success'>This is not a default export function</h2>
    </>
  )
}

export const Ramesh=()=>{
    return(
        <>
         <TestNav/>
        <strong className='d-block text-primary fs-1'>Ramesh Mahato</strong>
        </>
    )
}
