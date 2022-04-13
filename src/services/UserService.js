import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api/test";

class UserService {
  getUsers() {
    return axios.get(`${API_URL_TEST}/users`);
  }
}

export default new UserService();
