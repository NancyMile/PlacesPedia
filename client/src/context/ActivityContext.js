import { createContext, useReducer } from 'react'
//create a new activities context
export const ActivitiesContext = createContext()
//pases the previous state and the action (type and payload)
export const activitiesReducer = (state, action) => {
    //check the action type
    switch(action.type){
        case 'SET_ACTIVITIES':
            return {
                //payload will be array of all activities
                activities: action.payload
            }
        case 'CREATE_ACTIVITY':
            return {
                //payload will be new activity object
                activities: [action.payload,...state.activities]
            }
        default:
            //return state unchanged
            return state
    }

}


// children is whathever the component wraps
export const ActivitiesContextProvider = ({ children }) => {
    //manage states
    const [state, dispatch] = useReducer(activitiesReducer,{
        activities: null
    })

    return (
        <ActivitiesContext.Provider value={{...state, dispatch}}>
            { children }
        </ActivitiesContext.Provider>
    )
}