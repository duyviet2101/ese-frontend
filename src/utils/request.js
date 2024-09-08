import axios from '~/utils/axios.js';

const get = async (url, config) => {
  return axios.get(url, config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error?.response?.data;
    });
}

const post = async (url, body, config) => {
  return axios.post(url, body, config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error?.response?.data;
    });
}

const patch = async (url, body, config) => {
  return axios.patch(url, body, config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error?.response?.data;
    });
}

const del = async (url, config) => {
  return axios.delete(url, config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error?.response?.data;
    });
}

export default { get, post, patch, del };