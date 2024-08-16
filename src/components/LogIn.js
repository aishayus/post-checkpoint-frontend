import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const LogIn = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await axios.post('https://post-checkpoint-backend.onrender.com/user/login', {username, password})
            setError(null)
            localStorage.setItem('user', JSON.stringify(response.data));

            setUserName('')
            setPassword('')
            toast.success('Logged in successfully!');

            navigate('/')
        } catch (error){
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    }

    return (
        <div className='signup'>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} className='form'>
                <input 
                    type='text'
                    name= 'username'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='Enter Your Username'
                    className='form-input'
                />
                <input 
                    type='password'
                    name= 'password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Your Password'
                    className='form-input'
                />
                <button className='form-btn' type='submit'>Log In</button>
                <p>If no account, go to <Link to='/signup'>signup</Link></p>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default LogIn
