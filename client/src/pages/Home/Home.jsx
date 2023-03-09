import React, { useState } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "raiedab",
      imageUrl: "https://unsplash.com/photos/O453M2Liufs",
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
      imageUrl: "https://unsplash.com/photos/uq2E2V4LhCY",
      caption: "Sunset at the beach",
      likes: 123,
      comments: [],
    },
    {
      id: 3,
      username: "johndoe",
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
