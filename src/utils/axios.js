import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization: "Client-ID RqX0H8p5b5bfjxFG3fUIL_dT-6VZXISCk4F4qMiW2hw",
  },
});
