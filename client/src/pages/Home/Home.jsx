import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Cristiano",
      imageUrl: "https://images.unsplash.com/photo-1584907600887-9732fa3647ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
      caption: "Exploring the mountains",
      likes: 56,
      comments: [
        {
          id: 1,
          username: "KylieJenner" ,
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
      likes: 112,
      comments: [],
    },
    {
      id: 3,
      username: "SelenaGomez",
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      caption: "The Golden Gate Bridge!!",
      likes: 654,
      comments: [],
    },
    {
      id: 4,
      username: "MikeTyson",
      imageUrl: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      caption: "Day 1 in Greece",
      likes: 32,
      comments: [{
          id: 1,
          username: "JakePaul",
          text: "I live there",
        },
        {
          id: 2,
          username: "MikeTyson",
          text: "Wow, really?!",
        },],
    },
    {
      id: 5,
      username: "LionelMessi",
      imageUrl: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80",
      caption: "time to Relax!",
      likes: 765,
      comments: [],
    },
    {
      id: 6,
      username: "KimKardashian",
      imageUrl: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "What a sight!",
      likes: 543,
      comments: [],
    },
    {
      id: 7,
      username: "ArianaGrande",
      imageUrl: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "Should I take a dive?",
      likes: 23,
      comments: [],
    },
    {
      id: 8,
      username: "JustinBieber",
      imageUrl: "https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      caption: "Ever seen a brighter night sky?",
      likes: 124,
      comments: [],
    },
    
  ]);

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };
  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (image && caption) {
      const newPost = {
        id: posts.length + 1,
        username: "Raied",
        imageUrl: URL.createObjectURL(image),
        caption,
        likes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setImage(null);
      setCaption("");
    }
  };
  return (
    <div className="upload-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image-upload" className="upload-label">
          <i className="fas fa-cloud-upload-alt"></i> +
        </label>
        <input
          type="file"
          id="image-upload"
          className="file-input"
          onChange={handleImageUpload}
        />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={handleCaptionChange}
        />
        <button type="submit">Post</button>
      </form>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Uploaded Image"
          className="uploaded-image"
        />
      )}
    </div>
  );
};



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
              username: "Raied",
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
      <UploadImage />
    </div>
  );
  }

  export default Home;