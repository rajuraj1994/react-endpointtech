import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RatingStar from '../components/RatingStar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const [product, setProduct]=useState({})
    const params=useParams()
    const pid= params.productId
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${pid}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[pid])
    //handling cart submit
    const addToCart=()=>{
        const cartItems=JSON.parse(localStorage.getItem('cartItems')) || []
        // define object for all the details of the product
        const productItem= {
            id: product.id,
            title: product.title,
            price: product.price,
            image:product.image,
            category: product.category,
            rating: product.rating,
            quantity: 1
        }
        //check item if it is alrady exist in the cart
        const existingItem= cartItems.find(item=>item.id===product.id)
        if(existingItem){
                toast.error('product already in the cart')
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productItem.title} is added to Cart`)
        }
    }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
   <div className='container my-5'>
    <div className='row d-flex justify-content-between align-items-center'>
    <div className='col-md-4'>
        <img src={product.image} alt={product.title} width={'300'}/>
    </div>
    <div className='col-md-7'>
        <h2>{product.title}</h2>
        <h1>${product.price}</h1>
        <p><strong>Category:{product.category}</strong></p>
        <p>{product.description}</p>
        {product.rating && 
        <>
       <RatingStar rating={product.rating.rate} />
       &nbsp;<span>({product.rating.count})</span>
        </>
        }
        <div className='my-3'>
            <button className='btn btn-warning' onClick={addToCart}>Add to cart</button>
        </div>
    </div>
    </div>
   </div>
    </>
  )
}

export default ProductDetails