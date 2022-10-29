import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    //hook parameters
    const {login, isloading, error } = useLogin()

    //handle submit function
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }
    // return template
     return (
        <form className='login' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value = {email} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value = {password} />
            <button disabled={isloading}>Login</button>
            { error && <div className='error'>{error}</div>}
        </form>
     )
}

export default Login