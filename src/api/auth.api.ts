import axios from '../libs/axios'

export const registerUser = async (username: string, password: string) => {
  return axios.post("/register", {
    username, 
    password
  })
}

export const loginUser =  async (username: string, password: string) => {
  return axios.post("/login", {
    username, 
    password
  })
}