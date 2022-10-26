const { useState } = require("react")
import { useActivitiesContext } from '../hooks/useActivitiesContext'

const ActivitiesForm = () => {
    const { dispatch } = useActivitiesContext()
    //set states
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    //set error to null
    const [error, setError] = useState(null)
    //function for handle the form
    const handleSubmit = async (e) => {
        e.preventDefault()

        const activity = {title,comment}
        //fetch request
        const response = await fetch('/api/activities', {method: 'POST', body: JSON.stringify(activity),
            headers:{'content-type':'application/json'}
        })
        //save the response on json
        const json = await response.json()
        // check if the response is ok
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            //clear the values for creating new ones
            setError(null)
            setTitle('')
            setComment('')
            console.log('Activity created!', json)
            dispatch({type: 'CREATE_ACTIVITY', payload: json})
        }
    }

    return(
        <form className ="create" onSubmit={handleSubmit}>
            <h2>Add New Activity</h2>
            <label>Activity: </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <label>Comment: </label>
            <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} />
            <button>Add Activity</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default  ActivitiesForm