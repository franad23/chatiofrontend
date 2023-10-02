import axios from '../libs/axios'

export const getContacts = async (username: string) => {
  return axios.get(`/contacts?username=${username}`);
}

export const addContact = async (_id: string, username: string) => {
  return axios.patch(`/contacts`, { _id, username });

}