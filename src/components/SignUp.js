import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('https://post-checkpoint-backend.onrender.com/user/register', formData);
            setError(null);
            localStorage.setItem('user', JSON.stringify(res.data));
            toast.success('Account created successfully!');
            navigate('/login')
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className='signup'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className='form'>
                <input 
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    className='form-input'
                />
                <input 
                    type='text'
                    name='username'
                    placeholder='Enter Your Username'
                    value={formData.username}
                    onChange={handleChange}
                    className='form-input'
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Enter Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='form-input'
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='Enter Your Password'
                    value={formData.password}
                    onChange={handleChange}
                    className='form-input'
                />
                <button className='form-btn' type='submit'>Sign Up</button>
                <p>If account already had, go to <Link to='/login'>login</Link></p>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default SignUp;
