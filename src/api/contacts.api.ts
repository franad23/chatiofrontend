import axios from '../libs/axios'

export const getContacts = async (username: string) => {
  return axios.get(`/contacts?username=${username}`);
}

export const addContact = async (_id: string, username: string) => {
  return axios.patch(`/contacts`, { _id, username });
}

export const getContactsToAccept = async () => {
  return axios.get(`/contacts/to-accept`);
}

export const contactAccepted = async (_id: string, username: string, isAccepted: boolean) => {
  return axios.patch(`/contacts/to-accept`, { _id, username, isAccepted });
}
export const getUserContactsAccepted = async () => {
  return axios.get(`/contacts/accepted`);
}