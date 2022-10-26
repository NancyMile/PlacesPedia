import { useActivitiesContext } from '../hooks/useActivitiesContext'
const ActivitiesDetails = ({ activity }) =>{
    //dispatch to update the status
    const { dispatch } = useActivitiesContext()

    const handleClick = async () => {
        const response = await fetch('/api/activities/'+activity._id,{method: 'DELETE'})
        //the document to be deleted
        const json = await response.json()
        // check the response
        if(response.ok){
            dispatch({ type: 'DELETE_ACTIVITY', payload: json})
        }
    }

    return (
        <div className="activity-details">
            <h3>{activity.title}</h3>
            <p>{activity.comment}</p>
            <p>{activity.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}
export default ActivitiesDetails