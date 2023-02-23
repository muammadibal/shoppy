import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  }
});

instance.defaults.timeout = 10000;
instance.defaults.timeoutErrorMessage = "Timeout, Silahkan ulangi kembali";

export default instance;
