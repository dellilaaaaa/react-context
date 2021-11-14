import { createContext, useState } from "react"

export const catsContext = createContext()

function Catsprovider(props) {
    let [cats, setCats] = useState([])
    return (
        <catsContext.Provider value = {{cats, setCats}}>
            {props.children}
        </catsContext.Provider>
    )
}

export default Catsprovider
