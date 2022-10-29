import { useAuthContext } from "./useAuthContext"
export const useLogout = () =>{
    //use the Auth hook
    const { dispatch } = useAuthContext()
        
    //function logout 
    const logout = () =>{
        //update the state and delete the token
        localStorage.removeItem('user')
        //logout action
        dispatch({type:'LOGOUT'})
    }
    return {logout}
}