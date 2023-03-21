import axios from "axios";

const url = "https://localhost:8443/editoralivros/login";

/*

*/

class AutenticacaoService {
  login(user) {
    const config = {
      withCredentials: true,
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": "*",
      },
    };

    return axios.post(url + "/auth", user, config);
  }
}

export default new AutenticacaoService();
