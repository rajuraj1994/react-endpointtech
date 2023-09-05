import React from 'react'
import {Link} from 'react-router-dom'

const TestNav = () => {
  return (
    <>
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/hello">Test</Link>
    &nbsp;
    <Link to="/ramesh">Ramesh Mahato</Link>
    </>
  )
}

export default TestNav