import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api/test";

class HelloWorldService {
  getHelloWorld() {
    return axios.get(`${API_URL_TEST}/helloworld`);
  }
}

export default new HelloWorldService();
