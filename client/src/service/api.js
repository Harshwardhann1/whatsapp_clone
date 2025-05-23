import axios from 'axios';

const url = 'http://localhost:3002';
export const addUser = async (data) => {
  try {
    let response = await axios.post(`${url}/add`, data);
    return response.data;
  } catch (error) {
    console.log('Error while calling addUser API ', error);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('Error while calling getUsers api', error.message);
  }
};

export const setConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/conversation/add`, data);
    return response.data;
  } catch (error) {
    console.error('Error while calling setConversation API', error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log('Error while calling getConversation api', error.message);
  }
};

export const newMessage = async (data) => {
  try {
    axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log('Error while calling new message api.', error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error while calling get message api.', error.message);
  }
};


export const uploadFile = async(data) => {
  try {
    return await axios.post(`${url}/file/upload`, data)
  } catch (error) {
    console.log('Error while calling upload file api.', error.message)
  }
}