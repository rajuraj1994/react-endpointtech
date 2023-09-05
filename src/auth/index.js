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