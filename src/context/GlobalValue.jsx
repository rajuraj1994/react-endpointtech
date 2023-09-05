import React,{createContext} from "react";

export const GlobalContext= createContext()

const GlobalValueProvider= props=>{
    const studentInfo={
        fullname:"Karlos Lama",
        address:"Kathmandu"
    }
    return(
        <GlobalContext.Provider value={studentInfo}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalValueProvider