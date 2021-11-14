import {createContext, useEffect, useState} from "react"

export const userContext = createContext()

function UserProvider(props) {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        let ambildata = localStorage.getItem("isLogin")
        let local = JSON.parse(ambildata)
        setIsLogin(local)
        // setIsLogin(localStorage.isLogin)
        
    }, [])
    return(
        <userContext.Provider value = {{isLogin, setIsLogin}}>
            {props.children}
        </userContext.Provider>
    )
    
}
export default UserProvider