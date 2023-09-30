import axios from '../libs/axios'

export const getContacts = async (username: string) => {
  return axios.get(`/contacts?username=${username}`);
}