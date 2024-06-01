import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchRepos = async(page = 1, perPage = 20) => {
    return axios.get(`${BASE_URL}/users/greatgrace24/repos`, {
      params: { page, per_page: perPage }
    })
    .then(response => {
      // handle success
      return response.data;
    })
    .catch(error => {
      // handle error
      console.error(error);
    });
  };