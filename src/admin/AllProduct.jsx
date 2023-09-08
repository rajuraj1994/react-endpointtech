import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { FaTrash,FaEdit } from 'react-icons/fa'
import { API_URL } from '../config'
import { Link } from 'react-router-dom'

const AllProduct = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`${API_URL}/api/productlist`)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <>
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-10">
                <table className='table table-ordered table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((p,i)=>(
                            <tr key={i}>
                                <td>{p.product_name}</td>
                                <td>Rs.{p.product_price}</td>
                                <td>{p.countInStock}</td>
                                <td>{p.product_description}</td>
                                <td><img src={`${API_URL}/${p.product_image}`} alt={p.product_name} width='100' /></td>
                                <td>{p.category.category_name}</td>
                                <td>
                                    <Link to='#' className='btn btn-primary'><FaEdit/></Link>
                                    <button className='btn btn-danger'><FaTrash/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default AllProduct