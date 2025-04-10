
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);
    const user = useSelector((state) => state.auth.userData); 
console.log("User from Redux:", user); 

    console.log("User from Redux:", user); // Debugging user state

    useEffect(() => {
        if (user) {
            console.log("Fetching posts...");
            appwriteService.getPosts().then((post) => {
                if (post) {
                    console.log("Posts fetched:", post.documents);
                    setPosts(post.documents);
                }
            });
        }
    }, [user]); // Depend on user state

    return (
        <div className='text-center mt-10'>
            <h1 className='text-3xl font-bold'>
                {user ? `Welcome, ${user.name}!` : 'Welcome to Our Blog'}
            </h1>
            <p className='text-gray-600 mt-2'>
                {user ? 'Check out the latest posts below.' : 'Please login to access content.'}
            </p>
            {user ? (
                <Link to="/all-posts" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                    View All Posts
                </Link>
            ) : (
                <Link to="/login" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                    Login
                </Link>
            )}
        </div>
    );
}

export default Home;
