const ActivitiesDetails = ({ activity }) =>{
    return (
        <div className="activity-details">
            <h3>{activity.title}</h3>
            <p>{activity.comment}</p>
            <p>{activity.createdAt}</p>
        </div>
    )
}
export default ActivitiesDetails