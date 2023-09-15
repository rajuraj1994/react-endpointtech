import React,{useState} from 'react'
import './test.css'


const Test = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  return (
    <>
    <h1 style={{color:'white',backgroundColor:'slategray'}} className='text-4xl'>Test Component</h1>

    <div className="container">
      <div className="col-md-5">
        <form>
          <input type="email" placeholder='email' className='form-control' onChange={e=>setEmail(e.target.value)} value={email} />
          <input type="password" placeholder='password' className='form-control' onChange={e=>setPassword(e.target.value)} value={password} />
          <button className='btn btn-primary' disabled={!email || !password}>Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Test