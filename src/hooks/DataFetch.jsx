import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
    {products && products.map((item,i)=>(
        <div key={i}>
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
        </div>
    ))}
    </>
  )
}

export default DataFetch