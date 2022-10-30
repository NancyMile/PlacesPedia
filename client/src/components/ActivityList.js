//import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";

//create the  query
 const getActivitiesQuery = gql`
 {
    activities{
        title
        comment
        id
    }
 }`;

//function
function ActivityList(){
    const { loading, error, data } = useQuery(getActivitiesQuery)
    //check data
    if(data){
        console.log("data!!:",data)
    }
    if(loading) return <p>Loading</p>;
    if(error) return <p>Error</p>;
    return ( 
        <h2>List of Activities</h2>,
        data.activities.map(activity =>{
            return(
                <h2 className="activity-details" key={activity.id}>{activity.title}</h2>
            );
        })
    )
        
        
    
}
    // return(
        
    //     <div>
    //         <ul id="activity-list">
    //             <li>Activity</li>
    //         </ul>
    //     </div>
    // );

// export the component ActivityList
export default ActivityList