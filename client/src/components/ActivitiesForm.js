const { useState } = require("react")
import { useActivitiesContext } from '../hooks/useActivitiesContext'
//import user hook
import { useAuthContext } from '../hooks/useAuthContext'

const ActivitiesForm = () => {
    const { dispatch } = useActivitiesContext()
    //get user
    const { user} = useAuthContext()
    //set states
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    //set error to null
    const [error, setError] = useState(null)
    //set array of empty fields
    const [emptyFields, setEmptyFields] = useState([])

    //function for handle the form
    const handleSubmit = async (e) => {
        e.preventDefault()
        //check if the user is auth otherwiae return error
        if(!user){
            setError('Please Login')
            return
        }

        const activity = {title,comment}
        //fetch request
        const response = await fetch('/api/activities', {method: 'POST', body: JSON.stringify(activity),
            headers:{'content-type':'application/json','Authorization':`Bearer ${user.token}`}
        })
        //save the response on json
        const json = await response.json()
        // check if the response is ok
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            //clear the values for creating new ones
            setError(null)
            setEmptyFields([])
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
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('title')? 'error' : ''}/>
            <label>Comment: </label>
            <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} className={emptyFields.includes('comment')? 'error' : ''}/>
            <button>Add Activity</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default  ActivitiesForm