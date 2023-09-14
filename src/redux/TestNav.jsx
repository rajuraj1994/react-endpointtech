import React from 'react'
import { useSelector } from 'react-redux'
import Items from './Items'
import Student from './Student'
import StudentForm from './StudentForm'

const TestNav = () => {
    const data = useSelector(store => store.watch)
    return (
        <>
            <h2 className='text-center'>
                The number of item in the watchlist is {data.watchCount}
            </h2>
            <Items />
            <Student />
            <StudentForm />
        </>
    )
}

export default TestNav