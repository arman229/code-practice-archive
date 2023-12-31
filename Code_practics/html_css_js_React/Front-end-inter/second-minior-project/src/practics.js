import React from 'react';

const posts = [
    {
        id: 1,
        text: 'Hello, this is my first post!',
        username: 'user1',
        comments: [
            { id: 1, text: 'Nice post!', username: 'user2' },
            { id: 2, text: 'Thank you!', username: 'user1' },
        ],
    },
    {
        id: 2,
        text: 'Just testing out my social panel.',
        username: 'user2',
        comments: [],
    },
];

const Comment = ({ comment }) => (
    <div className="comment">
        <p>{comment.text}</p>
        <p>Comment by: {comment.username}</p>
    </div>
);

const Post = ({ post }) => (
    <div className="post">
        <p>{post.text}</p>
        <p>Posted by: {post.username}</p>
        {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
        ))}
    </div>
);

const SocialPanel = () => (
    <div className="social-panel">
        <h1>Social Panel</h1>
        {posts.map((post) => (
            <Post key={post.id} post={post} />
        ))}
    </div>
);

export default SocialPanel;
