import axios from 'axios'

export const createUser = (data)=>{
    return axios.post("http://localhost:7979/api/users/signup", data);
}

export const checkCredsDB = (data) => {
    return axios.post("http://localhost:7979/api/users/signin", data);
}
