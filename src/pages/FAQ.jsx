import React from 'react'
import { Helmet } from 'react-helmet'
import Effect from '../hooks/Effect'
import DataFetch from '../hooks/DataFetch'

const FAQ = () => {
  return (
    <>
    <Helmet>
        <title>FAQ</title>
        <meta name="description" content="Ecommerce React" />
      </Helmet>
    <h1>FAQ</h1>
    <Effect />
    <DataFetch />
    </>
  )
}

export default FAQ