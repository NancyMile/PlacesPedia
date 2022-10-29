import {createContext, useReducer, UseReducer } from 'react'
export const AuthContext = createContext()
export const authReducer = ( state, action) => {
    //handle cases login and logout
    switch (action.type){
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
}


//componet to wrap the application a provide a value
export const AuthContextProvider = ({ children}) => {
    //register state
    const [state, dispatch] = useReducer(authReducer, {user:null})
    console.log("Auth context state:", state)

    //return context
    return (
        <AuthContext.Provider value={{... state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}