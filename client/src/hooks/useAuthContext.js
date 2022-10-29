import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export const useAuthContext = () => {
    // get the object and store on context
    const context = useContext(AuthContext)
    //check the scope of the context
    if(!context){
        throw Error ('AuthContext must be inside a AuthContextProvider')
    }
    return context
}