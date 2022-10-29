import { useAuthContext } from "./useAuthContext"
// import activities context
import { useActivitiesContext } from './useActivitiesContext'
export const useLogout = () =>{
    //use the Auth hook
    const { dispatch } = useAuthContext()
    //use dispatch from activities
    const { dispatch: activitiesDispatch } = useActivitiesContext()
        
    //function logout 
    const logout = () =>{
        //update the state and delete the token
        localStorage.removeItem('user')
        //logout action
        dispatch({type:'LOGOUT'})
        //clear activities from local when logout
        activitiesDispatch({type: 'SET_ACTIVITIES', payload: null})
    }
    return {logout}
}