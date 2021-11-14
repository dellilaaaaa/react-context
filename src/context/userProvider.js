import {createContext, useEffect, useState} from "react"

export const userContext = createContext()

function UserProvider(props) {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        // localStorage.getItem(isLogin)
        setIsLogin(localStorage.isLogin)
        
    }, [])
    return(
        <userContext.Provider value = {{isLogin, setIsLogin}}>
            {props.children}
        </userContext.Provider>
    )
    
}
export default UserProvider