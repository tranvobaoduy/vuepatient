import axios from "axios";
const baseDomain = "http://localhost:36575";
// const baseDomain = "http://localhost:58172";
const baseUrl = `${baseDomain}/api`;
const instance = axios.create({
  baseURL: baseUrl,
  // Wait for 5 seconds
  // headers: {
  //   'authorization': `Bearer ${token}`,
  // }
});
export default instance;