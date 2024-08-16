import React from 'react'
// import axios from 'axios'

const Home = () => {
    // const[posts, setPost] = useState([])

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try{
    //             const res = await axios.get('http://localhost:7000/blog')
    //             setPost(res.data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }

    //     fetchPosts()
    // }, [])

    return (
        <>
            <div>
                <img 
                    className='home-image' 
                    src='https://images.pexels.com/photos/6333734/pexels-photo-6333734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                    alt='https://via.placeholder.com/500'
                />
                <div className='home-info'>
                    <h1>the book lovers</h1>
                    <h4>read all about it</h4>
                </div>
            </div>
    
            {/* <div className='home-posts'>
                {posts.map((post) => (
                    <div key={post._id} className='home-post-card'>
                        <img src={post.image || 'https://via.placeholder.com/400'} alt={post.title} />
                        <div className='home-post-content'>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </>
    );
}

export default Home
