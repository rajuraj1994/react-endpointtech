import { API_URL } from "../config";

// for signup 
export const signup=user=>{
    return fetch(`${API_URL}/api/register`,{
        method:"POST",
        headers:{
            accept:"application/json",
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}
// for signin 
export const signin=user=>{
    return fetch(`${API_URL}/api/signin`,{
        method:"POST",
        headers:{
            accept:"application/json",
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}

// authenticate and to store token in the local storage
export const authenticate=(data,next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
}
// redirect user by role by getting information from localstorage 
export const isAuthenticated=()=>{
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}

