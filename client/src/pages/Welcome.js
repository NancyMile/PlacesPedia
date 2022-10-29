import { useEffect } from 'react'
//import hook
import { useActivitiesContext } from '../hooks/useActivitiesContext'
//import user hook to have access to user
import { useAuthContext } from '../hooks/useAuthContext'

//import components
import ActivitiesDetails from "../components/ActivitiesDetails"
import ActivitiesForm from "../components/ActivitiesForm"
const Welcome = () =>{
    //set initial activities as null
    const { activities, dispatch } = useActivitiesContext()
    //get the user
    const { user } = useAuthContext()

    //fire a function once [] when the component is rendered
    useEffect(()=>{
        const fetchActivities = async ()=>{
            const response = await fetch('/api/activities', {headers: { 'Authorization':`Bearer ${user.token}`}})
            //pass the response on json
            const json = await response.json()
            //check if the response is ok
            if(response.ok){
                dispatch({type: 'SET_ACTIVITIES', payload: json })
            }
        }
        //just fetch activities if user auth
        if (user){
            fetchActivities()
        }
    },[dispatch])
    return(
        <div className="welcome">
            {/* cicle throught the activities */}
            <div className="activities">
                {activities && activities.map((activity) => (
                    <ActivitiesDetails key={activity._id} activity = {activity} />
                ))}
            </div>
            <ActivitiesForm/>
        </div>
    )
}

export default Welcome