import { ActivitiesContext } from '../context/ActivityContext'
import { useContext } from 'react'
const { ActivitiesContextProvider } = require("../context/ActivityContext");

export const useActivitiesContext = () => {
    // get the object and store on context
    const context = useContext(ActivitiesContext)
    //check the scope of the context
    if(!context){
        throw Error ('ActivitiesContext must be inside a ActivitiesContextProvider')
    }
    return context
}