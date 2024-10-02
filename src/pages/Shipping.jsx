import React,{useState} from 'react'
import { countries } from 'countries-list'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
    const navigate=useNavigate()
    const countriesList=Object.values(countries)
    // fetch shipping data from localstorage
    const shippingInfo=JSON.parse(localStorage.getItem('shippingInfo')) || {}

    const[shippingAddress1,setShippingAddress1]=useState(shippingInfo.shippingAddress1 || '')
    const[shippingAddress2,setShippingAddress2]=useState(shippingInfo.shippingAddress2 || '')
    const[city,setCity]=useState(shippingInfo.city || '')
    const[zip,setZip]=useState(shippingInfo.zip || '')
    const[country,setCountry]=useState(shippingInfo.country || '')
    const[phone,setPhone]=useState(shippingInfo.phone || '')
  return (
    <>
    <div className='container'>
        <div className='row d-flex justify-content-center'>
            <div className='col-md-5 shadow p-3 my-5'>
                <form>
                    <h2 className='mb-3 text-muted'>Shipping Information</h2>
                    <div className='mb-2'>
                        <label htmlFor='address1'>shippingAddress1</label>
                        <input type='text' className='form-control' id='address1' 
                        onChange={(e)=>setShippingAddress1(e.target.value)}
                        value={shippingAddress1}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='address2'>shippingAddress2</label>
                        <input type='text' className='form-control' id='address2' 
                        value={shippingAddress2}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='city'>City</label>
                        <input type='text' className='form-control' id='city' 
                        value={city}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='zip'>Zip</label>
                        <input type='number' className='form-control' id='zip' 
                        value={zip}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='phone'>Phone</label>
                        <input type='number' className='form-control' id='phone' 
                        value={phone}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='country'>Country</label>
                        <select className='form-control' id='country'>
                            <option value={country}>{country}</option>
                            {countriesList.map((c,i)=>(
                                <option key={i} value={c.name}>{c.name}</option>
                            ))}

                        </select>
                        
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-warning'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shipping
