import { useState } from 'react'
//import the singup hook
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    //call parameters from the hook
    const { signup, isLoading, error} = useSignup()
    //handle submit function
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)
    }
    // return template
     return (
        <form className='signup' onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value = {email} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value = {password} />
            <button disabled={isLoading}>Sign up</button>
            { error && <div className='error'>{error}</div>}
        </form>
     )
}

export default Signup