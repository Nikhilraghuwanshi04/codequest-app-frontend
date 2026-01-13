import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000" // Ensure your backend is running on this URL
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("Profile")).token
        }`;
    }
    return req;
});


// User-related API calls
export const login = (authData) => API.post("/user/login", authData);
export const signup = (authData) => API.post("/user/signup", authData);
export const getallusers = () => API.get("/user/getallusers");
export const updateprofile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);

// Question-related API calls
export const postquestion = (questionData) => API.post("/questions/Ask", questionData);
export const getallquestions = () => API.get("/questions/get");
export const deletequestion = (id) => API.delete(`/questions/delete/${id}`);
export const votequestion = (id, value) => API.patch(`/questions/vote/${id}`, { value });

// Answer-related API calls
export const postanswer = (id, noofanswers, answerbody, useranswered) => 
    API.patch(`/answer/post/${id}`, { noofanswers, answerbody, useranswered });

export const deleteanswer = (id, answerid, noofanswers) => 
    API.patch(`/answer/delete/${id}`, { answerid, noofanswers });
