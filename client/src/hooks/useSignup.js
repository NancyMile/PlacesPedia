import { useState } from "react";
import { useAuthContext } from './useAuthContext'
export const useSignup = () => {
    //states
    const[error, setError] = useState(null)
    //loading state or dissable state on button
    const[isloading, SetIsLoading] = useState(null)
    const{ dispatch } = useAuthContext()

     const signup = async (email, password) => {
        //every time sign up request reset
        SetIsLoading(true)
        setError(null)
        // make post request
        const response = await fetch ('/api/user/signup',{ method:'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email, password})})
        //response
        const json = await response.json()
        //check the response is is no ok breturnthe error
        if (!response.ok){
            SetIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save token on local storage
            localStorage.setItem('user', JSON.stringify(json))
            //update context
            dispatch({type:'LOGIN', payload: json})
            //set loading to false
            SetIsLoading(false)
        }
    }
    return {signup, isloading, error }
}