import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8f4160fadc6a420491b466fc37b91200",
  },
});
