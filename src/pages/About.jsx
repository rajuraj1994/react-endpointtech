import React from 'react'
import { Helmet } from 'react-helmet'
import IncrementDecrement from '../hooks/IncrementDecrement'
import Show from '../context/Show'
import DataCounter from '../hooks/DataCounter'
import Memo from '../hooks/Memo'
import ParentComp from '../hooks/ParentComp'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Ecommerce React" />
      </Helmet>
      <IncrementDecrement />
      <Show />
      <DataCounter />
      <Memo />
      <ParentComp />
    </>
  )
}

export default About