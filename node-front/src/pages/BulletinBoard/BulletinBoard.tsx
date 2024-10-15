import React, { useState } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
}

const BulletinBoard: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState<Post>({ id: 0, title: '', content: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };

    const handleAddPost = () => {
        if (newPost.title && newPost.content) {
            setPosts([...posts, newPost]);
            setNewPost({ id: newPost.id + 1, title: '', content: '' });
        }
    };

    return (
        <div>
            <h1>Bulletin Board</h1>
            <div>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter post title"
                    value={newPost.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="content"
                    placeholder="Enter post content"
                    value={newPost.content}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddPost}>Add Post</button>
            </div>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BulletinBoard;