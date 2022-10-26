import { useEffect, useState } from 'react'
//import components
import ActivitiesDetails from "../components/ActivitiesDetails"
const Welcome = () =>{
    //set initial activities as null
    const[activities, setActivities] = useState(null)

    //fire a function once [] when the component is rendered
    useEffect(()=>{
        const fetchActivities = async ()=>{
            const response = await fetch('/api/activities')
            //pass the response on json
            const json = await response.json()
            //check if the response is ok
            if(response.ok){
                setActivities(json)
            }
        }
        fetchActivities()
    },[])
    return(
        <div className="welcome">
            <h1>Welcome to Places Pedia Activities</h1>
            {/* cicle throught the activities */}
            <div className="activities">
                {activities && activities.map((activity) => (
                    <ActivitiesDetails key={activity._id} activity = {activity} />
                ))}
            </div>
        </div>
    )
}

export default Welcome