import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/";
class Appapi {
  register(data) {
    return new Promise((resolve, reject) => {
      axios.post("/register/new", data).then((res) => {
        if (res.status == 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      });
    });
  }
}

let appapi = new Appapi();
export default appapi;
