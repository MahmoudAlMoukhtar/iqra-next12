import axios from "axios";

const API = axios.create({
  //baseURL: "http://localhost:3001/api",
  baseURL: "https://islamiq-edu-d114.vercel.app/api",
});
API.interceptors.request.use(config => {
  if (typeof window !== "undefined") {
    // Code that uses the window object goes here
    const token = window.localStorage.getItem("userIqraa")
      ? JSON.parse(window.localStorage.getItem("userIqraa")).token
      : null;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

/* API.interceptors.request.use(req => {
  if (localStorage.getItem("userIqraa")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userIqraa")).token
    }`;
  }

  return req;
}); */
//CRUD POSTS
export const fetchPosts = () => API.get("/blogs");
export const fetchPostById = id => API.get(`/blogs/${id}`);
//comments blogs
export const fetchComments = () => API.get("/comments");
export const deletCommentById = id => API.delete(`/comments/${id}`);
export const createComment = data => API.post(`/comments`, data);

//AUTH Operation
export const signin = formData => API.post("/user/signin", formData);
export const signup = formData => API.post("/user/signup", formData);
export const updateProfile = (id, updates) =>
  API.put(`/user/updateProfile/${id}`, updates);

//courses
export const fetchCourses = () => API.get("/courses");
export const fetchCourseById = id => API.get(`/courses/${id}`);
//testimoials
export const getTestimoials = () => API.get("/testimoials");
export const sendTestemional = data => API.post("/testimoials", data);
//export const fetchCourseById = id => API.get(`/courses/${id}`);
//email
export const addEmailSubscripe = data =>
  API.post("/newsLetter/addEmailSubscripe", data);
//contactMessage
export const sendContactMessage = data => API.post("/contactMessages", data);
