const posts = [
  {
    id: 1,
    username: 'john_doe',
    imageUrl: '',
    caption: 'This is my first post!'
  },
  {
    id: 2,
    username: 'jane_doe',
    imageUrl: '',
    caption: 'Check out this cool picture!'
  },
  {
    id: 3,
    username: 'joe_smith',
    imageUrl: '',
    caption: 'What a beautiful day!'
  }
];

function getPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find(post => post.id === id);
}

function addPost(post) {
  const newPost = {
    id: posts.length + 1,
    ...post
  };
  posts.push(newPost);
  return newPost;
}

export { getPosts, getPostById, addPost };