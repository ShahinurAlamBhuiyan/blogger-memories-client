import axios from 'axios';


const API = axios.create( { baseURL: 'https://blogger-memories-server.herokuapp.com'})


export const fetchBlogs = () => API.get('/blogs');

export const createBlog = (newBlog) => API.post("/blogs", newBlog);

export const deleteBlog = (id) => API.delete(`/blogs/${id}`);



export const signIn = (formData) => API.post("/admin/signin", formData);