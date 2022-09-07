import axios from "axios";

export const getComments = async (postId) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
};

export const savePost = async (title) => {
  return await axios.post(`https://jsonplaceholder.typicode.com/posts/`);
};