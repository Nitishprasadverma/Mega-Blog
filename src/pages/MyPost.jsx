import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import appwriteservice from '../appwrite/config';
import { Container, PostCard } from '../components';

function MyPosts() {
    const [myPosts, setMyPosts] = useState([]);
    const user = useSelector((state) => state.auth.userData); // Get logged-in user

    useEffect(() => {
        if (user) {
            appwriteservice.getUserPosts(user.$id).then((post) => {
                console.log(post)
                if (post) {
                    setMyPosts(post.documents);
                }
            });
        }
    }, [user]);

    return (
        <div className='w-full p-8'>
            <Container>
                <h1 className='text-2xl font-bold'>
                    {user ? `${user.name}'s Posts` : 'Please login to see your posts'}
                </h1>
                <div className='flex flex-wrap mt-4'>
                    {myPosts.length > 0 ? (
                        myPosts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">You haven't posted anything yet.</p>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default MyPosts;
