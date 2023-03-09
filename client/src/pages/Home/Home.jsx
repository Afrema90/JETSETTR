import React, { useState } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Cristiano",
      imageUrl: "https://images.unsplash.com/photo-1584907600887-9732fa3647ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
      caption: "Exploring the mountains",
      likes: 456,
      comments: [
        {
          id: 1,
          username: "KylieJenner",
          text: "Awesome picture!",
        },
        {
          id: 2,
          username: "Cristiano",
          text: "Thanks!",
        },
      ],
    },
    {
      id: 2,
      username: "Beyonce",
      imageUrl: "https://images.unsplash.com/photo-1517035811173-b7659b8d0ddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "Sunset at the beach",
      likes: 123,
      comments: [],
    },
    {
      id: 3,
      username: "MikeTyson",
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      caption: "The Golden Gate Bridge!!",
      likes: 789,
      comments: [],
    },
    {
      id: 4,
      username: "MikeTyson",
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      caption: "The Golden Gate Bridge!!",
      likes: 789,
      comments: [],
    },
    {
      id: 5,
      username: "MikeTyson",
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      caption: "The Golden Gate Bridge!!",
      likes: 789,
      comments: [],
    },
    {
      id: 6,
      username: "MikeTyson",
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      caption: "The Golden Gate Bridge!!",
      likes: 789,
      comments: [],
    },
    {
      id: 7,
      username: "MikeTyson",
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      caption: "The Golden Gate Bridge!!",
      likes: 789,
      comments: [],
    },
    {
      id: 8,
      username: "MikeTyson",
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      caption: "The Golden Gate Bridge!!",
      likes: 789,
      comments: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleLikeClick = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: post.comments.length + 1,
              username: "johndoe",
              text: newComment,
            },
          ],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewComment("");
  };

  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <div className="username">{post.username}</div>
          </div>
          <div onClick={() => handleLikeClick(post.id)}>
            <img src={post.imageUrl} alt="post" />
          </div>
          <div className="post-footer">
            <div className="likes">{post.likes} likes</div>
            <div className="caption">{post.caption}</div>
            <div className="comments">
              {post.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <span className="username">{comment.username}</span>
                  <span className="text">{comment.text}</span>
                </div>
              ))}
            </div>
            <div className="comment-form">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={handleCommentChange}
              />
              <button onClick={() => handleCommentSubmit(post.id)}>Submit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
