import React,{memo} from 'react'

const ChildComp = ({data,test}) => {
    console.log('child component rendered')
  return (
    <>
    <h3 className='text-primary'>Child Component</h3>
    <button className='btn btn-danger' onClick={test}>click</button>
    </>
  )
}

export default memo(ChildComp)