import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.publicapis.org'
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

// Make a GET request
export async function getRequest(endpoint:string) {
  try {
    const response = await instance.get(endpoint);
    return response
  } catch (error) {
    return error
  }
}

// Make a POST request
export async function postRequest(endpoint:string,payload:any) {
  try {
    const response = await instance.post(endpoint, payload);
    return response
  } catch (error) {
    return error
  }
}

// Make a PUT request
export async function putRequest(endpoint:string,payload:any) {
    try {
      const response = await instance.put(endpoint, payload);
      return response

    } catch (error) {
      return error
    }
  }

  export async function deleteRequest(endpoint:string,payload?:any) {
    try {
      const response = await instance.delete(endpoint,payload);
      return response

    } catch (error) {
        return error
    }
  }

  // OTHER AXIOS ACTIONS

  // Set default token
  export const setToken = (token:string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };