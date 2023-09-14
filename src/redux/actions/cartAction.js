import axios from "axios";


export const addItemToCart=id=>async(dispatch,getState)=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch({
        type:'ADD_TO_CART',
        payload:{
            id: data.id,
            title: data.title,
            price: data.price,
            image:data.image,
            category: data.category,
            rating: data.rating,
            quantity: 1
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}