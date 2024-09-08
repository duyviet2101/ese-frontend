import axios from "axios";
import Config from '../../config.js';

export default axios.create({
  baseURL: Config.API_URL,
  headers: {
    "Content-type": "application/json",
  }
})