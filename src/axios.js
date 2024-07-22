import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-53f4b.cloudfunctions.net/api'
    //'http://127.0.0.1:5001/clone-53f4b/us-central1/api'
});

export default instance;


