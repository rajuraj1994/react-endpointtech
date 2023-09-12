import React from 'react'
import { useSelector } from 'react-redux'
import Items from './Items'

const TestNav = () => {
    const data = useSelector(store => store)
    return (
        <>
            <h2 className='text-center'>
                The number of item in the watchlist is {data.watchCount}
            </h2>
            <Items/>
        </>
    )
}

export default TestNav