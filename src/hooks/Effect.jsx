import React,{useState, useEffect} from 'react'

const Effect = () => {
    const[num,setNum]= useState(0)

    useEffect(()=>{
        alert('This is a useEffect')
    },[])
    
  return (
    <>
    <h1>{num}</h1>
    <button className='btn btn-warning' onClick={()=>setNum(num+1)}>Add</button>
    </>
  )
}

export default Effect