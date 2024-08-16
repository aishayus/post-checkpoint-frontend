// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AddBlog = () => {
//     const [formData, setFormData] = useState({
//         title: "",
//         description: "",
//         image: "",
//     })

//     const [error, setError] = useState(null)
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         if (!formData.title || !formData.description || !formData.image) {
//             setError("Please fill in all the fields.");
//             return;
//         }

//         try{
//             const res = await axios.post('http://localhost:7000/blog')
//             setError(null)
//             localStorage.setItem('blog', JSON.stringify(res.data))
//             toast.success('Post added successfully!');
//             navigate('/')
//         } catch(error) {
//             setError(error.response.data.message)
//         }
//     }

//     return (
//         <div className='signup'>
//             <h1>Add Post</h1>
//             <form onSubmit={handleSubmit} className='form'>
//                 <label>Blog Title:</label>
//                 <input 
//                     type='text'
//                     name='title'
//                     value={formData.title}
//                     onChange={handleChange}
//                     className='form-input'
//                 />

//                 <label>Blog Description:</label>
//                 <input 
//                     type='text'
//                     name='description'
//                     value={formData.description}
//                     onChange={handleChange}
//                     className='form-input'
//                 />

//                 <label>Add Image Link:</label>
//                 <input 
//                     type='text'
//                     name='image'
//                     value={formData.image}
//                     onChange={handleChange}
//                     className='form-input'
//                 />

//                 <button className='form-btn' type='submit'>Add Post</button>
//                 {error && <p>{error}</p>}
//             </form>
//         </div>
//     )
// }

// export default AddBlog
