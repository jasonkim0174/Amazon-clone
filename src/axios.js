import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-53f4b.cloudfunctions.net/api', // Ensure this URL is correct
});

export default instance;
